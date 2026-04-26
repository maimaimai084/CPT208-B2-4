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
              {{ isZh ? '基础 LV: 25' : 'Base LV: 25' }} × {{ isZh ? '装备加成 ' : 'Gear bonus ' }}{{ gearBonus }}% 
              = <span class="font-bold text-amber-600">{{ Math.round(25 * (1 + gearBonus / 100)) }} LV</span>
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
          <div class="bg-slate-50 rounded-xl p-4">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-bold text-slate-600">{{ isZh ? '当前题目' : 'Current Topic' }}</span>
              <span class="px-2 py-1 bg-[#7FA1ED]/10 text-[#7FA1ED] text-xs font-bold rounded-lg">
                Q{{ currentQuestion + 1 }}/{{ questions.length }}
              </span>
            </div>
            <p class="text-sm text-slate-700 leading-relaxed">{{ currentQuestionData.question }}</p>
            <p v-if="currentQuestionData.hint" class="text-xs text-slate-500 mt-2 italic">
              💡 {{ currentQuestionData.hint }}
            </p>
          </div>

          <div class="space-y-3">
            <button
              v-for="(option, idx) in currentQuestionData.options"
              :key="idx"
              @click="selectOption(idx)"
              class="w-full p-4 rounded-xl text-left transition-all border-2"
              :class="selectedOption === idx 
                ? 'border-[#7FA1ED] bg-[#7FA1ED]/10' 
                : 'border-slate-200 hover:border-[#7FA1ED]/50 bg-white'"
            >
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      :class="selectedOption === idx ? 'bg-[#7FA1ED] text-white' : 'bg-slate-200 text-slate-600'">
                  {{ String.fromCharCode(65 + idx) }}
                </span>
                <span class="text-sm text-slate-700">{{ option }}</span>
              </div>
            </button>
          </div>

          <button 
            v-if="selectedOption !== null"
            @click="submitAnswer"
            class="w-full py-3 bg-[#7FA1ED] text-white rounded-xl font-bold text-sm hover:bg-[#5B78BA] transition-colors active:scale-95"
          >
            {{ isZh ? '提交答案 →' : 'Submit Answer →' }}
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
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#7FA1ED]/10 rounded-xl">
            <span class="text-sm text-slate-600">{{ isZh ? '获得 LV:' : 'Earned LV:' }}</span>
            <span class="text-xl font-bold text-[#7FA1ED]">+{{ earnedLV }}</span>
          </div>
          <button 
            @click="handleComplete"
            class="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
          >
            {{ isZh ? '返回' : 'Back' }}
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

const emit = defineEmits(['complete'])

const isStarted = ref(false)
const isCompleted = ref(false)
const currentQuestion = ref(0)
const selectedOption = ref(null)
const earnedLV = ref(0)
const cooldownStatus = ref(null)
const streakBonus = ref(1.0)

onMounted(() => {
  cooldownStatus.value = getCooldownStatus('psWorkshop')
  streakBonus.value = getStreakBonus()
})

const canStartWorkshop = computed(() => {
  return canAttempt('psWorkshop')
})

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

const questions = computed(() => props.isZh ? [
  {
    question: '请描述你选择该专业的原因，以及你的学术背景如何支持这个选择？',
    hint: '结合你的本科专业、项目经验和个人兴趣来回答',
    options: [
      '我对这个领域有浓厚兴趣，本科期间学习了相关课程，并参与了xxx项目，这让我决定继续深造。',
      '因为这个专业就业前景好，薪资高，所以我选择这个专业。',
      '我的父母希望我学习这个专业，所以我选择了它。',
      '我不太清楚为什么选择这个专业，只是觉得应该读研究生。'
    ],
    correct: 0
  },
  {
    question: '请描述你最具挑战性的学术项目或经历，以及你是如何克服困难的？',
    hint: '使用STAR法则：情境(Situation)、任务(Task)、行动(Action)、结果(Result)',
    options: [
      '在xxx项目中遇到了技术难题，我通过查阅文献、请教导师和反复实验，最终成功解决了问题，项目获得了优秀成果。',
      '我觉得没有遇到过什么特别挑战的项目，都比较简单。',
      '我直接放弃了那个项目，因为太难了。',
      '我让同学帮我完成了那个困难的部分。'
    ],
    correct: 0
  },
  {
    question: '请描述你的职业规划，以及该学位如何帮助你实现这些目标？',
    hint: '展示你的短期和长期规划，以及学位的具体作用',
    options: [
      '毕业后，我想进入xxx行业从事xxx工作。这个学位将帮助我掌握xxx技能和知识，实现我的职业目标。',
      '我毕业后想找一份高薪工作，具体做什么还没想好。',
      '我的规划是先考研，然后再看有什么工作。',
      '我不需要规划，走一步算一步。'
    ],
    correct: 0
  }
] : [
  {
    question: 'Describe why you chose this major and how your academic background supports this choice.',
    hint: 'Combine your undergraduate major, project experience, and personal interests',
    options: [
      'I have strong interest in this field. During my undergraduate studies, I took related courses and participated in xxx project, which motivated me to pursue further education.',
      'I chose this major because it has good employment prospects and high salary.',
      'My parents wanted me to study this major, so I chose it.',
      'I am not sure why I chose this major, just think I should pursue a graduate degree.'
    ],
    correct: 0
  },
  {
    question: 'Describe your most challenging academic project or experience, and how you overcame the difficulties.',
    hint: 'Use STAR method: Situation, Task, Action, Result',
    options: [
      'In the xxx project, I encountered technical difficulties. Through literature review, consulting mentors, and repeated experiments, I successfully solved the problem and achieved excellent results.',
      'I have not encountered any particularly challenging projects, they were all relatively easy.',
      'I gave up that project directly because it was too difficult.',
      'I asked my classmates to help me complete the difficult part.'
    ],
    correct: 0
  },
  {
    question: 'Describe your career goals and how this degree will help you achieve them.',
    hint: 'Show your short-term and long-term plans, and the specific role of the degree',
    options: [
      'After graduation, I want to work in the xxx industry as a xxx. This degree will help me master xxx skills and knowledge to achieve my career goals.',
      'After graduation, I want to find a high-paying job, but I have not decided what to do specifically.',
      'My plan is to take the graduate exam first, then see what jobs are available.',
      'I do not need a plan, just take it step by step.'
    ],
    correct: 0
  }
])

const currentQuestionData = computed(() => questions.value[currentQuestion.value])

function startWorkshop() {
  if (!canStartWorkshop.value) return
  
  isStarted.value = true
  currentQuestion.value = 0
  selectedOption.value = null
  recordAttempt('psWorkshop', { type: 'ps-workshop' })
}

function selectOption(idx) {
  selectedOption.value = idx
}

function submitAnswer() {
  if (selectedOption.value === currentQuestionData.value.correct) {
    earnedLV.value += 10
  }
  
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
    selectedOption.value = null
  } else {
    const baseLV = 25
    earnedLV.value = Math.round(baseLV * (1 + gearBonus.value / 100))
    isCompleted.value = true
  }
}

function handleComplete() {
  emit('complete', { lv: earnedLV.value })
  isStarted.value = false
  isCompleted.value = false
  currentQuestion.value = 0
  selectedOption.value = null
  earnedLV.value = 0
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
</style>