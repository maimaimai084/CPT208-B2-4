<template>
  <div class="space-y-6">
    <!-- User Info Card -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white flex items-center justify-center text-2xl font-bold">
          {{ userName ? userName.charAt(0).toUpperCase() : '?' }}
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900">{{ userName || 'Guest' }}</h2>
          <p class="text-sm text-slate-500">
            Role: <span class="font-medium text-slate-700">{{ roleLabel }}</span>
          </p>
          <p class="text-xs text-slate-400 mt-0.5">
            Joined: {{ joinDate }}
          </p>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-blue-600">{{ learningValue }}</div>
        <div class="text-xs text-slate-500 mt-1">Learning Value</div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-amber-500">{{ taskValue }}</div>
        <div class="text-xs text-slate-500 mt-1">Task Value</div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-violet-600">{{ maxCombo }}</div>
        <div class="text-xs text-slate-500 mt-1">Max Combo</div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-emerald-600">{{ completedLevels.length }}/5</div>
        <div class="text-xs text-slate-500 mt-1">Levels Done</div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Daily Quests -->
      <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>📅</span>
          <span>Daily Quests</span>
        </h3>
        <DailyQuestPanel :daily-quest-progress="dailyQuestProgress" />
      </div>

      <!-- Achievements -->
      <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🏆</span>
          <span>Achievements</span>
        </h3>
        <div class="space-y-2 max-h-[400px] overflow-y-auto pr-1">
          <div v-for="ach in allAchievements" :key="ach.id"
               class="flex items-center gap-3 p-3 rounded-xl border transition-all"
               :class="ach.unlocked ? 'border-amber-200 bg-amber-50/40' : 'border-slate-200 bg-slate-50/40 opacity-60'">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                 :class="ach.unlocked ? 'bg-amber-100 text-amber-600' : 'bg-slate-200 text-slate-400'">
              {{ ach.unlocked ? ach.icon : '🔒' }}
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-semibold" :class="ach.unlocked ? 'text-slate-800' : 'text-slate-500'">
                {{ ach.title }}
              </h4>
              <p class="text-xs text-slate-500">{{ ach.description }}</p>
            </div>
            <span v-if="ach.unlocked" class="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
              Unlocked
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Extra Stats -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h3 class="text-lg font-bold text-slate-900 mb-4">Detailed Stats</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center p-4 bg-slate-50 rounded-xl">
          <div class="text-xl font-bold text-slate-800">{{ totalCorrectAnswers }}</div>
          <div class="text-xs text-slate-500 mt-1">Correct Answers</div>
        </div>
        <div class="text-center p-4 bg-slate-50 rounded-xl">
          <div class="text-xl font-bold text-slate-800">{{ perfectLevelsCount }}</div>
          <div class="text-xs text-slate-500 mt-1">Perfect Levels</div>
        </div>
        <div class="text-center p-4 bg-slate-50 rounded-xl">
          <div class="text-xl font-bold text-slate-800">{{ unlockedStories.length }}</div>
          <div class="text-xs text-slate-500 mt-1">Guides Unlocked</div>
        </div>
        <div class="text-center p-4 bg-slate-50 rounded-xl">
          <div class="text-xl font-bold text-slate-800">{{ currentCombo }}</div>
          <div class="text-xs text-slate-500 mt-1">Current Combo</div>
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
.max-h-\[400px\]::-webkit-scrollbar {
  width: 6px;
}
.max-h-\[400px\]::-webkit-scrollbar-track {
  background: transparent;
}
.max-h-\[400px\]::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}
</style>
