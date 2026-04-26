<template>
  <div class="space-y-8 pb-8 font-serif-like">
    
    <div class="relative bg-white rounded-3xl border-2 border-[#E0C3CC] p-8 shadow-sm overflow-hidden">
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(#B86281 1px, transparent 1px); background-size: 24px 24px;"></div>
      
      <div class="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div class="relative group">
          <div class="absolute inset-0 bg-[#E88EAF] rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity"></div>
          <div class="relative w-24 h-24 rounded-full border-4 border-white bg-gradient-to-b from-[#E88EAF] to-[#B86281] shadow-md flex items-center justify-center">
            <span class="text-4xl font-black text-white drop-shadow-sm">
              {{ userName ? userName.charAt(0).toUpperCase() : '?' }}
            </span>
          </div>
          <div class="absolute -bottom-2 -left-2 -right-2 bg-gradient-to-r from-[#B86281] to-[#8F4761] border-2 border-white text-white text-[10px] font-bold text-center py-1 rounded-md shadow-sm uppercase tracking-widest z-20 transform -rotate-2">
            Level 1
          </div>
        </div>

        <div class="text-center md:text-left flex-1 mt-2">
          <h2 class="text-3xl font-black text-slate-800 tracking-tight">{{ userName || 'Wandering Scholar' }}</h2>
          <div class="flex items-center justify-center md:justify-start gap-3 mt-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#8F4761] text-sm font-bold rounded-lg border border-[#E0C3CC]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#B86281]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              {{ roleLabel }}
            </span>
            <span class="text-slate-400 text-xs font-bold uppercase tracking-wider">
              Joined {{ joinDate }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <div class="bg-white rounded-2xl border-2 border-[#E0C3CC] p-5 text-center shadow-[0_4px_0_#F0D8E0] relative overflow-hidden group hover:-translate-y-1 transition-transform">
        <div class="absolute top-0 right-0 w-16 h-16 bg-[#7FA1ED]/10 rounded-full blur-xl group-hover:bg-[#7FA1ED]/20 transition-colors"></div>
        <div class="text-3xl font-black text-[#7FA1ED] relative z-10">{{ learningValue }}</div>
        <div class="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider relative z-10">Learning</div>
      </div>
      
      <div class="bg-white rounded-2xl border-2 border-[#E0C3CC] p-5 text-center shadow-[0_4px_0_#F0D8E0] relative overflow-hidden group hover:-translate-y-1 transition-transform">
        <div class="absolute top-0 right-0 w-16 h-16 bg-orange-50 rounded-full blur-xl group-hover:bg-orange-100 transition-colors"></div>
        <div class="text-3xl font-black text-orange-500 relative z-10">{{ taskValue }}</div>
        <div class="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider relative z-10">Tasks</div>
      </div>

      <div class="bg-white rounded-2xl border-2 border-[#E0C3CC] p-5 text-center shadow-[0_4px_0_#F0D8E0] relative overflow-hidden group hover:-translate-y-1 transition-transform">
        <div class="absolute top-0 right-0 w-16 h-16 bg-[#E88EAF]/10 rounded-full blur-xl group-hover:bg-[#E88EAF]/20 transition-colors"></div>
        <div class="text-3xl font-black text-[#E88EAF] relative z-10">{{ maxCombo }}</div>
        <div class="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider relative z-10">Max Combo</div>
      </div>

      <div class="bg-white rounded-2xl border-2 border-[#E0C3CC] p-5 text-center shadow-[0_4px_0_#F0D8E0] relative overflow-hidden group hover:-translate-y-1 transition-transform">
        <div class="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-full blur-xl group-hover:bg-emerald-100 transition-colors"></div>
        <div class="text-3xl font-black text-emerald-500 relative z-10">{{ completedLevels.length }}/5</div>
        <div class="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider relative z-10">Levels Done</div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-8">
      
      <div class="bg-white rounded-[2rem] border-2 border-[#E0C3CC] p-7 shadow-sm relative">
        <div class="absolute -top-4 left-8 bg-gradient-to-r from-[#C27A95] to-[#A35672] text-white px-6 py-2 rounded-lg shadow-md font-bold text-sm tracking-widest uppercase flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Bounty Board
        </div>
        
        <div class="mt-4">
          <DailyQuestPanel :daily-quest-progress="dailyQuestProgress" />
        </div>
      </div>

      <div class="bg-white rounded-[2rem] border-2 border-[#E0C3CC] p-7 shadow-sm relative">
        <div class="absolute -top-4 right-8 bg-gradient-to-r from-[#E0B2C4] to-[#C27A95] text-[#572739] px-6 py-2 rounded-lg shadow-md font-black text-sm tracking-widest uppercase flex items-center gap-2 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          Trophies
        </div>
        
        <div class="mt-6 grid grid-cols-3 gap-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
          <div v-for="ach in allAchievements" :key="ach.id"
               class="relative flex flex-col items-center p-3 rounded-2xl transition-all duration-300"
               :class="ach.unlocked 
                 ? 'bg-white border-2 border-[#D1A3B4] hover:-translate-y-1 cursor-pointer shadow-[0_4px_10px_rgba(184,98,129,0.1)]' 
                 : 'bg-slate-50 border border-slate-200 grayscale opacity-70'">
            
            <div v-if="ach.unlocked" class="absolute inset-0 bg-slate-50 opacity-0 hover:opacity-100 rounded-2xl transition-opacity -z-10"></div>
            
            <div class="w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-2 relative z-10"
                 :class="ach.unlocked ? 'bg-white border border-[#E0C3CC] text-[#B86281] shadow-sm' : 'bg-white border border-slate-200 text-slate-400 shadow-sm'">
              {{ ach.unlocked ? ach.icon : '🔒' }}
            </div>
            
            <h4 class="text-[10px] font-bold text-center leading-tight uppercase tracking-wide" 
                :class="ach.unlocked ? 'text-[#8F4761]' : 'text-slate-400'">
              {{ ach.title }}
            </h4>
            
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white border border-slate-200 shadow-lg p-2 rounded-lg text-xs text-slate-600 text-center opacity-0 hover:opacity-100 transition-opacity pointer-events-none z-50">
              {{ ach.description }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-[2rem] border-t-4 border-[#E0C3CC] p-8 shadow-sm relative overflow-hidden mt-8">
      <h3 class="text-center text-slate-400 font-bold uppercase tracking-[0.3em] text-sm mb-8 relative z-10">Combat Statistics</h3>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        <div class="flex flex-col items-center group cursor-default">
          <div class="w-16 h-16 rounded-full border-4 border-emerald-100 flex items-center justify-center bg-white shadow-[0_4px_10px_rgba(16,185,129,0.1)] group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-300">
            <span class="text-2xl font-black text-emerald-500 drop-shadow-sm group-hover:text-emerald-600 transition-colors">{{ totalCorrectAnswers }}</span>
          </div>
          <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-3 text-center group-hover:text-emerald-500 transition-colors">Correct Hits</div>
        </div>
        
        <div class="flex flex-col items-center group cursor-default">
          <div class="w-16 h-16 rounded-full border-4 border-[#F0D8E0] flex items-center justify-center bg-white shadow-[0_4px_10px_rgba(184,98,129,0.1)] group-hover:bg-[#FAEDF1] group-hover:scale-110 transition-all duration-300">
            <span class="text-2xl font-black text-[#B86281] drop-shadow-sm group-hover:text-[#8F4761] transition-colors">{{ perfectLevelsCount }}</span>
          </div>
          <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-3 text-center group-hover:text-[#B86281] transition-colors">Perfect Runs</div>
        </div>
        
        <div class="flex flex-col items-center group cursor-default">
          <div class="w-16 h-16 rounded-full border-4 border-[#7FA1ED]/20 flex items-center justify-center bg-white shadow-[0_4px_10px_rgba(127,161,237,0.1)] group-hover:bg-[#7FA1ED]/10 group-hover:scale-110 transition-all duration-300">
            <span class="text-2xl font-black text-[#7FA1ED] drop-shadow-sm group-hover:text-[#5B78BA] transition-colors">{{ unlockedStories.length }}</span>
          </div>
          <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-3 text-center group-hover:text-[#7FA1ED] transition-colors">Lore Found</div>
        </div>
        
        <div class="flex flex-col items-center group cursor-default">
          <div class="w-16 h-16 rounded-full border-4 border-[#E3B75C]/20 flex items-center justify-center bg-white shadow-[0_4px_10px_rgba(227,183,92,0.1)] group-hover:bg-[#E3B75C]/10 group-hover:scale-110 transition-all duration-300">
            <span class="text-2xl font-black text-[#E3B75C] drop-shadow-sm group-hover:text-[#C49A3D] transition-colors">{{ currentCombo }}</span>
          </div>
          <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-3 text-center group-hover:text-[#E3B75C] transition-colors">Active Streak</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ACHIEVEMENTS } from '../data/achievements'
import DailyQuestPanel from './DailyQuestPanel.vue'

const props = defineProps({
  userName: String,
  userRole: String,
  learningValue: Number,
  taskValue: Number,
  completedLevels: Array,
  unlockedStories: Array,
  currentCombo: { type: Number, default: 0 },
  maxCombo: { type: Number, default: 0 },
  dailyQuestProgress: { type: Array, default: () => [] },
  unlockedAchievements: { type: Array, default: () => [] },
  totalCorrectAnswers: { type: Number, default: 0 },
  perfectLevelsCount: { type: Number, default: 0 }
})

const roleLabel = computed(() => {
  if (props.userRole === 'confused') return 'Explorer'
  if (props.userRole === 'sprint') return 'Sprint'
  return 'Unknown'
})

const joinDate = computed(() => {
  const d = new Date()
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
})

const allAchievements = computed(() => {
  return ACHIEVEMENTS.map(a => ({
    ...a,
    unlocked: props.unlockedAchievements.includes(a.id)
  }))
})
</script>

<style scoped>
/* 全局强加一点衬线字体的味道 */
.font-serif-like h2, .font-serif-like h3, .font-serif-like .uppercase {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}

/* 成就网格自定义滚动条 (莫兰迪暗粉色版) */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.03);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #E0C3CC; 
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #D1A3B4; 
}
</style>