<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white p-4">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <button @click="emit('close')" class="p-2 hover:bg-white/10 rounded-lg transition-colors">
        ← Back
      </button>
      <span class="font-semibold text-lg">{{ levelTitle }}</span>
      <div class="w-8"></div>
    </div>

    <!-- Progress Bar -->
    <div class="w-full bg-white/20 h-2 rounded-full mb-8">
      <div 
        class="bg-green-400 h-full rounded-full transition-all duration-500" 
        :style="{ width: progressPercent + '%' }"
      ></div>
    </div>

    <!-- Question Content -->
    <div class="max-w-2xl mx-auto" v-if="currentQuestion">
      <!-- Character Dialog -->
      <div class="flex items-center gap-3 mb-6">
        <div class="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-3xl shadow-lg">
          {{ currentQuestion.characterAvatar || '👨‍🏫' }}
        </div>
        <div class="bg-white/20 backdrop-blur rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
          <p class="text-sm opacity-75 mb-1">{{ currentQuestion.character || 'Advisor' }}</p>
          <p class="text-lg leading-relaxed">{{ currentQuestion.question }}</p>
        </div>
      </div>

      <!-- Options -->
      <div class="space-y-3 mb-6">
        <button 
          v-for="(option, index) in currentQuestion.options" 
          :key="index"
          @click="selectOption(option, index)"
          :disabled="hasAnswered"
          class="w-full text-left p-4 rounded-xl border-2 transition-all relative overflow-hidden"
          :class="getOptionClass(index)"
        >
          <div class="flex items-center justify-between relative z-10">
            <span class="flex-1 pr-4">{{ option.text }}</span>
            <span class="text-xs opacity-75 whitespace-nowrap">
              +{{ option.learning }} LV / +{{ option.task }} TV
            </span>
          </div>
          
          <!-- Feedback overlay -->
          <div v-if="hasAnswered && selectedIndex === index" class="mt-3 pt-3 border-t border-white/20 text-sm opacity-90 relative z-10">
            {{ option.hint || 'Selected' }}
          </div>
        </button>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex gap-3">
        <button 
          v-if="hasAnswered && !isLastQuestion" 
          @click="nextQuestion"
          class="flex-1 py-3 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors shadow-lg"
        >
          Next →
        </button>
        
        <button 
          v-if="hasAnswered && isLastQuestion" 
          @click="submitQuiz"
          class="flex-1 py-3 bg-green-400 text-blue-900 font-bold rounded-xl hover:bg-green-300 transition-colors shadow-lg"
        >
          Complete ✓
        </button>
      </div>

      <!-- Progress Indicator -->
      <div class="mt-6 text-center text-sm opacity-60">
        Question {{ currentQuestionIndex + 1 }} / {{ questions.length }}
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="flex items-center justify-center h-64">
      <div class="text-xl opacity-60">Loading Questions...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getQuestionsByLevel } from '@/data/questions'

const props = defineProps({
  level: {
    type: Object,
    required: true
  },
  userType: {
    type: String,
    default: 'confused' // 'confused' | 'sprint'
  }
})

const emit = defineEmits(['close', 'complete'])

// State
const questions = ref([])
const currentQuestionIndex = ref(0)
const selectedIndex = ref(null)
const hasAnswered = ref(false)
const totalLearning = ref(0)
const totalTask = ref(0)

// Computed
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value] || null)
const isLastQuestion = computed(() => currentQuestionIndex.value === questions.value.length - 1)
const progressPercent = computed(() => ((currentQuestionIndex.value + (hasAnswered.value ? 1 : 0)) / questions.value.length) * 100)
const levelTitle = computed(() => props.level?.title || 'Stage Challenge')

// Methods
onMounted(() => {
  // Load questions based on level ID and user type
  if (props.level?.id) {
    questions.value = getQuestionsByLevel(props.level.id, props.userType)
  }
})

function selectOption(option, index) {
  if (hasAnswered.value) return
  
  selectedIndex.value = index
  hasAnswered.value = true
  
  // Accumulate values
  totalLearning.value += option.learning
  totalTask.value += option.task
}

function getOptionClass(index) {
  if (!hasAnswered.value) {
    return 'border-white/20 hover:border-white/40 hover:bg-white/10'
  }
  
  if (index === selectedIndex.value) {
    // Display different color feedback based on reward value
    const option = currentQuestion.value.options[index]
    if (option.learning >= 15 || option.task >= 15) {
      return 'border-green-400 bg-green-400/20' // Excellent answer
    } else if (option.learning >= 10) {
      return 'border-yellow-400 bg-yellow-400/20' // Good answer
    } else {
      return 'border-orange-400 bg-orange-400/20' // Average answer
    }
  }
  
  return 'border-white/10 opacity-50'
}

function nextQuestion() {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    selectedIndex.value = null
    hasAnswered.value = false
  }
}

function submitQuiz() {
  // Return accumulated value rewards
  emit('complete', {
    learning: totalLearning.value,
    task: totalTask.value,
    answers: questions.value.length
  })
}
</script>

<style scoped>
/* Smooth transitions */
button {
  transition: all 0.3s ease;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
