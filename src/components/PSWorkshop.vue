<template>
  <div class="ps-workshop-container w-full">
    <div class="bg-white rounded-2xl shadow-card p-6">
      <div class="text-center mb-6">
        <div class="w-16 h-16 rounded-2xl bg-[#7FA1ED]/10 flex items-center justify-center text-3xl mx-auto mb-3 float-anim">✍️</div>
        <h2 class="font-bold text-xl text-slate-700">
          {{ isZh ? '文书工作坊' : 'Personal Statement Workshop' }}
        </h2>
        <p class="text-sm text-slate-500 mt-1">
          {{ isZh ? '优化你的个人陈述，提升申请竞争力' : 'Optimize your personal statement to boost application competitiveness' }}
        </p>
      </div>

      <div v-if="!isStarted" class="space-y-4">
        <!-- Cooldown Status -->
        <div v-if="!canStartWorkshop" class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
          <div class="text-amber-600 font-bold mb-1">
            {{ isZh ? '今日次数已用尽' : 'Daily Limit Reached' }}
          </div>
          <div class="text-sm text-amber-500">
            {{ cooldownHint }}
          </div>
          <div v-if="cooldownStatus" class="text-xs text-amber-400 mt-2">
            {{ isZh ? `已使用 ${cooldownStatus.used} / ${cooldownStatus.max} 次` : `Used ${cooldownStatus.used} / ${cooldownStatus.max} times` }}
          </div>
        </div>

        <!-- Streak Bonus Display -->
        <div v-if="streakBonus > 1" class="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
          <span class="text-green-600 font-bold">{{ isZh ? '🔥 连续打卡加成' : '🔥 Streak Bonus' }}</span>
          <span class="text-green-500 text-sm ml-1">+{{ Math.round((streakBonus - 1) * 100) }}%</span>
        </div>

        <div class="bg-slate-50 rounded-xl p-4">
          <h3 class="font-bold text-sm mb-3 text-slate-600">
            {{ isZh ? '📋 当前装备要求' : '📋 Gear Requirements' }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-blue-50 rounded-lg p-3 text-center">
              <div class="text-lg">🗣️</div>
              <div class="text-xs font-bold text-[#7FA1ED] mt-1">{{ isZh ? '雅思' : 'IELTS' }}</div>
              <div class="text-sm font-bold text-blue-600">{{ gearState.ielts || 6.0 }}</div>
            </div>
            <div class="bg-[#7FA1ED]/10 rounded-lg p-3 text-center">
              <div class="text-lg">📊</div>
              <div class="text-xs font-bold text-[#7FA1ED] mt-1">GPA</div>
              <div class="text-sm font-bold text-[#5B78BA]">{{ gearState.gpa || 3.0 }}</div>
            </div>
            <div class="bg-green-50 rounded-lg p-3 text-center">
              <div class="text-lg">💼</div>
              <div class="text-xs font-bold text-green-500 mt-1">{{ isZh ? '实习' : 'Intern' }}</div>
              <div class="text-sm font-bold text-green-600">{{ gearState.internship || 0 }} {{ isZh ? '段' : 'exp' }}</div>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 text-center">
              <div class="text-lg">🔬</div>
              <div class="text-xs font-bold text-amber-500 mt-1">{{ isZh ? '科研' : 'Research' }}</div>
              <div class="text-sm font-bold text-amber-600">{{ gearState.research || 0 }} {{ isZh ? '项' : 'items' }}</div>
            </div>
          </div>
        </div>

        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div class="flex items-start gap-2">
            <span class="text-amber-500 text-lg">ℹ️</span>
            <div class="text-sm text-amber-700">
              <strong>{{ isZh ? '本次工坊收益预测：' : 'Predicted Earnings:' }}</strong><br>
              {{ isZh ? '保底 LV: 25' : 'Base LV: 25' }} + {{ isZh ? '答对奖励 (最多30)' : 'Correct Bonus (Up to 30)' }}<br>
              × {{ isZh ? '装备加成 ' : 'Gear bonus ' }}{{ gearBonus }}%
            </div>
          </div>
        </div>

        <button 
          @click="startWorkshop" 
          :disabled="!canStartWorkshop"
          class="w-full py-3 bg-[#7FA1ED] text-white rounded-xl font-bold text-sm hover:bg-[#5B78BA] transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isZh ? '开始文书优化 →' : 'Start PS Workshop →' }}
        </button>
      </div>

      <div v-else class="space-y-4">
        <div v-if="!isCompleted" class="space-y-4">
          <div class="flex items-center justify-between">
            <button @click="exitWorkshop" class="text-sm text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1">
              ← {{ isZh ? '返回任务中心' : 'Back to Hub' }}
            </button>
            <div class="font-bold text-[#7FA1ED]">
              Total LV: {{ earnedLV }}
            </div>
          </div>
          <div class="bg-slate-50 rounded-xl p-4">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-bold text-slate-600">{{ isZh ? '当前题目' : 'Current Topic' }}</span>
              <span class="px-2 py-1 bg-[#7FA1ED]/10 text-[#7FA1ED] text-xs font-bold rounded-lg">
                Q{{ currentQuestion + 1 }}/{{ questions.length }}
              </span>
            </div>
            <p class="text-sm text-slate-700 leading-relaxed font-medium">{{ currentQuestionData.question }}</p>
            <p v-if="currentQuestionData.hint" class="text-xs text-slate-500 mt-2 italic">
              💡 {{ currentQuestionData.hint }}
            </p>
          </div>

          <div class="space-y-3">
            <button
              v-for="(option, idx) in currentQuestionData.options"
              :key="idx"
              @click="!showFeedback && selectOption(idx)"
              :disabled="showFeedback"
              class="w-full p-4 rounded-xl text-left transition-all border-2 relative"
              :class="getOptionClass(idx)"
            >
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      :class="getOptionBadgeClass(idx)">
                  {{ String.fromCharCode(65 + idx) }}
                </span>
                <span class="text-sm" :class="showFeedback ? (idx === currentQuestionData.correct ? 'text-emerald-700 font-medium' : 'text-slate-500') : 'text-slate-700'">
                  {{ option.text }}
                </span>
              </div>
              <!-- 正误标识图标 -->
              <div v-if="showFeedback" class="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                <span v-if="idx === currentQuestionData.correct">✅</span>
                <span v-else-if="selectedOption === idx && !isCorrect">❌</span>
              </div>
            </button>
          </div>

          <!-- 导师点评与即时反馈区域 -->
          <div v-if="showFeedback" class="p-4 rounded-xl border animate-fade-in-up" 
               :class="isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'">
            <div class="flex items-center gap-2 mb-2">
              <span class="font-bold text-lg" :class="isCorrect ? 'text-emerald-700' : 'text-red-700'">
                {{ isCorrect ? (isZh ? '回答正确！' : 'Correct!') : (isZh ? '回答错误' : 'Needs Improvement') }}
              </span>
              <span v-if="isCorrect" class="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg animate-pulse">
                +10 LV
              </span>
            </div>
            <p class="text-sm font-medium" :class="isCorrect ? 'text-emerald-600' : 'text-red-600'">
              {{ currentQuestionData.options[selectedOption].feedback }}
            </p>
          </div>

          <!-- 按钮控制区：未提交显示提交，提交后显示下一题 -->
          <button 
            v-if="!showFeedback && selectedOption !== null"
            @click="submitAnswer"
            class="w-full py-3 bg-[#7FA1ED] text-white rounded-xl font-bold text-sm hover:bg-[#5B78BA] transition-colors active:scale-95 shadow-[0_4px_0_#5B78BA]"
          >
            {{ isZh ? '提交答案 →' : 'Submit Answer →' }}
          </button>
          <button 
            v-else-if="showFeedback"
            @click="nextQuestion"
            class="w-full py-3 bg-slate-800 text-white rounded-xl font-bold text-sm hover:bg-slate-900 transition-colors active:scale-95 shadow-[0_4px_0_#000000]"
          >
            {{ currentQuestion < questions.length - 1 ? (isZh ? '下一题 →' : 'Next Question →') : (isZh ? '完成工作坊 🎉' : 'Complete Workshop 🎉') }}
          </button>
        </div>

        <div v-else class="text-center space-y-4">
          <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl mx-auto">🎉</div>
          <h3 class="font-bold text-xl text-slate-700">
            {{ isZh ? '文书工作坊完成！' : 'PS Workshop Complete!' }}
          </h3>
          <p class="text-sm text-slate-500">
            {{ isZh ? '你的个人陈述已经优化完成' : 'Your personal statement has been optimized' }}
          </p>
          
          <div class="bg-slate-50 rounded-xl p-5 mb-6 inline-block text-left w-full max-w-xs">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-slate-600">{{ isZh ? '保底 LV' : 'Base LV' }}:</span>
              <span class="font-bold text-slate-700">25</span>
            </div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-slate-600">{{ isZh ? '答对奖励' : 'Correct Bonus' }}:</span>
              <span class="font-bold text-emerald-600">+{{ baseEarnedLV }}</span>
            </div>
            <div class="flex justify-between items-center pb-2 border-b border-slate-200">
              <span class="text-sm text-slate-600">{{ isZh ? '装备加成' : 'Gear Bonus' }}:</span>
              <span class="font-bold text-amber-500">+{{ gearBonus }}%</span>
            </div>
            <div class="flex justify-between items-center mt-3">
              <span class="text-sm font-bold text-slate-800">{{ isZh ? '最终总计' : 'Final Total' }}:</span>
              <span class="text-2xl font-black text-[#7FA1ED]">+{{ finalTotalLV }}</span>
            </div>
          </div>

          <button 
            @click="handleComplete"
            class="w-full py-3 bg-[#7FA1ED] text-white rounded-xl font-bold text-sm shadow-[0_4px_0_#5B78BA] active:translate-y-[4px] active:shadow-none transition-all"
          >
            {{ isZh ? '领取奖励并返回' : 'Claim Rewards & Return' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getCooldownStatus, canAttempt, getTimeHint, recordAttempt, getStreakBonus } from '../utils/CooldownManager'

const props = defineProps({
  gearState: {
    type: Object,
    default: () => ({ ielts: 0, gpa: 0, internship: 0, research: 0 })
  },
  isZh: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['complete', 'exit'])

const isStarted = ref(false)
const isCompleted = ref(false)
const currentQuestion = ref(0)
const selectedOption = ref(null)
const earnedLV = ref(0)       // 实时显示的累加得分
const baseEarnedLV = ref(0)   // 记录因为答对额外获得的分数
const finalTotalLV = ref(0)   // 最终结算分
const cooldownStatus = ref(null)
const streakBonus = ref(1.0)

// 控制反馈界面的新状态
const showFeedback = ref(false)
const isCorrect = ref(false)

onMounted(() => {
  cooldownStatus.value = getCooldownStatus('psWorkshop')
  streakBonus.value = getStreakBonus()
})

const canStartWorkshop = computed(() => canAttempt('psWorkshop'))
const cooldownHint = computed(() => {
  if (!cooldownStatus.value) return ''
  return getTimeHint(cooldownStatus.value, props.isZh)
})

const gearBonus = computed(() => {
  let bonus = 0
  if (props.gearState.ielts >= 7) bonus += 20
  if (props.gearState.gpa >= 3.5) bonus += 20
  if (props.gearState.internship >= 2) bonus += 15
  if (props.gearState.research >= 1) bonus += 15
  return bonus
})

// 重构题库：加入了导师点评 Feedback
const questions = computed(() => props.isZh ? [
  {
    question: '请描述你选择该专业的原因，以及你的学术背景如何支持这个选择？',
    hint: '结合你的本科专业、项目经验和个人兴趣来回答',
    correct: 0,
    options: [
      { text: '我对这个领域有浓厚兴趣，本科期间学习了相关课程，并参与了xxx项目，这让我决定继续深造。', feedback: '优秀！清晰展示了内在学术动机和具体项目经历，这正是招生官寻找的。' },
      { text: '因为这个专业就业前景好，薪资高，所以我选择这个专业。', feedback: '过于功利且宽泛。招生官希望看到你对该领域的学术热情，而非仅仅是为了钱。' },
      { text: '我的父母希望我学习这个专业，所以我选择了它。', feedback: '绝对大忌！这显得你极度缺乏个人主见和自我驱动力，这在硕士申请中是致命的。' },
      { text: '我不太清楚为什么选择这个专业，只是觉得应该读研究生。', feedback: '方向缺失。如果在个人陈述里透露出迷茫，招生官会立刻拒绝这份申请。' }
    ]
  },
  {
    question: '请描述你最具挑战性的学术项目或经历，以及你是如何克服困难的？',
    hint: '使用STAR法则：情境(Situation)、任务(Task)、行动(Action)、结果(Result)',
    correct: 0,
    options: [
      { text: '在xxx项目中遇到了技术难题，我通过查阅文献、请教导师和反复实验，最终成功解决了问题，项目获得了优秀成果。', feedback: '非常标准的 STAR 法则运用！你具体描述了行动过程，展现了解决难题的能力。' },
      { text: '我觉得没有遇到过什么特别挑战的项目，都比较简单。', feedback: '浪费了绝佳的展示机会。没有挑战意味着你的学术舒适区很窄，没有突破。' },
      { text: '我直接放弃了那个项目，因为太难了。', feedback: '这直接暴露了抗压能力极差，完全违背了研究生做科研需要的坚韧精神。' },
      { text: '我让同学帮我完成了那个困难的部分。', feedback: '诚实是好事，但这证明了你缺乏独立解决复杂学术问题的能力。' }
    ]
  },
  {
    question: '请描述你的职业规划，以及该学位如何帮助你实现这些目标？',
    hint: '展示你的短期和长期规划，以及学位的具体作用',
    correct: 0,
    options: [
      { text: '毕业后，我想进入xxx行业从事xxx工作。这个学位将帮助我掌握xxx技能和知识，实现我的职业目标。', feedback: '完美的规划路径。既有清晰的落地目标，又建立了“自身目标”与“该项目”的桥梁。' },
      { text: '我毕业后想找一份高薪工作，具体做什么还没想好。', feedback: '不够具体。每个申请者都想要高薪，你必须明确行业和职位才能脱颖而出。' },
      { text: '我的规划是先考研，然后再看有什么工作。', feedback: '短期逃避就业的表现。优秀的申请者往往有清晰且长远的目标。' },
      { text: '我不需要规划，走一步算一步。', feedback: '这种随意的态度会让招生委员会怀疑你能否坚持完成这个高强度的学位。' }
    ]
  }
] : [
  // 英文版的数据同样加入了 Feedback
  {
    question: 'Describe why you chose this major and how your academic background supports this choice.',
    hint: 'Combine your undergraduate major, project experience, and personal interests',
    correct: 0,
    options: [
      { text: 'I have strong interest in this field. During my undergraduate studies, I took related courses and participated in xxx project, which motivated me to pursue further education.', feedback: 'Excellent! You clearly demonstrated intrinsic academic motivation and relevant experience.' },
      { text: 'I chose this major because it has good employment prospects and high salary.', feedback: 'Too utilitarian. Admissions committees look for academic passion, not just a desire for a high salary.' },
      { text: 'My parents wanted me to study this major, so I chose it.', feedback: 'A big red flag! This shows a lack of independence and self-drive, which is fatal for graduate admissions.' },
      { text: 'I am not sure why I chose this major, just think I should pursue a graduate degree.', feedback: 'Lack of direction. Showing confusion in a PS will immediately get your application rejected.' }
    ]
  },
  {
    question: 'Describe your most challenging academic project or experience, and how you overcame the difficulties.',
    hint: 'Use STAR method: Situation, Task, Action, Result',
    correct: 0,
    options: [
      { text: 'In the xxx project, I encountered technical difficulties. Through literature review, consulting mentors, and repeated experiments, I successfully solved the problem and achieved excellent results.', feedback: 'Perfect use of the STAR method! You detailed your actions and proved your problem-solving skills.' },
      { text: 'I have not encountered any particularly challenging projects, they were all relatively easy.', feedback: 'A wasted opportunity. No challenges implies you have never pushed beyond your comfort zone.' },
      { text: 'I gave up that project directly because it was too difficult.', feedback: 'This exposes a lack of resilience, which contradicts the perseverance needed for graduate research.' },
      { text: 'I asked my classmates to help me complete the difficult part.', feedback: 'Honest, but it proves you lack the ability to solve complex academic problems independently.' }
    ]
  },
  {
    question: 'Describe your career goals and how this degree will help you achieve them.',
    hint: 'Show your short-term and long-term plans, and the specific role of the degree',
    correct: 0,
    options: [
      { text: 'After graduation, I want to work in the xxx industry as a xxx. This degree will help me master xxx skills and knowledge to achieve my career goals.', feedback: 'Perfect planning. You have clear goals and successfully connected them to what the program offers.' },
      { text: 'After graduation, I want to find a high-paying job, but I have not decided what to do specifically.', feedback: 'Too vague. Everyone wants a high salary; you must be specific to stand out.' },
      { text: 'My plan is to take the graduate exam first, then see what jobs are available.', feedback: 'Shows you might be avoiding the job market. Top applicants always have long-term goals.' },
      { text: 'I do not need a plan, just take it step by step.', feedback: 'This casual attitude will make the committee doubt your ability to complete an intensive degree.' }
    ]
  }
])

const currentQuestionData = computed(() => questions.value[currentQuestion.value])

function startWorkshop() {
  if (!canStartWorkshop.value) return
  isStarted.value = true
  currentQuestion.value = 0
  selectedOption.value = null
  showFeedback.value = false
  earnedLV.value = 0
  baseEarnedLV.value = 0
  recordAttempt('psWorkshop', { type: 'ps-workshop' })
}

function selectOption(idx) {
  selectedOption.value = idx
}

// 动态控制选项框颜色的逻辑
function getOptionClass(idx) {
  if (!showFeedback.value) {
    // 还没提交时：选中高亮蓝框，其余白色
    return selectedOption.value === idx 
      ? 'border-[#7FA1ED] bg-[#7FA1ED]/10' 
      : 'border-slate-200 hover:border-[#7FA1ED]/50 bg-white'
  } else {
    // 提交后：正确的绿，选错的红，其他灰色半透明
    if (idx === currentQuestionData.value.correct) {
      return 'border-emerald-500 bg-emerald-50 shadow-md ring-2 ring-emerald-500/20'
    }
    if (idx === selectedOption.value) {
      return 'border-red-400 bg-red-50'
    }
    return 'border-slate-200 bg-slate-50 opacity-40'
  }
}

// 动态控制 ABCD 字母图标颜色的逻辑
function getOptionBadgeClass(idx) {
  if (!showFeedback.value) {
    return selectedOption.value === idx ? 'bg-[#7FA1ED] text-white' : 'bg-slate-200 text-slate-600'
  } else {
    if (idx === currentQuestionData.value.correct) return 'bg-emerald-500 text-white'
    if (idx === selectedOption.value) return 'bg-red-500 text-white'
    return 'bg-slate-300 text-slate-500'
  }
}

// 提交答案，进入点评反馈环节
function submitAnswer() {
  if (selectedOption.value === currentQuestionData.value.correct) {
    isCorrect.value = true
    earnedLV.value += 10
    baseEarnedLV.value += 10
  } else {
    isCorrect.value = false
  }
  showFeedback.value = true
}

// 点击下一题，或者结题
function nextQuestion() {
  if (currentQuestion.value < questions.value.length - 1) {
    // 切到下一题
    currentQuestion.value++
    selectedOption.value = null
    showFeedback.value = false
  } else {
    // 结算界面：保底 25 分 + 答对的加分，最后乘装备加成
    const baseLV = 25
    const totalBase = baseLV + baseEarnedLV.value
    finalTotalLV.value = Math.round(totalBase * (1 + gearBonus.value / 100))
    isCompleted.value = true
  }
}

function handleComplete() {
  emit('complete', { lv: finalTotalLV.value })
  resetState()
}

function exitWorkshop() {
  resetState()
  emit('exit')
}

function resetState() {
  isStarted.value = false
  isCompleted.value = false
  currentQuestion.value = 0
  selectedOption.value = null
  showFeedback.value = false
  earnedLV.value = 0
  baseEarnedLV.value = 0
  finalTotalLV.value = 0
}
</script>

<style scoped>
.float-anim { 
  animation: float 3s ease-in-out infinite; 
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}

/* 进场小动画 */
.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>