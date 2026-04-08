<template>
  <div class="role-select-container">
    <!-- 角色选择界面 -->
    <div v-if="!confirmed" class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div class="max-w-4xl w-full">
        
        <!-- 标题区 -->
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold text-gray-900 mb-3">Choose Your Path</h1>
          <p class="text-lg text-gray-600">Select a character that matches your situation to begin your journey</p>
        </div>

        <!-- 角色选择卡片网格 -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          
          <!-- Explorer (迷茫型) - 蓝色主题 -->
          <div 
            @click="selectRole('confused')"
            class="role-card group cursor-pointer bg-white rounded-3xl p-8 border-4 border-blue-200 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200 hover:-translate-y-2"
            :class="{ 'ring-4 ring-blue-400 scale-105': selectedRole === 'confused' }"
          >
            <div class="flex flex-col items-center text-center">
              <!-- 头像 -->
              <div class="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                🤔
              </div>
              
              <!-- 角色名 -->
              <h2 class="text-2xl font-bold text-blue-900 mb-2">The Explorer</h2>
              <p class="text-blue-600 font-medium mb-4">For Sophomores (Year 2)</p>
              
              <!-- 特征标签 -->
              <div class="flex flex-wrap justify-center gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200">No Clear Target</span>
                <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200">Fragmented Time</span>
                <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200">Process Novice</span>
              </div>
              
              <!-- 描述 -->
              <p class="text-gray-600 mb-6 leading-relaxed">
                You are just starting to think about postgraduate studies. 
                You need guidance on basic processes, timeline planning, and exploring different options.
              </p>
              
              <!-- 选择指示器 -->
              <div class="w-8 h-8 rounded-full border-3 flex items-center justify-center transition-colors"
                   :class="selectedRole === 'confused' ? 'bg-blue-500 border-blue-500' : 'border-gray-300'">
                <span v-if="selectedRole === 'confused'" class="text-white text-lg">✓</span>
              </div>
            </div>
          </div>

          <!-- Sprint (冲刺型) - 橙色主题 -->
          <div 
            @click="selectRole('sprint')"
            class="role-card group cursor-pointer bg-white rounded-3xl p-8 border-4 border-orange-200 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-200 hover:-translate-y-2"
            :class="{ 'ring-4 ring-orange-400 scale-105': selectedRole === 'sprint' }"
          >
            <div class="flex flex-col items-center text-center">
              <!-- 头像 -->
              <div class="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                🎯
              </div>
              
              <!-- 角色名 -->
              <h2 class="text-2xl font-bold text-orange-900 mb-2">The Sprint</h2>
              <p class="text-orange-600 font-medium mb-4">For Juniors (Year 3)</p>
              
              <!-- 特征标签 -->
              <div class="flex flex-wrap justify-center gap-2 mb-6">
                <span class="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm border border-orange-200">Clear Goals</span>
                <span class="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm border border-orange-200">Need Strategy</span>
                <span class="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm border border-orange-200">Detail Focused</span>
              </div>
              
              <!-- 描述 -->
              <p class="text-gray-600 mb-6 leading-relaxed">
                You have clear postgraduate goals and are actively preparing. 
                You need advanced strategies for essays, school selection, and interview prep.
              </p>
              
              <!-- 选择指示器 -->
              <div class="w-8 h-8 rounded-full border-3 flex items-center justify-center transition-colors"
                   :class="selectedRole === 'sprint' ? 'bg-orange-500 border-orange-500' : 'border-gray-300'">
                <span v-if="selectedRole === 'sprint'" class="text-white text-lg">✓</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 姓名输入 -->
        <div v-if="selectedRole" class="max-w-md mx-auto bg-white rounded-2xl p-6 shadow-lg border border-gray-200 animate-fade-in-up">
          <label class="block text-gray-700 font-medium mb-2">Enter your name to begin:</label>
          <input 
            v-model="userName"
            type="text"
            placeholder="Your Name"
            class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors mb-4 text-lg"
            @keyup.enter="confirmSelection"
          />
          <button 
            @click="confirmSelection"
            :disabled="!userName.trim()"
            class="w-full py-3 rounded-xl font-bold text-lg transition-all duration-200"
            :class="selectedRole === 'confused' 
              ? 'bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-300' 
              : 'bg-orange-500 hover:bg-orange-600 text-white disabled:bg-orange-300'"
          >
            Start My Journey →
          </button>
        </div>

        <!-- 提示文字 -->
        <p v-if="!selectedRole" class="text-center text-gray-400 mt-6 text-sm">
          Click on a character card above to select your path
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 角色选择组件
 * 功能：选择申硕角色（迷茫型Explorer/冲刺型Sprint）
 * 支持首次选择和切换角色两种场景
 */

import { ref, watch } from 'vue'

// ============================================
// Props定义 - 支持外部传入初始值（用于角色切换场景）
// ============================================
const props = defineProps({
  initialRole: {
    type: String,
    default: ''
  },
  initialName: {
    type: String,
    default: ''
  }
})

// ============================================
// Emits定义
// ============================================
const emit = defineEmits(['role-confirmed'])

// ============================================
// 组件内部状态
// ============================================
const selectedRole = ref(props.initialRole || '')
const userName = ref(props.initialName || '')
const confirmed = ref(false)

// ============================================
// 监听外部传入的初始值变化
// ============================================
watch(() => props.initialRole, (newVal) => {
  if (newVal) {
    selectedRole.value = newVal
  }
})

watch(() => props.initialName, (newVal) => {
  if (newVal) {
    userName.value = newVal
  }
})

// ============================================
// 方法函数
// ============================================

/**
 * 选择角色（点击卡片）
 * @param {string} role - 'confused' 或 'sprint'
 */
function selectRole(role) {
  selectedRole.value = role
}

/**
 * 确认选择
 * 保存到LocalStorage并通知父组件
 */
function confirmSelection() {
  if (!selectedRole.value || !userName.value.trim()) return
  
  confirmed.value = true
  
  // 保存到LocalStorage
  localStorage.setItem('userRole', selectedRole.value)
  localStorage.setItem('userName', userName.value)
  
  // 如果是新角色，初始化该角色的进度
  const savedProgress = localStorage.getItem(`progress_${selectedRole.value}`)
  if (!savedProgress) {
    // 新角色，使用默认初始值
    localStorage.setItem('learningValue', '60')
    localStorage.setItem('taskValue', '40')
    localStorage.setItem('completedLevels', JSON.stringify(['level-1']))
    localStorage.setItem('unlockedStories', JSON.stringify([]))
  } else {
    // 恢复该角色的进度
    const progress = JSON.parse(savedProgress)
    localStorage.setItem('learningValue', progress.learning || '60')
    localStorage.setItem('taskValue', progress.task || '40')
    localStorage.setItem('completedLevels', JSON.stringify(progress.levels || ['level-1']))
    localStorage.setItem('unlockedStories', JSON.stringify(progress.stories || []))
  }
  
  // 通知父组件
  emit('role-confirmed', { 
    role: selectedRole.value, 
    name: userName.value 
  })
}

/**
 * 重置选择（用于角色切换）
 * 外部可通过ref调用此方法
 */
function resetSelection() {
  confirmed.value = false
  // 不重置selectedRole和userName，保留上次的值作为参考
}

// 暴露方法给父组件
defineExpose({
  resetSelection
})
</script>

<style scoped>
/* 角色卡片基础样式 */
.role-select-container {
  font-family: 'Inter', system-ui, sans-serif;
}

.role-card {
  position: relative;
  overflow: hidden;
}

/* 卡片悬停效果 */
.role-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.role-card:hover::before {
  opacity: 1;
}

/* 淡入动画 */
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 自定义边框宽度 */
.border-3 {
  border-width: 3px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .role-card {
    padding: 1.5rem;
  }
  
  h1 {
    font-size: 2rem;
  }
}
</style>
