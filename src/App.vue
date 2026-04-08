<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <!-- Navigation Bar -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
            🎓
          </div>
          <div>
            <h1 class="text-xl font-bold text-gray-900 tracking-tight">MasterApply Quest</h1>
            <p class="text-xs text-gray-500">Postgraduate Application Adventure</p>
          </div>
        </div>
        
        <!-- Right Side: Navigation + User Info -->
        <div class="flex items-center gap-3">
          <!-- Prototype Showcase Link -->
          <button @click="currentView = 'showcase'" 
                  class="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  :class="{ 'text-blue-800 underline': currentView === 'showcase' }">
            📋 Prototype & Implementation
          </button>
          
          <!-- User Profile Badge -->
          <div v-if="userRole && currentView !== 'roleselect'" 
               class="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {{ userName.charAt(0).toUpperCase() }}
            </div>
            <span class="text-sm font-medium text-gray-700 hidden sm:block">{{ userName }}</span>
            <span class="text-xs px-2 py-1 rounded-full font-medium"
                  :class="userRole === 'confused' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'">
              {{ userRole === 'confused' ? 'Explorer' : 'Sprint' }}
            </span>
          </div>
          
          <!-- Role Switch Button -->
          <button v-if="userRole && currentView !== 'roleselect'"
                  @click="showRoleSwitchConfirm = true"
                  class="text-sm text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
                  title="Switch to another role">
            🔄 Switch Role
          </button>
          
          <!-- Advisor View Button -->
          <button v-if="currentView !== 'advisor' && currentView !== 'roleselect'"
                  @click="currentView = 'advisor'" 
                  class="text-sm text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors">
            👨‍💼 Advisor
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="max-w-5xl mx-auto px-4 py-6 pb-24">
      <!-- View: Role Selection -->
      <RoleSelect 
        v-if="currentView === 'roleselect'"
        :initial-role="userRole"
        :initial-name="userName"
        @role-confirmed="onRoleConfirmed"
      />
      
      <!-- View: Game Dashboard -->
      <GameDashboard 
        v-else-if="currentView === 'dashboard'"
        :user-name="userName"
        :user-role="userRole"
        :learning-value="learningValue"
        :task-value="taskValue"
        :completed-levels="completedLevels"
        :unlocked-stories="unlockedStories"
        @start-level="startLevel"
        @add-learning="addLearning"
        @add-task="addTask"
        @view-story="viewStory"
        @reset-progress="resetProgress"
      />
      
      <!-- View: Quiz Interface -->
      <QuizInterface 
        v-else-if="currentView === 'quiz'"
        :level="currentQuizLevel"
        :user-type="userRole"
        @close="currentView = 'dashboard'"
        @complete="onQuizComplete"
      />
      
      <!-- View: Advisor Dashboard -->
      <AdvisorDashboard 
        v-else-if="currentView === 'advisor'"
        :student-data="getStudentData()"
        @close="currentView = 'dashboard'"
      />
      
      <!-- View: Prototype Showcase -->
      <PrototypeShowcase 
        v-else-if="currentView === 'showcase'"
        @back="currentView = 'dashboard'"
      />
    </main>

    <!-- Mobile Bottom Navigation -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center md:hidden z-30">
      <button @click="currentView = 'dashboard'" 
              class="flex flex-col items-center gap-1"
              :class="currentView === 'dashboard' ? 'text-blue-600' : 'text-gray-400'">
        <span class="text-xl">🎮</span>
        <span class="text-xs font-medium">Play</span>
      </button>
      <button @click="currentView = 'showcase'" 
              class="flex flex-col items-center gap-1"
              :class="currentView === 'showcase' ? 'text-blue-600' : 'text-gray-400'">
        <span class="text-xl">📋</span>
        <span class="text-xs font-medium">Prototype</span>
      </button>
      <button @click="currentView = 'advisor'" 
              class="flex flex-col items-center gap-1"
              :class="currentView === 'advisor' ? 'text-blue-600' : 'text-gray-400'">
        <span class="text-xl">👨‍💼</span>
        <span class="text-xs font-medium">Advisor</span>
      </button>
    </nav>

    <!-- Role Switch Confirmation Modal -->
    <Transition name="modal">
      <div v-if="showRoleSwitchConfirm" 
           class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
           @click.self="showRoleSwitchConfirm = false">
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Switch Role?</h3>
          <p class="text-gray-600 mb-6">
            You are currently playing as <strong>{{ userRole === 'confused' ? 'Explorer' : 'Sprint' }}</strong>. 
            Switching will return you to the role selection screen. Your progress will be saved.
          </p>
          <div class="flex gap-3">
            <button @click="switchRole" 
                    class="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all">
              Yes, Switch Role
            </button>
            <button @click="showRoleSwitchConfirm = false" 
                    class="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Achievement Notification -->
    <AchievementNotification 
      v-if="latestAchievement"
      :achievement="latestAchievement"
      @close="latestAchievement = null"
    />
  </div>
</template>

<script setup>
/**
 * 主应用组件
 * 管理全局状态：用户角色、数值、视图切换
 * 整合所有子组件
 */

import { ref, computed, onMounted, watch } from 'vue'
import RoleSelect from './components/RoleSelect.vue'
import GameDashboard from './components/GameDashboard.vue'
import QuizInterface from './components/QuizInterface.vue'
import AdvisorDashboard from './components/AdvisorDashboard.vue'
import PrototypeShowcase from './components/PrototypeShowcase.vue'
import AchievementNotification from './components/AchievementNotification.vue'

// ============================================
// 用户数据状态
// ============================================
const userName = ref('')
const userRole = ref('')  // 'confused' (Explorer) 或 'sprint' (Sprint)

// ============================================
// 游戏数值状态
// ============================================
const learningValue = ref(60)
const taskValue = ref(40)
const completedLevels = ref(['level-1'])
const unlockedStories = ref([])

// ============================================
// 视图控制状态
// ============================================
const currentView = ref('roleselect')  // roleselect | dashboard | quiz | advisor | showcase
const currentQuizLevel = ref(null)
const showRoleSwitchConfirm = ref(false)

// ============================================
// 成就系统状态
// ============================================
const latestAchievement = ref(null)
const unlockedAchievements = ref([])

// ============================================
// 生命周期钩子
// ============================================
onMounted(() => {
  // 从LocalStorage加载用户数据
  const savedRole = localStorage.getItem('userRole')
  const savedName = localStorage.getItem('userName')
  const savedLearning = localStorage.getItem('learningValue')
  const savedTask = localStorage.getItem('taskValue')
  const savedLevels = localStorage.getItem('completedLevels')
  const savedStories = localStorage.getItem('unlockedStories')
  const savedAchievements = localStorage.getItem('unlockedAchievements')
  
  if (savedRole && savedName) {
    userRole.value = savedRole
    userName.value = savedName
    learningValue.value = parseInt(savedLearning) || 60
    taskValue.value = parseInt(savedTask) || 40
    completedLevels.value = JSON.parse(savedLevels) || ['level-1']
    unlockedStories.value = JSON.parse(savedStories) || []
    unlockedAchievements.value = JSON.parse(savedAchievements) || []
    currentView.value = 'dashboard'
  }
})

// ============================================
// 数据持久化监听
// ============================================
watch([userRole, userName, learningValue, taskValue, completedLevels, unlockedStories, unlockedAchievements], 
  () => {
    localStorage.setItem('userRole', userRole.value)
    localStorage.setItem('userName', userName.value)
    localStorage.setItem('learningValue', learningValue.value)
    localStorage.setItem('taskValue', taskValue.value)
    localStorage.setItem('completedLevels', JSON.stringify(completedLevels.value))
    localStorage.setItem('unlockedStories', JSON.stringify(unlockedStories.value))
    localStorage.setItem('unlockedAchievements', JSON.stringify(unlockedAchievements.value))
  }, 
  { deep: true }
)

// ============================================
// 事件处理函数
// ============================================

/**
 * 角色确认回调
 * 当用户在RoleSelect组件中选择角色后触发
 */
function onRoleConfirmed({ role, name }) {
  userRole.value = role
  userName.value = name
  currentView.value = 'dashboard'
  checkAchievements()
}

/**
 * 开始关卡
 */
function startLevel(level) {
  currentQuizLevel.value = level
  currentView.value = 'quiz'
}

/**
 * 答题完成回调
 */
function onQuizComplete(result) {
  // 添加关卡奖励
  learningValue.value += currentQuizLevel.value.rewards.learningValue
  taskValue.value += currentQuizLevel.value.rewards.taskValue
  
  // 添加答题奖励
  if (result && result.learning) {
    learningValue.value += result.learning
  }
  if (result && result.task) {
    taskValue.value += result.task
  }
  
  // 标记关卡完成
  if (!completedLevels.value.includes(currentQuizLevel.value.id)) {
    completedLevels.value.push(currentQuizLevel.value.id)
  }
  
  // 检查解锁和成就
  checkUnlocks()
  checkAchievements()
  
  // 返回主面板
  currentView.value = 'dashboard'
  currentQuizLevel.value = null
}

/**
 * 快速增加学习值（测试用）
 */
function addLearning() {
  learningValue.value += 10
  checkUnlocks()
  checkAchievements()
}

/**
 * 快速增加任务值（测试用）
 */
function addTask() {
  taskValue.value += 10
  checkUnlocks()
  checkAchievements()
}

/**
 * 检查剧情解锁
 */
function checkUnlocks() {
  // 100学习值解锁文书攻略
  if (learningValue.value >= 100 && !unlockedStories.value.includes('story-essay')) {
    unlockedStories.value.push('story-essay')
    showStoryUnlockModal('story-essay')
  }
  // 200任务值解锁择校攻略
  if (taskValue.value >= 200 && !unlockedStories.value.includes('story-school')) {
    unlockedStories.value.push('story-school')
  }
}

/**
 * 检查成就解锁
 */
function checkAchievements() {
  const achievements = [
    { id: 'first_quiz', condition: () => true },  // 临时简化
    { id: 'learning_50', condition: () => learningValue.value >= 50 },
    { id: 'learning_100', condition: () => learningValue.value >= 100 },
    { id: 'task_50', condition: () => taskValue.value >= 50 },
    { id: 'task_100', condition: () => taskValue.value >= 100 },
    { id: 'role_explorer', condition: () => userRole.value === 'confused' },
    { id: 'role_sprint', condition: () => userRole.value === 'sprint' },
  ]
  
  achievements.forEach(ach => {
    if (!unlockedAchievements.value.includes(ach.id) && ach.condition()) {
      unlockedAchievements.value.push(ach.id)
      showAchievementNotification(ach.id)
    }
  })
}

/**
 * 显示成就通知
 */
function showAchievementNotification(achievementId) {
  const achievementMap = {
    'first_quiz': { name: 'First Step', icon: '🎯' },
    'learning_50': { name: 'Knowledge Seeker', icon: '📚' },
    'learning_100': { name: 'Knowledge Master', icon: '🎓' },
    'task_50': { name: 'Task Starter', icon: '✅' },
    'task_100': { name: 'Task Expert', icon: '⭐' },
    'role_explorer': { name: 'Explorer Path', icon: '🔍' },
    'role_sprint': { name: 'Sprint Path', icon: '🚀' },
  }
  
  latestAchievement.value = achievementMap[achievementId]
  setTimeout(() => {
    latestAchievement.value = null
  }, 3000)
}

/**
 * 显示剧情解锁弹窗
 */
function showStoryUnlockModal(storyId) {
  // 可以在这里触发弹窗显示
  console.log('Story unlocked:', storyId)
}

/**
 * 查看剧情
 */
function viewStory(storyId) {
  // 实现查看剧情详情
  console.log('View story:', storyId)
}

/**
 * 切换角色
 */
function switchRole() {
  // 保存当前角色进度（可选）
  localStorage.setItem(`progress_${userRole.value}`, JSON.stringify({
    learning: learningValue.value,
    task: taskValue.value,
    levels: completedLevels.value,
    stories: unlockedStories.value
  }))
  
  // 重置当前状态
  showRoleSwitchConfirm.value = false
  currentView.value = 'roleselect'
}

/**
 * 重置所有进度
 */
function resetProgress() {
  if (confirm('Reset all progress? This cannot be undone.')) {
    learningValue.value = 60
    taskValue.value = 40
    completedLevels.value = ['level-1']
    unlockedStories.value = []
    unlockedAchievements.value = []
    localStorage.clear()
    currentView.value = 'roleselect'
  }
}

/**
 * 获取学生数据（供顾问端使用）
 */
function getStudentData() {
  return {
    name: userName.value,
    role: userRole.value,
    learning: learningValue.value,
    task: taskValue.value,
    completedLevels: completedLevels.value,
    unlockedStories: unlockedStories.value,
    achievements: unlockedAchievements.value
  }
}
</script>

<style>
/* Modal过渡动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>
