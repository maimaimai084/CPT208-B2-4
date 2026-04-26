<template>
  <div class="fixed inset-0 z-50 bg-[#Fdfbf7] text-slate-900 flex flex-col font-sans overflow-hidden transition-colors duration-500"
       :class="{ 'bg-violet-400/40': isShaking }"
       style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px;">
    
    <header class="flex items-center justify-between p-4 md:p-6 w-full max-w-5xl mx-auto border-b-4 border-black bg-white mb-4">
      <button @click="$emit('close')" class="flex items-center gap-2 font-black uppercase tracking-widest text-black hover:bg-black hover:text-white px-4 py-2 border-2 border-transparent transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        Escape
      </button>
      <div class="text-lg md:text-2xl font-black tracking-widest uppercase bg-[#00E5FF] px-6 py-2 border-4 border-black shadow-[4px_4px_0_#000]">
        Discovery - Level {{ String(levelId).replace('level-', '') }}
      </div>
      <div class="w-10 md:w-24"></div>
    </header>

    <div v-if="questions.length > 0" class="flex-1 w-full max-w-5xl mx-auto flex flex-col px-6 pb-12" :class="{ 'animate-soft-bump': isShaking }">
      
      <div class="inline-block bg-black text-white font-black px-4 py-1 border-4 border-black shadow-[4px_4px_0_#ffcc00] mb-6 self-start uppercase">
        Checkpoint {{ currentQuestionIndex + 1 }} / {{ questions.length }}
      </div>

      <div class="bg-white border-[4px] border-black rounded-2xl p-6 md:p-8 mb-10 shadow-[8px_8px_0_#000] relative">
        <div class="absolute -top-4 -left-4 bg-[#FFDE00] border-4 border-black w-12 h-12 flex items-center justify-center font-black text-2xl shadow-[4px_4px_0_#000] z-10 rotate-[-10deg]">!</div>
        <p class="text-xl md:text-2xl font-bold leading-relaxed text-black mt-2">
          {{ currentQuestion.question }}
        </p>
      </div>

      <div class="space-y-4 mb-10">
        <div v-for="(opt, index) in currentQuestion.options" :key="index"
             class="flex items-stretch bg-white border-[4px] border-black shadow-[4px_4px_0_#000] transition-all"
             :class="{ 'opacity-30 grayscale blur-[1px]': selectedIndex !== null && selectedIndex !== index }">
          <div class="w-16 flex items-center justify-center border-r-[4px] border-black" :class="shapes[index].bgColor">
             <svg v-if="index === 0" viewBox="0 0 100 100" class="w-8 h-8"><polygon points="50,15 90,85 10,85" fill="#fff" stroke="#000" stroke-width="8"/></svg>
             <svg v-if="index === 1" viewBox="0 0 100 100" class="w-8 h-8"><rect x="20" y="20" width="60" height="60" fill="#fff" stroke="#000" stroke-width="8"/></svg>
             <svg v-if="index === 2" viewBox="0 0 100 100" class="w-8 h-8"><circle cx="50" cy="50" r="30" fill="#fff" stroke="#000" stroke-width="8"/></svg>
          </div>
          <div class="flex-1 p-5 text-base md:text-lg font-bold text-black flex items-center">
            {{ opt.text }}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-8 md:gap-16 mt-auto perspective-container relative min-h-[280px]">
        <div v-for="(opt, index) in currentQuestion.options" :key="index"
             class="flip-card group"
             :class="{ 'z-50': selectedIndex === index, 'z-10': selectedIndex !== index }">
          
          <div class="flip-card-inner w-full aspect-[3/4]"
               :class="{ 'flipped': selectedIndex === index }">
            
            <div class="flip-card-front border-[4px] border-black flex flex-col items-center justify-center transition-transform group-hover:-translate-y-4 shadow-[10px_10px_0_#000] cursor-pointer"
                 :class="[shapes[index].bgColor, { 'opacity-30 grayscale': selectedIndex !== null && selectedIndex !== index }]"
                 @click="handleSelect(opt, index)">
              <svg v-if="index === 0" viewBox="0 0 100 100" class="w-24 h-24 md:w-32 md:h-32 drop-shadow-[4px_4px_0_#000] transition-transform group-hover:scale-110"><polygon points="50,15 90,85 10,85" fill="#fff" stroke="#000" stroke-width="8"/></svg>
              <svg v-if="index === 1" viewBox="0 0 100 100" class="w-24 h-24 md:w-32 md:h-32 drop-shadow-[4px_4px_0_#000] transition-transform group-hover:scale-110"><rect x="20" y="20" width="60" height="60" fill="#fff" stroke="#000" stroke-width="8"/></svg>
              <svg v-if="index === 2" viewBox="0 0 100 100" class="w-24 h-24 md:w-32 md:h-32 drop-shadow-[4px_4px_0_#000] transition-transform group-hover:scale-110"><circle cx="50" cy="50" r="30" fill="#fff" stroke="#000" stroke-width="8"/></svg>
            </div>

            <div v-if="selectedIndex === index" 
                 class="flip-card-back border-[4px] border-black flex flex-col p-6 shadow-[15px_15px_0_#000] bg-[#a78bfa] !important">
              
              <div class="text-xs font-black text-white uppercase mb-1 tracking-widest" style="transform: translateZ(20px);">Path Analysis</div>
              <h4 class="text-xl font-black text-black uppercase mb-2 border-b-4 border-black pb-1" style="transform: translateZ(30px);">
                Mentor's Note
              </h4>
              
              <p class="text-sm md:text-base font-bold text-black flex-1 mt-2 leading-relaxed overflow-y-auto custom-scrollbar" style="transform: translateZ(30px);">
                {{ opt.hint || opt.explanation || 'Refining your application strategy...' }}
              </p>

              <div class="flex gap-4 mb-4" style="transform: translateZ(35px);">
                <span class="bg-black text-white px-2 py-1 text-[10px] font-black">+{{ opt.learning || 0 }} LV</span>
                <span class="bg-white text-black border-2 border-black px-2 py-1 text-[10px] font-black">+{{ opt.task || 0 }} TV</span>
              </div>

              <div class="w-full h-3 bg-black/20 mt-auto border-2 border-black" style="transform: translateZ(50px);">
                <div class="h-full bg-black animate-progress-bar-long"></div>
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

const shapes = [{ bgColor: 'bg-[#FF3366]' }, { bgColor: 'bg-[#00E5FF]' }, { bgColor: 'bg-[#FFDE00]' }]
const questions = ref([])
const currentQuestionIndex = ref(0)
const selectedIndex = ref(null)
const isShaking = ref(false)
const sessionResults = { correctCount: 0, learning: 0, task: 0 }

const levelId = computed(() => (typeof props.level === 'object' ? props.level.id : props.level))
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value] || null)

onMounted(() => {
  if (levelId.value) {
    questions.value = getQuestionsByLevel(levelId.value, props.userType)
  }
})

function handleSelect(option, index) {
  if (selectedIndex.value !== null) return
  
  selectedIndex.value = index
  
  // 触发“轻微触感”反馈
  isShaking.value = true
  setTimeout(() => isShaking.value = false, 400) // 缩短震动时间

  // 记录进度
  if (option.learning > 10) {
    sessionResults.correctCount++
  }
  sessionResults.learning += (option.learning || 0)
  sessionResults.task += (option.task || 0)

  // 5秒后跳转
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
.flip-card-inner { position: relative; transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1); transform-style: preserve-3d; height: 100%; }
.flip-card-inner.flipped { transform: rotateY(180deg) scale(1.25); }
.flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; border-radius: 1.5rem; }
.flip-card-back { transform: rotateY(180deg); display: flex; flex-direction: column; z-index: 2; }

/* 调整后的背面背景色：柔和的淡紫色 */
.bg-\[\#a78bfa\] { background-color: #a78bfa !important; }

/* 🔥 修复点：轻微的上下“呼吸感”震动，代替剧烈的左右晃动 */
@keyframes soft-bump {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); } /* 只有4像素的上下微调 */
}
.animate-soft-bump {
  animation: soft-bump 0.4s ease-out both;
}

@keyframes progress-bar-long { 0% { width: 0%; } 100% { width: 100%; } }
.animate-progress-bar-long { animation: progress-bar-long 5s linear forwards; }

.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #000; }
</style>