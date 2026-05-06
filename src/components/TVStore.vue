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

      <!-- Reset Button -->
      <div class="flex justify-end mb-2">
        <button
          @click="confirmReset"
          class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-rose-500 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-all">
          <span>🔄</span>
          {{ isZh ? '重置商店' : 'Reset Store' }}
        </button>
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
                    {{ getLimitText(item) }}
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

    <!-- Reset Confirmation Modal -->
    <Transition name="toast">
      <div v-if="showResetConfirm" class="fixed inset-0 z-[200] flex items-center justify-center bg-black/40">
        <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-[90%] text-center">
          <div class="text-4xl mb-3">⚠️</div>
          <h3 class="font-bold text-lg text-slate-700 mb-2">
            {{ isZh ? '确认重置商店？' : 'Reset Store?' }}
          </h3>
          <p class="text-sm text-slate-500 mb-1">
            {{ isZh ? '以下内容将被重置：' : 'The following will be reset:' }}
          </p>
          <ul class="text-xs text-slate-500 text-left mb-4 space-y-1 px-4">
            <li>• {{ isZh ? '所有已购道具数量归零' : 'All purchased item counts reset to zero' }}</li>
            <li>• {{ isZh ? '日/周购买限制归零' : 'Daily/weekly purchase limits reset' }}</li>
            <li>• {{ isZh ? '已花费 TV 不退还' : 'Spent TV will NOT be refunded' }}</li>
          </ul>
          <div class="flex gap-3 justify-center">
            <button
              @click="showResetConfirm = false"
              class="px-5 py-2 rounded-xl text-sm font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all">
              {{ isZh ? '取消' : 'Cancel' }}
            </button>
            <button
              @click="doReset"
              class="px-5 py-2 rounded-xl text-sm font-bold bg-rose-500 text-white hover:bg-rose-600 shadow-[0_3px_0_#9F1239] active:translate-y-[3px] active:shadow-none transition-all">
              {{ isZh ? '确认重置' : 'Confirm Reset' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>

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
  inventory: { type: Object, default: () => ({ heartRefills: 0, hintTokens: 0, xpBoostCount: 0, timeFreezes: 0, xpBoostExpiry: null }) },
  purchaseLimits: { type: Object, default: () => ({ heartRefillDaily: 0, xpBoostWeekly: 0 }) }
})

const emit = defineEmits(['purchase', 'resetStore'])

const showToast = ref(false)
const toastMessage = ref('')
const toastIcon = ref('✅')
const showResetConfirm = ref(false)

const shopItems = [
  {
    id: 'heart-refill',
    icon: '❤️',
    nameEn: 'Heart Refill',
    nameZh: '心形补充',
    descEn: 'Refill 1 heart in TV Quests when you run out',
    descZh: 'TV Quest 心耗尽时补充 1 颗',
    price: 50,
    limit: 3,
    limitType: 'daily'
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
    limit: 1,
    limitType: 'weekly'
  },
  {
    id: 'time-freeze',
    icon: '⏱️',
    nameEn: 'Time Freeze',
    nameZh: '时间冻结',
    descEn: 'Pause timer for 10 seconds in timed TV Quests',
    descZh: '计时类 TV Quest 暂停 10 秒',
    price: 40,
    limit: 0,
    limitType: 'none'
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
  if (item.id === 'heart-refill') {
    return (props.purchaseLimits?.heartRefillDaily || 0) < item.limit
  }
  if (item.id === 'xp-boost-24h') {
    const weeklyRemain = (props.purchaseLimits?.xpBoostWeekly || 0) < item.limit
    return weeklyRemain && !xpBoostActive.value
  }
  return true
}

function getLimitText(item) {
  if (item.id === 'heart-refill') {
    const used = props.purchaseLimits?.heartRefillDaily || 0
    const remain = Math.max(0, item.limit - used)
    return props.isZh ? `日剩余 ${remain}/${item.limit}` : `Daily left ${remain}/${item.limit}`
  }
  if (item.id === 'xp-boost-24h') {
    const used = props.purchaseLimits?.xpBoostWeekly || 0
    const remain = Math.max(0, item.limit - used)
    return props.isZh ? `周剩余 ${remain}/${item.limit}` : `Weekly left ${remain}/${item.limit}`
  }
  return props.isZh ? '无限' : 'Unlimited'
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

function confirmReset() {
  showResetConfirm.value = true
}

function doReset() {
  showResetConfirm.value = false
  emit('resetStore')
  toastIcon.value = '🔄'
  toastMessage.value = props.isZh ? '商店已重置！' : 'Store has been reset!'
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
