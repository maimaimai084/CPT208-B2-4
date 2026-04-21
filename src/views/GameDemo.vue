<!--
  GameDemo.vue - Live Game Demo
  整合现有游戏组件，实现可玩的游戏演示
  
  修复日志:
  - 2026-04-08: 修复事件监听名不匹配问题
    - @select-role → @role-confirmed (与RoleSelect.vue一致)
    - @enter-level → @start-level (与GameDashboard.vue一致)
    - 添加缺失的事件处理: add-learning, add-task, reset-progress, view-story
-->

<template>
  <div class="game-demo-page">
    <!-- Navigation Header for Game -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🎮</span>
          <span class="font-bold text-gray-900">MasterApply Quest - Live Demo</span>
        </div>
        <router-link to="/" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 text-sm transition-colors">
          ← Exit Demo
        </router-link>
      </div>
    </header>

    <!-- Game Container -->
    <div class="game-container">
      <!-- Role Selection -->
      <RoleSelect 
        v-if="currentView === 'roleselect'"
        @role-confirmed="handleRoleConfirmed"
      />

      <!-- Game Dashboard -->
      <GameDashboard
        v-else-if="currentView === 'dashboard'"
        :user-name="userName"
        :user-role="userRole"
        :learning-value="learningValue"
        :task-value="taskValue"
        :completed-levels="completedLevels"
        :unlocked-stories="unlockedStories"
        @start-level="handleStartLevel"
        @switch-role="handleSwitchRole"
        @show-advisor="handleShowAdvisor"
        @add-learning="handleAddLearning"
        @add-task="handleAddTask"
        @reset-progress="handleResetProgress"
        @view-story="handleViewStory"
      />

      <!-- Quiz Interface -->
      <QuizInterface
        v-else-if="currentView === 'quiz'"
        :level="currentLevel"
        :user-type="userRole"
        @close="handleQuizClose"
        @complete="handleQuizComplete"
      />

      <!-- Advisor Dashboard -->
      <AdvisorDashboard
        v-else-if="currentView === 'advisor'"
        @back="currentView = 'dashboard'"
      />

      <!-- Achievement Notification Popup -->
      <AchievementNotification 
        :achievement="currentAchievement" 
        @close="currentAchievement = null"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RoleSelect from '../components/RoleSelect.vue'
import GameDashboard from '../components/GameDashboard.vue'
import QuizInterface from '../components/QuizInterface.vue'
import AdvisorDashboard from '../components/AdvisorDashboard.vue'
import AchievementNotification from '../components/AchievementNotification.vue'

// ============================================
// Game State
// ============================================
const currentView = ref('roleselect')
const userRole = ref('')
const userName = ref('')
const learningValue = ref(0)
const taskValue = ref(0)
const currentLevel = ref(1)
const completedLevels = ref(['level-1'])
const unlockedStories = ref([])
const currentAchievement = ref(null)

// Story unlock configuration
const storyUnlockMap = {
  'level-3': 'story-cv'
}

// ============================================
// Event Handlers - Role Selection
// ============================================

/**
 * Handle role confirmed from RoleSelect component
 * Called when user clicks "Start My Journey"
 */
function handleRoleConfirmed(data) {
  userRole.value = data.role
  userName.value = data.name
  currentView.value = 'dashboard'
  
  // Load saved progress if exists
  const saved = localStorage.getItem(`progress_${data.role}`)
  if (saved) {
    const progress = JSON.parse(saved)
    learningValue.value = progress.learning || 0
    taskValue.value = progress.task || 0
    completedLevels.value = progress.completedLevels || ['level-1']
    unlockedStories.value = progress.unlockedStories || []
  } else {
    // New role - use default initial values
    learningValue.value = 60
    taskValue.value = 40
    completedLevels.value = ['level-1']
    unlockedStories.value = []
  }
}

// ============================================
// Event Handlers - Game Dashboard
// ============================================

/**
 * Handle start level from GameDashboard
 * Called when user clicks on a level card
 */
function handleStartLevel(level) {
  if (typeof level === 'object' && level.id) {
    currentLevel.value = level.id
  } else {
    currentLevel.value = level
  }
  currentView.value = 'quiz'
}

/**
 * Handle switch role
 * Called when user clicks "Switch Role" button
 */
function handleSwitchRole() {
  // Save current progress before switching
  saveProgress()
  currentView.value = 'roleselect'
}

/**
 * Handle show advisor
 * Called when user clicks "Advisor" button
 */
function handleShowAdvisor() {
  currentView.value = 'advisor'
}

/**
 * Handle add learning value
 * Called from debug/test buttons
 */
function handleAddLearning() {
  learningValue.value += 10
  saveProgress()
}

/**
 * Handle add task value
 * Called from debug/test buttons
 */
function handleAddTask() {
  taskValue.value += 10
  saveProgress()
}

/**
 * Handle reset progress
 * Called from debug/test buttons
 */
function handleResetProgress() {
  learningValue.value = 0
  taskValue.value = 0
  completedLevels.value = ['level-1']
  unlockedStories.value = []
  currentAchievement.value = null
  saveProgress()
}

/**
 * Handle view story
 * Called when user clicks on an unlocked story
 */
function handleViewStory(storyId) {
  // TODO: Implement story viewing modal or navigation
  console.log('View story:', storyId)
}

// ============================================
// Event Handlers - Quiz Interface
// ============================================

/**
 * Handle quiz close
 * Called when user clicks close button in quiz
 */
function handleQuizClose() {
  currentView.value = 'dashboard'
}

/**
 * Handle quiz complete
 * Called when user completes a quiz level
 */
function handleQuizComplete(results) {
  // Add earned values
  learningValue.value += results.learning || 0
  taskValue.value += results.task || 0
  
  // Add completed level
  let levelId = currentLevel.value
  if (typeof levelId === 'number') {
    levelId = `level-${levelId}`
  }
  if (!completedLevels.value.includes(levelId)) {
    completedLevels.value.push(levelId)
  }
  
  // Check for story unlock based on completed level
  const unlockedStory = storyUnlockMap[levelId]
  if (unlockedStory && !unlockedStories.value.includes(unlockedStory)) {
    unlockedStories.value.push(unlockedStory)
    
    // Show achievement notification
    currentAchievement.value = {
      name: 'CV Writing Excellence',
      icon: '📝'
    }
    
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      currentAchievement.value = null
    }, 3000)
  }
  
  // Save progress
  saveProgress()
  
  // Return to dashboard
  currentView.value = 'dashboard'
}

// ============================================
// Helper Functions
// ============================================

/**
 * Save current progress to LocalStorage
 */
function saveProgress() {
  const progress = {
    learning: learningValue.value,
    task: taskValue.value,
    completedLevels: completedLevels.value,
    unlockedStories: unlockedStories.value,
    lastUpdated: new Date().toISOString()
  }
  localStorage.setItem(`progress_${userRole.value}`, JSON.stringify(progress))
}
</script>

<style scoped>
.game-demo-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.game-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
