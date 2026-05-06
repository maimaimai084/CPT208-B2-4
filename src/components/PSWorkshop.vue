<template>
  <div v-if="isStarted && !isCompleted"
       class="fixed inset-0 z-50 bg-[#F8F9FB] text-slate-900 flex flex-col font-sans overflow-hidden"
       :class="{ 'bg-blue-50/50': isShaking }"
       style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;">

    <header class="flex items-center justify-between p-4 md:p-5 w-full max-w-4xl mx-auto bg-white rounded-b-2xl shadow-sm border-b border-slate-100">
      <button @click="exitWorkshop" class="flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-xl transition-colors text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        {{ isZh ? '退出' : 'Exit' }}
      </button>

      <div class="text-lg md:text-xl font-bold tracking-tight text-slate-800">
        {{ isZh ? '文书工作坊' : 'PS Workshop' }}
      </div>

      <div class="text-sm font-bold text-[#7FA1ED] bg-[#7FA1ED]/15 px-3 py-1.5 rounded-xl border border-[#7FA1ED]/30">
        ✍️ +{{ earnedLV }} LV
      </div>
    </header>

    <div class="flex-1 w-full max-w-4xl mx-auto flex flex-col px-4 md:px-6 pb-8" :class="{ 'animate-soft-bump': isShaking }">

      <div class="flex items-center justify-between mt-6 mb-4">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg">
            {{ isZh ? '检查点' : 'Checkpoint' }} {{ currentQuestion + 1 }} / {{ questions.length }}
          </span>
        </div>
        <div class="flex gap-1.5">
          <div v-for="i in questions.length" :key="i" class="w-2 h-2 rounded-full" :class="i <= currentQuestion + 1 ? 'bg-[#FF9F43]' : 'bg-slate-300'"></div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-card p-5 md:p-6 mb-6 hover:shadow-cardHover transition-shadow relative">
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#FF9F43] font-bold text-sm shrink-0">
            👤
          </div>
          <div class="flex-1">
            <p class="text-base md:text-lg leading-relaxed text-slate-700">
              {{ currentQuestionData.question }}
            </p>
            <p v-if="currentQuestionData.hint" class="text-xs text-slate-500 mt-2 italic">
              💡 {{ currentQuestionData.hint }}
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-3 mb-6">
        <div v-for="(option, idx) in currentQuestionData.options" :key="idx"
             class="option-btn w-full bg-white rounded-xl p-4 shadow-soft border-2 border-transparent hover:border-[#4F8CFF] hover:shadow-card text-left flex items-center gap-4 group transition-all"
             :class="getOptionClass(idx)"
             @click="handleSelect(idx)">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors"
               :class="getOptionBadgeClass(idx)">
            {{ ['A', 'B', 'C', 'D'][idx] }}
          </div>
          <div class="flex-1">
            <span class="text-sm font-medium text-slate-800">{{ option.text }}</span>
          </div>
          <div v-if="!showFeedback" class="w-2 h-2 rounded-full shrink-0" :class="optionDotColors[idx]"></div>
          <div v-else class="w-6 h-6 flex items-center justify-center shrink-0">
            <span v-if="idx === currentQuestionData.correct" class="text-lg">✅</span>
            <span v-else-if="selectedOption === idx && !isCorrect" class="text-lg">❌</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-3 md:gap-4 mt-auto">
        <div v-for="(option, idx) in currentQuestionData.options" :key="'flip-'+idx"
             class="flip-card group"
             :class="{ 'z-50': selectedOption === idx && showFeedback, 'z-10': !(selectedOption === idx && showFeedback) }">

          <div class="flip-card-inner w-full aspect-[3/4] max-h-[280px] mx-auto"
               :class="{ 'flipped': selectedOption === idx && showFeedback }">

            <div class="flip-card-front rounded-2xl flex flex-col items-center justify-center transition-transform group-hover:-translate-y-2 shadow-lg cursor-pointer bg-white border border-slate-200"
                 :class="{ 'opacity-30 grayscale': selectedOption !== null && selectedOption !== idx }"
                 @click="handleSelect(idx)">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-2" :class="getOptionBadgeClass(idx)">
                <svg v-if="idx === 0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 22 2 22"/></svg>
                <svg v-if="idx === 1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                <svg v-if="idx === 2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                <svg v-if="idx === 3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.09 6.26L21 9.27l-5 4.87L17.18 21 12 17.77 6.82 21 8 14.14l-5-4.87 6.91-1.01z"/></svg>
              </div>
              <span class="text-sm font-medium text-slate-500">{{ ['A', 'B', 'C', 'D'][idx] }}</span>
            </div>

            <div v-if="selectedOption === idx && showFeedback"
                 class="flip-card-back rounded-2xl flex flex-col p-4 shadow-xl border border-slate-200"
                 :class="isCorrect ? 'bg-gradient-to-br from-[#E8FFF0] to-[#F0FFF4]' : 'bg-gradient-to-br from-[#FFF0F0] to-[#FFF5F0]'">
              <div class="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-wider">{{ isZh ? '反馈' : 'Feedback' }}</div>
              <h4 class="text-sm font-bold uppercase mb-1 border-b border-slate-200 pb-1"
                  :class="isCorrect ? 'text-emerald-700' : 'text-red-600'">
                {{ isCorrect ? (isZh ? '回答正确！' : 'Correct!') : (isZh ? '需要改进' : 'Needs Improvement') }}
              </h4>
              <p class="text-sm text-slate-600 flex-1 mt-1 leading-relaxed overflow-y-auto custom-scrollbar">
                {{ option.feedback }}
              </p>
              <div class="flex gap-2 mt-3">
                <span v-if="isCorrect" class="bg-[#7FA1ED] text-white px-2 py-0.5 text-[10px] font-bold rounded-md">+10 LV</span>
                <span v-else class="bg-slate-400 text-white px-2 py-0.5 text-[10px] font-bold rounded-md">+0 LV</span>
              </div>
              <div class="w-full h-1.5 bg-slate-200 rounded-full mt-2 overflow-hidden">
                <div class="h-full bg-slate-800 animate-progress-bar-short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="isCompleted" class="fixed inset-0 z-50 bg-[#F8F9FB] text-slate-900 flex flex-col font-sans overflow-hidden items-center justify-center"
       style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;">
    <div class="bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-md mx-auto shadow-xl">
      <div class="text-6xl mb-4">🎉</div>
      <h3 class="text-2xl font-black text-slate-700 mb-2">
        {{ isZh ? '文书工作坊完成！' : 'PS Workshop Complete!' }}
      </h3>
      <p class="text-slate-500 mb-6">
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

      <button @click="handleComplete"
              class="px-8 py-3 bg-[#7FA1ED] hover:bg-[#6B91DD] text-white rounded-xl font-bold shadow-[0_4px_0_#5B78BA] active:translate-y-[4px] active:shadow-none transition-all">
        {{ isZh ? '领取奖励并返回' : 'Claim & Return' }}
      </button>
    </div>
  </div>

  <div v-else class="ps-workshop-container w-full">
    <div class="bg-white rounded-2xl shadow-card p-6">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <button @click="$emit('exit')" class="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-bold text-slate-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            {{ isZh ? '退出' : 'Exit' }}
          </button>
          <div>
            <h2 class="text-2xl font-black text-slate-700 tracking-tight">
              {{ isZh ? '文书工作坊' : 'Personal Statement Workshop' }}
            </h2>
            <p class="text-sm text-slate-500 font-medium mt-1">
              {{ isZh ? '优化你的个人陈述，提升申请竞争力' : 'Optimize your personal statement to boost application competitiveness' }}
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div v-if="!canStartWorkshop" class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
          <div class="text-amber-600 font-bold mb-1">
            {{ isZh ? '今日次数已用尽' : 'Daily Limit Reached' }}
          </div>
          <div class="text-sm text-amber-500">{{ cooldownHint }}</div>
          <div v-if="cooldownStatus" class="text-xs text-amber-400 mt-2">
            {{ isZh ? `已使用 ${cooldownStatus.used} / ${cooldownStatus.max} 次` : `Used ${cooldownStatus.used} / ${cooldownStatus.max} times` }}
          </div>
          <button @click="handleResetFromLimit"
                  class="mt-3 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow-[0_3px_0_#B45309] active:translate-y-[3px] active:shadow-none transition-all">
            🔄 {{ isZh ? '重置限制 (测试用)' : 'Reset Limits (Testing)' }}
          </button>
        </div>

        <div v-if="streakBonus > 1" class="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
          <span class="text-green-600 font-bold">{{ isZh ? '🔥 连续打卡加成' : '🔥 Streak Bonus' }}</span>
          <span class="text-green-500 text-sm ml-1">+{{ Math.round((streakBonus - 1) * 100) }}%</span>
        </div>

        <div class="bg-slate-50 rounded-xl p-4">
          <h3 class="font-bold text-sm mb-3 text-slate-600">
            {{ isZh ? '📋 当前装备要求' : '📋 Gear Requirements' }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div class="bg-blue-50 rounded-lg p-3 text-center">
              <div class="text-lg">📝</div>
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
            <div class="bg-yellow-50 rounded-lg p-3 text-center">
              <div class="text-lg">🏆</div>
              <div class="text-xs font-bold text-yellow-600 mt-1">{{ isZh ? '奖项' : 'Award' }}</div>
              <div class="text-sm font-bold text-yellow-600">{{ gearState.award || 0 }} {{ isZh ? '级' : 'Lv' }}</div>
            </div>
            <div class="bg-rose-50 rounded-lg p-3 text-center">
              <div class="text-lg">✉️</div>
              <div class="text-xs font-bold text-rose-500 mt-1">{{ isZh ? '推荐信' : 'Recom.' }}</div>
              <div class="text-sm font-bold text-rose-600">{{ gearState.recommendation || 0 }} {{ isZh ? '级' : 'Lv' }}</div>
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
          class="w-full py-3 bg-[#7FA1ED] text-white rounded-xl font-bold text-sm hover:bg-[#5B78BA] transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_0_#5B78BA]"
        >
          {{ isZh ? '开始文书优化 →' : 'Start PS Workshop →' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getCooldownStatus, canAttempt, getTimeHint, recordAttempt, getStreakBonus, resetAllCooldowns } from '../utils/CooldownManager'

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
const earnedLV = ref(0)
const baseEarnedLV = ref(0)
const finalTotalLV = ref(0)
const cooldownStatus = ref(null)
const streakBonus = ref(1.0)
const showFeedback = ref(false)
const isCorrect = ref(false)
const isShaking = ref(false)

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
      { text: '毕业后，我想进入xxx行业从事xxx工作。这个学位将帮助我掌握xxx技能和知识，实现我的职业目标。', feedback: '完美的规划路径。既有清晰的落地目标，又建立了"自身目标"与"该项目"的桥梁。' },
      { text: '我毕业后想找一份高薪工作，具体做什么还没想好。', feedback: '不够具体。每个申请者都想要高薪，你必须明确行业和职位才能脱颖而出。' },
      { text: '我的规划是先考研，然后再看有什么工作。', feedback: '短期逃避就业的表现。优秀的申请者往往有清晰且长远的目标。' },
      { text: '我不需要规划，走一步算一步。', feedback: '这种随意的态度会让招生委员会怀疑你能否坚持完成这个高强度的学位。' }
    ]
  },
  {
    question: '如果你的核心项目结果并不“完美”，在PS中最优写法是什么？',
    hint: '展示问题定义、迭代过程和可迁移能力，不要只写“成功”',
    correct: 0,
    options: [
      { text: '坦诚结果边界，解释你如何定位失败原因、修正方案，并总结可复用方法。', feedback: '非常专业。招生官更看重研究思维与迭代能力，而非“完美叙事”。' },
      { text: '删掉该项目，避免让招生官看到任何失败。', feedback: '错失展示韧性的机会。过度美化会让材料显得空洞。' },
      { text: '把结果夸大成SOTA水平，只要没人核验就行。', feedback: '高风险且不诚信，一旦核验将直接损害申请可信度。' },
      { text: '仅描述你投入了很多时间，不提供方法或结果。', feedback: '缺少证据链，无法证明你的学术能力。' }
    ]
  },
  {
    question: '针对“Why this program”段落，哪种写法最能体现高质量匹配？',
    hint: '避免空泛赞美，强调课程-导师-目标的三点闭环',
    correct: 0,
    options: [
      { text: '明确指出2门课程、1位导师方向，并说明它们如何支撑你的具体研究/职业目标。', feedback: '最佳答案。结构化匹配最能体现你做过充分调研。' },
      { text: '强调学校排名高、城市好、校园漂亮。', feedback: '常见但无竞争力，几乎任何申请者都能写。' },
      { text: '复制官网介绍，体现你“看过官网”。', feedback: '信息堆砌而非匹配分析，招生官很容易识别。' },
      { text: '只写“我相信贵校适合我”，不展开原因。', feedback: '结论先行但证据缺失。' }
    ]
  },
  {
    question: '在PS收尾段，哪种策略最容易提升说服力？',
    hint: '结尾应回扣主线并给出下一步贡献路径',
    correct: 0,
    options: [
      { text: '用1-2句回扣主线能力，并说明入学后可贡献的具体方向与合作场景。', feedback: '强结尾。既总结价值，也展示了你对项目生态的理解。' },
      { text: '再次重复“我从小热爱这个专业”。', feedback: '信息重复，无法增加新说服力。' },
      { text: '请求招生官“务必录取我”，强调你很需要这个机会。', feedback: '情绪化表达过强，降低专业度。' },
      { text: '直接结束，不需要结尾段。', feedback: '缺少收束会让整篇PS显得结构不完整。' }
    ]
  }
] : [
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
  },
  {
    question: 'If your core project outcomes are not "perfect", what is the strongest PS strategy?',
    hint: 'Show problem framing, iteration, and transferable learning instead of pretending only success',
    correct: 0,
    options: [
      { text: 'Acknowledge limitations, explain diagnosis and iteration steps, and summarize transferable methods.', feedback: 'Excellent. Committees value research thinking and iteration, not flawless storytelling.' },
      { text: 'Remove the project entirely so no weakness is visible.', feedback: 'You lose a chance to demonstrate resilience and analytical maturity.' },
      { text: 'Inflate results to look state-of-the-art and hope no one checks.', feedback: 'Unethical and high-risk. Credibility loss can be fatal if verified.' },
      { text: 'Only mention hard work without method details or evidence.', feedback: 'Effort without evidence does not prove capability.' }
    ]
  },
  {
    question: 'For a "Why this program" paragraph, which approach shows the highest fit quality?',
    hint: 'Build a course-professor-goal loop; avoid generic praise',
    correct: 0,
    options: [
      { text: 'Name two courses and one faculty direction, then link them to your specific research/career goals.', feedback: 'Best practice. Structured fit signals serious preparation.' },
      { text: 'Emphasize ranking, city life, and campus aesthetics.', feedback: 'Common but weak. Most applicants can say the same.' },
      { text: 'Copy website descriptions to prove you read the site.', feedback: 'Information dumping is not fit analysis.' },
      { text: 'State "I believe this school fits me" without evidence.', feedback: 'Conclusion without proof is unconvincing.' }
    ]
  },
  {
    question: 'Which ending strategy most improves PS persuasiveness?',
    hint: 'A strong ending should close the loop and project future contribution',
    correct: 0,
    options: [
      { text: 'Briefly synthesize your core strengths and state how you will contribute in concrete academic settings.', feedback: 'Strong ending: clear value proposition plus forward-looking contribution.' },
      { text: 'Repeat "I have loved this major since childhood" again.', feedback: 'Repetition adds no new persuasive value.' },
      { text: 'Directly plead for admission because you need the opportunity.', feedback: 'Overly emotional tone weakens professional credibility.' },
      { text: 'End abruptly without a conclusion paragraph.', feedback: 'A missing conclusion makes the PS feel structurally incomplete.' }
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

const optionColors = [
  'bg-red-50 text-red-500 group-hover:bg-red-100',
  'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100',
  'bg-amber-50 text-amber-500 group-hover:bg-amber-100',
  'bg-purple-50 text-purple-500 group-hover:bg-purple-100'
]

const optionDotColors = ['bg-red-400', 'bg-cyan-400', 'bg-amber-400', 'bg-purple-400']

function getOptionClass(idx) {
  if (!showFeedback.value) {
    if (selectedOption.value !== null && selectedOption.value !== idx) return 'opacity-40 grayscale cursor-default'
    return 'cursor-pointer'
  }
  if (idx === currentQuestionData.value.correct) return 'border-emerald-500 bg-emerald-50 shadow-md ring-2 ring-emerald-500/20 opacity-100'
  if (idx === selectedOption.value) return 'border-red-400 bg-red-50 opacity-100'
  return 'opacity-40 grayscale cursor-default'
}

function getOptionBadgeClass(idx) {
  if (!showFeedback.value) {
    if (selectedOption.value === idx) return optionColors[idx]
    if (selectedOption.value !== null && selectedOption.value !== idx) return 'bg-slate-200 text-slate-400'
    return optionColors[idx]
  }
  if (idx === currentQuestionData.value.correct) return 'bg-emerald-500 text-white'
  if (idx === selectedOption.value) return 'bg-red-500 text-white'
  return 'bg-slate-200 text-slate-400'
}

function handleSelect(idx) {
  if (selectedOption.value !== null || showFeedback.value) return
  selectedOption.value = idx

  isCorrect.value = idx === currentQuestionData.value.correct
  if (isCorrect.value) {
    earnedLV.value += 10
    baseEarnedLV.value += 10
  }

  isShaking.value = true
  setTimeout(() => isShaking.value = false, 400)

  showFeedback.value = true

  setTimeout(() => {
    if (currentQuestion.value < questions.value.length - 1) {
      currentQuestion.value++
      selectedOption.value = null
      showFeedback.value = false
    } else {
      const baseLV = 25
      const totalBase = baseLV + baseEarnedLV.value
      finalTotalLV.value = Math.round(totalBase * (1 + gearBonus.value / 100))
      isCompleted.value = true
    }
  }, 5000)
}

function handleComplete() {
  emit('complete', { lv: finalTotalLV.value, type: 'ps' })
  exitWorkshop()
}

function handleResetFromLimit() {
  resetAllCooldowns()
  cooldownStatus.value = getCooldownStatus('psWorkshop')
}

function exitWorkshop() {
  isStarted.value = false
  isCompleted.value = false
  currentQuestion.value = 0
  selectedOption.value = null
  showFeedback.value = false
  earnedLV.value = 0
  baseEarnedLV.value = 0
  emit('exit')
}
</script>

<style scoped>
.ps-workshop-container {
  font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif;
}
.perspective-container { perspective: 1500px; }
.flip-card { background-color: transparent; }
.flip-card-inner { position: relative; transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); transform-style: preserve-3d; height: 100%; }
.flip-card-inner.flipped { transform: rotateY(180deg) scale(1.1); }
.flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; }
.flip-card-back { transform: rotateY(180deg); display: flex; flex-direction: column; z-index: 2; }

@keyframes soft-bump {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.animate-soft-bump { animation: soft-bump 0.4s ease-out both; }

@keyframes progress-bar-short { 0% { width: 0%; } 100% { width: 100%; } }
.animate-progress-bar-short { animation: progress-bar-short 5s linear forwards; }

.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
</style>
