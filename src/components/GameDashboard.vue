<template>
  <div class="game-dashboard">
    <div class="grid md:grid-cols-2 gap-5 mb-8">
      
      <div class="bg-white rounded-[1.5rem] border-2 border-[#7FA1ED] p-5 shadow-[0_6px_0_#5B78BA] transition-all duration-300"
           :class="{ 'scale-[1.02] -translate-y-1 shadow-[0_8px_30px_rgba(127,161,237,0.4)]': isLearningBumping }">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="p-2.5 bg-[#7FA1ED]/10 rounded-xl text-[#7FA1ED]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <span class="font-extrabold text-slate-700 tracking-tight">Learning Value</span>
          </div>
          <span class="text-4xl font-black text-blue-600 font-variant-numeric: tabular-nums transition-transform duration-300"
                :class="{ 'scale-110': isLearningBumping }">{{ animatedLearning }}</span>
        </div>
        <div class="relative h-6 bg-slate-100 rounded-full overflow-hidden shadow-inner p-1">
          <div class="absolute top-1 left-1 bottom-1 rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-1.5 progress-striped-blue shadow-sm" 
               :style="{ width: `calc(${Math.min((learningValue / 100) * 100, 100)}% - 8px)` }">
               <svg v-if="learningValue > 0" class="w-4 h-4 text-white/90 animate-spin-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
        </div>
        <div class="flex justify-between mt-3 text-xs font-bold text-slate-400">
          <span>0</span>
          <span class="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Next unlock: 100 pts</span>
          <span>100</span>
        </div>
      </div>

      <div class="bg-white rounded-[1.5rem] border-2 border-[#E3B75C] p-5 shadow-[0_6px_0_#B38A3B] transition-all duration-300"
           :class="{ 'scale-[1.02] -translate-y-1 shadow-[0_8px_30px_rgba(227,183,92,0.4)]': isTaskBumping }">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="p-2.5 bg-amber-50 rounded-xl text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <span class="font-extrabold text-slate-700 tracking-tight">Task Value</span>
          </div>
          <span class="text-4xl font-black text-amber-500 font-variant-numeric: tabular-nums transition-transform duration-300"
                :class="{ 'scale-110': isTaskBumping }">{{ animatedTask }}</span>
        </div>
        <div class="relative h-6 bg-slate-100 rounded-full overflow-hidden shadow-inner p-1">
          <div class="absolute top-1 left-1 bottom-1 rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-1.5 progress-striped-amber shadow-sm" 
               :style="{ width: `calc(${Math.min((taskValue / 200) * 100, 100)}% - 8px)` }">
               <svg v-if="taskValue > 0" class="w-4 h-4 text-white/90 animate-spin-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
        </div>
        <div class="flex justify-between mt-3 text-xs font-bold text-slate-400">
          <span>0</span>
          <span class="text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Next unlock: 200 pts</span>
          <span>200</span>
        </div>
      </div>
    </div>

    <div class="flex gap-4 justify-center mb-10 flex-wrap">
      <button @click="$emit('add-learning')" class="flex items-center gap-2 px-6 py-3 bg-[#7FA1ED] shadow-[0_4px_0_#5B78BA] text-white rounded-2xl font-bold hover:brightness-105 active:translate-y-[4px] active:shadow-none transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
        <span>+10 Learning</span>
      </button>
      
      <button @click="$emit('add-task')" class="flex items-center gap-2 px-6 py-3 bg-amber-500 shadow-[0_4px_0_#d97706] text-white rounded-2xl font-bold hover:brightness-105 active:translate-y-[4px] active:shadow-none transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span>+10 Task</span>
      </button>

      <button @click="$emit('show-advisor')" class="flex items-center gap-2 px-6 py-3 bg-slate-600 shadow-[0_4px_0_#475569] text-white rounded-2xl font-bold hover:brightness-105 active:translate-y-[4px] active:shadow-none transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        <span>Advisor</span>
      </button>

      <div class="w-full sm:w-auto flex justify-center gap-4">
        <button @click="$emit('switch-role')" class="flex items-center gap-2 px-5 py-3 bg-[#F8FAFC] shadow-[0_4px_0_#E2E8F0] text-[#475569] rounded-2xl font-bold hover:brightness-95 active:translate-y-[4px] active:shadow-none transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          <span class="hidden sm:inline">Switch</span>
        </button>
        
        <button @click="$emit('reset-progress')" class="flex items-center gap-2 px-5 py-3 bg-[#F8FAFC] shadow-[0_4px_0_#E2E8F0] text-[#ef4444] rounded-2xl font-bold hover:brightness-95 active:translate-y-[4px] active:shadow-none transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21v-5h5"/></svg>
          <span class="hidden sm:inline">Reset</span>
        </button>
      </div>
    </div>

    <div v-if="currentCombo > 0" class="mb-8 flex justify-center">
      <div class="inline-flex items-center gap-3 px-6 py-3 bg-amber-50 border border-amber-200 rounded-2xl transition-transform">
        <span class="text-2xl animate-bounce">
          {{ currentCombo >= 10 ? '🌟' : currentCombo >= 5 ? '🔥' : currentCombo >= 3 ? '⚡' : '💫' }}
        </span>
        <div class="text-center">
          <div class="text-xs text-amber-600 font-bold uppercase tracking-wide">Combo</div>
          <div class="text-lg font-black text-amber-500">{{ currentCombo }} <span class="text-sm font-semibold">in a row</span></div>
        </div>
        <div v-if="currentCombo >= 3" class="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded-full font-bold">
          +{{ currentCombo >= 10 ? 50 : currentCombo >= 5 ? 25 : 15 }}% bonus
        </div>
      </div>
    </div>

    <KnowledgeTree 
      :completed-levels="completedLevels"
      :current-level="currentLevelIndex >= 0 ? levels[currentLevelIndex]?.id : ''"
      :total-learning="learningValue"
      :total-task="taskValue"
      :max-combo="maxCombo"
      :days-streak="daysStreak"
      :is-zh="isZh"
      @select-stage="handleStageSelect"
    />

    <div v-if="selectedLevel" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity" @click.self="selectedLevel = null">
      <div class="bg-white rounded-[2rem] w-full max-w-md shadow-2xl overflow-hidden animate-fade-in-up border border-slate-100">
        <div class="p-6 pb-4" :class="getModalHeaderClass(selectedLevel)">
          <div class="flex justify-between items-start mb-2">
            <span class="text-4xl drop-shadow-sm">{{ selectedLevel.icon }}</span>
            <button @click="selectedLevel = null" class="text-slate-400 hover:text-slate-600 p-1 bg-white/50 rounded-full">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-white/60 shadow-sm" :class="getStatusBadgeClass(selectedLevel)">
              {{ getStatusText(selectedLevel) }}
            </span>
          </div>
          <h3 class="text-2xl font-black text-slate-800">{{ selectedLevel.title }}</h3>
        </div>

        <div class="p-6">
          <p class="text-slate-600 mb-6 font-medium">{{ selectedLevel.description }}</p>
          <div class="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
            <h4 class="text-xs font-bold text-slate-400 uppercase mb-2">Completion Rewards</h4>
            <div class="flex gap-4">
              <span class="flex items-center gap-1.5 font-bold text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                +{{ selectedLevel.rewards.learningValue }} LV
              </span>
              <span class="flex items-center gap-1.5 font-bold text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                +{{ selectedLevel.rewards.taskValue }} TV
              </span>
            </div>
          </div>

          <div class="flex gap-3">
            <button v-if="completedLevels.includes(selectedLevel.id)" class="flex-1 py-3 bg-[#75CD9D]/20 text-[#4D9C71] rounded-xl font-bold cursor-default">
              Level Completed ✓
            </button>
            <button v-else-if="isLocked(selectedLevel.id)" class="flex-1 py-3 bg-slate-100 text-slate-400 rounded-xl font-bold cursor-not-allowed">
              Locked 🔒
            </button>
            <button v-else @click="handleStartLevel" class="flex-1 py-3 bg-[#7FA1ED] hover:bg-[#5B78BA] text-white rounded-xl font-bold shadow-[0_4px_0_#5B78BA] active:translate-y-[4px] active:shadow-none transition-all">
              Start Challenge
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="unlockedStories.length > 0" class="mt-8 bg-white rounded-[2rem] border border-slate-200 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-[#7FA1ED]/10 rounded-full blur-3xl pointer-events-none"></div>

      <h3 class="text-xl font-black text-slate-700 mb-6 flex items-center gap-3 relative z-10">
        <span class="text-[#7FA1ED] text-2xl animate-pulse">📚</span>
        <span class="tracking-wide uppercase">Unlocked Strategies</span>
      </h3>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        <div v-for="storyId in unlockedStories" :key="storyId" 
             class="group relative bg-slate-50 border border-slate-100 rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(127,161,237,0.15)] flex items-center gap-4"
             @click="$emit('view-story', storyId)">
          
          <div class="w-12 h-12 rounded-2xl bg-white shadow-[0_4px_0_#E2E8F0] text-[#7FA1ED] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-slate-700 text-sm truncate group-hover:text-[#5B78BA] transition-colors">{{ getStoryTitle(storyId) }}</h4>
            <p class="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[#75CD9D] animate-pulse"></span>
              Tap to decrypt
            </p>
          </div>
          
          <div class="text-slate-300 group-hover:text-[#7FA1ED] transform group-hover:translate-x-1 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { getGuideById } from '../data/guides'
import KnowledgeTree from './KnowledgeTree.vue'

const props = defineProps({
  userName: String,
  userRole: String,
  learningValue: Number,
  taskValue: Number,
  completedLevels: Array,
  unlockedStories: Array,
  currentCombo: { type: Number, default: 0 },
  maxCombo: { type: Number, default: 0 },
  daysStreak: { type: Number, default: 0 },
  isZh: { type: Boolean, default: false }
})

const emit = defineEmits(['start-level', 'add-learning', 'add-task', 'view-story', 'reset-progress', 'switch-role', 'show-advisor', 'select-stage'])

const animatedLearning = ref(props.learningValue)
const animatedTask = ref(props.taskValue)
const isLearningBumping = ref(false)
const isTaskBumping = ref(false)

watch(() => props.learningValue, (newVal, oldVal) => { 
  animateValue(animatedLearning, oldVal, newVal, 1000) 
  if (newVal > oldVal) {
    isLearningBumping.value = true
    setTimeout(() => isLearningBumping.value = false, 300)
  }
})

watch(() => props.taskValue, (newVal, oldVal) => { 
  animateValue(animatedTask, oldVal, newVal, 1000) 
  if (newVal > oldVal) {
    isTaskBumping.value = true
    setTimeout(() => isTaskBumping.value = false, 300)
  }
})

function animateValue(target, start, end, duration) {
  const startTime = performance.now()
  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeProgress = 1 - Math.pow(1 - progress, 4)
    target.value = Math.round(start + (end - start) * easeProgress)
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

const levels = [
  { id: 'level-1', order: 1, title: 'School Selection', description: 'Explore programs and find your best fit', icon: '🎓', unlockCondition: {}, rewards: { learningValue: 20, taskValue: 10 }, mapPosition: { x: 10, y: 50 } },
  { id: 'level-2', order: 2, title: 'Document Preparation', description: 'Transcripts, WES, recommendation letters', icon: '📄', unlockCondition: { requiredLevel: 'level-1' }, rewards: { learningValue: 20, taskValue: 15 }, mapPosition: { x: 28, y: 20 } },
  { id: 'level-3', order: 3, title: 'Essay Writing', description: 'Craft your Personal Statement', icon: '✍️', unlockCondition: { requiredLevel: 'level-2' }, rewards: { learningValue: 30, taskValue: 20 }, mapPosition: { x: 50, y: 50 } },
  { id: 'level-4', order: 4, title: 'Application Submission', description: 'Submit applications and track progress', icon: '📨', unlockCondition: { requiredLevel: 'level-3' }, rewards: { learningValue: 20, taskValue: 15 }, mapPosition: { x: 72, y: 80 } },
  { id: 'level-5', order: 5, title: 'Interview Preparation', description: 'Ace your admissions interview', icon: '🎤', unlockCondition: { requiredLevel: 'level-4' }, rewards: { learningValue: 30, taskValue: 20 }, mapPosition: { x: 90, y: 50 } }
]

const selectedLevel = ref(null)

const currentLevelIndex = computed(() => {
  const index = levels.findIndex(l => !props.completedLevels.includes(l.id))
  return index === -1 ? levels.length - 1 : index
})

const currentLevelPos = computed(() => levels[currentLevelIndex.value].mapPosition)

function openLevelModal(level) { selectedLevel.value = level }
function handleStartLevel() {
  emit('start-level', selectedLevel.value)
  selectedLevel.value = null
}

function handleStageSelect(stageId) {
  const level = levels.find(l => l.id === stageId)
  if (level) {
    openLevelModal(level)
  }
}

function getGameNodeClass(level) {
  if (props.completedLevels.includes(level.id)) {
    return 'bg-white border-2 border-[#75CD9D] shadow-[0_4px_0_#75CD9D] hover:-translate-y-1 hover:shadow-[0_6px_0_#75CD9D] cursor-pointer'
  }
  if (isLocked(level.id)) {
    return 'bg-slate-50 border-2 border-slate-200 shadow-inner opacity-70 cursor-not-allowed'
  }
  return 'bg-white border-2 border-[#E3B75C] shadow-[0_4px_0_#E3B75C] ring-4 ring-[#E3B75C]/20 animate-pulse cursor-pointer'
}

function getModalHeaderClass(level) {
  if (props.completedLevels.includes(level.id)) return 'bg-[#75CD9D]/10'
  if (isLocked(level.id)) return 'bg-slate-50'
  return 'bg-[#E3B75C]/10'
}

const stories = {
  'story-strategy': { title: 'Overseas Masters Application Strategy' },
  'story-essay': { title: 'Personal Statement Master Guide' },
  'story-school': { title: 'School Selection Strategy' },
  'story-cv': { title: 'CV Writing Excellence' },
  'story-interview': { title: 'Interview Preparation' }
}

function isLocked(levelId) {
  const level = levels.find(l => l.id === levelId)
  if (!level.unlockCondition.requiredLevel) return false
  return !props.completedLevels.includes(level.unlockCondition.requiredLevel)
}

function getStatusBadgeClass(level) {
  if (props.completedLevels.includes(level.id)) return 'text-[#4D9C71]'
  if (isLocked(level.id)) return 'text-slate-500'
  return 'text-[#B38A3B]'
}

function getStatusText(level) {
  if (props.completedLevels.includes(level.id)) return 'Completed'
  if (isLocked(level.id)) return 'Locked'
  return 'Current Level'
}

function getStoryTitle(storyId) {
  const guide = getGuideById(storyId)
  if (guide) return guide.title
  return stories[storyId]?.title || 'Strategy Guide'
}
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 640px) {
  .game-dashboard h2 { font-size: 1.125rem; }
}

.progress-striped-blue {
  background-color: #3b82f6;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
  background-size: 1.5rem 1.5rem;
  animation: progress-move 1.5s linear infinite;
}
.progress-striped-amber {
  background-color: #f59e0b;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
  background-size: 1.5rem 1.5rem;
  animation: progress-move 1.5s linear infinite;
}
@keyframes progress-move {
  0% { background-position: 0 0; }
  100% { background-position: 1.5rem 0; }
}
.animate-spin-slow {
  animation: spin 3s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes flow-dash {
  from { stroke-dashoffset: 16; }
  to { stroke-dashoffset: 0; }
}
.animate-flow-dash {
  animation: flow-dash 0.8s linear infinite;
}
</style>