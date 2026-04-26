<template>
  <div class="interview-sim">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-2xl font-black text-slate-700 tracking-tight drop-shadow-sm">
          {{ isZh ? '面试模拟室' : 'Interview Simulation' }}
        </h2>
        <p class="text-sm text-slate-500 font-medium mt-1">
          {{ isZh ? '模拟真实面试场景，提升实战能力' : 'Practice real interview scenarios, earn Task Value' }}
        </p>
      </div>
      <div class="text-sm font-bold text-[#E3B75C] bg-[#E3B75C]/15 px-4 py-2 rounded-xl border border-[#E3B75C]/30 backdrop-blur-sm">
        🎯 TV {{ isZh ? '加成' : 'Bonus' }}: +{{ (tvBonus * 100).toFixed(0) }}%
      </div>
    </div>

    <div v-if="!currentSimulation" class="space-y-4">
      <!-- Cooldown Status -->
      <div v-if="!canStartSimulation" class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
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

    <div v-else-if="currentQuestionIndex < currentSimulation.questions.length" class="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm font-bold text-slate-400">
          {{ isZh ? '问题' : 'Question' }} {{ currentQuestionIndex + 1 }} / {{ currentSimulation.questions.length }}
        </span>
        <span class="text-sm font-bold text-[#7FA1ED] bg-[#7FA1ED]/20 px-3 py-1 rounded-full">
          +{{ totalPossibleTV }} TV
        </span>
      </div>

      <div class="bg-gradient-to-r from-[#7FA1ED]/10 to-[#E88EAF]/10 rounded-xl p-5 mb-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-[#7FA1ED] flex items-center justify-center flex-shrink-0 text-white text-xl">
            👤
          </div>
          <div>
            <p class="font-bold text-slate-700 text-lg">
              {{ currentSimulation.title[isZh ? 'zh' : 'en'] }}
            </p>
            <p class="text-slate-600 mt-2 leading-relaxed">
              {{ currentQuestion.question[isZh ? 'zh' : 'en'] }}
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-3">
        <button v-for="(option, idx) in currentQuestion.options" :key="idx"
                @click="selectOption(idx)"
                :disabled="!canSelect(idx)"
                class="w-full p-4 rounded-xl text-left border-2 transition-all duration-200"
                :class="getOptionClass(idx, option)">
          <div class="flex items-start gap-3">
            <span class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0"
                  :class="getOptionBadgeClass(idx, option)">
              {{ ['A', 'B', 'C'][idx] }}
            </span>
            <div class="flex-1">
              <p class="font-medium text-slate-700">
                {{ option.text[isZh ? 'zh' : 'en'] }}
              </p>
              <div v-if="!canSelect(idx)" class="flex items-center gap-2 mt-2 text-xs text-slate-400">
                <span>🔒</span>
                <span>{{ isZh ? '需要 ' : 'Requires ' }}
                  <template v-if="option.requiredGear?.ielts">IELTS {{ option.requiredGear.ielts }}+</template>
                  <template v-if="option.requiredGear?.internship">{{ isZh ? ' + ' : '+ ' }}{{ option.requiredGear.internship }}{{ isZh ? '段实习' : ' Internship' }}</template>
                </span>
              </div>
            </div>
            <span class="text-sm font-bold text-amber-500">
              +{{ option.baseTV }} TV
            </span>
          </div>
        </button>
      </div>
    </div>

    <div v-else class="bg-white rounded-2xl border border-slate-200 p-8 text-center">
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

    <button v-if="currentSimulation" @click="exitSimulation"
            class="mt-4 text-sm text-slate-400 hover:text-slate-600 transition-colors">
      ← {{ isZh ? '退出模拟' : 'Exit Simulation' }}
    </button>
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
import { getCooldownStatus, canAttempt, getTimeHint, recordAttempt, getStreakBonus } from '../utils/CooldownManager'

const props = defineProps({
  gearState: {
    type: Object,
    default: () => ({})
  },
  isZh: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['complete', 'exit'])

const currentSimulation = ref(null)
const currentQuestionIndex = ref(0)
const selectedAnswers = ref([])
const earnedTV = ref(0)
const cooldownStatus = ref(null)
const streakBonus = ref(1.0)

onMounted(() => {
  cooldownStatus.value = getCooldownStatus('interviewSim')
  streakBonus.value = getStreakBonus()
})

const canStartSimulation = computed(() => {
  return canAttempt('interviewSim')
})

const cooldownHint = computed(() => {
  if (!cooldownStatus.value) return ''
  return getTimeHint(cooldownStatus.value, props.isZh)
})

const tvBonus = computed(() => {
  return calculateTVBonus(props.gearState)
})

const gearState = computed(() => props.gearState)

const availableSimulations = computed(() => {
  return checkAvailable(gearState.value)
})

const currentQuestion = computed(() => {
  if (!currentSimulation.value) return null
  return currentSimulation.value.questions[currentQuestionIndex.value]
})

const totalPossibleTV = computed(() => {
  if (!currentQuestion.value) return 0
  return currentQuestion.value.options.reduce((max, opt) => {
    const canSel = canSelectOption(opt, gearState.value) ? opt.baseTV : 0
    return Math.max(max, canSel)
  }, 0)
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
  recordAttempt('interviewSim', { simId: sim.id })
}

function canSelect(idx) {
  if (!currentQuestion.value) return false
  const option = currentQuestion.value.options[idx]
  return canSelectOption(option, gearState.value)
}

function getOptionClass(idx, option) {
  if (!canSelect(idx)) {
    return 'border-slate-200 bg-slate-50 opacity-50 cursor-not-allowed'
  }
  return 'border-slate-200 hover:border-[#7FA1ED] hover:bg-[#7FA1ED]/5 cursor-pointer'
}

function getOptionBadgeClass(idx, option) {
  if (!canSelect(idx)) {
    return 'bg-slate-200 text-slate-400'
  }
  return 'bg-[#7FA1ED] text-white'
}

function selectOption(idx) {
  if (!canSelect(idx) || !currentQuestion.value) return

  const option = currentQuestion.value.options[idx]
  selectedAnswers.value.push(idx)
  earnedTV.value += option.baseTV

  currentQuestionIndex.value++
}

function finishSimulation() {
  emit('complete', { tv: totalEarnedTV.value })
  exitSimulation()
}

function exitSimulation() {
  currentSimulation.value = null
  currentQuestionIndex.value = 0
  selectedAnswers.value = []
  earnedTV.value = 0
  emit('exit')
}
</script>

<style scoped>
.interview-sim {
  font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif;
}
</style>