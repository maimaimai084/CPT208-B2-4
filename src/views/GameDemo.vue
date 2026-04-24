<!--
  GameDemo.vue - Live Game Demo
  整合现有游戏组件，实现可玩的游戏演示
  
  修复日志:
  - 2026-04-08: 修复事件监听名不匹配问题
    - @select-role → @role-confirmed (与RoleSelect.vue一致)
    - @enter-level → @start-level (与GameDashboard.vue一致)
    - 添加缺失的事件处理: add-learning, add-task, reset-progress, view-story
  - 2026-04-24: 重构为标签页布局 (Journey / Profile / AI Advisor / Q&A / Admission Data / Activities / Advisor View)
-->

<template>
  <div class="game-demo-page">
    <!-- Navigation Header for Game -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/images/logo.png" alt="MasterApply Quest" class="h-8 w-8">
          <span class="font-bold text-gray-900">MasterApply Quest - Live Demo</span>
        </div>
        <div class="flex items-center gap-2">
          <router-link to="/" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 text-sm transition-colors">
            ← Exit Demo
          </router-link>
        </div>
      </div>
    </header>

    <!-- Role Selection -->
    <RoleSelect 
      v-if="currentView === 'roleselect'"
      @role-confirmed="handleRoleConfirmed"
    />

    <!-- Main Tabbed Interface -->
    <div v-else-if="currentView === 'main'" class="game-container">
      <!-- Player Info Bar -->
      <div class="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm mb-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white flex items-center justify-center font-bold">
              {{ userName ? userName.charAt(0).toUpperCase() : '?' }}
            </div>
            <div>
              <p class="font-bold text-slate-900 text-sm">{{ userName || 'Player' }}</p>
              <p class="text-xs text-slate-500">
                {{ userRole === 'confused' ? 'Explorer' : userRole === 'sprint' ? 'Sprint' : 'Player' }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 text-sm">
              <span class="text-blue-600 font-bold">{{ learningValue }}</span>
              <span class="text-slate-400 text-xs">LV</span>
            </div>
            <div class="flex items-center gap-2 text-sm">
              <span class="text-amber-500 font-bold">{{ taskValue }}</span>
              <span class="text-slate-400 text-xs">TV</span>
            </div>
            <div v-if="currentCombo > 0" class="flex items-center gap-1 px-2 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs text-amber-700">
              <span>{{ currentCombo >= 10 ? '🌟' : currentCombo >= 5 ? '🔥' : '⚡' }}</span>
              <span class="font-bold">{{ currentCombo }}</span>
            </div>
            <button @click="handleSwitchRole"
                    class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-xs font-medium transition-colors">
              🔄 Switch Role
            </button>
          </div>
        </div>
      </div>

      <!-- Tab Navigation -->
      <div class="flex gap-1 mb-6 overflow-x-auto pb-1 scrollbar-hide">
        <button v-for="tab in tabs" :key="tab.id"
                @click="activeTab = tab.id"
                class="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all border"
                :class="activeTab === tab.id 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'">
          <span>{{ tab.icon }}</span>
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <!-- Tab Contents -->
      <div class="tab-content">
        <!-- Journey -->
        <GameDashboard
          v-if="activeTab === 'journey'"
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
          @show-advisor="activeTab = 'advisor-view'"
          @add-learning="handleAddLearning"
          @add-task="handleAddTask"
          @reset-progress="handleResetProgress"
          @view-story="handleViewStory"
        />

        <!-- Profile -->
        <ProfilePanel
          v-if="activeTab === 'profile'"
          :user-name="userName"
          :user-role="userRole"
          :learning-value="learningValue"
          :task-value="taskValue"
          :completed-levels="completedLevels"
          :unlocked-stories="unlockedStories"
          :current-combo="currentCombo"
          :max-combo="maxCombo"
          :daily-quest-progress="dailyQuestProgress"
          :unlocked-achievements="unlockedAchievements"
          :total-correct-answers="totalCorrectAnswers"
          :perfect-levels-count="perfectLevelsCount"
        />

        <!-- AI Advisor -->
        <AIChat v-if="activeTab === 'ai-advisor'" />

        <!-- Q&A -->
        <QuestionForm v-if="activeTab === 'qa'" :user-name="userName" />

        <!-- Admission Data -->
        <DemoAdmissionData v-if="activeTab === 'admission'" />

        <!-- Activities -->
        <DemoActivities v-if="activeTab === 'activities'" />

        <!-- Advisor View -->
        <AdvisorDashboard
          v-if="activeTab === 'advisor-view'"
          :player-name="userName"
          :player-role="userRole"
          :player-learning="learningValue"
          :player-task="taskValue"
          :player-completed-levels="completedLevels"
          :player-combo="currentCombo"
        />
      </div>
    </div>

    <!-- Quiz Interface (Overlay) -->
    <QuizInterface
      v-if="currentView === 'quiz'"
      :level="currentLevel"
      :user-type="userRole"
      @close="handleQuizClose"
      @complete="handleQuizComplete"
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
</template>

<script setup>
import { ref, computed } from 'vue'
import RoleSelect from '../components/RoleSelect.vue'
import GameDashboard from '../components/GameDashboard.vue'
import QuizInterface from '../components/QuizInterface.vue'
import AdvisorDashboard from '../components/AdvisorDashboard.vue'
import AchievementNotification from '../components/AchievementNotification.vue'
import GuideModal from '../components/GuideModal.vue'
import ProfilePanel from '../components/ProfilePanel.vue'
import AIChat from '../components/AIChat.vue'
import QuestionForm from '../components/QuestionForm.vue'
import DemoAdmissionData from '../components/DemoAdmissionData.vue'
import DemoActivities from '../components/DemoActivities.vue'
import { getGuideById } from '../data/guides'
import { calculateComboReward } from '../data/combos'
import { DAILY_QUESTS, initializeDailyProgress, shouldResetDaily } from '../data/dailyquests'
import { ACHIEVEMENTS, checkAchievements } from '../data/achievements'

// ============================================
// Tabs Configuration
// ============================================
const tabs = [
  { id: 'journey', label: 'Journey', icon: '🗺️' },
  { id: 'profile', label: 'Profile', icon: '👤' },
  { id: 'ai-advisor', label: 'AI Advisor', icon: '🤖' },
  { id: 'qa', label: 'Q&A', icon: '💬' },
  { id: 'admission', label: 'Admission Data', icon: '📊' },
  { id: 'activities', label: 'Activities', icon: '📅' },
  { id: 'advisor-view', label: 'Advisor View', icon: '🎓' }
]

const activeTab = ref('journey')

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
  currentView.value = 'main'
  activeTab.value = 'journey'
  
  // Load saved progress if exists
  const saved = localStorage.getItem(`progress_${data.role}`)
  if (saved) {
    const progress = JSON.parse(saved)
    learningValue.value = progress.learning || 0
    taskValue.value = progress.task || 0
    completedLevels.value = progress.completedLevels || ['level-1']
    unlockedStories.value = progress.unlockedStories || []
    currentCombo.value = progress.currentCombo || 0
    maxCombo.value = progress.maxCombo || 0
    unlockedAchievements.value = progress.unlockedAchievements || []
    totalCorrectAnswers.value = progress.totalCorrectAnswers || 0
    perfectLevelsCount.value = progress.perfectLevelsCount || 0
    if (progress.dailyQuestProgress && progress.dailyQuestProgress.length > 0) {
      if (shouldResetDaily(progress.dailyQuestProgress)) {
        dailyQuestProgress.value = initializeDailyProgress()
      } else {
        dailyQuestProgress.value = progress.dailyQuestProgress
      }
    } else {
      dailyQuestProgress.value = initializeDailyProgress()
    }
  } else {
    // New role - use default initial values
    learningValue.value = 60
    taskValue.value = 40
    completedLevels.value = ['level-1']
    unlockedStories.value = []
    currentCombo.value = 0
    maxCombo.value = 0
    unlockedAchievements.value = []
    totalCorrectAnswers.value = 0
    perfectLevelsCount.value = 0
    dailyQuestProgress.value = initializeDailyProgress()
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
  currentCombo.value = 0
  maxCombo.value = 0
  dailyQuestProgress.value = initializeDailyProgress()
  unlockedAchievements.value = []
  totalCorrectAnswers.value = 0
  perfectLevelsCount.value = 0
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
  currentView.value = 'main'
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

  // Return to main view
  currentView.value = 'main'
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
    currentCombo: currentCombo.value,
    maxCombo: maxCombo.value,
    unlockedAchievements: unlockedAchievements.value,
    totalCorrectAnswers: totalCorrectAnswers.value,
    perfectLevelsCount: perfectLevelsCount.value,
    dailyQuestProgress: dailyQuestProgress.value,
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

/* Hide scrollbar for tab navigation */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
