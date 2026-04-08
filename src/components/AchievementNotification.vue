<template>
  <Transition name="slide-up">
    <div v-if="achievement" 
         class="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50">
      <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-in">
        <div class="text-4xl">{{ achievement.icon }}</div>
        <div>
          <div class="text-xs font-medium opacity-90 uppercase tracking-wide">Achievement Unlocked!</div>
          <div class="text-lg font-bold">{{ achievement.name }}</div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
/**
 * 成就解锁通知组件
 * 在解锁成就时显示弹出通知
 */

defineProps({
  achievement: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])
</script>

<style scoped>
/* 滑入动画 */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translate(-50%, 20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}

/* 弹跳进入动画 */
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-bounce-in {
  animation: bounceIn 0.6s ease-out;
}
</style>
