<template>
  <div v-if="currentSimulation && !showResults"
       class="fixed inset-0 z-50 bg-[#F8F9FB] text-slate-900 flex flex-col font-sans overflow-hidden"
       :class="{ 'bg-blue-50/50': isShaking }"
       style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;">

    <header class="flex items-center justify-between p-4 md:p-5 w-full max-w-4xl mx-auto bg-white rounded-b-2xl shadow-sm border-b border-slate-100">
      <button @click="exitSimulation" class="flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-xl transition-colors text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        {{ isZh ? '退出' : 'Exit' }}
      </button>

      <div class="text-lg md:text-xl font-bold tracking-tight text-slate-800">
        {{ isZh ? '面试模拟' : 'Interview Sim' }}
      </div>

      <div class="text-sm font-bold text-[#E3B75C] bg-[#E3B75C]/15 px-3 py-1.5 rounded-xl border border-[#E3B75C]/30">
        🎯 +{{ totalEarnedTV }} TV
      </div>
    </header>

    <div class="flex-1 w-full max-w-4xl mx-auto flex flex-col px-4 md:px-6 pb-8" :class="{ 'animate-soft-bump': isShaking }">

      <div class="flex items-center justify-between mt-6 mb-4">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg">
            {{ isZh ? '检查点' : 'Checkpoint' }} {{ currentQuestionIndex + 1 }} / {{ currentSimulation.questions.length }}
          </span>
        </div>
        <div class="flex gap-1.5">
          <div v-for="i in currentSimulation.questions.length" :key="i" class="w-2 h-2 rounded-full" :class="i <= currentQuestionIndex + 1 ? 'bg-[#FF9F43]' : 'bg-slate-300'"></div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-card p-5 md:p-6 mb-6 hover:shadow-cardHover transition-shadow relative">
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#FF9F43] font-bold text-sm shrink-0">
            👤
          </div>
          <p class="text-base md:text-lg leading-relaxed text-slate-700">
            {{ currentQuestion.question[isZh ? 'zh' : 'en'] }}
          </p>
        </div>
      </div>

      <div class="space-y-3 mb-6">
        <div v-for="(option, idx) in currentQuestion.options" :key="idx"
             class="option-btn w-full bg-white rounded-xl p-4 shadow-soft border-2 border-transparent hover:border-[#4F8CFF] hover:shadow-card text-left flex items-center gap-4 group transition-all"
             :class="getInterviewOptionClass(idx)"
             @click="handleSelect(idx)">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors"
               :class="getInterviewBadgeClass(idx)">
            {{ ['A', 'B', 'C'][idx] }}
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium text-slate-800">
              {{ option.text[isZh ? 'zh' : 'en'] }}
            </p>
            <div v-if="!canSelect(idx)" class="flex items-center gap-2 mt-1 text-xs text-slate-400">
              <span>🔒</span>
              <span>{{ isZh ? '需要 ' : 'Requires ' }}
                <template v-if="option.requiredGear?.ielts">IELTS {{ option.requiredGear.ielts }}+</template>
                <template v-if="option.requiredGear?.internship">{{ isZh ? ' + ' : '+ ' }}{{ option.requiredGear.internship }}{{ isZh ? '段实习' : ' Internship' }}</template>
              </span>
            </div>
          </div>
          <div class="w-2 h-2 rounded-full shrink-0" :class="optionDotColors[idx]"></div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 md:gap-6 mt-auto">
        <div v-for="(option, idx) in currentQuestion.options" :key="'flip-'+idx"
             class="flip-card group"
             :class="{ 'z-50': selectedIndex === idx, 'z-10': selectedIndex !== idx }">

          <div class="flip-card-inner w-full aspect-[3/4] max-h-[280px] mx-auto"
               :class="{ 'flipped': selectedIndex === idx }">

            <div class="flip-card-front rounded-2xl flex flex-col items-center justify-center transition-transform group-hover:-translate-y-2 shadow-lg cursor-pointer bg-white border border-slate-200"
                 :class="{ 'opacity-30 grayscale': selectedIndex !== null && selectedIndex !== idx }"
                 @click="handleSelect(idx)">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-2" :class="getInterviewBadgeClass(idx)">
                <svg v-if="idx === 0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 22 2 22"/></svg>
                <svg v-if="idx === 1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                <svg v-if="idx === 2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <span class="text-sm font-medium text-slate-500">{{ ['A', 'B', 'C'][idx] }}</span>
            </div>

            <div v-if="selectedIndex === idx"
                 class="flip-card-back rounded-2xl flex flex-col p-5 shadow-xl bg-gradient-to-br from-[#E8F0FF] to-[#FFF5F0] border border-slate-200">
              <div class="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-wider">{{ isZh ? '路径分析' : 'Path Analysis' }}</div>
              <h4 class="text-sm font-bold text-slate-800 uppercase mb-2 border-b border-slate-200 pb-1">
                {{ isZh ? '导师笔记' : "Mentor's Note" }}
              </h4>
              <p class="text-sm text-slate-600 flex-1 mt-2 leading-relaxed overflow-y-auto custom-scrollbar">
                {{ feedback?.hint || '' }}
              </p>
              <div class="flex gap-2 mt-3">
                <span class="bg-[#FF9F43] text-white px-2 py-1 text-[10px] font-bold rounded-md">+{{ option.baseTV }} TV</span>
              </div>
              <div class="w-full h-1.5 bg-slate-200 rounded-full mt-3 overflow-hidden">
                <div class="h-full bg-slate-800 animate-progress-bar-short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="showResults" class="fixed inset-0 z-50 bg-[#F8F9FB] text-slate-900 flex flex-col font-sans overflow-hidden items-center justify-center"
       style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;">
    <div class="bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-md mx-auto shadow-xl">
      <div class="text-6xl mb-4">🎉</div>
      <h3 class="text-2xl font-black text-slate-700 mb-2">
        {{ isZh ? '面试完成！' : 'Interview Complete!' }}
      </h3>
      <p class="text-slate-500 mb-6">
        {{ isZh ? '恭喜完成本次模拟练习' : 'Congratulations on completing this simulation' }}
      </p>

      <div class="bg-slate-50 rounded-xl p-5 mb-6 inline-block">
        <div class="flex items-center gap-8">
          <div class="text-center">
            <div class="text-3xl font-black text-[#E3B75C]">+{{ earnedTV }}</div>
            <div class="text-xs text-slate-400 font-medium">{{ isZh ? '基础 TV' : 'Base TV' }}</div>
          </div>
          <div v-if="tvBonus > 0" class="text-center">
            <div class="text-3xl font-black text-[#7FA1ED]">+{{ Math.floor(earnedTV * tvBonus) }}</div>
            <div class="text-xs text-slate-400 font-medium">{{ isZh ? '装备加成' : 'Gear Bonus' }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-black text-[#10B981]">+{{ totalEarnedTV }}</div>
            <div class="text-xs text-slate-400 font-medium">{{ isZh ? '总计' : 'Total' }}</div>
          </div>
        </div>
      </div>

      <button @click="finishSimulation"
              class="px-8 py-3 bg-[#7FA1ED] hover:bg-[#6B91DD] text-white rounded-xl font-bold shadow-[0_4px_0_#5B78BA] active:translate-y-[4px] active:shadow-none transition-all">
        {{ isZh ? '领取奖励并返回' : 'Claim & Return' }}
      </button>
    </div>
  </div>

  <div v-else class="interview-sim">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <button @click="$emit('exit')" class="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-bold text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          {{ isZh ? '退出' : 'Exit' }}
        </button>
        <div>
          <h2 class="text-2xl font-black text-slate-700 tracking-tight drop-shadow-sm">
            {{ isZh ? '面试模拟室' : 'Interview Simulation' }}
          </h2>
          <p class="text-sm text-slate-500 font-medium mt-1">
            {{ isZh ? '模拟真实面试场景，提升实战能力' : 'Practice real interview scenarios, earn Task Value' }}
          </p>
        </div>
      </div>
      <div class="text-sm font-bold text-[#E3B75C] bg-[#E3B75C]/15 px-4 py-2 rounded-xl border border-[#E3B75C]/30 backdrop-blur-sm">
        🎯 TV {{ isZh ? '加成' : 'Bonus' }}: +{{ (tvBonus * 100).toFixed(0) }}%
      </div>
    </div>

    <div class="space-y-4">
      <div v-if="!canStartSimulation" class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
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

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button v-for="sim in availableSimulations" :key="sim.id"
                @click="startSimulation(sim)"
                :disabled="!canStartSimulation"
                class="bg-white rounded-2xl border-2 border-[#E3B75C] p-5 text-left hover:border-[#D4A54C] hover:shadow-lg transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed">
          <div class="flex items-start justify-between mb-3">
            <div>
              <h3 class="font-bold text-slate-700 text-lg">{{ sim.title[isZh ? 'zh' : 'en'] }}</h3>
              <p class="text-sm text-slate-500 mt-1">{{ sim.description[isZh ? 'zh' : 'en'] }}</p>
            </div>
            <span class="text-2xl">🎤</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs bg-[#E3B75C]/20 text-[#B38A3B] px-2 py-1 rounded-lg">
              {{ sim.questions.length }} {{ isZh ? '题' : 'Questions' }}
            </span>
            <span class="text-sm text-slate-400 group-hover:text-slate-600 transition-colors">
              {{ isZh ? '开始 →' : 'Start →' }}
            </span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { 
  INTERVIEW_SIMULATIONS,
  getAvailableSimulations as checkAvailable,
  canSelectOption
} from '../data/simulations'
import { calculateTVBonus } from '../data/gearConfig'
import { getCooldownStatus, canAttempt, getTimeHint, recordAttempt, getStreakBonus, resetAllCooldowns } from '../utils/CooldownManager'

const props = defineProps({
  gearState: { type: Object, default: () => ({}) },
  isZh: { type: Boolean, default: false }
})

const emit = defineEmits(['complete', 'exit', 'update:isZh'])

const currentSimulation = ref(null)
const currentQuestionIndex = ref(0)
const selectedAnswers = ref([])
const earnedTV = ref(0)
const cooldownStatus = ref(null)
const streakBonus = ref(1.0)
const selectedIndex = ref(null)
const feedback = ref(null)
const showResults = ref(false)
const isShaking = ref(false)

onMounted(() => {
  cooldownStatus.value = getCooldownStatus('interviewSim')
  streakBonus.value = getStreakBonus()
})

const canStartSimulation = computed(() => canAttempt('interviewSim'))
const cooldownHint = computed(() => {
  if (!cooldownStatus.value) return ''
  return getTimeHint(cooldownStatus.value, props.isZh)
})
const tvBonus = computed(() => calculateTVBonus(props.gearState))
const gearState = computed(() => props.gearState)
const availableSimulations = computed(() => checkAvailable(gearState.value))

const currentQuestion = computed(() => {
  if (!currentSimulation.value) return null
  return currentSimulation.value.questions[currentQuestionIndex.value]
})

const totalEarnedTV = computed(() => {
  return earnedTV.value + Math.floor(earnedTV.value * tvBonus.value)
})

function startSimulation(sim) {
  if (!canStartSimulation.value) return
  currentSimulation.value = sim
  currentQuestionIndex.value = 0
  selectedAnswers.value = []
  earnedTV.value = 0
  selectedIndex.value = null
  feedback.value = null
  showResults.value = false
  recordAttempt('interviewSim', { simId: sim.id })
}

const optionColors = [
  'bg-red-50 text-red-500 group-hover:bg-red-100',
  'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100',
  'bg-amber-50 text-amber-500 group-hover:bg-amber-100'
]

const optionDotColors = ['bg-red-400', 'bg-cyan-400', 'bg-amber-400']

function canSelect(idx) {
  if (!currentQuestion.value) return false
  return canSelectOption(currentQuestion.value.options[idx], gearState.value)
}

function getInterviewOptionClass(idx) {
  if (!canSelect(idx)) return 'opacity-40 grayscale cursor-not-allowed'
  if (selectedIndex.value !== null && selectedIndex.value !== idx) return 'opacity-40 grayscale cursor-default'
  return 'cursor-pointer'
}

function getInterviewBadgeClass(idx) {
  if (!canSelect(idx)) return 'bg-slate-200 text-slate-400'
  if (selectedIndex.value !== null && selectedIndex.value !== idx) return 'bg-slate-200 text-slate-400'
  return optionColors[idx]
}

function handleSelect(idx) {
  if (!canSelect(idx) || selectedIndex.value !== null) return
  selectedIndex.value = idx
  const option = currentQuestion.value.options[idx]

  const maxTV = Math.max(...currentQuestion.value.options.filter(o => canSelectOption(o, gearState.value)).map(o => o.baseTV))
  const isBest = option.baseTV >= maxTV

  feedback.value = {
    isBest,
    hint: isBest
      ? (props.isZh ? '这是最佳选择，获得了最多的TV奖励！' : 'This is the best choice with the highest TV reward!')
      : (props.isZh ? '有效选择，但不是最高TV的选项。' : 'Valid choice, but not the highest TV option.')
  }

  isShaking.value = true
  setTimeout(() => isShaking.value = false, 400)

  selectedAnswers.value.push(idx)
  earnedTV.value += option.baseTV

  setTimeout(() => {
    if (currentQuestionIndex.value < currentSimulation.value.questions.length - 1) {
      currentQuestionIndex.value++
      selectedIndex.value = null
      feedback.value = null
    } else {
      showResults.value = true
    }
  }, 5000)
}

function finishSimulation() {
  emit('complete', { tv: totalEarnedTV.value })
  exitSimulation()
}

function handleResetFromLimit() {
  resetAllCooldowns()
  cooldownStatus.value = getCooldownStatus('interviewSim')
}

function exitSimulation() {
  currentSimulation.value = null
  currentQuestionIndex.value = 0
  selectedAnswers.value = []
  earnedTV.value = 0
  selectedIndex.value = null
  feedback.value = null
  showResults.value = false
  emit('exit')
}
</script>

<style scoped>
.interview-sim {
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
