<template>
  <div class="ai-chat bg-white rounded-[2rem] border-2 border-[#E2E8F0] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col h-[600px] overflow-hidden">
    
    <div class="p-5 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
      <div class="w-12 h-12 rounded-2xl bg-[#7FA1ED] shadow-[0_3px_0_#5B78BA] text-white flex items-center justify-center text-xl">
        🤖
      </div>
      <div>
        <h3 class="font-black text-slate-700 text-lg tracking-tight">AI Advisor</h3>
        <p class="text-xs font-medium text-slate-400">Preset answers only — AI API not yet configured</p>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-5 space-y-5 bg-[#F8FAFC]/50 custom-scrollbar" ref="messagesContainer">
      <div v-for="(msg, index) in messages" :key="index" class="flex gap-3" :class="msg.role === 'user' ? 'justify-end' : ''">
        
        <div v-if="msg.role === 'assistant'" class="w-8 h-8 rounded-full bg-white border border-[#E2E8F0] text-[#7FA1ED] shadow-sm flex items-center justify-center text-sm flex-shrink-0">
          🤖
        </div>
        
        <div class="max-w-[80%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed whitespace-pre-line shadow-sm"
             :class="msg.role === 'user' 
               ? 'bg-[#7FA1ED] text-white rounded-tr-none' 
               : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'">
          {{ msg.content }}
        </div>

        <div v-if="msg.role === 'user'" class="w-8 h-8 rounded-full bg-[#EBF0FA] text-[#5B78BA] flex items-center justify-center text-sm flex-shrink-0">
          🧑
        </div>
      </div>

      <div v-if="isTyping" class="flex gap-3">
        <div class="w-8 h-8 rounded-full bg-white border border-[#E2E8F0] text-[#7FA1ED] shadow-sm flex items-center justify-center text-sm flex-shrink-0">🤖</div>
        <div class="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tl-none px-5 py-3 text-sm text-[#7FA1ED] font-medium">
          Typing<span class="animate-pulse">...</span>
        </div>
      </div>
    </div>

    <div class="px-5 py-3 border-t border-slate-100 bg-white">
      <p class="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Quick Questions</p>
      <div class="flex flex-wrap gap-2">
        <button v-for="q in presetQuestions" :key="q.id"
                @click="sendPreset(q)"
                class="px-4 py-1.5 bg-slate-50 hover:bg-[#EBF0FA] text-slate-500 hover:text-[#5B78BA] text-xs font-semibold rounded-full border border-slate-200 hover:border-[#7FA1ED] transition-colors">
          {{ q.short }}
        </button>
      </div>
    </div>

    <div class="p-5 border-t border-slate-100 bg-slate-50/50">
      <div class="flex gap-3">
        <input v-model="inputText" @keyup.enter="sendMessage"
               placeholder="Type your question..."
               class="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#7FA1ED] focus:ring-4 focus:ring-[#7FA1ED]/10 focus:outline-none text-sm font-medium text-slate-700 transition-all bg-white" />
        <button @click="sendMessage"
                class="px-6 py-3 bg-[#7FA1ED] shadow-[0_4px_0_#5B78BA] text-white rounded-xl font-bold hover:brightness-105 active:translate-y-[4px] active:shadow-none transition-all">
          Send
        </button>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

// ⚠️ 在这里填入你在 DeepSeek 平台创建的 API Key (通常以 sk- 开头)
const API_KEY = 'sk-65ec8b3aec5f4bf48ba50b7b7f06e629' 

const messages = ref([
  { role: 'assistant', content: 'Hello! I am your AI Application Advisor. I can answer common questions about postgraduate applications. What would you like to know?' }
])
const inputText = ref('')
const isTyping = ref(false)
const messagesContainer = ref(null)

const presetQuestions = [
  { id: 1, short: 'UK vs US?', question: 'How do I choose between UK and US master\'s programs?' },
  { id: 2, short: 'GPA requirements?', question: 'What GPA do I need for top universities?' },
  { id: 3, short: 'Timeline?', question: 'When should I start preparing my application?' },
  { id: 4, short: 'Recommendation letters?', question: 'How important are recommendation letters?' },
  { id: 5, short: 'GRE / IELTS?', question: 'Do I need GRE and IELTS for every program?' }
]

function sendPreset(q) {
  inputText.value = q.question
  sendMessage()
}

async function sendMessage() {
  const text = inputText.value.trim()
  if (!text) return

  addMessage('user', text)
  inputText.value = ''
  isTyping.value = true
  scrollToBottom()

  try {
    // 构建历史消息数组
    const apiHistory = messages.value.map(msg => ({
      role: msg.role,
      content: msg.content
    }))

    // 发送请求到 DeepSeek 接口
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}` 
      },
      body: JSON.stringify({
        model: 'deepseek-chat', // DeepSeek 标准对话模型 V3
        messages: apiHistory,
        stream: false 
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    // 解析返回的文本并上屏
    const aiReply = data.choices[0].message.content
    
    isTyping.value = false
    addMessage('assistant', aiReply)

  } catch (error) {
    console.error("API Request Failed:", error)
    isTyping.value = false
    addMessage('assistant', 'Sorry, I encountered an error connecting to the DeepSeek AI backend. Please check your network or API key.')
  }
}

function addMessage(role, content) {
  messages.value.push({ role, content })
  scrollToBottom()
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
/* 替换为柔雾蓝风格的滚动条 */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #E2E8F0;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #7FA1ED;
}
</style>