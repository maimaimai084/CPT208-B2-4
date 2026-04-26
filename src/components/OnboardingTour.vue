<template>
  <Teleport to="body">
    <Transition name="onboard-fade">
      <div v-if="isOpen" class="fixed inset-0 z-[60]">
        <!-- 遮罩层 -->
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"></div>

        <!-- 高亮框 -->
        <div
          v-if="highlightRect"
          class="absolute transition-all duration-500 ease-out pointer-events-none"
          :style="highlightBoxStyle"
        >
          <div class="w-full h-full rounded-[1.5rem] ring-4 ring-white shadow-[0_0_40px_rgba(232,142,175,0.6)] animate-pulse-slow"></div>
        </div>

        <!-- 提示卡片 -->
        <div
          class="absolute transition-all duration-500 ease-out pointer-events-auto"
          :style="cardPositionStyle"
        >
          <div class="bg-white rounded-2xl shadow-2xl p-6 w-[320px] border-2 border-[#E88EAF]/20">
            <!-- 步骤指示器 -->
            <div class="flex gap-2 mb-5 justify-center">
              <div
                v-for="i in totalSteps"
                :key="i"
                class="h-1.5 rounded-full transition-all duration-300"
                :class="i <= currentStep ? 'w-6 bg-[#E88EAF]' : 'w-1.5 bg-slate-200'"
              ></div>
            </div>

            <!-- 内容 -->
            <div class="text-center">
              <div class="text-5xl mb-3 animate-bounce-slow">{{ currentStepData.icon }}</div>
              <h3 class="font-black text-lg text-slate-800 mb-2 tracking-tight">{{ currentStepData.title }}</h3>
              <p class="text-sm text-slate-500 mb-1 leading-relaxed">{{ currentStepData.desc }}</p>
              <p v-if="currentStepData.hint" class="text-xs text-[#E88EAF] font-bold mt-2">{{ currentStepData.hint }}</p>
            </div>

            <!-- 按钮 -->
            <div class="flex gap-3 mt-6">
              <button
                v-if="currentStep > 1"
                @click="prev"
                class="flex-1 py-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
              >
                Back
              </button>
              <button
                v-if="currentStep < totalSteps"
                @click="next"
                class="flex-1 py-2.5 bg-[#E88EAF] text-white rounded-xl font-bold text-sm hover:bg-[#B86281] transition-colors shadow-[0_4px_0_#B86281] active:translate-y-[4px] active:shadow-none"
              >
                Next
              </button>
              <button
                v-else
                @click="finish"
                class="flex-1 py-2.5 bg-[#E88EAF] text-white rounded-xl font-bold text-sm hover:bg-[#B86281] transition-colors shadow-[0_4px_0_#B86281] active:translate-y-[4px] active:shadow-none"
              >
                🚀 Start Playing!
              </button>
            </div>
            <button
              @click="skip"
              class="w-full mt-3 text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
            >
              Skip Guide
            </button>
          </div>

          <!-- 箭头 -->
          <div
            v-if="highlightRect && arrowDirection"
            class="absolute w-4 h-4 bg-white rotate-45 border-2 border-[#E88EAF]/20"
            :class="arrowClass"
          ></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, default: false }
})

const emit = defineEmits(['close', 'complete'])

const currentStep = ref(1)
const highlightRect = ref(null)
const windowSize = ref({ width: window.innerWidth, height: window.innerHeight })

const totalSteps = 6

const steps = [
  {
    icon: '🎓',
    title: 'Welcome to MasterApply Quest!',
    desc: 'This game guides you through the entire graduate school application journey.',
    hint: 'Tap Next to learn the basics →',
    target: null,
    cardPosition: 'center'
  },
  {
    icon: '🗺️',
    title: 'Your Knowledge Tree',
    desc: 'The Journey tab is your main map. Click it to see your progress and start challenges.',
    hint: 'Try clicking the Journey tab after this guide!',
    target: '[data-tour="journey"]',
    cardPosition: 'bottom'
  },
  {
    icon: '🌳',
    title: 'Grow Your Tree',
    desc: 'Click glowing nodes on the tree to start quiz challenges and unlock new branches.',
    hint: 'Complete all 5 stages: School → Docs → Essay → Apply → Interview',
    target: '[data-tour="tree-node"]',
    cardPosition: 'bottom'
  },
  {
    icon: '👤',
    title: 'Your Profile',
    desc: 'Check your stats, daily quests, achievements, and trophies here.',
    hint: 'Complete daily quests for bonus rewards!',
    target: '[data-tour="profile"]',
    cardPosition: 'bottom'
  },
  {
    icon: '🎒',
    title: 'Gear Shop',
    desc: 'Spend Learning Value to upgrade IELTS, GPA, Internship & Research.',
    hint: 'Better gear = higher rewards in simulations!',
    target: '[data-tour="gear"]',
    cardPosition: 'bottom'
  },
  {
    icon: '🚀',
    title: "You're All Set!",
    desc: 'Start your first challenge — School Selection — and grow your knowledge tree!',
    hint: 'Good luck with your applications!',
    target: null,
    cardPosition: 'center'
  }
]

const currentStepData = computed(() => steps[currentStep.value - 1])

function updateWindowSize() {
  windowSize.value = { width: window.innerWidth, height: window.innerHeight }
  updateHighlight()
}

function updateHighlight() {
  const target = currentStepData.value.target
  if (!target) {
    highlightRect.value = null
    return
  }
  nextTick(() => {
    const el = document.querySelector(target)
    if (el) {
      const rect = el.getBoundingClientRect()
      highlightRect.value = {
        left: rect.left - 8,
        top: rect.top - 8,
        width: rect.width + 16,
        height: rect.height + 16
      }
    } else {
      highlightRect.value = null
    }
  })
}

const highlightBoxStyle = computed(() => {
  if (!highlightRect.value) return {}
  return {
    left: `${highlightRect.value.left}px`,
    top: `${highlightRect.value.top}px`,
    width: `${highlightRect.value.width}px`,
    height: `${highlightRect.value.height}px`
  }
})

const cardPositionStyle = computed(() => {
  const pos = currentStepData.value.cardPosition
  const w = windowSize.value.width
  const h = windowSize.value.height

  if (pos === 'center' || !highlightRect.value) {
    return {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  // Position card below the highlight with some padding
  const cardWidth = 320
  const padding = 20
  let left = highlightRect.value.left + highlightRect.value.width / 2 - cardWidth / 2
  let top = highlightRect.value.top + highlightRect.value.height + padding

  // Keep within viewport
  left = Math.max(16, Math.min(left, w - cardWidth - 16))
  if (top + 280 > h) {
    // If not enough space below, put above
    top = highlightRect.value.top - 280 - padding
  }

  return {
    left: `${left}px`,
    top: `${top}px`
  }
})

const arrowDirection = computed(() => {
  if (!highlightRect.value || currentStepData.value.cardPosition === 'center') return null
  const h = windowSize.value.height
  const cardTop = parseFloat(cardPositionStyle.value.top)
  return cardTop < highlightRect.value.top ? 'down' : 'up'
})

const arrowClass = computed(() => {
  if (arrowDirection.value === 'up') {
    return '-top-2 left-1/2 -translate-x-1/2 border-b-0 border-r-0'
  }
  return '-bottom-2 left-1/2 -translate-x-1/2 border-t-0 border-l-0'
})

function next() {
  if (currentStep.value < totalSteps) {
    currentStep.value++
    updateHighlight()
  }
}

function prev() {
  if (currentStep.value > 1) {
    currentStep.value--
    updateHighlight()
  }
}

function skip() {
  emit('close')
}

function finish() {
  emit('complete')
}

watch(() => props.isOpen, (val) => {
  if (val) {
    currentStep.value = 1
    nextTick(updateHighlight)
  }
})

onMounted(() => {
  window.addEventListener('resize', updateWindowSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize)
})
</script>

<style scoped>
.onboard-fade-enter-active,
.onboard-fade-leave-active {
  transition: opacity 0.3s ease;
}
.onboard-fade-enter-from,
.onboard-fade-leave-to {
  opacity: 0;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}
</style>
