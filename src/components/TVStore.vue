<template>
  <div class="tv-store-container w-full">
    <div class="bg-white rounded-2xl shadow-card p-6">
      <!-- Header -->
      <div class="text-center mb-6">
        <div class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl mx-auto mb-3 float-anim">
          🏪
        </div>
        <h2 class="font-bold text-xl text-slate-700">
          {{ isZh ? 'TV 商店' : 'TV Store' }}
        </h2>
        <p class="text-sm text-slate-500 mt-1">
          {{ isZh ? '消费 Task Value，获取强力道具' : 'Spend Task Value for powerful boosts' }}
        </p>
        <div class="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
          <span class="text-amber-500 font-bold text-lg">{{ taskValue }}</span>
          <span class="text-amber-600 text-xs font-bold uppercase">TV</span>
        </div>
      </div>

      <!-- Inventory -->
      <div class="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
        <h3 class="font-bold text-sm mb-3 text-slate-600">
          {{ isZh ? '🎒 我的道具' : '🎒 My Items' }}
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="bg-white rounded-xl p-3 text-center border border-slate-200">
            <div class="text-2xl mb-1">❤️</div>
            <div class="text-xs text-slate-500">{{ isZh ? '心' : 'Hearts' }}</div>
            <div class="font-bold text-slate-700">{{ inventory.heartRefills }}</div>
          </div>
          <div class="bg-white rounded-xl p-3 text-center border border-slate-200">
            <div class="text-2xl mb-1">💡</div>
            <div class="text-xs text-slate-500">{{ isZh ? '提示' : 'Hints' }}</div>
            <div class="font-bold text-slate-700">{{ inventory.hintTokens }}</div>
          </div>
          <div class="bg-white rounded-xl p-3 text-center border border-slate-200"
               :class="xpBoostActive ? 'border-emerald-300 bg-emerald-50' : ''">
            <div class="text-2xl mb-1">⚡</div>
            <div class="text-xs text-slate-500">{{ isZh ? '双倍' : 'Boost' }}</div>
            <div class="font-bold" :class="xpBoostActive ? 'text-emerald-600' : 'text-slate-700'">
              {{ xpBoostActive ? (isZh ? '激活中' : 'Active') : inventory.xpBoostCount }}
            </div>
          </div>
          <div class="bg-white rounded-xl p-3 text-center border border-slate-200">
            <div class="text-2xl mb-1">⏱️</div>
            <div class="text-xs text-slate-500">{{ isZh ? '时停' : 'Freeze' }}</div>
            <div class="font-bold text-slate-700">{{ inventory.timeFreezes }}</div>
          </div>
        </div>
      </div>

      <!-- Shop Items -->
      <div class="space-y-4">
        <h3 class="font-bold text-sm text-slate-600">
          {{ isZh ? '🛒 商品列表' : '🛒 Shop Items' }}
        </h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="item in shopItems" :key="item.id"
               class="bg-white rounded-xl p-4 border-2 transition-all"
               :class="canAfford(item.price) ? 'border-slate-200 hover:border-amber-300' : 'border-slate-100 opacity-60'">
            <div class="flex items-start gap-3">
              <div class="text-3xl">{{ item.icon }}</div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <h4 class="font-bold text-slate-700 text-sm">{{ isZh ? item.nameZh : item.nameEn }}</h4>
                  <span class="text-amber-600 font-bold text-sm">{{ item.price }} TV</span>
                </div>
                <p class="text-xs text-slate-500 mt-1">{{ isZh ? item.descZh : item.descEn }}</p>
                <div class="flex items-center justify-between mt-3">
                  <span class="text-[10px] text-slate-400">
                    {{ item.limit > 0 ? (isZh ? `每日限${item.limit}个` : `Daily limit: ${item.limit}`) : (isZh ? '无限' : 'Unlimited') }}
                  </span>
                  <button 
                    @click="buyItem(item)"
                    :disabled="!canAfford(item.price) || !canBuy(item)"
                    class="px-4 py-1.5 rounded-lg text-xs font-bold transition-all"
                    :class="canAfford(item.price) && canBuy(item) 
                      ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-[0_2px_0_#B45309] active:translate-y-[2px] active:shadow-none'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'">
                    {{ isZh ? '购买' : 'Buy' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Purchase Toast -->
    <Transition name="toast">
      <div v-if="showToast" class="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-white border-2 border-emerald-200 rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 max-w-md">
        <span class="text-2xl">{{ toastIcon }}</span>
        <span class="text-sm font-bold text-emerald-700">{{ toastMessage }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  taskValue: { type: Number, default: 0 },
  isZh: { type: Boolean, default: false },
  inventory: { type: Object, default: () => ({ heartRefills: 0, hintTokens: 0, xpBoostCount: 0, timeFreezes: 0, xpBoostExpiry: null }) }
})

const emit = defineEmits(['purchase'])

const showToast = ref(false)
const toastMessage = ref('')
const toastIcon = ref('✅')

const shopItems = [
  {
    id: 'heart-refill',
    icon: '❤️',
    nameEn: 'Heart Refill',
    nameZh: '心形补充',
    descEn: 'Refill 1 heart in TV Quests when you run out',
    descZh: 'TV Quest 心耗尽时补充 1 颗',
    price: 50,
    limit: 3
  },
  {
    id: 'hint-token',
    icon: '💡',
    nameEn: 'Hint Token',
    nameZh: '提示令牌',
    descEn: 'Remove one wrong option in Journey quiz',
    descZh: 'Journey 答题时排除一个错误选项',
    price: 30,
    limit: 0
  },
  {
    id: 'xp-boost-24h',
    icon: '⚡',
    nameEn: '24h LV Boost',
    nameZh: '24小时 LV 加成',
    descEn: '+50% Learning Value from Journey for 24 hours',
    descZh: '24小时内 Journey 获得 LV +50%',
    price: 100,
    limit: 0
  },
  {
    id: 'time-freeze',
    icon: '⏱️',
    nameEn: 'Time Freeze',
    nameZh: '时间冻结',
    descEn: 'Pause timer for 10 seconds in timed TV Quests',
    descZh: '计时类 TV Quest 暂停 10 秒',
    price: 40,
    limit: 0
  }
]

const xpBoostActive = computed(() => {
  if (!props.inventory.xpBoostExpiry) return false
  return new Date(props.inventory.xpBoostExpiry) > new Date()
})

function canAfford(price) {
  return props.taskValue >= price
}

function canBuy(item) {
  if (item.id === 'heart-refill' && item.limit > 0) {
    // Simple daily limit check - in real implementation, track daily purchases
    return true
  }
  if (item.id === 'xp-boost-24h') {
    return !xpBoostActive.value
  }
  return true
}

function buyItem(item) {
  if (!canAfford(item.price) || !canBuy(item)) return
  
  emit('purchase', {
    itemId: item.id,
    price: item.price
  })
  
  toastIcon.value = item.icon
  toastMessage.value = props.isZh 
    ? `购买了 ${item.nameZh}！-${item.price} TV`
    : `Purchased ${item.nameEn}! -${item.price} TV`
  showToast.value = true
  setTimeout(() => { showToast.value = false }, 2500)
}
</script>

<style scoped>
.shadow-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.float-anim {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.toast-enter-active, .toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from, .toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>
