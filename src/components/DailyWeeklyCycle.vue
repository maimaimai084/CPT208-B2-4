<template>
  <div class="daily-weekly-container w-full">
    <div class="bg-white rounded-2xl shadow-card p-6">
      <div class="text-center mb-6">
        <div class="w-16 h-16 rounded-2xl bg-[#7FA1ED]/10 flex items-center justify-center text-3xl mx-auto mb-3 float-anim">📅</div>
        <h2 class="font-bold text-xl text-slate-700">
          {{ isZh ? '周期任务' : 'Cycle Tasks' }}
        </h2>
        <p class="text-sm text-slate-500 mt-1">
          {{ isZh ? '每日和每周刷新任务，获取额外奖励' : 'Daily and weekly quests with bonus rewards' }}
        </p>
      </div>

      <div class="space-y-6">
        <div class="bg-[#7FA1ED]/10 rounded-xl p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <span class="text-2xl">☀️</span>
              <h3 class="font-bold text-[#5B78BA]">
                {{ isZh ? '每日任务' : 'Daily Quests' }}
              </h3>
            </div>
            <div class="px-2 py-1 bg-[#7FA1ED]/20 text-[#5B78BA] text-xs font-bold rounded-lg">
              {{ isZh ? `重置: ${timeUntilReset}` : `Resets in: ${timeUntilReset}` }}
            </div>
          </div>

          <div class="space-y-2">
            <div 
              v-for="quest in dailyQuests" 
              :key="quest.id"
              class="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
              :class="{ 'opacity-50': quest.completed }"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                     :class="quest.completed ? 'bg-green-100' : 'bg-[#7FA1ED]/10'">
                  {{ quest.completed ? '✅' : quest.icon }}
                </div>
                <div>
                  <div class="font-medium text-slate-700 text-sm">{{ isZh ? quest.titleZh : quest.titleEn }}</div>
                  <div class="text-xs text-slate-500">{{ isZh ? quest.descZh : quest.descEn }}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm font-bold text-amber-500">+{{ quest.reward }} TV</div>
                <button 
                  v-if="!quest.completed"
                  @click="completeQuest(quest)"
                  class="mt-1 px-3 py-1 bg-[#7FA1ED] text-white text-xs font-bold rounded-lg hover:bg-[#5B78BA] transition-colors"
                >
                  {{ isZh ? '完成' : 'Done' }}
                </button>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-[#7FA1ED]/10">
            <div class="flex justify-between items-center">
              <span class="text-sm text-[#7FA1ED]">{{ isZh ? '今日进度' : 'Daily Progress' }}</span>
              <span class="text-sm font-bold text-[#7FA1ED]">{{ dailyCompleted }}/{{ dailyQuests.length }}</span>
            </div>
            <div class="w-full bg-[#7FA1ED]/10 rounded-full h-2 mt-1">
              <div class="h-full bg-[#7FA1ED] rounded-full transition-all" :style="{ width: (dailyCompleted / dailyQuests.length * 100) + '%' }"></div>
            </div>
          </div>
        </div>

        <div class="bg-[#E88EAF]/10 rounded-xl p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <span class="text-2xl">📊</span>
              <h3 class="font-bold text-[#B86281]">
                {{ isZh ? '每周任务' : 'Weekly Quests' }}
              </h3>
            </div>
            <div class="px-2 py-1 bg-[#E88EAF]/20 text-[#B86281] text-xs font-bold rounded-lg">
              {{ isZh ? `第${weekNum}周` : `Week ${weekNum}` }}
            </div>
          </div>

          <div class="space-y-2">
            <div 
              v-for="quest in weeklyQuests" 
              :key="quest.id"
              class="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
              :class="{ 'opacity-50': quest.completed }"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                     :class="quest.completed ? 'bg-green-100' : 'bg-[#E88EAF]/10'">
                  {{ quest.completed ? '✅' : quest.icon }}
                </div>
                <div>
                  <div class="font-medium text-slate-700 text-sm">{{ isZh ? quest.titleZh : quest.titleEn }}</div>
                  <div class="text-xs text-slate-500">{{ isZh ? quest.descZh : quest.descEn }}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm font-bold text-[#E88EAF]">+{{ quest.reward }} TV</div>
                <button 
                  v-if="!quest.completed"
                  @click="completeQuest(quest)"
                  class="mt-1 px-3 py-1 bg-[#E88EAF] text-white text-xs font-bold rounded-lg hover:bg-[#B86281] transition-colors"
                >
                  {{ isZh ? '完成' : 'Done' }}
                </button>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-[#E88EAF]/10">
            <div class="flex justify-between items-center">
              <span class="text-sm text-[#E88EAF]">{{ isZh ? '本周进度' : 'Weekly Progress' }}</span>
              <span class="text-sm font-bold text-[#E88EAF]">{{ weeklyCompleted }}/{{ weeklyQuests.length }}</span>
            </div>
            <div class="w-full bg-[#E88EAF]/10 rounded-full h-2 mt-1">
              <div class="h-full bg-[#E88EAF] rounded-full transition-all" :style="{ width: (weeklyCompleted / weeklyQuests.length * 100) + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  isZh: { type: Boolean, default: false },
  taskValue: { type: Number, default: 0 }
})

const emit = defineEmits(['add-task'])

const timeUntilReset = ref('12:00:00')
const weekNum = ref(1)

const dailyQuests = ref([
  { id: 1, icon: '📚', titleZh: '完成1个关卡', titleEn: 'Complete 1 level', descZh: '在Journey中完成任意关卡', descEn: 'Complete any level', reward: 20, completed: true },
  { id: 2, icon: '🎤', titleZh: '面试模拟1次', titleEn: 'Interview once', descZh: '进行1次面试模拟', descEn: 'Do 1 interview sim', reward: 30, completed: false },
  { id: 3, icon: '✍️', titleZh: '文书润色', titleEn: 'Edit essay', descZh: '完成文书润色任务', descEn: 'Complete essay editing', reward: 25, completed: false }
])

const weeklyQuests = ref([
  { id: 1, icon: '🎯', titleZh: '获得100 TV', titleEn: 'Earn 100 TV', descZh: '累计获得100 Task Value', descEn: 'Earn 100 total TV', reward: 100, completed: false },
  { id: 2, icon: '🔥', titleZh: '连续登录3天', titleEn: 'Login 3 days', descZh: '保持3天连续登录', descEn: 'Login for 3 days', reward: 50, completed: false },
  { id: 3, icon: '📖', titleZh: '完成5个关卡', titleEn: 'Complete 5 levels', descZh: '在Journey中完成5个关卡', descEn: 'Complete 5 levels', reward: 80, completed: false }
])

const dailyCompleted = computed(() => dailyQuests.value.filter(q => q.completed).length)
const weeklyCompleted = computed(() => weeklyQuests.value.filter(q => q.completed).length)

function completeQuest(quest) {
  quest.completed = true
  emit('add-task', { tv: quest.reward })
}
</script>