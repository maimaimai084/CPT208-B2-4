<template>
  <div v-if="!gameStarted"
       class="fixed inset-0 z-50 bg-[#F8F9FB] text-slate-900 flex flex-col font-sans overflow-hidden"
       style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;">

    <header class="flex items-center justify-between p-4 md:p-5 w-full max-w-4xl mx-auto bg-white rounded-b-2xl shadow-sm border-b border-slate-100">
      <button @click="handleExit" class="flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-xl transition-colors text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        {{ isZh ? '退出' : 'Exit' }}
      </button>

      <div class="text-lg md:text-xl font-bold tracking-tight text-slate-800">
        {{ isZh ? '文档冲刺' : 'Document Rush' }}
      </div>

      <div class="text-sm font-bold text-[#E3B75C] bg-[#E3B75C]/15 px-3 py-1.5 rounded-xl border border-[#E3B75C]/30">
        🎯 TV {{ isZh ? '加成' : 'Bonus' }}: +{{ (tvBonus * 100).toFixed(0) }}%
      </div>
    </header>

    <div class="flex-1 w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-4 md:px-6 pb-8">
      <p class="text-slate-500 text-base font-medium mb-8">
        {{ isZh ? '选择你想要挑战的游戏模式：' : 'Choose your challenge mode:' }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-3xl">
        <button @click="startGame('spelling')"
                class="bg-white rounded-2xl border-2 border-orange-200 p-6 text-left hover:border-orange-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-bold text-slate-700 text-lg">{{ isZh ? '拼写检查' : 'Spelling Check' }}</h3>
              <p class="text-sm text-slate-500 mt-1">{{ isZh ? '找出文档中的拼写错误' : 'Spot spelling errors in documents' }}</p>
            </div>
            <span class="text-3xl">📝</span>
          </div>
          <span class="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-lg font-bold">3 {{ isZh ? '题' : 'Questions' }}</span>
        </button>

        <button @click="startGame('grammar')"
                class="bg-white rounded-2xl border-2 border-purple-200 p-6 text-left hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-bold text-slate-700 text-lg">{{ isZh ? '语法挑战' : 'Grammar Challenge' }}</h3>
              <p class="text-sm text-slate-500 mt-1">{{ isZh ? '识别句子中的语法错误' : 'Identify grammar errors in sentences' }}</p>
            </div>
            <span class="text-3xl">📚</span>
          </div>
          <span class="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-lg font-bold">4 {{ isZh ? '题' : 'Questions' }}</span>
        </button>

        <button @click="startGame('punctuation')"
                class="bg-white rounded-2xl border-2 border-green-200 p-6 text-left hover:border-green-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-bold text-slate-700 text-lg">{{ isZh ? '标点挑战' : 'Punctuation Challenge' }}</h3>
              <p class="text-sm text-slate-500 mt-1">{{ isZh ? '找出标点符号错误' : 'Find punctuation errors' }}</p>
            </div>
            <span class="text-3xl">✏️</span>
          </div>
          <span class="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-lg font-bold">4 {{ isZh ? '题' : 'Questions' }}</span>
        </button>
      </div>
    </div>
  </div>

  <div v-else-if="gameStarted && !showResults && currentMode === 'spelling'"
       class="fixed inset-0 z-50 bg-[#F8F9FB] text-slate-900 flex flex-col font-sans overflow-hidden"
       style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;">

    <header class="flex items-center justify-between p-4 md:p-5 w-full max-w-4xl mx-auto bg-white rounded-b-2xl shadow-sm border-b border-slate-100">
      <button @click="handleExit" class="flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-xl transition-colors text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        {{ isZh ? '退出' : 'Exit' }}
      </button>

      <div class="text-lg md:text-xl font-bold tracking-tight text-slate-800">
        {{ isZh ? '拼写检查' : 'Spelling Check' }}
      </div>

      <div class="text-sm font-bold text-[#E3B75C] bg-[#E3B75C]/15 px-3 py-1.5 rounded-xl border border-[#E3B75C]/30">
        🎯 +{{ earnedTV }} TV
      </div>
    </header>

    <div class="flex-1 w-full max-w-4xl mx-auto flex flex-col px-4 md:px-6 pb-8">
      <div class="flex items-center justify-between mt-6 mb-4">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg">
            {{ isZh ? '检查点' : 'Checkpoint' }} {{ currentRound + 1 }} / {{ totalRounds }}
          </span>
        </div>
        <div class="flex gap-1.5">
          <div v-for="i in totalRounds" :key="i" class="w-2 h-2 rounded-full" :class="i <= currentRound + 1 ? 'bg-[#FF9F43]' : 'bg-slate-300'"></div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-card p-5 md:p-6 mb-6 hover:shadow-cardHover transition-shadow relative">
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#FF9F43] font-bold text-sm shrink-0">
            📝
          </div>
          <p class="text-sm text-slate-500 font-medium">
            {{ isZh ? '点击有拼写错误的单词：' : 'Tap the misspelled words:' }}
          </p>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-[0_2px_0_#E2E8F0] p-5 mb-6 flex-1 overflow-y-auto custom-scrollbar">
        <div class="text-base leading-relaxed text-slate-700">
          <span v-for="(word, index) in currentDocument" :key="index"
                @click="toggleError(index)"
                class="cursor-pointer inline-block px-1.5 py-0.5 rounded transition-all mr-1 mb-1"
                :class="selectedErrors.has(index)
                  ? 'bg-red-100 text-red-600 border-b-2 border-red-400 font-bold'
                  : 'hover:bg-slate-100 border-b-2 border-transparent'">
            {{ word }}
          </span>
        </div>
      </div>

      <div v-if="spellingFeedback" class="rounded-xl p-4 border animate-fade-in-up mb-4"
           :class="isSpellingCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-lg">{{ isSpellingCorrect ? '✅' : '⚠️' }}</span>
          <span class="font-bold text-lg" :class="isSpellingCorrect ? 'text-emerald-700' : 'text-amber-700'">
            {{ isSpellingCorrect ? (isZh ? '完美！' : 'Perfect!') : (isZh ? '部分正确' : 'Partially Correct') }}
          </span>
        </div>
        <p class="text-sm" :class="isSpellingCorrect ? 'text-emerald-600' : 'text-amber-600'">
          {{ spellingFeedback }}
        </p>
      </div>

      <button v-if="!spellingFeedback"
              @click="checkSpelling"
              :disabled="selectedErrors.size === 0"
              class="w-full py-3 bg-slate-800 text-white rounded-xl font-bold text-sm hover:bg-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_0_#000000]">
        {{ isZh ? '检查答案 →' : 'Check Answer →' }}
      </button>
    </div>
  </div>

  <div v-else-if="gameStarted && !showResults && (currentMode === 'grammar' || currentMode === 'punctuation')"
       class="fixed inset-0 z-50 bg-[#F8F9FB] text-slate-900 flex flex-col font-sans overflow-hidden"
       :class="{ 'bg-blue-50/50': isShaking }"
       style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;">

    <header class="flex items-center justify-between p-4 md:p-5 w-full max-w-4xl mx-auto bg-white rounded-b-2xl shadow-sm border-b border-slate-100">
      <button @click="handleExit" class="flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-xl transition-colors text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        {{ isZh ? '退出' : 'Exit' }}
      </button>

      <div class="text-lg md:text-xl font-bold tracking-tight text-slate-800">
        {{ currentMode === 'grammar' ? (isZh ? '语法挑战' : 'Grammar Challenge') : (isZh ? '标点挑战' : 'Punctuation Challenge') }}
      </div>

      <div class="text-sm font-bold text-[#E3B75C] bg-[#E3B75C]/15 px-3 py-1.5 rounded-xl border border-[#E3B75C]/30">
        🎯 +{{ earnedTV }} TV
      </div>
    </header>

    <div class="flex-1 w-full max-w-4xl mx-auto flex flex-col px-4 md:px-6 pb-8" :class="{ 'animate-soft-bump': isShaking }">

      <div class="flex items-center justify-between mt-6 mb-4">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg">
            {{ isZh ? '检查点' : 'Checkpoint' }} {{ currentRound + 1 }} / {{ totalRounds }}
          </span>
        </div>
        <div class="flex gap-1.5">
          <div v-for="i in totalRounds" :key="i" class="w-2 h-2 rounded-full" :class="i <= currentRound + 1 ? 'bg-[#FF9F43]' : 'bg-slate-300'"></div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-card p-5 md:p-6 mb-6 hover:shadow-cardHover transition-shadow relative">
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#FF9F43] font-bold text-sm shrink-0">
            {{ currentMode === 'grammar' ? '📚' : '✏️' }}
          </div>
          <div class="flex-1">
            <p class="text-xs text-slate-400 font-bold uppercase mb-1">
              {{ currentMode === 'grammar' ? 'Grammar Error Type:' : 'Punctuation Error Type:' }}
              <span class="text-slate-600 font-bold ml-1">{{ currentQuizData.errorType }}</span>
            </p>
            <p class="text-base md:text-lg leading-relaxed text-slate-700 font-medium">
              {{ currentQuizData.sentence }}
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-3 mb-6">
        <div v-for="(option, idx) in currentQuizData.options" :key="idx"
             class="option-btn w-full bg-white rounded-xl p-4 shadow-soft border-2 border-transparent hover:border-[#4F8CFF] hover:shadow-card text-left flex items-center gap-4 group transition-all"
             :class="getInterviewOptionClass(idx)"
             @click="handleSelect(idx)">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors"
               :class="getInterviewBadgeClass(idx)">
            {{ ['A', 'B', 'C'][idx] }}
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium text-slate-800">
              {{ option.text }}
            </p>
          </div>
          <div v-if="!showQuizFeedback" class="w-2 h-2 rounded-full shrink-0" :class="optionDotColors[idx]"></div>
          <div v-else class="w-6 h-6 flex items-center justify-center shrink-0">
            <span v-if="option.correct" class="text-lg">✅</span>
            <span v-else-if="selectedQuizOption === idx" class="text-lg">❌</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 md:gap-6 mt-auto">
        <div v-for="(option, idx) in currentQuizData.options" :key="'flip-'+idx"
             class="flip-card group"
             :class="{ 'z-50': selectedQuizOption === idx && showQuizFeedback, 'z-10': !(selectedQuizOption === idx && showQuizFeedback) }">

          <div class="flip-card-inner w-full aspect-[3/4] max-h-[200px] mx-auto"
               :class="{ 'flipped': selectedQuizOption === idx && showQuizFeedback }">

            <div class="flip-card-front rounded-2xl flex flex-col items-center justify-center transition-transform group-hover:-translate-y-2 shadow-lg cursor-pointer bg-white border border-slate-200"
                 :class="{ 'opacity-30 grayscale': selectedQuizOption !== null && selectedQuizOption !== idx }"
                 @click="handleSelect(idx)">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-2" :class="getInterviewBadgeClass(idx)">
                <svg v-if="idx === 0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 22 2 22"/></svg>
                <svg v-if="idx === 1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                <svg v-if="idx === 2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <span class="text-xs font-medium text-slate-500">{{ ['A', 'B', 'C'][idx] }}</span>
            </div>

            <div v-if="selectedQuizOption === idx && showQuizFeedback"
                 class="flip-card-back rounded-2xl flex flex-col p-4 shadow-xl border border-slate-200"
                 :class="isQuizCorrect ? 'bg-gradient-to-br from-[#E8FFF0] to-[#F0FFF4]' : 'bg-gradient-to-br from-[#FFF0F0] to-[#FFF5F0]'">
              <div class="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-wider">{{ isZh ? '解析' : 'Analysis' }}</div>
              <h4 class="text-sm font-bold uppercase mb-2 border-b border-slate-200 pb-1"
                  :class="isQuizCorrect ? 'text-emerald-700' : 'text-red-600'">
                {{ isQuizCorrect ? (isZh ? '正确！' : 'Correct!') : (isZh ? '错误' : 'Incorrect') }}
              </h4>
              <p class="text-xs md:text-sm text-slate-600 flex-1 mt-2 leading-relaxed overflow-y-auto custom-scrollbar">
                {{ currentQuizData.explanation }}
              </p>
              <div class="flex gap-2 mt-3">
                <span class="bg-[#FF9F43] text-white px-2 py-1 text-[10px] font-bold rounded-md">+{{ isQuizCorrect ? 15 : 0 }} TV</span>
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
        {{ isZh ? '挑战完成！' : 'Challenge Complete!' }}
      </h3>
      <p class="text-slate-500 mb-6">
        {{ currentMode === 'spelling'
          ? (isZh ? '拼写检查完成！' : 'Spelling check completed!')
          : (isZh ? '选择题挑战完成！' : 'Quiz challenge completed!') }}
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

      <button @click="handleClaim"
              class="px-8 py-3 bg-[#7FA1ED] hover:bg-[#6B91DD] text-white rounded-xl font-bold shadow-[0_4px_0_#5B78BA] active:translate-y-[4px] active:shadow-none transition-all">
        {{ isZh ? '领取奖励并返回' : 'Claim & Return' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { DOCUMENT_ROUNDS, GRAMMAR_CHALLENGES, PUNCTUATION_CHALLENGES } from '../data/documentRush'
import { calculateTVBonus } from '../data/gearConfig'

const props = defineProps({
  gearState: { type: Object, default: () => ({}) },
  isZh: { type: Boolean, default: false }
})

const emit = defineEmits(['complete', 'exit'])

const gameStarted = ref(false)
const currentMode = ref('spelling')
const currentRound = ref(0)
const selectedErrors = ref(new Set())
const earnedTV = ref(0)
const score = ref(0)
const tvBonus = computed(() => calculateTVBonus(props.gearState))
const totalEarnedTV = computed(() => earnedTV.value + Math.floor(earnedTV.value * tvBonus.value))
const spellingFeedback = ref('')
const isSpellingCorrect = ref(false)
const selectedQuizOption = ref(null)
const showQuizFeedback = ref(false)
const isQuizCorrect = ref(false)
const showResults = ref(false)
const isShaking = ref(false)

const spellingRounds = computed(() => {
  const shuffled = [...DOCUMENT_ROUNDS].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 3)
})

const grammarChallenges = computed(() => {
  const shuffled = [...GRAMMAR_CHALLENGES].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 4)
})

const punctuationChallenges = computed(() => {
  const shuffled = [...PUNCTUATION_CHALLENGES].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 4)
})

const currentRoundData = computed(() => spellingRounds.value[currentRound.value])

const currentDocument = computed(() => {
  if (!currentRoundData.value) return []
  return currentRoundData.value.document.en.split(' ')
})

const currentQuizData = computed(() => {
  if (currentMode.value === 'grammar') return grammarChallenges.value[currentRound.value]
  if (currentMode.value === 'punctuation') return punctuationChallenges.value[currentRound.value]
  return null
})

const totalRounds = computed(() => {
  if (currentMode.value === 'spelling') return spellingRounds.value.length
  if (currentMode.value === 'grammar') return grammarChallenges.value.length
  if (currentMode.value === 'punctuation') return punctuationChallenges.value.length
  return 3
})

function startGame(mode) {
  gameStarted.value = true
  currentMode.value = mode
  currentRound.value = 0
  earnedTV.value = 0
  score.value = 0
  selectedErrors.value = new Set()
  spellingFeedback.value = ''
  selectedQuizOption.value = null
  showQuizFeedback.value = false
  showResults.value = false
  isShaking.value = false
}

function toggleError(index) {
  const newSet = new Set(selectedErrors.value)
  if (newSet.has(index)) {
    newSet.delete(index)
  } else {
    newSet.add(index)
  }
  selectedErrors.value = newSet
}

function handleSelect(idx) {
  if (showQuizFeedback.value || selectedQuizOption.value !== null) return
  selectedQuizOption.value = idx

  isQuizCorrect.value = currentQuizData.value.options[idx].correct
  if (isQuizCorrect.value) {
    earnedTV.value += 15
    score.value += 1
  }

  isShaking.value = true
  setTimeout(() => isShaking.value = false, 400)

  showQuizFeedback.value = true

  setTimeout(() => {
    if (currentRound.value < totalRounds.value - 1) {
      currentRound.value++
      selectedQuizOption.value = null
      showQuizFeedback.value = false
    } else {
      showResults.value = true
    }
  }, 5000)
}

const optionColors = [
  'bg-red-50 text-red-500 group-hover:bg-red-100',
  'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100',
  'bg-amber-50 text-amber-500 group-hover:bg-amber-100'
]

const optionDotColors = ['bg-red-400', 'bg-cyan-400', 'bg-amber-400']

function getInterviewOptionClass(idx) {
  if (!showQuizFeedback.value) {
    if (selectedQuizOption.value !== null && selectedQuizOption.value !== idx) return 'opacity-40 grayscale cursor-default'
    return 'cursor-pointer'
  }
  if (currentQuizData.value.options[idx].correct) return 'border-emerald-500 bg-emerald-50 shadow-md ring-2 ring-emerald-500/20 opacity-100'
  if (selectedQuizOption.value === idx && !isQuizCorrect.value) return 'border-red-400 bg-red-50 opacity-100'
  return 'opacity-40 grayscale cursor-default'
}

function getInterviewBadgeClass(idx) {
  if (!showQuizFeedback.value) {
    if (selectedQuizOption.value === idx) return optionColors[idx]
    if (selectedQuizOption.value !== null && selectedQuizOption.value !== idx) return 'bg-slate-200 text-slate-400'
    return optionColors[idx]
  }
  if (currentQuizData.value.options[idx].correct) return 'bg-emerald-500 text-white'
  if (selectedQuizOption.value === idx && !isQuizCorrect.value) return 'bg-red-500 text-white'
  return 'bg-slate-200 text-slate-400'
}

function checkSpelling() {
  if (!currentRoundData.value) return
  const correctIndices = new Set()
  const words = currentRoundData.value.document.en.split(' ')

  for (let i = 0; i < words.length; i++) {
    for (const error of currentRoundData.value.errorSegments) {
      if (words[i].toLowerCase().includes(error.en.toLowerCase().split(' ')[0])) {
        correctIndices.add(i)
      }
    }
  }

  const correctSelections = [...selectedErrors.value].filter(i => correctIndices.has(i)).length
  const totalErrors = correctIndices.size
  const wrongSelections = selectedErrors.value.size - correctSelections

  if (correctSelections === totalErrors && wrongSelections === 0) {
    earnedTV.value += 20
    score.value += 1
    spellingFeedback.value = currentRoundData.value.explanation.en
    isSpellingCorrect.value = true
  } else if (correctSelections > 0) {
    earnedTV.value += 10
    spellingFeedback.value = `Found ${correctSelections}/${totalErrors} errors. ${currentRoundData.value.explanation.en}`
    isSpellingCorrect.value = false
  } else {
    spellingFeedback.value = `No errors found. ${currentRoundData.value.explanation.en}`
    isSpellingCorrect.value = false
  }

  setTimeout(() => {
    spellingFeedback.value = ''
    selectedErrors.value = new Set()
    if (currentRound.value < totalRounds.value - 1) {
      currentRound.value++
    } else {
      showResults.value = true
    }
  }, 3000)
}

function handleClaim() {
  emit('complete', { tv: totalEarnedTV.value, score: score.value })
  handleExit()
}

function handleExit() {
  emit('exit')
}
</script>

<style scoped>
.document-rush { font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif; }
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

.animate-fade-in-up { animation: fadeInUp 0.3s ease-out both; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
</style>
