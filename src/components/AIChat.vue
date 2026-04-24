<template>
  <div class="ai-chat bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[600px]">
    <!-- Header -->
    <div class="p-4 border-b border-slate-100 flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white flex items-center justify-center text-lg">
        🤖
      </div>
      <div>
        <h3 class="font-bold text-slate-900">AI Advisor</h3>
        <p class="text-xs text-slate-500">Preset answers only — AI API not yet configured</p>
      </div>
    </div>

    <!-- Messages -->
    <div class="flex-1 overflow-y-auto p-4 space-y-4" ref="messagesContainer">
      <div v-for="(msg, index) in messages" :key="index" class="flex gap-3" :class="msg.role === 'user' ? 'justify-end' : ''">
        <div v-if="msg.role === 'assistant'" class="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm flex-shrink-0">
          🤖
        </div>
        <div class="max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line"
             :class="msg.role === 'user' 
               ? 'bg-blue-600 text-white rounded-tr-none' 
               : 'bg-slate-100 text-slate-800 rounded-tl-none'">
          {{ msg.content }}
        </div>
        <div v-if="msg.role === 'user'" class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm flex-shrink-0">
          🧑
        </div>
      </div>

      <!-- Typing indicator -->
      <div v-if="isTyping" class="flex gap-3">
        <div class="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm flex-shrink-0">🤖</div>
        <div class="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-slate-500">
          Typing<span class="animate-pulse">...</span>
        </div>
      </div>
    </div>

    <!-- Quick Questions -->
    <div class="px-4 py-2 border-t border-slate-100">
      <p class="text-xs text-slate-500 mb-2">Quick Questions:</p>
      <div class="flex flex-wrap gap-2">
        <button v-for="q in presetQuestions" :key="q.id"
                @click="sendPreset(q)"
                class="px-3 py-1.5 bg-slate-50 hover:bg-violet-50 text-slate-700 hover:text-violet-700 text-xs rounded-full border border-slate-200 hover:border-violet-200 transition-colors">
          {{ q.short }}
        </button>
      </div>
    </div>

    <!-- Input -->
    <div class="p-4 border-t border-slate-100">
      <div class="flex gap-2">
        <input v-model="inputText" @keyup.enter="sendMessage"
               placeholder="Type your question..."
               class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:border-violet-500 focus:outline-none text-sm" />
        <button @click="sendMessage"
                class="px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium transition-colors">
          Send
        </button>
      </div>
      <p class="text-[10px] text-slate-400 mt-2 text-center">
        AI backend not connected. Configure an API key in settings to enable live AI responses.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const messages = ref([
  { role: 'assistant', content: 'Hello! I am your AI Application Advisor. I can answer common questions about postgraduate applications. What would you like to know?' }
])
const inputText = ref('')
const isTyping = ref(false)
const messagesContainer = ref(null)

const presetQuestions = [
  {
    id: 1,
    short: 'UK vs US?',
    question: 'How do I choose between UK and US master\'s programs?',
    answer: 'It depends on your goals: UK programs are typically 1 year, focused, and cost less overall; US programs are 2 years, offer more flexibility, and often include funding or assistantships. Consider your budget, career timeline, and whether you want research experience or internship opportunities (CPT/OPT).'
  },
  {
    id: 2,
    short: 'GPA requirements?',
    question: 'What GPA do I need for top universities?',
    answer: 'For G5 / Top 20 schools, a First Class (82+) or strong 2:1 (75+) is ideal. However, strong soft backgrounds (research, internships, publications) can compensate. US schools often use holistic review, so a lower GPA with outstanding experience can still be competitive.'
  },
  {
    id: 3,
    short: 'Timeline?',
    question: 'When should I start preparing my application?',
    answer: 'Ideally 12–18 months before intake.\n• Year 2: Explore options, maintain GPA, and build relationships with professors.\n• Year 3: Take standardized tests, secure recommenders, and draft documents.\n• Year 4: Finalize submissions, attend interviews, and decide on offers.'
  },
  {
    id: 4,
    short: 'Recommendation letters?',
    question: 'How important are recommendation letters?',
    answer: 'Very important. Admissions committees value detailed, specific endorsements from professors who know your academic work well. Choose recommenders who can speak to your research ability, intellectual curiosity, and specific projects — not just someone with a famous title.'
  },
  {
    id: 5,
    short: 'GRE / IELTS?',
    question: 'Do I need GRE and IELTS for every program?',
    answer: 'Most US programs require GRE (320+ for Top 30), though some have made it optional. UK programs usually do not require GRE. IELTS 7.0 (6.5) is standard for G5; US Top 30 typically expects 7.0+ or TOEFL 100+. Always check each program\'s official requirements.'
  }
]

function sendPreset(q) {
  addMessage('user', q.question)
  simulateReply(q.answer)
}

function sendMessage() {
  const text = inputText.value.trim()
  if (!text) return
  addMessage('user', text)
  inputText.value = ''

  const lower = text.toLowerCase()
  const match = presetQuestions.find(q =>
    lower.includes(q.short.toLowerCase().replace('?', '')) ||
    lower.includes(q.question.toLowerCase().slice(0, 15))
  )

  if (match) {
    simulateReply(match.answer)
  } else {
    simulateReply('I don\'t have a preset answer for that yet. This demo uses fixed responses only — please configure an AI API key in settings to enable live, intelligent replies.')
  }
}

function addMessage(role, content) {
  messages.value.push({ role, content })
  scrollToBottom()
}

function simulateReply(text) {
  isTyping.value = true
  scrollToBottom()
  setTimeout(() => {
    isTyping.value = false
    addMessage('assistant', text)
  }, 800 + Math.random() * 600)
}

function scrollToBottom() {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}
</script>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}
.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}
</style>
