<template>
  <div class="grid lg:grid-cols-2 gap-6">
    <!-- Submit Form -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h3 class="text-lg font-bold text-slate-900 mb-1">Ask a Question</h3>
      <p class="text-sm text-slate-500 mb-5">Submit your application questions. An advisor will respond in the Q&A section.</p>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
          <input v-model="form.name" type="text" placeholder="Enter your name"
                 class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#7FA1ED] focus:outline-none text-sm" />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">Category</label>
          <select v-model="form.category"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#7FA1ED] focus:outline-none text-sm bg-white">
            <option value="school-selection">School Selection</option>
            <option value="document-prep">Document Preparation</option>
            <option value="essay-writing">Essay / PS Writing</option>
            <option value="interview">Interview Preparation</option>
            <option value="test-prep">GRE / IELTS / Language Tests</option>
            <option value="career">Career & Internship</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">Your Question</label>
          <textarea v-model="form.question" rows="4" placeholder="Describe your question in detail..."
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#7FA1ED] focus:outline-none text-sm resize-none"></textarea>
        </div>

        <button type="submit"
                class="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-colors">
          Submit Question
        </button>
      </form>

      <div class="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl">
        <p class="text-xs text-amber-700 flex items-center gap-2">
          <span>💡</span>
          <span>Advisor responses are simulated in this demo. Configure backend integration for live replies.</span>
        </p>
      </div>
    </div>

    <!-- Question History -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div class="flex items-center justify-between mb-5">
        <h3 class="text-lg font-bold text-slate-900">Recent Questions</h3>
        <span class="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{{ questions.length }} total</span>
      </div>

      <div v-if="questions.length === 0" class="text-center py-12">
        <div class="text-4xl mb-3">📝</div>
        <p class="text-sm text-slate-500">No questions yet. Be the first to ask!</p>
      </div>

      <div v-else class="space-y-3 max-h-[500px] overflow-y-auto pr-1">
        <div v-for="(q, index) in questions" :key="index"
             class="p-4 rounded-xl border transition-all"
             :class="q.status === 'answered' ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-200 bg-slate-50/50'">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                    :class="categoryColor(q.category)">
                {{ categoryLabel(q.category) }}
              </span>
              <span class="text-xs text-slate-400">{{ q.date }}</span>
            </div>
            <span class="text-xs font-medium px-2 py-0.5 rounded-full"
                  :class="q.status === 'answered' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'">
              {{ q.status === 'answered' ? 'Answered' : 'Pending' }}
            </span>
          </div>
          <p class="text-sm text-slate-800 font-medium mb-1">{{ q.name || 'Anonymous' }}</p>
          <p class="text-sm text-slate-600">{{ q.question }}</p>
          <div v-if="q.answer" class="mt-3 p-3 bg-white rounded-lg border border-slate-100">
            <p class="text-xs text-slate-500 mb-1">Advisor Response:</p>
            <p class="text-sm text-slate-700">{{ q.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  userName: {
    type: String,
    default: ''
  }
})

const STORAGE_KEY = 'demo_questions'

const form = ref({
  name: props.userName || '',
  category: 'school-selection',
  question: ''
})

watch(() => props.userName, (newName) => {
  if (newName && !form.value.name) {
    form.value.name = newName
  }
})

const questions = ref([])

const sampleQuestions = [
  {
    name: 'Jordan Liu',
    category: 'school-selection',
    question: 'Should I apply to US or UK for my CS master\'s? I have a 78 GPA and one internship.',
    date: '2025-10-12',
    status: 'answered',
    answer: 'With a 78 GPA, you are in the strong 2:1 range. For CS, US programs offer more funding and internship opportunities (CPT/OPT), while UK programs are shorter and more focused. Given your internship, I recommend applying to both: target US Top 30-50 and UK Russell Group universities.'
  },
  {
    name: 'Emily Zhang',
    category: 'essay-writing',
    question: 'How do I explain a low GPA in my first year in my personal statement?',
    date: '2025-10-14',
    status: 'answered',
    answer: 'Focus on your upward trend. Mention briefly that you adapted to university-level study, then pivot to your later achievements. Committees care more about your trajectory and recent performance than one bad semester.'
  },
  {
    name: 'David Wu',
    category: 'test-prep',
    question: 'Is GRE still required for CMU ECE in 2026 intake?',
    date: '2025-10-15',
    status: 'pending',
    answer: ''
  }
]

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    questions.value = JSON.parse(saved)
  } else {
    questions.value = [...sampleQuestions]
    saveQuestions()
  }
})

function handleSubmit() {
  if (!form.value.question.trim()) return

  const newQ = {
    name: form.value.name || 'Anonymous',
    category: form.value.category,
    question: form.value.question.trim(),
    date: new Date().toISOString().split('T')[0],
    status: 'pending',
    answer: ''
  }

  questions.value.unshift(newQ)
  saveQuestions()
  form.value.question = ''
}

function saveQuestions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(questions.value))
}

function categoryLabel(cat) {
  const map = {
    'school-selection': 'School Selection',
    'document-prep': 'Documents',
    'essay-writing': 'Essay Writing',
    'interview': 'Interview',
    'test-prep': 'Test Prep',
    'career': 'Career',
    'other': 'Other'
  }
  return map[cat] || 'Other'
}

function categoryColor(cat) {
  const map = {
    'school-selection': 'bg-blue-100 text-blue-700',
    'document-prep': 'bg-slate-100 text-slate-700',
    'essay-writing': 'bg-violet-100 text-violet-700',
    'interview': 'bg-amber-100 text-amber-700',
    'test-prep': 'bg-red-100 text-red-700',
    'career': 'bg-emerald-100 text-emerald-700',
    'other': 'bg-gray-100 text-gray-700'
  }
  return map[cat] || 'bg-gray-100 text-gray-700'
}
</script>

<style scoped>
.max-h-\[500px\]::-webkit-scrollbar {
  width: 6px;
}
.max-h-\[500px\]::-webkit-scrollbar-track {
  background: transparent;
}
.max-h-\[500px\]::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}
</style>
