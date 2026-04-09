<template>
  <div class="game-dashboard">
    <!-- Header with User Info and Actions -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
      <div class="flex items-center justify-between">
        <!-- User Info -->
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl text-white font-bold">
            {{ userName.charAt(0).toUpperCase() }}
          </div>
          <div>
            <h3 class="font-bold text-gray-900">{{ userName }}</h3>
            <span class="px-2 py-0.5 rounded-full text-xs font-medium"
                  :class="userRole === 'confused' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'">
              {{ userRole === 'confused' ? 'Explorer' : 'Sprint' }}
            </span>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex items-center gap-2">
          <button @click="$emit('switch-role')"
                  class="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-medium transition-all">
            <span>🔄</span>
            <span>Switch Role</span>
          </button>
          <button @click="$emit('show-advisor')"
                  class="flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-xl text-sm font-medium transition-all">
            <span>👨‍💼</span>
            <span>Advisor</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Dual Value Dashboard -->
    <div class="grid md:grid-cols-2 gap-4 mb-8">
      <!-- Learning Value Card -->
      <div class="bg-white rounded-2xl shadow-sm border border-blue-100 p-5 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-2xl">📚</span>
              <span class="font-semibold text-gray-700">Learning Value</span>
            </div>
            <span class="text-3xl font-bold text-blue-600">{{ animatedLearning }}</span>
          </div>
          
          <!-- Progress Bar with Stars -->
          <div class="relative h-3 bg-gray-100 rounded-full overflow-hidden">
            <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500" 
                 :style="{ width: Math.min((learningValue / 100) * 100, 100) + '%' }"></div>
            <div class="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-[10px]">⭐</div>
            <div class="absolute top-1/2 left-1/2 transform -translate-y-1/2 text-[10px]">⭐</div>
            <div class="absolute top-1/2 left-3/4 transform -translate-y-1/2 text-[10px]">⭐</div>
          </div>
          
          <div class="flex justify-between mt-2 text-xs text-gray-500">
            <span>0</span>
            <span class="text-blue-600 font-medium">Next unlock: 100 pts</span>
            <span>100</span>
          </div>
        </div>
      </div>

      <!-- Task Value Card -->
      <div class="bg-white rounded-2xl shadow-sm border border-orange-100 p-5 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-2xl">✅</span>
              <span class="font-semibold text-gray-700">Task Value</span>
            </div>
            <span class="text-3xl font-bold text-orange-500">{{ animatedTask }}</span>
          </div>
          
          <div class="relative h-3 bg-gray-100 rounded-full overflow-hidden">
            <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500" 
                 :style="{ width: Math.min((taskValue / 200) * 100, 100) + '%' }"></div>
          </div>
          
          <div class="flex justify-between mt-2 text-xs text-gray-500">
            <span>0</span>
            <span class="text-orange-600 font-medium">Next unlock: 200 pts</span>
            <span>200</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="flex gap-3 justify-center mb-8">
      <button @click="$emit('add-learning')" 
              class="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg active:scale-95">
        <span>📚</span>
        <span>+10 Learning</span>
      </button>
      <button @click="$emit('add-task')" 
              class="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg active:scale-95">
        <span>✅</span>
        <span>+10 Task</span>
      </button>
      <button @click="$emit('reset-progress')" 
              class="flex items-center gap-2 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-medium transition-all">
        <span>🔄</span>
        <span class="hidden sm:inline">Reset</span>
      </button>
    </div>

    <!-- Level Selection -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-xl font-bold text-gray-900">Application Journey</h2>
          <p class="text-sm text-gray-500 mt-1">Complete stages to unlock strategy guides</p>
        </div>
        <div class="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
          Progress: {{ completedLevels.length }}/5
        </div>
      </div>

      <div class="space-y-4">
        <div v-for="(level, index) in levels" 
             :key="level.id"
             class="group relative flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300"
             :class="getLevelCardClass(level)">
          
          <!-- Level Icon -->
          <div class="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all"
               :class="completedLevels.includes(level.id) ? 'bg-green-100' : isLocked(level.id) ? 'bg-gray-100' : 'bg-blue-50 group-hover:bg-blue-100'">
            {{ level.icon }}
          </div>

          <!-- Level Info -->
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                Stage {{ level.order }}
              </span>
              <h3 class="font-bold text-gray-900 truncate">{{ level.title }}</h3>
            </div>
            <p class="text-sm text-gray-600 mb-2">{{ level.description }}</p>
            
            <!-- Rewards -->
            <div class="flex gap-2 text-xs">
              <span class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                +{{ level.rewards.learningValue }} LV
              </span>
              <span class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-orange-50 text-orange-700">
                <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                +{{ level.rewards.taskValue }} TV
              </span>
            </div>
          </div>

          <!-- Status/Action -->
          <div class="flex-shrink-0">
            <button v-if="completedLevels.includes(level.id)" 
                    class="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              ✓
            </button>
            <button v-else-if="isLocked(level.id)"
                    class="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center cursor-not-allowed">
              🔒
            </button>
            <button v-else
                    @click="$emit('start-level', level)"
                    class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-lg">
              Start
            </button>
          </div>

          <!-- Progress Ring (for current level) -->
          <div v-if="!completedLevels.includes(level.id) && !isLocked(level.id)" 
               class="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            Next
          </div>
        </div>
      </div>
    </div>

    <!-- Unlocked Stories Section -->
    <div v-if="unlockedStories.length > 0" class="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
      <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span>📖</span>
        <span>Unlocked Strategies</span>
      </h3>
      <div class="grid sm:grid-cols-2 gap-3">
        <div v-for="storyId in unlockedStories" :key="storyId" 
             class="bg-white rounded-xl p-4 shadow-sm border border-purple-100 flex items-center gap-3 cursor-pointer hover:shadow-md transition-all"
             @click="$emit('view-story', storyId)">
          <div class="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-lg">
            📄
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900 text-sm">{{ getStoryTitle(storyId) }}</h4>
            <p class="text-xs text-gray-500">Click to view guide</p>
          </div>
          <span class="text-purple-600">→</span>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- 剧情解锁弹窗 - 新增功能 -->
    <!-- ============================================ -->
    <Transition name="modal">
      <div v-if="showStoryUnlockModal" 
           class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
           @click.self="closeStoryModal">
        <div class="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all">
          <!-- 弹窗头部 - 渐变背景 -->
          <div class="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 text-center relative overflow-hidden">
            <!-- 装饰性背景图案 -->
            <div class="absolute inset-0 opacity-20">
              <div class="absolute top-4 left-4 text-2xl animate-pulse">✨</div>
              <div class="absolute top-8 right-8 text-xl animate-pulse delay-100">🎉</div>
              <div class="absolute bottom-4 left-8 text-lg animate-pulse delay-200">⭐</div>
            </div>
            
            <div class="relative z-10">
              <div class="text-6xl mb-4 animate-bounce">🏆</div>
              <h3 class="text-2xl font-bold text-white mb-2">Strategy Unlocked!</h3>
              <p class="text-white/90 text-sm">{{ unlockedStoryData.title }}</p>
            </div>
          </div>
          
          <!-- 弹窗内容 -->
          <div class="p-6">
            <div class="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-200">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-2xl">
                  {{ unlockedStoryData.icon }}
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">{{ unlockedStoryData.title }}</h4>
                  <p class="text-xs text-gray-500">Strategy Guide • Exclusive Content</p>
                </div>
              </div>
              <p class="text-sm text-gray-600 leading-relaxed">
                {{ unlockedStoryData.description }}
              </p>
            </div>
            
            <!-- 按钮组 -->
            <div class="flex gap-3">
              <button @click="viewUnlockedStory" 
                      class="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
                View Strategy
              </button>
              <button @click="closeStoryModal" 
                      class="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
/**
 * 游戏主面板组件
 * 展示双数值系统、关卡选择、已解锁剧情
 * 
 * 新增功能：剧情解锁弹窗
 * - 当学习值/任务值达到阈值时自动触发
 * - 显示精美的解锁动画和提示
 * - 支持立即查看或稍后查看
 */

import { ref, computed, watch } from 'vue'

// ============================================
// Props定义
// ============================================
const props = defineProps({
  userName: String,
  userRole: String,
  learningValue: Number,
  taskValue: Number,
  completedLevels: Array,
  unlockedStories: Array
})

// ============================================
// Emits定义 - 添加新的事件
// ============================================
defineEmits([
  'start-level', 
  'add-learning', 
  'add-task', 
  'view-story', 
  'reset-progress',
  'unlock-story',  // 通知父组件剧情已解锁
  'switch-role',   // 切换角色
  'show-advisor'   // 显示顾问面板
])

// ============================================
// 动画数值（用于数字滚动效果）
// ============================================
const animatedLearning = ref(props.learningValue)
const animatedTask = ref(props.taskValue)

// 监听数值变化，添加动画
watch(() => props.learningValue, (newVal, oldVal) => {
  animateValue(animatedLearning, oldVal, newVal, 1000)
  // 数值变化时检查解锁
  checkStoryUnlocks()
})

watch(() => props.taskValue, (newVal, oldVal) => {
  animateValue(animatedTask, oldVal, newVal, 1000)
  // 数值变化时检查解锁
  checkStoryUnlocks()
})

/**
 * 数值动画函数
 */
function animateValue(target, start, end, duration) {
  const startTime = performance.now()
  
  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // 使用easeOutQuart缓动函数
    const easeProgress = 1 - Math.pow(1 - progress, 4)
    target.value = Math.round(start + (end - start) * easeProgress)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }
  
  requestAnimationFrame(update)
}

// ============================================
// 剧情解锁弹窗状态 - 新增
// ============================================
const showStoryUnlockModal = ref(false)
const unlockedStoryId = ref('')

/**
 * 剧情数据配置
 */
const storiesConfig = {
  'story-essay': {
    id: 'story-essay',
    title: 'PS Writing Master Guide',
    icon: '📄',
    description: 'Unlock exclusive tips for writing compelling Personal Statements that stand out to admission committees.',
    unlockLearning: 100,
    unlockTask: null
  },
  'story-school': {
    id: 'story-school',
    title: 'School Selection Strategy',
    icon: '🎓',
    description: 'Master the art of choosing the right university and program for your postgraduate journey.',
    unlockLearning: null,
    unlockTask: 200
  },
  'story-cv': {
    id: 'story-cv',
    title: 'CV Writing Excellence',
    icon: '📋',
    description: 'Learn how to craft a professional CV that highlights your strengths and achievements effectively.',
    unlockLearning: 80,
    unlockTask: null
  },
  'story-interview': {
    id: 'story-interview',
    title: 'Interview Success Guide',
    icon: '🎤',
    description: 'Master interview techniques and prepare for common questions with confidence.',
    unlockLearning: 150,
    unlockTask: 100
  }
}

/**
 * 当前解锁的剧情数据（计算属性）
 */
const unlockedStoryData = computed(() => {
  return storiesConfig[unlockedStoryId.value] || {
    title: 'Strategy Guide',
    icon: '📄',
    description: 'New strategy content unlocked!'
  }
})

/**
 * 已检查过的解锁（防止重复弹窗）
 */
const checkedUnlocks = ref(new Set())

/**
 * 检查剧情解锁 - 核心函数
 * 当数值达到阈值时触发弹窗
 */
function checkStoryUnlocks() {
  // 检查每个剧情的解锁条件
  Object.values(storiesConfig).forEach(story => {
    // 如果已经解锁过，跳过
    if (props.unlockedStories.includes(story.id)) return
    if (checkedUnlocks.value.has(story.id)) return
    
    // 检查解锁条件
    let shouldUnlock = false
    
    if (story.unlockLearning && story.unlockTask) {
      // 需要同时满足学习值和任务值
      shouldUnlock = props.learningValue >= story.unlockLearning && 
                     props.taskValue >= story.unlockTask
    } else if (story.unlockLearning) {
      // 只需要学习值
      shouldUnlock = props.learningValue >= story.unlockLearning
    } else if (story.unlockTask) {
      // 只需要任务值
      shouldUnlock = props.taskValue >= story.unlockTask
    }
    
    // 触发解锁
    if (shouldUnlock) {
      checkedUnlocks.value.add(story.id)
      unlockedStoryId.value = story.id
      showStoryUnlockModal.value = true
      
      // 通知父组件剧情已解锁
      // 注意：这里不直接emit，因为父组件可能通过watch监听unlockedStories变化
    }
  })
}

/**
 * 关闭剧情解锁弹窗
 */
function closeStoryModal() {
  showStoryUnlockModal.value = false
  
  // 延迟后重置，允许下次解锁
  setTimeout(() => {
    unlockedStoryId.value = ''
  }, 300)
}

/**
 * 查看解锁的剧情
 */
function viewUnlockedStory() {
  closeStoryModal()
  // 触发父组件的view-story事件
  // 使用setTimeout确保弹窗关闭动画完成
  setTimeout(() => {
    const emit = defineEmits
    // 这里需要通过某种方式通知父组件打开剧情
    // 可以通过全局事件总线或父组件监听
    window.dispatchEvent(new CustomEvent('view-story-request', { 
      detail: { storyId: unlockedStoryId.value } 
    }))
  }, 300)
}

// ============================================
// 关卡数据
// ============================================
const levels = [
  {
    id: 'level-1',
    order: 1,
    title: 'School Selection',
    description: 'Learn how to choose the right university and major for your goals',
    icon: '🎓',
    unlockCondition: {},
    rewards: { learningValue: 20, taskValue: 10 }
  },
  {
    id: 'level-2',
    order: 2,
    title: 'Document Preparation',
    description: 'Master the preparation of transcripts, certificates, and required materials',
    icon: '📄',
    unlockCondition: { requiredLevel: 'level-1' },
    rewards: { learningValue: 20, taskValue: 15 }
  },
  {
    id: 'level-3',
    order: 3,
    title: 'Essay Writing',
    description: 'Craft compelling PS, CV, and recommendation letters',
    icon: '✍️',
    unlockCondition: { requiredLevel: 'level-2' },
    rewards: { learningValue: 30, taskValue: 20 }
  },
  {
    id: 'level-4',
    order: 4,
    title: 'Application Submission',
    description: 'Navigate online application systems and avoid common mistakes',
    icon: '📨',
    unlockCondition: { requiredLevel: 'level-3' },
    rewards: { learningValue: 20, taskValue: 15 }
  },
  {
    id: 'level-5',
    order: 5,
    title: 'Interview Preparation',
    description: 'Master interview techniques and frequently asked questions',
    icon: '🎤',
    unlockCondition: { requiredLevel: 'level-4' },
    rewards: { learningValue: 30, taskValue: 20 }
  }
]

// ============================================
// 攻略数据（用于标题显示）
// ============================================
const stories = {
  'story-essay': {
    title: 'PS Writing Master Guide',
    content: `
      <h4>Common Mistakes to Avoid</h4>
      <ul>
        <li>Heavy template usage without personal touch</li>
        <li>Simply listing experiences without reflection</li>
        <li>Unclear goals - why this major/school?</li>
        <li>Grammar and spelling errors</li>
      </ul>
      <h4>Core Techniques</h4>
      <ul>
        <li><strong>Show motivation through stories:</strong> Use specific experiences to explain your choice</li>
        <li><strong>Demonstrate fit:</strong> Show how your background matches the program</li>
        <li><strong>Future planning:</strong> Clear short-term and long-term career goals</li>
      </ul>
    `
  },
  'story-school': {
    title: 'School Selection Strategy',
    content: '<p>Detailed guide for UK/US/HK/Singapore university selection...</p>'
  }
}

// ============================================
// 方法函数
// ============================================

/**
 * 检查关卡是否锁定
 */
function isLocked(levelId) {
  const level = levels.find(l => l.id === levelId)
  if (!level.unlockCondition.requiredLevel) return false
  return !props.completedLevels.includes(level.unlockCondition.requiredLevel)
}

/**
 * 获取关卡卡片样式类
 */
function getLevelCardClass(level) {
  if (props.completedLevels.includes(level.id)) {
    return 'bg-green-50 border-green-200 opacity-80'
  }
  if (isLocked(level.id)) {
    return 'bg-gray-50 border-gray-200 opacity-60 cursor-not-allowed'
  }
  return 'bg-white border-blue-200 hover:border-blue-400 hover:shadow-md cursor-pointer'
}

/**
 * 获取攻略标题
 */
function getStoryTitle(storyId) {
  return stories[storyId]?.title || storiesConfig[storyId]?.title || 'Strategy Guide'
}
</script>

<style scoped>
/* 关卡卡片悬停效果 */
.group:hover {
  transform: translateY(-2px);
}

/* Modal过渡动画 - 新增 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* 弹窗内元素动画 */
@keyframes bounce-in {
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

.animate-bounce {
  animation: bounce-in 0.6s ease-out;
}

/* 响应式调整 */
@media (max-width: 640px) {
  .game-dashboard h2 {
    font-size: 1.125rem;
  }
}
</style>
