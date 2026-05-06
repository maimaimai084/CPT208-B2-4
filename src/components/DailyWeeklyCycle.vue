<template>
  <div class="daily-weekly-container w-full">
    <div class="bg-white rounded-2xl shadow-card p-6">
      <div class="text-center mb-6">
        <div class="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl mx-auto mb-3 float-anim">📅</div>
        <h2 class="font-bold text-xl text-slate-700">
          {{ isZh ? '周期任务' : 'Cycle Tasks' }}
        </h2>
        <p class="text-sm text-slate-500 mt-1">
          {{ isZh ? '每日和每周刷新任务，获取额外奖励' : 'Daily and weekly quests with bonus rewards' }}
        </p>
      </div>

      <div class="space-y-6">
        <div class="bg-blue-50 rounded-xl p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <span class="text-2xl">☀️</span>
              <h3 class="font-bold text-blue-700">
                {{ isZh ? '每日任务' : 'Daily Quests' }}
              </h3>
            </div>
            <div class="px-2 py-1 bg-blue-200 text-blue-700 text-xs font-bold rounded-lg">
              {{ isZh ? `重置: ${timeUntilReset}` : `Resets in: ${timeUntilReset}` }}
            </div>
          </div>

          <div class="space-y-2">
            <div 
              v-for="quest in dailyQuestsWithProgress" 
              :key="quest.id"
              class="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
              :class="{ 'opacity-50': quest.completed }"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                     :class="quest.completed ? 'bg-green-100' : 'bg-blue-100'">
                  {{ quest.completed ? '✅' : quest.icon }}
                </div>
                <div>
                  <div class="font-medium text-slate-700 text-sm">{{ quest.title[isZh ? 'zh' : 'en'] }}</div>
                  <div class="text-xs text-slate-500">{{ quest.description[isZh ? 'zh' : 'en'] }}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="flex gap-1 text-xs font-bold">
                  <span v-if="quest.reward.learning > 0" class="text-blue-500">+{{ quest.reward.learning }} LV</span>
                  <span v-if="quest.reward.task > 0" class="text-amber-500">+{{ quest.reward.task }} TV</span>
                </div>
                <div class="flex items-center gap-2 mt-1">
                  <div class="w-16 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-500 rounded-full transition-all"
                         :style="{ width: Math.min((quest.current / quest.target) * 100, 100) + '%' }"></div>
                  </div>
                  <span class="text-[10px] text-slate-400">{{ quest.current }}/{{ quest.target }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-blue-100">
            <div class="flex justify-between items-center">
              <span class="text-sm text-blue-600">{{ isZh ? '今日进度' : 'Daily Progress' }}</span>
              <span class="text-sm font-bold text-blue-600">{{ dailyCompleted }}/{{ dailyQuestsWithProgress.length }}</span>
            </div>
            <div class="w-full bg-blue-100 rounded-full h-2 mt-1">
              <div class="h-full bg-blue-500 rounded-full transition-all" :style="{ width: dailyProgressPercent + '%' }"></div>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 rounded-xl p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <span class="text-2xl">📊</span>
              <h3 class="font-bold text-purple-700">
                {{ isZh ? '每周任务' : 'Weekly Quests' }}
              </h3>
            </div>
            <div class="px-2 py-1 bg-purple-200 text-purple-700 text-xs font-bold rounded-lg">
              {{ isZh ? `第${weekNum}周` : `Week ${weekNum}` }}
            </div>
          </div>

          <div class="space-y-2">
            <div 
              v-for="quest in weeklyQuestsWithProgress" 
              :key="quest.id"
              class="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
              :class="{ 'opacity-50': quest.completed }"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                     :class="quest.completed ? 'bg-green-100' : 'bg-purple-100'">
                  {{ quest.completed ? '✅' : quest.icon }}
                </div>
                <div>
                  <div class="font-medium text-slate-700 text-sm">{{ quest.title[isZh ? 'zh' : 'en'] }}</div>
                  <div class="text-xs text-slate-500">{{ quest.description[isZh ? 'zh' : 'en'] }}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="flex gap-1 text-xs font-bold">
                  <span v-if="quest.reward.learning > 0" class="text-blue-500">+{{ quest.reward.learning }} LV</span>
                  <span v-if="quest.reward.task > 0" class="text-purple-500">+{{ quest.reward.task }} TV</span>
                </div>
                <div class="flex items-center gap-2 mt-1">
                  <div class="w-16 h-1.5 bg-purple-100 rounded-full overflow-hidden">
                    <div class="h-full bg-purple-500 rounded-full transition-all"
                         :style="{ width: Math.min((quest.current / quest.target) * 100, 100) + '%' }"></div>
                  </div>
                  <span class="text-[10px] text-slate-400">{{ quest.current }}/{{ quest.target }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-purple-100">
            <div class="flex justify-between items-center">
              <span class="text-sm text-purple-600">{{ isZh ? '本周进度' : 'Weekly Progress' }}</span>
              <span class="text-sm font-bold text-purple-600">{{ weeklyCompleted }}/{{ weeklyQuestsWithProgress.length }}</span>
            </div>
            <div class="w-full bg-purple-100 rounded-full h-2 mt-1">
              <div class="h-full bg-purple-500 rounded-full transition-all" :style="{ width: weeklyProgressPercent + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getDailyQuests, getWeeklyQuests } from '../data/dailyquests'

const props = defineProps({
  isZh: { type: Boolean, default: false },
  taskValue: { type: Number, default: 0 },
  dailyQuestProgress: { type: Array, default: () => [] }
})

const emit = defineEmits(['add-task'])

const timeUntilReset = ref('')
const weekNum = ref(1)

onMounted(() => {
  updateResetTime()
  setInterval(updateResetTime, 60000)
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 1)
  weekNum.value = Math.ceil(((now - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7)
})

function updateResetTime() {
  const now = new Date()
  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)
  const diff = tomorrow - now
  const hours = Math.floor(diff / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  timeUntilReset.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const dailyQuestsWithProgress = computed(() => {
  return getDailyQuests().map(quest => {
    const progress = props.dailyQuestProgress.find(p => p.questId === quest.id)
    return {
      ...quest,
      current: progress?.current || 0,
      completed: progress?.completed || false
    }
  })
})

const weeklyQuestsWithProgress = computed(() => {
  return getWeeklyQuests().map(quest => {
    const progress = props.dailyQuestProgress.find(p => p.questId === quest.id)
    return {
      ...quest,
      current: progress?.current || 0,
      completed: progress?.completed || false
    }
  })
})

const dailyCompleted = computed(() => dailyQuestsWithProgress.value.filter(q => q.completed).length)
const weeklyCompleted = computed(() => weeklyQuestsWithProgress.value.filter(q => q.completed).length)
const dailyProgressPercent = computed(() => dailyQuestsWithProgress.value.length > 0 ? (dailyCompleted.value / dailyQuestsWithProgress.value.length * 100) : 0)
const weeklyProgressPercent = computed(() => weeklyQuestsWithProgress.value.length > 0 ? (weeklyCompleted.value / weeklyQuestsWithProgress.value.length * 100) : 0)
</script>
