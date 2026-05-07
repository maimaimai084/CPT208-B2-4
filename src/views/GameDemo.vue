<template>
  <div class="game-demo-page">
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/images/logo.png" alt="MasterApply Quest" class="h-8 w-8">
          <span class="font-bold text-gray-900">{{ isZh ? '硕士申请大师' : 'MasterApply Quest' }} - {{ isZh ? '现场演示' : 'Live Demo' }}</span>
        </div>
        <div class="flex items-center gap-2">
          <button @click="toggleGlobalLanguage" class="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            {{ isZh ? 'EN' : '中' }}
          </button>
          <button @click="showOnboardingGuide" class="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-600 transition-colors">
            <span>❓</span>
            {{ isZh ? '新手指南' : 'Help' }}
          </button>
          <router-link to="/" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 text-sm transition-colors">
            ← {{ isZh ? '退出演示' : 'Exit Demo' }}
          </router-link>
        </div>
      </div>
    </header>

    <RoleSelect 
      v-if="currentView === 'roleselect'"
      @role-confirmed="handleRoleConfirmed"
    />

    <div v-else-if="currentView === 'main'" class="game-container">
      <div class="bg-white rounded-[1.5rem] p-4 shadow-[0_4px_0_#E2E8F0] mb-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3" data-tour="name-card">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br text-white flex items-center justify-center font-bold"
              :class="avatarGradient">
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
              <span class="text-indigo-600 font-bold">{{ learningValue }}</span>
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
            <button @click="handleSwitchRole" class="px-3 py-1.5 bg-[#F1F5F9] shadow-[0_3px_0_#CBD5E1] active:translate-y-[3px] active:shadow-none text-[#475569] rounded-xl text-xs font-bold transition-all">
              🔄 Switch Role
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 py-4">
        <div class="w-full flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
          <button
            v-for="tab in gameTabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :data-tour="tab.id"
            class="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[1.5rem] flex flex-col items-center justify-center p-2 text-center transition-all duration-150 z-10"
            :class="[
              tab.theme,
              activeTab === tab.id 
                ? 'translate-y-[4px] shadow-none brightness-110' 
                : 'hover:-translate-y-1 hover:brightness-105 active:translate-y-[4px] active:shadow-none'
            ]"
          >
            <span class="text-2xl sm:text-3xl mb-1 drop-shadow-md select-none transition-transform duration-300"
                  :class="activeTab === tab.id ? 'scale-110' : ''">
              {{ tab.icon }}
            </span>
            <span class="text-[10px] sm:text-[11px] font-black leading-none uppercase tracking-wider drop-shadow-sm select-none" 
                  v-html="tab.label">
            </span>
          </button>
        </div>

        <div class="w-full flex flex-wrap justify-center gap-2 sm:gap-3">
          <button
            v-for="tab in otherTabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :data-tour="tab.id"
            class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[1.2rem] flex flex-col items-center justify-center p-2 text-center transition-all duration-150"
            :class="[
              tab.theme,
              activeTab === tab.id 
                ? 'translate-y-[4px] shadow-none brightness-110' 
                : 'hover:-translate-y-1 hover:brightness-105 active:translate-y-[4px] active:shadow-none'
            ]"
          >
            <span class="text-xl sm:text-2xl mb-1 drop-shadow-md select-none">
              {{ tab.icon }}
            </span>
            <span class="text-[9px] sm:text-[10px] font-black leading-none uppercase tracking-wider drop-shadow-sm select-none" 
                  v-html="tab.label">
            </span>
          </button>
        </div>
      </div>

      <div class="tab-content">
        <GameDashboard
          v-if="activeTab === 'journey'"
          :user-name="userName"
          :user-role="userRole"
          :learning-value="learningValue"
          :task-value="taskValue"
          :gear-state="gearState"
          :completed-levels="completedLevels"
          :unlocked-stories="unlockedStories"
          :current-combo="currentCombo"
          :max-combo="maxCombo"
          :days-streak="daysStreak"
          :is-zh="isZh"
          @start-level="handleStartLevel"
          @switch-role="handleSwitchRole"
          @show-advisor="activeTab = 'advisor-view'"
          @add-learning="handleAddLearning"
          @add-task="handleAddTask"
          @reset-progress="handleResetProgress"
          @view-story="handleViewStory"
          @select-stage="handleStartLevel"
          @toggle-language="toggleGlobalLanguage"
        />

        <ProfilePanel v-if="activeTab === 'profile'" v-bind="profileProps" />
        <GearShop 
          v-if="activeTab === 'gear-shop'"
          :learning-value="learningValue"
          :gear-state="gearState"
          :teacher-question-credits="inventory.teacherQuestionCredits || 0"
          :is-zh="isZh"
          @upgrade-gear="handleUpgradeGear"
          @update-gear="(newState) => gearState = newState"
          @buy-teacher-question="handleBuyTeacherQuestion"
        />
        <InterviewSim 
          v-if="activeTab === 'interview-sim'"
          :gear-state="gearState"
          :is-zh="isZh"
          :inventory="inventory"
          @complete="handleTVEarned"
          @use-item="handleUseItem"
        />
        <PSWorkshop 
          v-if="activeTab === 'ps-workshop'"
          :gear-state="gearState"
          :is-zh="isZh"
          @complete="handleLearningEarned"
        />
        <TVStore
          v-if="activeTab === 'tv-store'"
          :task-value="taskValue"
          :is-zh="isZh"
          :inventory="inventory"
          :purchase-limits="purchaseLimits"
          @purchase="handlePurchaseItem"
          @reset-store="handleResetStore"
        />
        <QuestHub 
          v-if="activeTab === 'quest-hub'"
          :gear-state="gearState"
          :is-zh="isZh"
          :user-role="userRole"
          :inventory="inventory"
          @complete="handleTVEarned"
          @use-item="handleUseItem"
        />
        <DailyWeeklyCycle 
          v-if="activeTab === 'cycle-quests'"
          :is-zh="isZh"
          :task-value="taskValue"
          :daily-quest-progress="dailyQuestProgress"
        />
        <AIChat v-if="activeTab === 'ai-advisor'" />
        <QuestionForm
          v-if="activeTab === 'qa'"
          :user-name="userName"
          :question-credits="inventory.teacherQuestionCredits || 0"
          @consume-question-credit="handleConsumeTeacherQuestion"
        />
        <DemoAdmissionData v-if="activeTab === 'admission'" />
        <DemoActivities v-if="activeTab === 'activities'" />
        <AdvisorDashboard v-if="activeTab === 'advisor-view'" v-bind="advisorProps" />
      </div>
    </div>

    <QuizInterface
      v-if="currentView === 'quiz'"
      :level="currentLevel"
      :user-type="userRole"
      :is-zh="isZh"
      :inventory="inventory"
      @close="handleQuizClose"
      @complete="handleQuizComplete"
      @use-item="handleUseItem"
      @update:isZh="isZh = $event"
    />

    <AchievementNotification :achievement="currentAchievement" @close="currentAchievement = null" />
    <GuideModal :is-open="showGuide" :title="currentGuide?.title || 'Guide'" :subtitle="currentGuide?.icon || ''" @close="showGuide = false">
      <div v-if="currentGuide" v-html="currentGuide.content"></div>
    </GuideModal>
    <OnboardingTour :is-open="showOnboarding" @close="showOnboarding = false" @complete="handleOnboardingComplete" />
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
// ... (保持原有的 import 不变)
import RoleSelect from '../components/RoleSelect.vue'
import GameDashboard from '../components/GameDashboard.vue'
import QuestHub from '../components/QuestHub.vue'
import DailyWeeklyCycle from '../components/DailyWeeklyCycle.vue'
import QuizInterface from '../components/QuizInterface.vue'
import GearShop from '../components/GearShop.vue'
import TVStore from '../components/TVStore.vue'
import InterviewSim from '../components/InterviewSim.vue'
import PSWorkshop from '../components/PSWorkshop.vue'
import AdvisorDashboard from '../components/AdvisorDashboard.vue'
import AchievementNotification from '../components/AchievementNotification.vue'
import GuideModal from '../components/GuideModal.vue'
import ProfilePanel from '../components/ProfilePanel.vue'
import OnboardingTour from '../components/OnboardingTour.vue'
import AIChat from '../components/AIChat.vue'
import QuestionForm from '../components/QuestionForm.vue'
import DemoAdmissionData from '../components/DemoAdmissionData.vue'
import DemoActivities from '../components/DemoActivities.vue'
import { getGuideById } from '../data/guides'
import { calculateComboReward } from '../data/combos'
import { DAILY_QUESTS, initializeDailyProgress, shouldResetDaily, shouldResetWeekly } from '../data/dailyquests'
import { GEAR_CONFIG } from '../data/gearConfig'
import { ACHIEVEMENTS, checkAchievements } from '../data/achievements'

// ============================================
// 3D 调色盘配置 (Tactile 3D Palette)
// ============================================
// ============================================
// 3D 调色盘配置 (Morandi Soft Clay / 莫兰迪轻黏土风)
// ============================================
const tabsBase = [
  { id: 'journey', labelEn: 'Journey', labelZh: '旅程', icon: '🗺️', theme: 'bg-[#10B981] shadow-[0_5px_0_#0D8A66] text-white', category: 'game' },
  { id: 'gear-shop', labelEn: 'Gear', labelZh: '装备', icon: '🎒', theme: 'bg-[#14B8A6] shadow-[0_5px_0_#0D9488] text-white', category: 'game' },
  { id: 'quest-hub', labelEn: 'TV Quest', labelZh: 'TV任务', icon: '🎯', theme: 'bg-[#F59E0B] shadow-[0_5px_0_#C47E08] text-white', category: 'game' },
  { id: 'tv-store', labelEn: 'TV Shop', labelZh: 'TV商店', icon: '🏪', theme: 'bg-[#D97757] shadow-[0_5px_0_#A85C3F] text-white', category: 'game' },
  { id: 'cycle-quests', labelEn: 'Daily', labelZh: '周期', icon: '📅', theme: 'bg-[#6366F1] shadow-[0_5px_0_#4F46E5] text-white', category: 'game' },

  { id: 'profile', labelEn: 'Profile', labelZh: '档案', icon: '👤', theme: 'bg-[#E88EAF] shadow-[0_5px_0_#B86281] text-white', category: 'other' },
  { id: 'ai-advisor', labelEn: 'Ask AI', labelZh: '问AI', icon: '🤖', theme: 'bg-[#73C5E6] shadow-[0_5px_0_#4E95B3] text-white', category: 'other' },
  { id: 'qa', labelEn: 'Q & A', labelZh: '问答', icon: '💬', theme: 'bg-[#E3B75C] shadow-[0_5px_0_#B38A3B] text-white', category: 'other' },
  { id: 'admission', labelEn: 'Data', labelZh: '数据', icon: '📊', theme: 'bg-[#a9eee6] shadow-[0_5px_0_#4D9C71] text-white', category: 'other' },
  { id: 'activities', labelEn: 'Events', labelZh: '活动', icon: '🎉', theme: 'bg-[#EBA173] shadow-[0_5px_0_#B8764B] text-white', category: 'other' }
]

const ADVISOR_LV_GRANT = 50
const ADVISOR_TV_GRANT = 50

const activeTab = ref('journey')
const isZh = ref(false)
const showOnboarding = ref(false)

const gameTabs = computed(() => tabs.value.filter(t => t.category === 'game'))
const otherTabs = computed(() => tabs.value.filter(t => t.category === 'other'))

const tabs = computed(() => tabsBase.map(t => ({
  ...t,
  label: isZh.value ? t.labelZh : t.labelEn
})))

function toggleGlobalLanguage() {
  isZh.value = !isZh.value
}

function showOnboardingGuide() {
  showOnboarding.value = true
}

function handleOnboardingComplete() {
  showOnboarding.value = false
  localStorage.setItem('hasSeenOnboarding', 'true')
}

// ============================================
// 后续逻辑保持不变
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
const currentCombo = ref(0)
const maxCombo = ref(0)
const daysStreak = ref(0)
const gearState = ref({ ielts: 0, gpa: 0, internship: 0, research: 0, award: 0, recommendation: 0 })
function createDefaultInventory() {
  return {
    heartRefills: 0,
    hintTokens: 0,
    xpBoostCount: 0,
    timeFreezes: 0,
    xpBoostExpiry: null,
    teacherQuestionCredits: 0
  }
}

function normalizeInventory(savedInventory) {
  return { ...createDefaultInventory(), ...(savedInventory || {}) }
}

const inventory = ref(createDefaultInventory())
const totalTVSpent = ref(0)
const hintTokensUsed = ref(0)
const dailyQuestProgress = ref(initializeDailyProgress())
const unlockedAchievements = ref([])
const totalCorrectAnswers = ref(0)
const perfectLevelsCount = ref(0)
const weeklyTV = ref(0)
const weeklyLevelsCompleted = ref(0)
const loginDaysThisWeek = ref([])
const weeklyAllDailyDays = ref([])
const purchaseLimits = ref({
  heartRefillDaily: 0,
  xpBoostWeekly: 0
})

const storyUnlockMap = { 'level-3': 'story-cv', 'level-4': 'story-interview', 'level-5': 'story-departure' }

// Computed props for clean template
const profileProps = computed(() => ({
  userName: userName.value, userRole: userRole.value, learningValue: learningValue.value,
  taskValue: taskValue.value, completedLevels: completedLevels.value, unlockedStories: unlockedStories.value,
  currentCombo: currentCombo.value, maxCombo: maxCombo.value, dailyQuestProgress: dailyQuestProgress.value,
  unlockedAchievements: unlockedAchievements.value, totalCorrectAnswers: totalCorrectAnswers.value,
  perfectLevelsCount: perfectLevelsCount.value, isZh: isZh.value
}))

const advisorProps = computed(() => ({
  playerName: userName.value, playerRole: userRole.value, playerLearning: learningValue.value,
  playerTask: taskValue.value, playerCompletedLevels: completedLevels.value, playerCombo: currentCombo.value
}))

const avatarGradient = computed(() => {
  if (userRole.value === 'confused' || userRole.value === 'Explorer') {
    return 'from-[#7FA1ED] to-[#5B78BA]'
  }
  if (userRole.value === 'sprint' || userRole.value === 'Sprint') {
    return 'from-orange-400 to-orange-600'
  }
  return 'from-gray-400 to-gray-600'
})

// ... (处理函数 handleRoleConfirmed, handleStartLevel 等逻辑与原文件完全一致)
function handleRoleConfirmed(data) {
  userRole.value = data.role
  userName.value = data.name
  currentView.value = 'main'
  activeTab.value = 'journey'
  if (!localStorage.getItem('hasSeenOnboarding')) {
    nextTick(() => { showOnboarding.value = true })
  }
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
      const needsWeeklyReset = shouldResetWeekly(progress.dailyQuestProgress)
      const needsDailyReset = shouldResetDaily(progress.dailyQuestProgress)
      let nextProgress = progress.dailyQuestProgress

      if (needsWeeklyReset) {
        nextProgress = resetQuestProgress(nextProgress, 'weekly')
        weeklyTV.value = 0
        weeklyLevelsCompleted.value = 0
        loginDaysThisWeek.value = []
        weeklyAllDailyDays.value = []
        purchaseLimits.value.xpBoostWeekly = 0
      } else {
        weeklyTV.value = progress.weeklyTV || 0
        weeklyLevelsCompleted.value = progress.weeklyLevelsCompleted || 0
        loginDaysThisWeek.value = progress.loginDaysThisWeek || []
        weeklyAllDailyDays.value = progress.weeklyAllDailyDays || []
        purchaseLimits.value.xpBoostWeekly = progress.purchaseLimits?.xpBoostWeekly || 0
      }

      if (needsDailyReset) {
        nextProgress = resetQuestProgress(nextProgress, 'daily')
        purchaseLimits.value.heartRefillDaily = 0
      } else {
        purchaseLimits.value.heartRefillDaily = progress.purchaseLimits?.heartRefillDaily || 0
      }

      dailyQuestProgress.value = nextProgress
    } else {
      dailyQuestProgress.value = initializeDailyProgress()
      weeklyTV.value = 0
      weeklyLevelsCompleted.value = 0
      loginDaysThisWeek.value = []
      weeklyAllDailyDays.value = []
      purchaseLimits.value = { heartRefillDaily: 0, xpBoostWeekly: 0 }
    }
    inventory.value = normalizeInventory(progress.inventory)
    totalTVSpent.value = progress.totalTVSpent || 0
    hintTokensUsed.value = progress.hintTokensUsed || 0
  } else {
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
    weeklyTV.value = 0
    weeklyLevelsCompleted.value = 0
    loginDaysThisWeek.value = []
    weeklyAllDailyDays.value = []
    purchaseLimits.value = { heartRefillDaily: 0, xpBoostWeekly: 0 }
    inventory.value = createDefaultInventory()
    totalTVSpent.value = 0
    hintTokensUsed.value = 0
  }

  const today = new Date().toDateString()
  if (!loginDaysThisWeek.value.includes(today)) {
    loginDaysThisWeek.value.push(today)
    updateDailyQuestProgress('weekly-login-3', 1)
    saveProgress()
  }
}

function handleStartLevel(level) {
  currentLevel.value = typeof level === 'object' ? level.id : level
  currentView.value = 'quiz'
}

function handleSwitchRole() {
  saveProgress()
  currentView.value = 'roleselect'
}

function handleAddLearning() { learningValue.value += ADVISOR_LV_GRANT; saveProgress(); }
function handleAddTask() { taskValue.value += ADVISOR_TV_GRANT; saveProgress(); }

function handleTVEarned(data) {
  taskValue.value += data.tv
  if (data.type === 'interview') {
    updateDailyQuestProgress('daily-interview', 1)
  } else if (data.type === 'minigame') {
    updateDailyQuestProgress('daily-minigame', 1)
  }
  weeklyTV.value += data.tv
  updateDailyQuestProgress('weekly-tv-100', data.tv)
  saveProgress()
}

function handleLearningEarned(data) {
  learningValue.value += data.lv
  if (data.type === 'ps') {
    updateDailyQuestProgress('daily-ps', 1)
  }
  saveProgress()
}

function handleUpgradeGear(data) {
  if (data.cost && data.cost > 0) {
    learningValue.value -= data.cost
  }
  saveProgress()
}

function handleBuyTeacherQuestion(data) {
  const cost = data.cost || 50
  if (learningValue.value < cost) return
  learningValue.value -= cost
  inventory.value.teacherQuestionCredits = (inventory.value.teacherQuestionCredits || 0) + 1
  saveProgress()
}

function handleConsumeTeacherQuestion() {
  if ((inventory.value.teacherQuestionCredits || 0) <= 0) return
  inventory.value.teacherQuestionCredits--
  saveProgress()
}

function handleUseItem(data) {
  if (data.itemId === 'heart-refill' && inventory.value.heartRefills > 0) {
    inventory.value.heartRefills -= data.amount || 1
  } else if (data.itemId === 'hint-token' && inventory.value.hintTokens > 0) {
    inventory.value.hintTokens -= data.amount || 1
    hintTokensUsed.value += data.amount || 1
    checkAchievementsProgress()
  } else if (data.itemId === 'time-freeze' && inventory.value.timeFreezes > 0) {
    inventory.value.timeFreezes -= data.amount || 1
  }
  saveProgress()
}

function handlePurchaseItem(data) {
  const itemId = data.itemId
  if (itemId === 'heart-refill' && purchaseLimits.value.heartRefillDaily >= 3) {
    return
  }
  if (itemId === 'xp-boost-24h' && purchaseLimits.value.xpBoostWeekly >= 1) {
    return
  }
  if (data.price && data.price > 0) {
    taskValue.value -= data.price
    totalTVSpent.value += data.price
  }
  if (itemId === 'heart-refill') {
    inventory.value.heartRefills++
    purchaseLimits.value.heartRefillDaily++
  } else if (itemId === 'hint-token') {
    inventory.value.hintTokens++
  } else if (itemId === 'xp-boost-24h') {
    inventory.value.xpBoostCount++
    purchaseLimits.value.xpBoostWeekly++
    const expiry = new Date()
    expiry.setHours(expiry.getHours() + 24)
    inventory.value.xpBoostExpiry = expiry.toISOString()
  } else if (itemId === 'time-freeze') {
    inventory.value.timeFreezes++
  }
  checkAchievementsProgress()
  saveProgress()
}

function handleResetStore() {
  purchaseLimits.value = { heartRefillDaily: 0, xpBoostWeekly: 0 }
  inventory.value = createDefaultInventory()
  totalTVSpent.value = 0
  hintTokensUsed.value = 0
  saveProgress()
}

function handleResetProgress() {
  learningValue.value = 0; taskValue.value = 0; completedLevels.value = ['level-1'];
  unlockedStories.value = []; currentAchievement.value = null; currentCombo.value = 0;
  maxCombo.value = 0; dailyQuestProgress.value = initializeDailyProgress();
  unlockedAchievements.value = []; totalCorrectAnswers.value = 0; perfectLevelsCount.value = 0;
  weeklyTV.value = 0; weeklyLevelsCompleted.value = 0;
  loginDaysThisWeek.value = []; weeklyAllDailyDays.value = [];
  purchaseLimits.value = { heartRefillDaily: 0, xpBoostWeekly: 0 };
  inventory.value = createDefaultInventory()
  totalTVSpent.value = 0;
  hintTokensUsed.value = 0;
  saveProgress();
}

function handleViewStory(storyId) {
  const guide = getGuideById(storyId)
  if (guide) { currentGuide.value = guide; showGuide.value = true; }
}

function handleQuizClose() { currentView.value = 'main' }

function handleQuizComplete(results) {
  const correctCount = results.correctCount || 0
  const totalQuestions = results.totalQuestions || 3
  const isPerfect = correctCount === totalQuestions
  totalCorrectAnswers.value += correctCount
  if (isPerfect) {
    currentCombo.value++
    if (currentCombo.value > maxCombo.value) maxCombo.value = currentCombo.value
  } else {
    currentCombo.value = 0
  }
  const { learning, task, bonus, comboReward } = calculateComboReward(results.learning || 0, results.task || 0, currentCombo.value)
  // Apply XP Boost if active
  const boostMultiplier = (inventory.value.xpBoostExpiry && new Date(inventory.value.xpBoostExpiry) > new Date()) ? 1.5 : 1
  learningValue.value += Math.round(learning * boostMultiplier)
  taskValue.value += task
  weeklyTV.value += task
  updateDailyQuestProgress('weekly-tv-100', task)
  if (correctCount > 0) updateDailyQuestProgress('daily-correct-5', correctCount)
  if (isPerfect) {
    perfectLevelsCount.value++
    updateDailyQuestProgress('daily-perfect', 1)
    updateDailyQuestProgress('daily-quiz-1', 1)
  }
  if (currentCombo.value >= 3) updateDailyQuestProgress('daily-streak-3', currentCombo.value)
  checkAchievementsProgress()
  let levelId = typeof currentLevel.value === 'number' ? `level-${currentLevel.value}` : currentLevel.value
  if (!completedLevels.value.includes(levelId)) {
    completedLevels.value.push(levelId)
    weeklyLevelsCompleted.value++
    updateDailyQuestProgress('weekly-level-5', 1)
  }
  const unlockedStory = storyUnlockMap[levelId]
  if (unlockedStory && !unlockedStories.value.includes(unlockedStory)) {
    unlockedStories.value.push(unlockedStory)
    currentAchievement.value = { name: 'New Guide Unlocked', icon: '📝' }
    setTimeout(() => { currentAchievement.value = null }, 3000)
  }
  if (comboReward && bonus > 0) {
    currentAchievement.value = { name: `${comboReward.name} +${Math.round(bonus * 100)}%`, icon: comboReward.icon }
    setTimeout(() => { currentAchievement.value = null }, 2000)
  }
  saveProgress(); currentView.value = 'main';
}

function updateDailyQuestProgress(questId, amount) {
  const quest = dailyQuestProgress.value.find(p => p.questId === questId)
  if (quest && !quest.completed) {
    quest.current += amount
    const dailyQuest = DAILY_QUESTS.find(q => q.id === questId)
    if (dailyQuest && quest.current >= dailyQuest.target) {
      quest.completed = true
      learningValue.value += dailyQuest.reward.learning
      taskValue.value += dailyQuest.reward.task
      const questTitle = dailyQuest.title[isZh.value ? 'zh' : 'en']
      currentAchievement.value = { name: `${questTitle} ${isZh.value ? '完成！' : 'Complete!'}`, icon: dailyQuest.icon }
      setTimeout(() => { currentAchievement.value = null }, 2500)

      if (dailyQuest.period === 'daily' && questId !== 'daily-3-quest') {
        const completedDailyCount = dailyQuestProgress.value.filter(p => {
          const q = DAILY_QUESTS.find(d => d.id === p.questId)
          return q && q.period === 'daily' && q.id !== 'daily-3-quest' && p.completed
        }).length
        const metaQuest = dailyQuestProgress.value.find(p => p.questId === 'daily-3-quest')
        const metaQuestDef = DAILY_QUESTS.find(q => q.id === 'daily-3-quest')
        if (metaQuest && metaQuestDef) {
          metaQuest.current = completedDailyCount
          if (!metaQuest.completed && completedDailyCount >= metaQuestDef.target) {
            metaQuest.completed = true
            learningValue.value += metaQuestDef.reward.learning
            taskValue.value += metaQuestDef.reward.task
          }
        }

        const totalNonMetaDaily = DAILY_QUESTS.filter(q => q.period === 'daily' && q.id !== 'daily-3-quest').length
        if (completedDailyCount >= totalNonMetaDaily) {
          const today = new Date().toDateString()
          if (!weeklyAllDailyDays.value.includes(today)) {
            weeklyAllDailyDays.value.push(today)
            updateDailyQuestProgress('weekly-all-daily', 1)
          }
        }
      }
    }
  }
}

function resetQuestProgress(existingProgress, period) {
  const now = new Date().toISOString()
  return DAILY_QUESTS.map((quest) => {
    const existing = existingProgress.find((progress) => progress.questId === quest.id)
    const shouldReset = period === 'all' || quest.period === period
    return {
      questId: quest.id,
      current: shouldReset ? 0 : (existing?.current || 0),
      completed: shouldReset ? false : Boolean(existing?.completed),
      lastUpdated: now
    }
  })
}

function checkAchievementsProgress() {
  const gearMaxed = Object.entries(gearState.value).some(([id, level]) => {
    const gear = GEAR_CONFIG.find(g => g.id === id)
    return gear && level >= gear.maxLevel
  })
  const progress = {
    levelsCompleted: completedLevels.value.length, totalCorrectAnswers: totalCorrectAnswers.value,
    maxCombo: maxCombo.value, daysStreak: 1, totalLearning: learningValue.value,
    totalTask: taskValue.value, perfectLevels: perfectLevelsCount.value,
    totalTVSpent: totalTVSpent.value, hintTokensUsed: hintTokensUsed.value, gearMaxed
  }
  const { newAchievements, rewards } = checkAchievements(progress, unlockedAchievements.value)
  for (const id of newAchievements) unlockedAchievements.value.push(id)
  for (const r of rewards) {
    if (r.reward.type === 'learning') learningValue.value += r.reward.value
    else if (r.reward.type === 'task') taskValue.value += r.reward.value
    const achieve = ACHIEVEMENTS.find(a => a.id === r.id)
    if (achieve) {
      currentAchievement.value = { name: `${achieve.title} Unlocked!`, icon: achieve.icon }
      setTimeout(() => { currentAchievement.value = null }, 2500)
    }
  }
}

function saveProgress() {
  const progress = {
    learning: learningValue.value, task: taskValue.value, completedLevels: completedLevels.value,
    unlockedStories: unlockedStories.value, currentCombo: currentCombo.value, maxCombo: maxCombo.value,
    unlockedAchievements: unlockedAchievements.value, totalCorrectAnswers: totalCorrectAnswers.value,
    perfectLevelsCount: perfectLevelsCount.value, dailyQuestProgress: dailyQuestProgress.value,
    weeklyTV: weeklyTV.value, weeklyLevelsCompleted: weeklyLevelsCompleted.value,
    loginDaysThisWeek: loginDaysThisWeek.value, weeklyAllDailyDays: weeklyAllDailyDays.value,
    purchaseLimits: purchaseLimits.value,
    inventory: inventory.value, totalTVSpent: totalTVSpent.value,
    hintTokensUsed: hintTokensUsed.value,
    lastUpdated: new Date().toISOString()
  }
  localStorage.setItem(`progress_${userRole.value}`, JSON.stringify(progress))
}
</script>

<style scoped>
.game-demo-page {
  min-height: 100vh;
  background-color: #F8FAFC;
  /* 防止点击时出现蓝色高亮框，提升模拟按键感 */
  -webkit-tap-highlight-color: transparent;
}

.game-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 简单的响应式调整：移动端按钮稍微缩小一点点 */
@media (max-width: 640px) {
  .game-container { padding: 12px; }
}
</style>
