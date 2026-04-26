<template>
  <div class="gear-shop">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-2xl font-black text-slate-700 tracking-tight drop-shadow-sm">
          {{ isZh ? '装备商店' : 'Gear Shop' }}
        </h2>
        <p class="text-sm text-slate-500 font-medium mt-1">
          {{ isZh ? '用学习养分升级你的背景配置' : 'Upgrade your profile with Learning Value' }}
        </p>
      </div>
      <div class="text-sm font-bold text-[#7FA1ED] bg-[#7FA1ED]/15 px-4 py-2 rounded-xl border border-[#7FA1ED]/30 backdrop-blur-sm">
        🛒 TV {{ isZh ? '加成' : 'Bonus' }}: +{{ (totalTVBonus * 100).toFixed(0) }}%
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div v-for="gear in GEAR_CONFIG" :key="gear.id"
           class="bg-white rounded-2xl border-2 p-4 transition-all duration-300"
           :class="getGearCardClass(gear)">
        <div class="flex items-start justify-between mb-3">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                 :class="getGearIconBgClass(gear)">
              {{ gear.icon }}
            </div>
            <div>
              <h3 class="font-bold text-slate-700">{{ gear.name[isZh ? 'zh' : 'en'] }}</h3>
              <p class="text-xs text-slate-500">{{ gear.description[isZh ? 'zh' : 'en'] }}</p>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-400">{{ isZh ? '当前等级' : 'Current' }}:</span>
            <span class="font-bold text-lg text-slate-700">
              {{ getGearLevelLabel(gear, gearState[gear.id], isZh) }}
            </span>
          </div>
          <div v-if="gearState[gear.id] < gear.maxLevel" class="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">
            +{{ (gear.tvBonus[gearState[gear.id]] * 100).toFixed(0) }}% TV
          </div>
        </div>

        <div class="w-full bg-slate-100 rounded-full h-2 mb-3 overflow-hidden">
          <div class="h-full rounded-full transition-all duration-500"
               :class="getProgressBarClass(gear)"
               :style="{ width: `${(gearState[gear.id] / gear.maxLevel) * 100}%` }"></div>
        </div>

        <button @click="handleUpgrade(gear)"
                :disabled="!canUpgrade(gear)"
                class="w-full py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                :class="getUpgradeButtonClass(gear)">
          <template v-if="gearState[gear.id] >= gear.maxLevel">
            {{ isZh ? '已满级' : 'MAX' }} ✓
          </template>
          <template v-else-if="canUpgrade(gear)">
            ↑ {{ isZh ? '升级' : 'Upgrade' }} (-{{ gear.prices[gearState[gear.id] + 1] }} LV)
          </template>
          <template v-else>
            🔒 {{ isZh ? '需要' : 'Need' }} {{ gear.prices[gearState[gear.id] + 1] }} LV
          </template>
        </button>
      </div>
    </div>

    <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100">
      <h3 class="font-bold text-slate-700 mb-3 flex items-center gap-2">
        <span>📦</span>
        <span>{{ isZh ? '背包' : 'Inventory' }}</span>
      </h3>
      <div class="flex flex-wrap gap-3">
        <div v-for="gear in GEAR_CONFIG" :key="gear.id"
             class="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
          <span class="text-lg">{{ gear.icon }}</span>
          <span class="text-sm font-medium text-slate-600">
            {{ gear.name[isZh ? 'zh' : 'en'] }}:
          </span>
          <span class="text-sm font-bold text-[#7FA1ED]">
            {{ getGearLevelLabel(gear, gearState[gear.id], isZh) }}
          </span>
        </div>
      </div>
    </div>

    <div v-if="showToast" class="toast" :class="toastClass">
      {{ toastMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { 
  GEAR_CONFIG, 
  getGearLevelLabel,
  canUpgradeGear as checkCanUpgrade,
  calculateTVBonus
} from '../data/gearConfig'

const props = defineProps({
  learningValue: {
    type: Number,
    default: 0
  },
  gearState: {
    type: Object,
    default: () => ({})
  },
  isZh: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['upgrade-gear', 'update-gear'])

const showToast = ref(false)
const toastMessage = ref('')
const toastClass = ref('')

const gearState = computed(() => {
  const state = {}
  GEAR_CONFIG.forEach(gear => {
    state[gear.id] = props.gearState[gear.id] || 0
  })
  return state
})

const totalTVBonus = computed(() => {
  return calculateTVBonus(gearState.value)
})

function getGearCardClass(gear) {
  const level = gearState.value[gear.id] || 0
  if (level >= gear.maxLevel) {
    return 'border-[#10B981] bg-[#10B981]/5'
  }
  if (level > 0) {
    return 'border-[#7FA1ED]'
  }
  return 'border-slate-200'
}

function getGearIconBgClass(gear) {
  const level = gearState.value[gear.id] || 0
  if (level >= gear.maxLevel) {
    return 'bg-[#10B981]/20 text-[#10B981]'
  }
  if (level > 0) {
    return 'bg-[#7FA1ED]/20 text-[#7FA1ED]'
  }
  return 'bg-slate-100 text-slate-400'
}

function getProgressBarClass(gear) {
  const level = gearState.value[gear.id] || 0
  if (level >= gear.maxLevel) {
    return 'bg-[#10B981]'
  }
  if (level > 0) {
    return 'bg-[#7FA1ED]'
  }
  return 'bg-slate-300'
}

function canUpgrade(gear) {
  const level = gearState.value[gear.id] || 0
  return checkCanUpgrade(gear, level, props.learningValue)
}

function getUpgradeButtonClass(gear) {
  if (gearState.value[gear.id] >= gear.maxLevel) {
    return 'bg-slate-100 text-slate-400 cursor-not-allowed'
  }
  if (canUpgrade(gear)) {
    return 'bg-[#7FA1ED] hover:bg-[#6B91DD] text-white shadow-[0_4px_0_#5B78BA] active:translate-y-[4px] active:shadow-none'
  }
  return 'bg-slate-100 text-slate-400 cursor-not-allowed'
}

function handleUpgrade(gear) {
  const level = gearState.value[gear.id] || 0
  
  if (!canUpgrade(gear)) {
    showToastMessage(isZh ? '学习养分不足' : 'Not enough Learning Value')
    toastClass.value = 'bg-red-500 text-white'
    showToast.value = true
    setTimeout(() => { showToast.value = false }, 2000)
    return
  }

  const price = gear.prices[level + 1]
  
  const newState = { ...gearState.value, [gear.id]: level + 1 }
  emit('upgrade-gear', { gearId: gear.id, newLevel: level + 1, cost: price })
  emit('update-gear', newState)

  showToastMessage(isZh ? `升级成功！${gear.name.zh} → ${gear.levels[level][isZh ? 'zh' : 'en']}` : `Upgraded! ${gear.name.en} → ${gear.levels[level].en}`)
  toastClass.value = 'bg-[#10B981] text-white'
  showToast.value = true
  setTimeout(() => { showToast.value = false }, 2000)
}
</script>

<style scoped>
.gear-shop {
  font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif;
}

.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 200;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
</style>