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
        <div class="flex items-center gap-2">
          <router-link to="/" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 text-sm transition-colors">
            ← Exit Demo
          </router-link>
        </div>
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
        :current-combo="currentCombo"
        :max-combo="maxCombo"
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
        v-if="currentView === 'advisor'"
        @close="currentView = 'dashboard'"
      />

      <!-- Achievement Notification Popup -->
      <AchievementNotification 
        :achievement="currentAchievement" 
        @close="currentAchievement = null"
      />

      <!-- Guide Modal for viewing unlocked guides -->
      <GuideModal
        :is-open="showGuide"
        :title="currentGuide?.title || 'Guide'"
        :subtitle="currentGuide?.icon || ''"
        @close="showGuide = false"
      >
        <div v-if="currentGuide" v-html="currentGuide.content"></div>
      </GuideModal>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import RoleSelect from '../components/RoleSelect.vue'
import GameDashboard from '../components/GameDashboard.vue'
import QuizInterface from '../components/QuizInterface.vue'
import AdvisorDashboard from '../components/AdvisorDashboard.vue'
import AchievementNotification from '../components/AchievementNotification.vue'
import GuideModal from '../components/GuideModal.vue'
import { getGuideById } from '../data/guides'
import { calculateComboReward } from '../data/combos'
import { DAILY_QUESTS, initializeDailyProgress } from '../data/dailyquests'
import { ACHIEVEMENTS, checkAchievements } from '../data/achievements'

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
const currentGuide = ref(null)
const showGuide = ref(false)

// Combo System State
const currentCombo = ref(0)
const maxCombo = ref(0)

// Daily Quest State
const dailyQuestProgress = ref(initializeDailyProgress())

// Achievement State
const unlockedAchievements = ref([])
const totalCorrectAnswers = ref(0)
const perfectLevelsCount = ref(0)

// Story unlock configuration
const storyUnlockMap = {
  'level-3': 'story-cv',
  'level-5': 'story-interview'
}

// Daily Quest Computed
const dailyQuestsWithProgress = computed(() => {
  return DAILY_QUESTS.map(quest => {
    const progress = dailyQuestProgress.value.find(p => p.questId === quest.id)
    return {
      ...quest,
      current: progress?.current || 0,
      completed: progress?.completed || false
    }
  })
})

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
  const guide = getGuideById(storyId)
  if (guide) {
    currentGuide.value = guide
    showGuide.value = true
  }
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
  // Track correct answers for achievements
  const correctCount = results.correctCount || 0
  const totalQuestions = results.totalQuestions || 3
  const isPerfect = correctCount === totalQuestions

  totalCorrectAnswers.value += correctCount

  // Update combo system - reset on wrong answer, increment on correct
  if (isPerfect) {
    currentCombo.value++
    if (currentCombo.value > maxCombo.value) {
      maxCombo.value = currentCombo.value
    }
  } else {
    currentCombo.value = 0
  }

  // Calculate combo rewards
  const baseLearning = results.learning || 0
  const baseTask = results.task || 0
  const { learning: comboLearning, task: comboTask, bonus, comboReward } = calculateComboReward(
    baseLearning,
    baseTask,
    currentCombo.value
  )

  // Add earned values with combo bonus
  learningValue.value += comboLearning
  taskValue.value += comboTask

  // Update daily quest progress
  if (correctCount > 0) {
    updateDailyQuestProgress('daily-correct-5', correctCount)
  }
  if (isPerfect) {
    perfectLevelsCount.value++
    updateDailyQuestProgress('daily-perfect', 1)
    updateDailyQuestProgress('daily-quiz-1', 1)
  }
  if (currentCombo.value >= 3) {
    updateDailyQuestProgress('daily-streak-3', currentCombo.value)
  }

  // Check for achievements
  checkAchievementsProgress()

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

    const guideNames = {
      'story-cv': 'CV Writing Excellence',
      'story-interview': 'Interview Preparation'
    }

    // Show achievement notification
    currentAchievement.value = {
      name: guideNames[unlockedStory] || 'New Guide Unlocked',
      icon: '📝'
    }

    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      currentAchievement.value = null
    }, 3000)
  }

  // Show combo reward notification if active
  if (comboReward && bonus > 0) {
    currentAchievement.value = {
      name: `${comboReward.name} +${Math.round(bonus * 100)}%`,
      icon: comboReward.icon
    }
    setTimeout(() => {
      currentAchievement.value = null
    }, 2000)
  }

  // Save progress
  saveProgress()

  // Return to dashboard
  currentView.value = 'dashboard'
}

/**
 * Update daily quest progress
 */
function updateDailyQuestProgress(questId, amount) {
  const quest = dailyQuestProgress.value.find(p => p.questId === questId)
  if (quest && !quest.completed) {
    quest.current += amount
    const dailyQuest = DAILY_QUESTS.find(q => q.id === questId)
    if (dailyQuest && quest.current >= dailyQuest.target) {
      quest.completed = true
      // Add rewards
      learningValue.value += dailyQuest.reward.learning
      taskValue.value += dailyQuest.reward.task
      // Show notification
      currentAchievement.value = {
        name: `${dailyQuest.title} Complete!`,
        icon: dailyQuest.icon
      }
      setTimeout(() => {
        currentAchievement.value = null
      }, 2500)
    }
    quest.lastUpdated = new Date().toISOString()
  }
}

/**
 * Check achievements progress
 */
function checkAchievementsProgress() {
  const progress = {
    levelsCompleted: completedLevels.value.length,
    totalCorrectAnswers: totalCorrectAnswers.value,
    maxCombo: maxCombo.value,
    daysStreak: 1,
    totalLearning: learningValue.value,
    totalTask: taskValue.value,
    perfectLevels: perfectLevelsCount.value
  }

  const { newAchievements: newAchieves, rewards: achieveRewards } = checkAchievements(
    progress,
    unlockedAchievements.value
  )

  // Unlock new achievements
  for (const id of newAchieves) {
    unlockedAchievements.value.push(id)
  }

  // Add achievement rewards
  for (const reward of achieveRewards) {
    if (reward.reward.type === 'learning') {
      learningValue.value += reward.reward.value
    } else if (reward.reward.type === 'task') {
      taskValue.value += reward.reward.value
    }
    // Show achievement reward notification
    const achieve = ACHIEVEMENTS.find(a => a.id === reward.id)
    if (achieve) {
      currentAchievement.value = {
        name: `${achieve.title} Unlocked!`,
        icon: achieve.icon
      }
      setTimeout(() => {
        currentAchievement.value = null
      }, 2500)
    }
  }
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
  background-color: #F8FAFC;
}

.game-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
