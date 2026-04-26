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
        <div class="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2">
          <span class="text-xs text-slate-500">
            🎮 {{ isZh ? '演示模式：可随时重置限制' : 'Demo Mode: Reset limits anytime' }}
          </span>
          <button @click="resetDemoLimits" class="text-xs bg-white hover:bg-amber-50 border border-amber-200 text-amber-600 px-2.5 py-1 rounded-lg transition-colors font-medium">
            🔄 {{ isZh ? '重置限制' : 'Reset Limits' }}
          </button>
        </div>

        <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <h3 class="font-bold text-sm mb-3 text-amber-700">
            {{ isZh ? '📋 选择任务类型' : '📋 Select Quest Type' }}
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <button 
              @click="startQuest('interview')"
              class="bg-white rounded-xl p-4 shadow-sm border-2 border-transparent hover:border-amber-400 hover:shadow-md transition-all text-center"
            >
              <div class="text-3xl mb-2">🎤</div>
              <div class="font-bold text-slate-700 text-sm">
                {{ isZh ? '面试模拟' : 'Interview Sim' }}
              </div>
              <div class="text-xs text-slate-500 mt-1">
                +{{ isZh ? '30-60 TV' : '30-60 TV' }}
              </div>
            </button>
            <button 
              @click="startQuest('essay')"
              class="bg-white rounded-xl p-4 shadow-sm border-2 border-transparent hover:border-amber-400 hover:shadow-md transition-all text-center"
            >
              <div class="text-3xl mb-2">✍️</div>
              <div class="font-bold text-slate-700 text-sm">
                {{ isZh ? '文书润色' : 'Essay Editing' }}
              </div>
              <div class="text-xs text-slate-500 mt-1">
                +{{ isZh ? '20-40 TV' : '20-40 TV' }}
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
              <div class="font-bold text-amber-600">{{ gearState.experience || 1 }}</div>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InterviewSim from './InterviewSim.vue'
import PSWorkshop from './PSWorkshop.vue'
import { resetAllCooldowns } from '../utils/CooldownManager'

const props = defineProps({
  gearState: { type: Object, default: () => ({}) },
  isZh: { type: Boolean, default: false }
})

const emit = defineEmits(['complete'])

const activeQuest = ref(null)

function startQuest(type) {
  activeQuest.value = type
}

function handleComplete(data) {
  emit('complete', data)
  activeQuest.value = null
}

function resetDemoLimits() {
  resetAllCooldowns()
  alert(isZh ? '演示限制已重置！现在可以再次体验所有任务。' : 'Demo limits reset! You can now try all quests again.')
}
</script>