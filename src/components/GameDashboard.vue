<template>
  <div class="game-dashboard">
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
  </div>
</template>

<script setup>
/**
 * 游戏主面板组件
 * 展示双数值系统、关卡选择、已解锁剧情
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

defineEmits(['start-level', 'add-learning', 'add-task', 'view-story', 'reset-progress'])

// ============================================
// 动画数值（用于数字滚动效果）
// ============================================
const animatedLearning = ref(props.learningValue)
const animatedTask = ref(props.taskValue)

// 监听数值变化，添加动画
watch(() => props.learningValue, (newVal, oldVal) => {
  animateValue(animatedLearning, oldVal, newVal, 1000)
})

watch(() => props.taskValue, (newVal, oldVal) => {
  animateValue(animatedTask, oldVal, newVal, 1000)
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
// Strategy Guides (Stories)
// ============================================
const stories = {
  'story-strategy': {
    title: 'Overseas Masters Application Strategy',
    content: `
      <h3>Welcome to Your MasterApply Journey!</h3>
      <p>This guide covers the essential strategies for applying to overseas master's programs.</p>
      
      <h4>📅 Timeline Overview</h4>
      <ul>
        <li><strong>12+ months before:</strong> Research programs, take standardized tests (GRE/GMAT/IELTS)</li>
        <li><strong>6-9 months before:</strong> Prepare申请 materials, request recommendation letters</li>
        <li><strong>3-6 months before:</strong> Write and refine PS/Essays, submit applications</li>
        <li><strong>1-3 months before:</strong> Interview preparation (if required), receive decisions</li>
      </ul>
      
      <h4>🎯 Key Components</h4>
      <ul>
        <li><strong>Academic Transcripts:</strong> Official scores from all institutions attended</li>
        <li><strong>Statement of Purpose:</strong> Your story - why this program, why now</li>
        <li><strong>Letters of Recommendation:</strong> 2-3 letters from academics who know you well</li>
        <li><strong>Resume/CV:</strong> Highlight relevant experience and achievements</li>
        <li><strong>Standardized Tests:</strong> GRE/GMAT (varies by program), English proficiency tests</li>
      </ul>
      
      <h4>💡 Pro Tips</h4>
      <ul>
        <li>Start early - give yourself time to revise</li>
        <li>Tailor each application to the specific program</li>
        <li>Show genuine interest and fit with the program</li>
        <li>Proofread multiple times, ideally with native speakers</li>
        <li>Apply to a range of schools (reach, match, safety)</li>
      </ul>
    `
  },
  'story-essay': {
    title: 'Personal Statement Master Guide',
    content: `
      <h3>Writing Your Personal Statement</h3>
      <p>Your personal statement is your chance to tell your unique story to the admissions committee.</p>
      
      <h4>❌ Common Mistakes to Avoid</h4>
      <ul>
        <li>Using generic templates without personalization</li>
        <li>Simply listing resume achievements without reflection</li>
        <li>Unclear motivation - why this major? Why this school?</li>
        <li>Grammar and spelling errors</li>
        <li>Being too verbose or too brief</li>
      </ul>
      
      <h4>✅ Core Techniques</h4>
      <ul>
        <li><strong>Show motivation through stories:</strong> Use specific experiences to explain your choice</li>
        <li><strong>Demonstrate fit:</strong> Show how your background matches the program</li>
        <li><strong>Future planning:</strong> Clear short-term and long-term career goals</li>
        <li><strong>Be authentic:</strong> Let your voice shine through</li>
        <li><strong>Connect the dots:</strong> Show how past experiences lead to future goals</li>
      </ul>
      
      <h4>📝 Structure Example</h4>
      <ul>
        <li>Opening hook - grab attention with a relevant story/moment</li>
        <li>Academic background and relevant experiences</li>
        <li>Why this program specifically</li>
        <li>Future career goals</li>
        <li>Closing - reinforce your fit and enthusiasm</li>
      </ul>
    `
  },
  'story-school': {
    title: 'School Selection Strategy',
    content: `
      <h3>Choosing the Right Programs</h3>
      <p>Finding the right fit involves balancing rankings, research, location, and costs.</p>
      
      <h4>🏫 Key Factors to Consider</h4>
      <ul>
        <li><strong>Program Ranking:</strong> Overall and major-specific rankings</li>
        <li><strong>Faculty & Research:</strong> Active professors, cutting-edge research</li>
        <li><strong>Location:</strong> UK, US, HK, Singapore, Australia - each has advantages</li>
        <li><strong>Cost & Scholarships:</strong> Tuition, living expenses, funding opportunities</li>
        <li><strong>Career Services:</strong> Job placement rates, industry connections</li>
      </ul>
      
      <h4>🌍 Country Comparison</h4>
      <ul>
        <li><strong>UK:</strong> 1-year programs, strong academics, compact</li>
        <li><strong>US:</strong> 2-year programs, comprehensive, diverse options</li>
        <li><strong>Hong Kong:</strong> International environment, proximity to China, growing programs</li>
        <li><strong>Singapore:</strong> Safe, English-taught, quality education</li>
        <li><strong>Australia:</strong> Work-friendly policies, quality universities</li>
      </ul>
      
      <h4>🎯 Application Strategy</h4>
      <ul>
        <li>Apply to 5-8 programs as a balanced list</li>
        <li>Include 2-3 reach schools</li>
        <li>Include 2-3 match schools</li>
        <li>Include 1-2 safety schools</li>
      </ul>
    `
  },
  'story-cv': {
    title: 'CV Writing Excellence',
    content: `
      <h3>Crafting Your Professional CV</h3>
      <p>Your CV is a targeted marketing document. Make every word count!</p>
      
      <h4>📋 CV Structure</h4>
      <ul>
        <li><strong>Contact Info:</strong> Name, email, phone, location (no ID numbers)</li>
        <li><strong>Education:</strong> Degree, university, GPA (if strong), relevant coursework</li>
        <li><strong>Experience:</strong> internships, jobs, research projects</li>
        <li><strong>Activities:</strong> Leadership, community service</li>
        <li><strong>Skills:</strong> Languages, technical skills, certifications</li>
      </ul>
      
      <h4>✍️ Writing Tips</h4>
      <ul>
        <li>Use action verbs: Led, Developed, Analyzed, Created</li>
        <li>Quantify achievements: "Increased efficiency by 30%"</li>
        <li>Tailor to each application</li>
        <li>Keep it to 1-2 pages</li>
        <li>Use consistent formatting</li>
      </ul>
      
      <h4>✅ Do's and Don'ts</h4>
      <ul>
        <li>✅ Use bullet points</li>
        <li>✅ Be specific about your contributions</li>
        <li>✅ Proofread carefully</li>
        <li>❌ Don't list every course you've taken</li>
        <li>❌ Don't use personal pronouns</li>
      </ul>
    `
  },
  'story-interview': {
    title: 'Interview Preparation',
    content: `
      <h3>Mastering Program Interviews</h3>
      <p>Some programs require interviews. Preparation is key to success!</p>
      
      <h4>🎯 Common Interview Types</h4>
      <ul>
        <li><strong>Admissions Interview:</strong> Evaluate your fit and motivation</li>
        <li><strong>Alumni Interview:</strong> Learn about student experience</li>
        <li><strong>Team Interview:</strong> Group discussion/activities</li>
      </ul>
      
      <h4>📝 Common Questions</h4>
      <ul>
        <li>Tell me about yourself</li>
        <li>Why this program/school?</li>
        <li>What are your career goals?</li>
        <li>Tell me about a challenge you overcame</li>
        <li>Why should we accept you?</li>
      </ul>
      
      <h4>💡 Preparation Tips</h4>
      <ul>
        <li>Research the program thoroughly</li>
        <li>Practice out loud</li>
        <li>Prepare 2-3 questions to ask them</li>
        <li>Test your technology in advance</li>
        <li>Dress professionally</li>
        <li>Be yourself - authenticity matters!</li>
      </ul>
    `
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
  return stories[storyId]?.title || 'Strategy Guide'
}
</script>

<style scoped>
/* 关卡卡片悬停效果 */
.group:hover {
  transform: translateY(-2px);
}

/* 响应式调整 */
@media (max-width: 640px) {
  .game-dashboard h2 {
    font-size: 1.125rem;
  }
}
</style>
