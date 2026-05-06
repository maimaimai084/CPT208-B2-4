<template>
  <div class="timeline-puzzle">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <button @click="$emit('exit')" class="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-bold text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          {{ isZh ? '退出' : 'Exit' }}
        </button>
        <div>
          <h2 class="text-2xl font-black text-slate-700 tracking-tight">
            {{ isZh ? '时间线拼图' : 'Timeline Puzzle' }}
          </h2>
          <p class="text-sm text-slate-500 font-medium mt-1">
            {{ isZh ? '将申请步骤拖拽到正确的时间顺序' : 'Drag application steps into the correct order' }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="text-2xl" v-for="i in 3" :key="i">
          {{ i <= hearts ? '❤️' : '🤍' }}
        </div>
      </div>
    </div>

    <div v-if="!isStarted" class="text-center py-8">
      <div class="text-6xl mb-4">📅</div>
      <p class="text-slate-600 mb-6">
        {{ isZh ? '将打乱的步骤按正确的时间顺序排列。答错会失去心！' : 'Arrange scrambled steps in the correct timeline. Wrong answers lose hearts!' }}
      </p>
      <button @click="startGame" class="px-8 py-3 bg-[#6366F1] text-white rounded-xl font-bold shadow-[0_4px_0_#4F46E5] active:translate-y-[4px] active:shadow-none transition-all">
        {{ isZh ? '开始排序 →' : 'Start Sorting →' }}
      </button>
    </div>

    <div v-else-if="!isFinished" class="space-y-4">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-bold text-slate-600">
          {{ TIMELINE_LEVELS[selectedLevelIndex].title[lang] }}
        </span>
        <span class="px-3 py-1 bg-[#6366F1] text-white text-xs font-bold rounded-lg">
          +{{ score }} TV
        </span>
      </div>

      <div class="space-y-2">
        <div v-for="(item, idx) in currentOrder" :key="item.id"
             class="flex items-center gap-3 bg-white rounded-xl p-3 border-2 border-slate-200 transition-all"
             :class="getItemClass(idx)">
          <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
               :class="getNumberClass(idx)">
            {{ idx + 1 }}
          </div>
          <span class="flex-1 text-sm font-medium text-slate-700">{{ item.label[lang] }}</span>
          <div class="flex flex-col gap-1">
            <button @click="moveUp(idx)" :disabled="idx === 0"
                    class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs flex items-center justify-center disabled:opacity-30">
              ▲
            </button>
            <button @click="moveDown(idx)" :disabled="idx === currentOrder.length - 1"
                    class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs flex items-center justify-center disabled:opacity-30">
              ▼
            </button>
          </div>
        </div>
      </div>

      <button @click="checkOrder"
              class="w-full py-3 bg-[#6366F1] text-white rounded-xl font-bold text-sm hover:bg-[#5558E6] transition-colors active:scale-95 shadow-[0_4px_0_#4F46E5]">
        {{ isZh ? '检查顺序 ✓' : 'Check Order ✓' }}
      </button>

      <div v-if="feedback" class="rounded-xl p-4 border animate-fade-in-up"
           :class="feedback.allCorrect ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'">
        <p class="text-sm font-medium" :class="feedback.allCorrect ? 'text-green-700' : 'text-orange-700'">
          {{ feedback.message }}
        </p>
        <div v-if="!feedback.allCorrect" class="mt-2 space-y-1">
          <p v-for="(hint, idx) in feedback.hints" :key="idx" class="text-xs text-slate-500">
            {{ hint }}
          </p>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-8 space-y-4">
      <div class="text-6xl mb-4">{{ hearts > 0 ? '🎉' : '💔' }}</div>
      <h3 class="text-2xl font-black text-slate-700">
        {{ hearts > 0 ? (isZh ? '排序完成！' : 'Sorting Complete!') : (isZh ? '挑战失败' : 'Challenge Failed') }}
      </h3>
      <div class="bg-slate-50 rounded-xl p-5 inline-block text-left w-full max-w-xs">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm text-slate-600">{{ isZh ? '剩余生命' : 'Hearts Left' }}:</span>
          <span class="text-2xl">{{ '❤️'.repeat(hearts) }}{{ '🤍'.repeat(3 - hearts) }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm font-bold text-slate-800">{{ isZh ? '总分' : 'Total Score' }}:</span>
          <span class="text-2xl font-black text-[#6366F1]">+{{ score }} TV</span>
        </div>
      </div>
      <button @click="$emit('complete', { tv: score })"
              class="px-8 py-3 bg-[#6366F1] text-white rounded-xl font-bold shadow-[0_4px_0_#4F46E5] active:translate-y-[4px] active:shadow-none transition-all">
        {{ isZh ? '领取奖励并返回' : 'Claim & Return' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { TIMELINE_LEVELS } from '@/data/timelinePuzzle'

const props = defineProps({ isZh: { type: Boolean, default: false } })
const emit = defineEmits(['complete', 'exit'])
const lang = computed(() => props.isZh ? 'zh' : 'en')

const isStarted = ref(false)
const isFinished = ref(false)
const selectedLevelIndex = ref(0)
const hearts = ref(3)
const score = ref(0)
const currentOrder = ref([])
const feedback = ref(null)
const wrongChecks = ref(0)
const checkedCorrectly = ref(new Set())

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function startGame() {
  isStarted.value = true
  isFinished.value = false
  hearts.value = 3
  score.value = 0
  feedback.value = null
  wrongChecks.value = 0
  checkedCorrectly.value = new Set()
  const level = TIMELINE_LEVELS[selectedLevelIndex.value]
  currentOrder.value = shuffleArray(level.steps)
}

function moveUp(idx) {
  if (idx <= 0) return
  const arr = [...currentOrder.value];
  [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]]
  currentOrder.value = arr
}

function moveDown(idx) {
  if (idx >= currentOrder.value.length - 1) return
  const arr = [...currentOrder.value];
  [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]]
  currentOrder.value = arr
}

function getItemClass(idx) {
  if (checkedCorrectly.value.has(idx)) return 'border-green-400 bg-green-50'
  if (feedback.value && !feedback.value.allCorrect && currentOrder.value[idx].order !== idx + 1) {
    return 'border-red-300 bg-red-50'
  }
  return 'hover:border-indigo-300'
}

function getNumberClass(idx) {
  if (checkedCorrectly.value.has(idx)) return 'bg-green-500 text-white'
  return 'bg-slate-200 text-slate-600'
}

function checkOrder() {
  const correctOrder = [...TIMELINE_LEVELS[selectedLevelIndex.value].steps].sort((a, b) => a.order - b.order)
  const allCorrect = currentOrder.value.every((item, idx) => item.id === correctOrder[idx].id)

  if (allCorrect) {
    score.value += 20
    feedback.value = {
      allCorrect: true,
      message: props.isZh ? '🎉 顺序完全正确！' : '🎉 Perfect order!'
    }
    const newSet = new Set()
    currentOrder.value.forEach((_, idx) => newSet.add(idx))
    checkedCorrectly.value = newSet
    setTimeout(() => { isFinished.value = true }, 1200)
  } else {
    hearts.value--
    const hints = []
    currentOrder.value.forEach((item, idx) => {
      if (item.order === idx + 1) {
        checkedCorrectly.value.add(idx)
      } else {
        hints.push(props.isZh
          ? `第${idx + 1}位应为步骤${item.order}`
          : `Position ${idx + 1} should be step ${item.order}`)
      }
    })
    feedback.value = {
      allCorrect: false,
      message: props.isZh ? '❌ 顺序有误，请调整！' : '❌ Wrong order, adjust!',
      hints: hints.slice(0, 3)
    }

    if (hearts.value <= 0) {
      setTimeout(() => { isFinished.value = true }, 1500)
    }
  }
}
</script>

<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.3s ease-out both; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
