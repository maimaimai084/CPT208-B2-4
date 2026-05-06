<template>
  <div class="school-matcher">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <button @click="$emit('exit')" class="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-bold text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          {{ isZh ? '退出' : 'Exit' }}
        </button>
        <div>
          <h2 class="text-2xl font-black text-slate-700 tracking-tight">
            {{ isZh ? '选校配对' : 'School Matcher' }}
          </h2>
          <p class="text-sm text-slate-500 font-medium mt-1">
            {{ isZh ? '将学校/材料与正确策略配对' : 'Match schools & documents with the right strategy' }}
          </p>
        </div>
      </div>
      <div class="text-sm font-bold text-[#4F8CFF] bg-blue-50 px-3 py-1.5 rounded-xl">
        {{ timerText }}
      </div>
    </div>

    <div v-if="!isStarted" class="text-center py-8">
      <div class="text-6xl mb-4">🎯</div>
      <p class="text-slate-600 mb-6">
        {{ isZh ? '从左侧选一项，再从右侧选对应的配对项。速度越快得分越高！' : 'Select an item from the left, then match it from the right. Faster = higher score!' }}
      </p>
      <div class="space-y-3 mb-6">
        <div v-for="(level, idx) in MATCH_LEVELS" :key="level.id" class="bg-white rounded-xl border-2 border-slate-200 p-3 text-left hover:border-blue-400 transition-all cursor-pointer"
             :class="{ 'border-blue-500 bg-blue-50': selectedLevelIndex === idx }"
             @click="selectedLevelIndex = idx">
          <span class="font-bold text-sm text-slate-700">{{ level.title[lang] }}</span>
          <span class="text-xs text-slate-400 ml-2">({{ level.pairs.length }} {{ isZh ? '对' : 'pairs' }})</span>
        </div>
      </div>
      <button @click="startGame" class="px-8 py-3 bg-[#4F8CFF] text-white rounded-xl font-bold shadow-[0_4px_0_#3B6FCC] active:translate-y-[4px] active:shadow-none transition-all">
        {{ isZh ? '开始配对 →' : 'Start Matching →' }}
      </button>
    </div>

    <div v-else-if="!isFinished" class="space-y-4">
      <div class="flex items-center justify-between mb-2">
        <span class="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg">
          {{ isZh ? '已匹配' : 'Matched' }} {{ matchedPairs.length }} / {{ currentLevel.pairs.length }}
        </span>
        <span class="px-3 py-1 bg-[#4F8CFF] text-white text-xs font-bold rounded-lg">
          +{{ score }} TV
        </span>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            {{ isZh ? '学校/材料' : 'School / Document' }}
          </div>
          <div v-for="item in shuffledLeft" :key="item.id"
               class="p-3 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer"
               :class="getLeftClass(item)"
               @click="selectLeft(item)">
            {{ item.text[lang] }}
          </div>
        </div>
        <div class="space-y-2">
          <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            {{ isZh ? '策略/用途' : 'Strategy / Purpose' }}
          </div>
          <div v-for="item in shuffledRight" :key="item.id"
               class="p-3 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer"
               :class="getRightClass(item)"
               @click="selectRight(item)">
            {{ item.text[lang] }}
          </div>
        </div>
      </div>

      <div v-if="feedback" class="rounded-xl p-3 border text-sm font-medium animate-fade-in-up"
           :class="feedback.success ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'">
        {{ feedback.message }}
      </div>
    </div>

    <div v-else class="text-center py-8 space-y-4">
      <div class="text-6xl mb-4">🎉</div>
      <h3 class="text-2xl font-black text-slate-700">
        {{ isZh ? '配对完成！' : 'Matching Complete!' }}
      </h3>
      <div class="bg-slate-50 rounded-xl p-5 inline-block text-left w-full max-w-xs">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm text-slate-600">{{ isZh ? '正确率' : 'Accuracy' }}:</span>
          <span class="font-bold text-slate-700">{{ Math.round(matchedPairs.length / currentLevel.pairs.length * 100) }}%</span>
        </div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm text-slate-600">{{ isZh ? '用时' : 'Time' }}:</span>
          <span class="font-bold text-slate-700">{{ timerText }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm font-bold text-slate-800">{{ isZh ? '总分' : 'Total' }}:</span>
          <span class="text-2xl font-black text-[#4F8CFF]">+{{ score }} TV</span>
        </div>
      </div>
      <button @click="$emit('complete', { tv: score })"
              class="px-8 py-3 bg-[#4F8CFF] text-white rounded-xl font-bold shadow-[0_4px_0_#3B6FCC] active:translate-y-[4px] active:shadow-none transition-all">
        {{ isZh ? '领取奖励并返回' : 'Claim & Return' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { MATCH_LEVELS } from '@/data/schoolMatcher'

const props = defineProps({ isZh: { type: Boolean, default: false } })
const emit = defineEmits(['complete', 'exit'])
const lang = computed(() => props.isZh ? 'zh' : 'en')

const isStarted = ref(false)
const isFinished = ref(false)
const selectedLevelIndex = ref(0)
const score = ref(0)
const selectedLeft = ref(null)
const selectedRight = ref(null)
const matchedPairs = ref([])
const feedback = ref(null)
const wrongAttempts = ref(0)
const elapsedSeconds = ref(0)
let timerInterval = null

const currentLevel = computed(() => MATCH_LEVELS[selectedLevelIndex.value])

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const shuffledLeft = computed(() =>
  shuffleArray(currentLevel.value.pairs.map(p => ({ id: p.id, text: p.left })))
)
const shuffledRight = computed(() =>
  shuffleArray(currentLevel.value.pairs.map(p => ({ id: p.id, text: p.right })))
)

const timerText = computed(() => {
  const m = Math.floor(elapsedSeconds.value / 60)
  const s = elapsedSeconds.value % 60
  return `${m}:${String(s).padStart(2, '0')}`
})

function startGame() {
  isStarted.value = true
  isFinished.value = false
  score.value = 0
  matchedPairs.value = []
  selectedLeft.value = null
  selectedRight.value = null
  feedback.value = null
  wrongAttempts.value = 0
  elapsedSeconds.value = 0
  timerInterval = setInterval(() => elapsedSeconds.value++, 1000)
}

function getLeftClass(item) {
  if (matchedPairs.value.some(p => p.id === item.id)) return 'border-green-400 bg-green-50 text-green-700'
  if (selectedLeft.value?.id === item.id) return 'border-blue-500 bg-blue-50 text-blue-700'
  return 'border-slate-200 text-slate-700 hover:border-blue-300'
}

function getRightClass(item) {
  if (matchedPairs.value.some(p => p.id === item.id)) return 'border-green-400 bg-green-50 text-green-700'
  if (selectedRight.value?.id === item.id) return 'border-orange-500 bg-orange-50 text-orange-700'
  return 'border-slate-200 text-slate-700 hover:border-orange-300'
}

function selectLeft(item) {
  if (matchedPairs.value.some(p => p.id === item.id)) return
  selectedLeft.value = item
  tryMatch()
}

function selectRight(item) {
  if (matchedPairs.value.some(p => p.id === item.id)) return
  selectedRight.value = item
  tryMatch()
}

function tryMatch() {
  if (!selectedLeft.value || !selectedRight.value) return

  if (selectedLeft.value.id === selectedRight.value.id) {
    matchedPairs.value.push({ id: selectedLeft.value.id })
    const timeBonus = Math.max(0, 10 - Math.floor(elapsedSeconds.value / 10))
    score.value += 10 + timeBonus
    feedback.value = { success: true, message: props.isZh ? '✅ 配对正确！' : '✅ Correct match!' }

    if (matchedPairs.value.length === currentLevel.value.pairs.length) {
      setTimeout(() => {
        clearInterval(timerInterval)
        isFinished.value = true
      }, 800)
    }
  } else {
    wrongAttempts.value++
    feedback.value = { success: false, message: props.isZh ? '❌ 配对错误，请重试' : '❌ Wrong match, try again' }
    setTimeout(() => { feedback.value = null }, 1500)
  }

  selectedLeft.value = null
  selectedRight.value = null
}

onUnmounted(() => { if (timerInterval) clearInterval(timerInterval) })
</script>

<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.3s ease-out both; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
