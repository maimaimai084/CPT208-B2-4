<template>
  <div class="quest-hub-container w-full">
    <div class="bg-white rounded-2xl shadow-card p-6">
      <div class="text-center mb-6">
        <div class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl mx-auto mb-3 float-anim">🎯</div>
        <h2 class="font-bold text-xl text-slate-700">
          {{ isZh ? 'TV任务中心' : 'TV Quest Hub' }}
        </h2>
        <p class="text-sm text-slate-500 mt-1">
          {{ isZh ? '积累Task Value，为面试做准备' : 'Accumulate Task Value for interview preparation' }}
        </p>
      </div>

      <div v-if="!activeQuest" class="space-y-4">
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-4">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div class="flex items-center gap-2 text-sm text-amber-700">
              <span class="text-lg">🎮</span>
              <span class="font-medium">{{ isZh ? '每日限制：每天可完成2项任务，更多可获得奖励' : 'Daily limit: 2 quests/day. Do more for bonus rewards!' }}</span>
            </div>
            <button @click="resetDemoLimits"
                    class="w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow-[0_3px_0_#B45309] active:translate-y-[3px] active:shadow-none transition-all flex items-center justify-center gap-2">
              🔄 {{ isZh ? '重置限制 (测试用)' : 'Reset Limits (Testing)' }}
            </button>
          </div>
        </div>

        <div v-if="isExplorerRole" class="bg-blue-50 rounded-xl p-3 border border-blue-200 text-center">
          <span class="text-blue-600 text-sm font-medium">🌱 {{ isZh ? 'Explorer 专属：材料速查 & 时间线拼图已解锁！' : 'Explorer Exclusive: Document Rush & Timeline Puzzle unlocked!' }}</span>
        </div>
        <div v-else class="bg-orange-50 rounded-xl p-3 border border-orange-200 text-center">
          <span class="text-orange-600 text-sm font-medium">🚀 {{ isZh ? 'Sprint 专属：选校配对 & 邮件重组已解锁！' : 'Sprint Exclusive: School Matcher & Email Scramble unlocked!' }}</span>
        </div>

        <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <h3 class="font-bold text-sm mb-3 text-amber-700">
            {{ isZh ? '📋 选择任务类型' : '📋 Select Quest Type' }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <button v-for="quest in questList" :key="quest.id"
                    @click="startQuest(quest.id)"
                    class="bg-white rounded-xl p-4 shadow-sm border-2 border-transparent hover:border-amber-400 hover:shadow-md transition-all text-center group relative">
              <div v-if="quest.exclusive" class="absolute -top-1.5 -right-1.5 text-xs px-1.5 py-0.5 rounded-full font-bold"
                   :class="isExplorerRole ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white'">
                {{ isZh ? '专属' : 'EXCL' }}
              </div>
              <div class="text-3xl mb-2">{{ quest.icon }}</div>
              <div class="font-bold text-slate-700 text-sm">
                {{ isZh ? quest.nameZh : quest.nameEn }}
              </div>
              <div class="text-xs text-slate-500 mt-1">
                +{{ quest.tvRange }} TV
              </div>
            </button>
          </div>
        </div>

        <div class="bg-slate-50 rounded-xl p-4">
          <h3 class="font-bold text-sm mb-3 text-slate-600">
            {{ isZh ? '📊 当前装备加成' : '📊 Gear Bonuses' }}
          </h3>
          <div class="grid grid-cols-4 gap-2 text-center text-xs">
            <div class="bg-teal-50 rounded-lg p-2">
              <div class="text-lg">🗣️</div>
              <div class="font-bold text-teal-600">{{ gearState.ielts || 6.0 }}</div>
            </div>
            <div class="bg-[#E88EAF]/10 rounded-lg p-2">
              <div class="text-lg">📝</div>
              <div class="font-bold text-[#E88EAF]">{{ gearState.gpa || '3.0' }}</div>
            </div>
            <div class="bg-green-50 rounded-lg p-2">
              <div class="text-lg">🏆</div>
              <div class="font-bold text-green-600">{{ gearState.ranking || '30%' }}</div>
            </div>
            <div class="bg-amber-50 rounded-lg p-2">
              <div class="text-lg">💼</div>
              <div class="font-bold text-amber-600">{{ gearState.internship || 1 }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="quest-interface">
        <div v-if="activeQuest === 'interview'">
          <InterviewSim :gear-state="gearState" :is-zh="isZh" @complete="handleComplete" @exit="activeQuest = null" />
        </div>
        <div v-else-if="activeQuest === 'essay'">
          <PSWorkshop :gear-state="gearState" :is-zh="isZh" @complete="handleComplete" @exit="activeQuest = null" />
        </div>
        <div v-else-if="activeQuest === 'document-rush'">
          <DocumentRush :is-zh="isZh" @complete="handleComplete" @exit="activeQuest = null" />
        </div>
        <div v-else-if="activeQuest === 'school-matcher'">
          <SchoolMatcher :is-zh="isZh" @complete="handleComplete" @exit="activeQuest = null" />
        </div>
        <div v-else-if="activeQuest === 'timeline-puzzle'">
          <TimelinePuzzle :is-zh="isZh" @complete="handleComplete" @exit="activeQuest = null" />
        </div>
        <div v-else-if="activeQuest === 'email-scramble'">
          <EmailScramble :is-zh="isZh" @complete="handleComplete" @exit="activeQuest = null" />
        </div>
      </div>
    </div>
  </div>
  <Transition name="toast">
    <div v-if="showResetToast" class="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-white border-2 border-emerald-200 rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 max-w-md">
      <span class="text-2xl">✅</span>
      <span class="text-sm font-bold text-emerald-700">{{ resetToastMsg }}</span>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed } from 'vue'
import InterviewSim from './InterviewSim.vue'
import PSWorkshop from './PSWorkshop.vue'
import DocumentRush from './DocumentRush.vue'
import SchoolMatcher from './SchoolMatcher.vue'
import TimelinePuzzle from './TimelinePuzzle.vue'
import EmailScramble from './EmailScramble.vue'
import { resetAllCooldowns } from '../utils/CooldownManager'

const props = defineProps({
  gearState: { type: Object, default: () => ({}) },
  isZh: { type: Boolean, default: false },
  userRole: { type: String, default: 'confused' }
})

const emit = defineEmits(['complete'])

const activeQuest = ref(null)

const isExplorerRole = computed(() => props.userRole === 'confused' || props.userRole === 'explorer')

const allQuests = [
  { id: 'interview', icon: '🎤', nameEn: 'Interview Sim', nameZh: '面试模拟', tvRange: '30-60', exclusive: false },
  { id: 'essay', icon: '✍️', nameEn: 'Essay Workshop', nameZh: '文书工作坊', tvRange: '20-40', exclusive: false },
  { id: 'document-rush', icon: '📄', nameEn: 'Document Rush', nameZh: '材料速查', tvRange: '15-30', exclusive: 'explorer' },
  { id: 'school-matcher', icon: '🎯', nameEn: 'School Matcher', nameZh: '选校配对', tvRange: '25-50', exclusive: 'sprint' },
  { id: 'timeline-puzzle', icon: '📅', nameEn: 'Timeline Puzzle', nameZh: '时间线拼图', tvRange: '20-40', exclusive: 'explorer' },
  { id: 'email-scramble', icon: '✉️', nameEn: 'Email Scramble', nameZh: '邮件重组', tvRange: '15-30', exclusive: 'sprint' }
]

const questList = computed(() => {
  return allQuests.filter(q => {
    if (q.exclusive === false) return true
    if (q.exclusive === 'explorer' && isExplorerRole.value) return true
    if (q.exclusive === 'sprint' && !isExplorerRole.value) return true
    return false
  })
})

function startQuest(type) {
  activeQuest.value = type
}

const questTypeMap = {
  'interview': 'interview',
  'essay': 'ps',
  'document-rush': 'minigame',
  'school-matcher': 'minigame',
  'timeline-puzzle': 'minigame',
  'email-scramble': 'minigame'
}

function handleComplete(data) {
  const questType = questTypeMap[activeQuest.value] || 'minigame'
  emit('complete', { ...data, type: questType })
  activeQuest.value = null
}

const showResetToast = ref(false)
const resetToastMsg = ref('')

function resetDemoLimits() {
  resetAllCooldowns()
  resetToastMsg.value = props.isZh ? '✅ 限制已重置！现在可以再次体验所有任务。' : '✅ Limits reset! You can try all quests again.'
  showResetToast.value = true
  setTimeout(() => { showResetToast.value = false }, 3000)
}
</script>
