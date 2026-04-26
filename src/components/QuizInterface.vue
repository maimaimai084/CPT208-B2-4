<template>
  <div class="fixed inset-0 z-50 bg-[#F8F9FB] text-slate-900 flex flex-col font-sans overflow-hidden"
       :class="{ 'bg-blue-50/50': isShaking }"
       style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;">
    
    <header class="flex items-center justify-between p-4 md:p-5 w-full max-w-4xl mx-auto bg-white rounded-b-2xl shadow-sm border-b border-slate-100">
      <button @click="$emit('close')" class="flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-xl transition-colors text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        {{ isZh ? '退出' : 'Exit' }}
      </button>
      
      <div class="flex items-center gap-3">
        <button @click="toggleLanguage" class="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          {{ isZh ? 'EN' : '中' }}
        </button>
      </div>

      <div class="text-lg md:text-xl font-bold tracking-tight text-slate-800">
        <span class="text-[#4F8CFF]">{{ isZh ? '探索' : 'Discovery' }}</span> - {{ isZh ? '关卡' : 'Level' }} {{ String(levelId).replace('level-', '') }}
      </div>
    </header>

    <div v-if="questions.length > 0" class="flex-1 w-full max-w-4xl mx-auto flex flex-col px-4 md:px-6 pb-8" :class="{ 'animate-soft-bump': isShaking }">
      
      <div class="flex items-center justify-between mt-6 mb-4">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg">{{ isZh ? '检查点' : 'Checkpoint' }} {{ currentQuestionIndex + 1 }} / {{ questions.length }}</span>
        </div>
        <div class="flex gap-1.5">
          <div v-for="i in questions.length" :key="i" class="w-2 h-2 rounded-full" :class="i <= currentQuestionIndex + 1 ? 'bg-[#FF9F43]' : 'bg-slate-300'"></div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-card p-5 md:p-6 mb-6 hover:shadow-cardHover transition-shadow relative">
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#FF9F43] font-bold text-sm shrink-0">
            {{ currentQuestion.characterAvatar || '👨‍🏫' }}
          </div>
          <p class="text-base md:text-lg leading-relaxed text-slate-700">
            {{ getQuestionText(currentQuestion) }}
          </p>
        </div>
      </div>

      <div class="space-y-3 mb-6">
        <div v-for="(opt, index) in currentQuestion.options" :key="index"
             class="option-btn w-full bg-white rounded-xl p-4 shadow-soft border-2 border-transparent hover:border-[#4F8CFF] hover:shadow-card text-left flex items-center gap-4 group transition-all cursor-pointer"
             :class="{ 'opacity-40 grayscale': selectedIndex !== null && selectedIndex !== index }"
             @click="handleSelect(opt, index)">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors"
               :class="getOptionColorClass(index, selectedIndex === index)">
            {{ getOptionLabel(index) }}
          </div>
          <div class="flex-1">
            <div class="text-sm font-medium text-slate-800">{{ getOptionText(opt) }}</div>
          </div>
          <div class="w-2 h-2 rounded-full" :class="getOptionDotClass(index)"></div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 md:gap-6 mt-auto">
        <div v-for="(opt, index) in currentQuestion.options" :key="index"
             class="flip-card group"
             :class="{ 'z-50': selectedIndex === index, 'z-10': selectedIndex !== index }">
          
          <div class="flip-card-inner w-full aspect-[3/4] max-h-[200px] mx-auto"
               :class="{ 'flipped': selectedIndex === index }">
            
            <div class="flip-card-front rounded-2xl flex flex-col items-center justify-center transition-transform group-hover:-translate-y-2 shadow-lg cursor-pointer bg-white border border-slate-200"
                 :class="{ 'opacity-30 grayscale': selectedIndex !== null && selectedIndex !== index }"
                 @click="handleSelect(opt, index)">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-2" :class="getOptionColorClass(index, false)">
                <svg v-if="index === 0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 22 2 22"/></svg>
                <svg v-if="index === 1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                <svg v-if="index === 2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <span class="text-xs font-medium text-slate-500">{{ getOptionLabel(index) }}</span>
            </div>

            <div v-if="selectedIndex === index" 
                 class="flip-card-back rounded-2xl flex flex-col p-4 shadow-xl bg-gradient-to-br from-[#E8F0FF] to-[#FFF5F0] border border-slate-200">
              
              <div class="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-wider">{{ isZh ? '路径分析' : 'Path Analysis' }}</div>
              <h4 class="text-sm font-bold text-slate-800 uppercase mb-2 border-b border-slate-200 pb-1">
                {{ isZh ? '导师笔记' : "Mentor's Note" }}
              </h4>
              
              <p class="text-xs md:text-sm text-slate-600 flex-1 mt-2 leading-relaxed overflow-y-auto custom-scrollbar">
                {{ getOptionHint(opt) }}
              </p>

              <div class="flex gap-2 mt-3">
                <span class="bg-[#4F8CFF] text-white px-2 py-1 text-[10px] font-bold rounded-md">+{{ opt.learning || 0 }} LV</span>
                <span class="bg-[#FF9F43] text-white px-2 py-1 text-[10px] font-bold rounded-md">+{{ opt.task || 0 }} TV</span>
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
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getQuestionsByLevel } from '@/data/questions'

const props = defineProps({
  level: { type: [Object, String], required: true },
  userType: { type: String, default: 'confused' }
})

const emit = defineEmits(['close', 'complete'])

const questions = ref([])
const currentQuestionIndex = ref(0)
const selectedIndex = ref(null)
const isShaking = ref(false)
const isZh = ref(false)
const sessionResults = { correctCount: 0, learning: 0, task: 0 }

const levelId = computed(() => (typeof props.level === 'object' ? props.level.id : props.level))
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value] || null)

const optionColors = [
  'bg-red-50 text-red-500 group-hover:bg-red-100',
  'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100', 
  'bg-amber-50 text-amber-500 group-hover:bg-amber-100'
]

const optionDotColors = ['bg-red-400', 'bg-cyan-400', 'bg-amber-400']

const zhTranslations = {
  'q1-1': {
    question: '你是一名大二学生，对研究生申请方向感到迷茫。面对英国、美国、香港等多个选项，你首先应该做什么？',
    options: [
      { text: '先确定想要申请的专业，再考虑国家', hint: '正确！迷茫的学生应首先明确专业方向，这是选校的基础。' },
      { text: '只看QS排名，申请排名最高的学校', hint: '不推荐。只看排名可能会忽略专业匹配度和个人兴趣。' },
      { text: '跟风申请，跟同学申请同样的地方', hint: '不推荐。研究生申请是基于个人情况的个性化选择。' }
    ]
  },
  'q1-2': {
    question: '你决定申请CS，但GPA 3.3（非顶尖）。对于英国G5的IC、UCL和美国Top 30，你应该如何制定选校策略？',
    options: [
      { text: '主申美国Top 30，英国作为保底', hint: '有风险。英国G5不是"保底学校"，英美申请策略差异大。建议合理分配。' },
      { text: 'IC和UCL的CS竞争激烈；查看具体课程和录取数据，选择2-3所匹配的学校', hint: '很好！冲刺学生需要精准定位。研究具体项目要求比盲目定位更重要。' },
      { text: '只申请英国，因为美国要考GRE太麻烦', hint: '太保守。冲刺学生应该挑战更高目标，GRE不是不可逾越的障碍。' }
    ]
  },
  'q2-1': {
    question: '你需要准备成绩单和在校证明但不知道流程，哪种方式最正确？',
    options: [
      { text: '直接找辅导员要证明', hint: '不完全正确。西浦有专门的教务系统申请流程。' },
      { text: '登录e-Bridge下载电子版，然后去行政楼盖章', hint: '正确！熟悉学校系统是大二生的基本技能。' },
      { text: '等到申请时再准备，现在还早', hint: '文件需要提前准备，尤其是需要翻译和公证的文件。' }
    ]
  },
  'q2-2': {
    question: '你的教授很忙但头衔很高；助教很了解你但资历较浅。你的推荐信策略是什么？',
    options: [
      { text: '选择教授，因为招生官更看重推荐人的学术地位', hint: '部分正确，但教授写一封模糊的信反而适得其反。' },
      { text: '选择助教，因为他们能写出具体细节和示例', hint: '具体细节很重要，但在教授指导下或联合署名更好。' },
      { text: '让教授和助教合作：教授签字，助教提供内容', hint: '最佳策略！冲刺学生应优先考虑推荐信质量而非仅看头衔。' }
    ]
  },
  'q2-3': {
    question: '关于成绩单认证（WES），以下哪项说法正确？',
    options: [
      { text: '英国学校都需要WES认证', hint: '错误。大部分英国学校不需要WES，部分美国学校需要。' },
      { text: 'WES认证需要2-4周，应提前准备', hint: '正确！文件准备需要时间规划，这是任务完成的关键。' },
      { text: '可以收到offer后再做认证', hint: '太晚。认证必须在申请前或申请期间完成。' }
    ]
  }
}

function getQuestionText(q) {
  if (!q) return ''
  if (isZh.value && zhTranslations[q.id]) {
    return zhTranslations[q.id].question
  }
  return q.question
}

function getOptionText(opt) {
  if (isZh.value && zhTranslations[currentQuestion.value?.id]) {
    const qid = currentQuestion.value.id
    const idx = currentQuestion.value.options.indexOf(opt)
    if (zhTranslations[qid]?.options[idx]) {
      return zhTranslations[qid].options[idx].text
    }
  }
  return opt.text
}

function getOptionHint(opt) {
  if (isZh.value && zhTranslations[currentQuestion.value?.id]) {
    const qid = currentQuestion.value.id
    const idx = currentQuestion.value.options.indexOf(opt)
    if (zhTranslations[qid]?.options[idx]) {
      return zhTranslations[qid].options[idx].hint
    }
  }
  return opt.hint || 'Refining your application strategy...'
}

function getOptionLabel(index) {
  return ['A', 'B', 'C'][index]
}

function getOptionColorClass(index, isSelected) {
  if (isSelected) return optionColors[index].replace('group-hover:', '')
  return optionColors[index]
}

function getOptionDotClass(index) {
  return optionDotColors[index]
}

function toggleLanguage() {
  isZh.value = !isZh.value
}

onMounted(() => {
  if (levelId.value) {
    questions.value = getQuestionsByLevel(levelId.value, props.userType)
  }
})

function handleSelect(option, index) {
  if (selectedIndex.value !== null) return
  
  selectedIndex.value = index
  
  isShaking.value = true
  setTimeout(() => isShaking.value = false, 400)

  if (option.learning > 10) {
    sessionResults.correctCount++
  }
  sessionResults.learning += (option.learning || 0)
  sessionResults.task += (option.task || 0)

  setTimeout(() => {
    if (currentQuestionIndex.value < questions.value.length - 1) {
      currentQuestionIndex.value++
      selectedIndex.value = null
    } else {
      emit('complete', { 
        learning: sessionResults.learning, 
        task: sessionResults.task, 
        correctCount: sessionResults.correctCount, 
        totalQuestions: questions.value.length 
      })
    }
  }, 5000)
}
</script>

<style scoped>
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
.animate-soft-bump {
  animation: soft-bump 0.4s ease-out both;
}

@keyframes progress-bar-short { 0% { width: 0%; } 100% { width: 100%; } }
.animate-progress-bar-short { animation: progress-bar-short 5s linear forwards; }

.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
</style>