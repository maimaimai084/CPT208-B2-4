<template>
  <div class="space-y-6">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="text-lg">☀️</span>
        <h3 class="font-bold text-sm uppercase tracking-wider text-slate-700">
          {{ isZh ? '每日任务' : 'Daily Quests' }}
        </h3>
        <span class="text-xs text-slate-400 ml-auto">
          {{ dailyCompleted }}/{{ dailyQuests.length }}
        </span>
      </div>
      <div class="space-y-3">
        <div v-for="quest in dailyQuests" :key="quest.id"
             class="bg-white rounded-xl border p-4 transition-all"
             :class="quest.completed ? 'border-emerald-200 bg-emerald-50/40' : 'border-slate-200'">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                 :class="quest.completed ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'">
              {{ quest.completed ? '✅' : quest.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <h4 class="font-semibold text-sm" :class="quest.completed ? 'text-emerald-800' : 'text-slate-800'">
                  {{ quest.title[isZh ? 'zh' : 'en'] }}
                </h4>
                <span v-if="quest.completed" class="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {{ isZh ? '已完成' : 'Done' }}
                </span>
              </div>
              <p class="text-xs text-slate-500 mb-2">{{ quest.description[isZh ? 'zh' : 'en'] }}</p>
              <div class="flex items-center gap-2">
                <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-500"
                       :class="quest.completed ? 'bg-emerald-500' : 'bg-[#7FA1ED]'"
                       :style="{ width: Math.min((quest.current / quest.target) * 100, 100) + '%' }"></div>
                </div>
                <span class="text-xs font-medium text-slate-600 w-16 text-right">
                  {{ quest.current }}/{{ quest.target }}
                </span>
              </div>
              <div class="flex gap-2 mt-2 text-[11px]">
                <span v-if="quest.reward.learning > 0" class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                  <span class="w-1 h-1 rounded-full bg-[#7FA1ED]"></span>
                  +{{ quest.reward.learning }} LV
                </span>
                <span v-if="quest.reward.task > 0" class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-700">
                  <span class="w-1 h-1 rounded-full bg-amber-500"></span>
                  +{{ quest.reward.task }} TV
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="text-lg">📊</span>
        <h3 class="font-bold text-sm uppercase tracking-wider text-purple-700">
          {{ isZh ? '每周任务' : 'Weekly Quests' }}
        </h3>
        <span class="text-xs text-slate-400 ml-auto">
          {{ weeklyCompleted }}/{{ weeklyQuests.length }}
        </span>
      </div>
      <div class="space-y-3">
        <div v-for="quest in weeklyQuests" :key="quest.id"
             class="bg-white rounded-xl border p-4 transition-all"
             :class="quest.completed ? 'border-purple-200 bg-purple-50/40' : 'border-slate-200'">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                 :class="quest.completed ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500'">
              {{ quest.completed ? '✅' : quest.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <h4 class="font-semibold text-sm" :class="quest.completed ? 'text-purple-800' : 'text-slate-800'">
                  {{ quest.title[isZh ? 'zh' : 'en'] }}
                </h4>
                <span v-if="quest.completed" class="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
                  {{ isZh ? '已完成' : 'Done' }}
                </span>
              </div>
              <p class="text-xs text-slate-500 mb-2">{{ quest.description[isZh ? 'zh' : 'en'] }}</p>
              <div class="flex items-center gap-2">
                <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-500"
                       :class="quest.completed ? 'bg-purple-500' : 'bg-[#A78BFA]'"
                       :style="{ width: Math.min((quest.current / quest.target) * 100, 100) + '%' }"></div>
                </div>
                <span class="text-xs font-medium text-slate-600 w-16 text-right">
                  {{ quest.current }}/{{ quest.target }}
                </span>
              </div>
              <div class="flex gap-2 mt-2 text-[11px]">
                <span v-if="quest.reward.learning > 0" class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                  <span class="w-1 h-1 rounded-full bg-[#7FA1ED]"></span>
                  +{{ quest.reward.learning }} LV
                </span>
                <span v-if="quest.reward.task > 0" class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-700">
                  <span class="w-1 h-1 rounded-full bg-amber-500"></span>
                  +{{ quest.reward.task }} TV
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getDailyQuests, getWeeklyQuests } from '../data/dailyquests'

const props = defineProps({
  dailyQuestProgress: {
    type: Array,
    default: () => []
  },
  isZh: {
    type: Boolean,
    default: false
  }
})

const dailyQuests = computed(() => {
  return getDailyQuests().map(quest => {
    const progress = props.dailyQuestProgress.find(p => p.questId === quest.id)
    return {
      ...quest,
      current: progress?.current || 0,
      completed: progress?.completed || false
    }
  })
})

const weeklyQuests = computed(() => {
  return getWeeklyQuests().map(quest => {
    const progress = props.dailyQuestProgress.find(p => p.questId === quest.id)
    return {
      ...quest,
      current: progress?.current || 0,
      completed: progress?.completed || false
    }
  })
})

const dailyCompleted = computed(() => dailyQuests.value.filter(q => q.completed).length)
const weeklyCompleted = computed(() => weeklyQuests.value.filter(q => q.completed).length)
</script>
