<template>
  <div class="knowledge-tree-container w-full">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-2xl font-black text-slate-700 tracking-tight drop-shadow-sm flex items-center gap-2">
          🌳 {{ isZh ? '你的申硕知识树' : 'Your Knowledge Tree' }}
        </h2>
        <p class="text-sm text-slate-500 font-medium mt-1">
          {{ isZh ? '完成关卡让树成长，收集蓝叶(LV)、橙叶(TV)、绿叶(特殊)' : 'Complete levels to grow your tree, collect Blue(LV), Orange(TV), Green(special) leaves' }}
        </p>
      </div>
      <div class="px-3 py-1.5 bg-blue-100 rounded-lg text-xs font-bold text-blue-600">
        {{ isZh ? '阶段' : 'Stage' }} {{ currentStage }}/5
      </div>
    </div>

    <div class="legend flex gap-4 text-xs mb-4">
      <div class="flex items-center gap-1.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C7 2 3 7 3 12c0 5 4 10 9 10s9-5 9-10c0-5-4-10-9-10z" fill="#7FA1ED" opacity="0.3"/>
          <path d="M12 2C7 2 3 7 3 12c0 5 4 10 9 10s9-5 9-10c0-5-4-10-9-10z" stroke="#7FA1ED" stroke-width="1.5" fill="none"/>
          <path d="M12 6v12M8 10s2-2 4-2 4 2 4 2M8 14s2 2 4 2 4-2 4-2" stroke="#7FA1ED" stroke-width="1.5" fill="none"/>
        </svg>
        <span class="text-slate-500">{{ isZh ? '蓝叶 = LV成就' : 'Blue = LV Achievement' }}</span>
      </div>
      <div class="flex items-center gap-1.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C7 2 3 7 3 12c0 5 4 10 9 10s9-5 9-10c0-5-4-10-9-10z" fill="#FBBF24" opacity="0.3"/>
          <path d="M12 2C7 2 3 7 3 12c0 5 4 10 9 10s9-5 9-10c0-5-4-10-9-10z" stroke="#F59E0B" stroke-width="1.5" fill="none"/>
          <path d="M12 6v12M8 10s2-2 4-2 4 2 4 2M8 14s2 2 4 2 4-2 4-2" stroke="#F59E0B" stroke-width="1.5" fill="none"/>
        </svg>
        <span class="text-slate-500">{{ isZh ? '橙叶 = TV成就' : 'Orange = TV Achievement' }}</span>
      </div>
      <div class="flex items-center gap-1.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C7 2 3 7 3 12c0 5 4 10 9 10s9-5 9-10c0-5-4-10-9-10z" fill="#FBBF24" opacity="0.3"/>
          <path d="M12 2C7 2 3 7 3 12c0 5 4 10 9 10s9-5 9-10c0-5-4-10-9-10z" stroke="#F59E0B" stroke-width="1.5" fill="none"/>
          <path d="M12 6v12M8 10s2-2 4-2 4 2 4 2M8 14s2 2 4 2 4-2 4-2" stroke="#F59E0B" stroke-width="1.5" fill="none"/>
        </svg>
        <span class="text-slate-500">{{ isZh ? '金叶 = 特殊成就' : 'Gold = Special' }}</span>
      </div>
    </div>

    <div class="relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-white" style="min-height: 480px;">
      <svg viewBox="0 0 700 450" preserveAspectRatio="xMidYMid meet" class="w-full h-full" style="max-height: 450px;">
        <defs>
          <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#A0826D"/>
            <stop offset="50%" style="stop-color:#8B6F47"/>
            <stop offset="100%" style="stop-color:#A0826D"/>
          </linearGradient>
          <linearGradient id="leafBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#7FA1ED"/>
            <stop offset="100%" style="stop-color:#5B78BA"/>
          </linearGradient>
          <linearGradient id="leafOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#FBBF24"/>
            <stop offset="100%" style="stop-color:#F59E0B"/>
          </linearGradient>
          <linearGradient id="leafGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#FBBF24"/>
            <stop offset="100%" style="stop-color:#F59E0B"/>
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <ellipse cx="350" cy="430" rx="200" ry="18" fill="#E5E7EB" opacity="0.4"/>
        <ellipse cx="350" cy="428" rx="160" ry="12" fill="#D1FAE5" opacity="0.5"/>

        <g id="guide-paths" opacity="0.35">
          <path d="M350 420 Q350 340 350 280" stroke="#9CA3AF" stroke-width="4" fill="none" class="guide-path" stroke-dasharray="6 4"/>
          <path d="M350 360 Q280 340 220 300" stroke="#9CA3AF" stroke-width="3" fill="none" class="guide-path" stroke-dasharray="6 4"/>
          <path d="M350 320 Q420 300 480 260" stroke="#9CA3AF" stroke-width="3" fill="none" class="guide-path" stroke-dasharray="6 4"/>
          <path d="M350 280 Q290 240 230 200" stroke="#9CA3AF" stroke-width="3" fill="none" class="guide-path" stroke-dasharray="6 4"/>
          <path d="M350 240 Q410 200 470 160" stroke="#9CA3AF" stroke-width="3" fill="none" class="guide-path" stroke-dasharray="6 4"/>
          <path d="M350 200 Q350 140 350 80" stroke="#9CA3AF" stroke-width="3" fill="none" class="guide-path" stroke-dasharray="6 4"/>
        </g>

        <g id="active-branches">
          <path id="trunk" d="M350 420 Q350 340 350 280" stroke="url(#trunkGrad)" stroke-width="18" fill="none" stroke-linecap="round"/>
          <path v-for="(stage, idx) in stages" :key="`branch-${idx}`"
                :id="`branch-${idx + 1}`"
                :d="stage.path"
                :stroke="currentStage > idx ? 'url(#trunkGrad)' : '#D1D5DB'"
                :stroke-width="stage.width"
                fill="none"
                stroke-linecap="round"
                class="branch-path"
                :class="{ grown: currentStage > idx }"/>
        </g>

        <g v-for="(leaf, idx) in displayedLeaves" :key="`leaf-${idx}`" class="leaf-group">
          <g :transform="`translate(${leaf.x - 12}, ${leaf.y - 12})`" @click="handleLeafClick(leaf)" class="cursor-pointer">
            <path :d="leafPath" :fill="leaf.color" filter="url(#softGlow)" class="leaf-icon transition-all duration-300 hover:scale-125"/>
          </g>
        </g>

        <g v-for="(node, idx) in stageNodes" :key="`node-${idx}`" class="stage-node" :data-tour="!node.locked ? 'tree-node' : null" @click="handleNodeClick(node)">
          <circle 
            :cx="node.x" 
            :cy="node.y" 
            r="28" 
            :fill="node.locked ? 'white' : (node.completed ? '#75CD9D' : '#7FA1ED')"
            :stroke="node.locked ? '#D1D5DB' : (node.completed ? '#75CD9D' : '#7FA1ED')"
            stroke-width="3"
            :filter="!node.locked ? 'url(#softGlow)' : ''"
            class="cursor-pointer transition-all duration-300"
            :class="{ 'hover:scale-110': !node.locked }"
          />
          <text :x="node.x" :y="node.y + 6" text-anchor="middle" class="text-xl pointer-events-none">
            {{ node.locked ? '🔒' : node.completed ? '✅' : node.icon }}
          </text>
          <rect :x="node.labelX" :y="node.labelY" width="70" height="22" rx="11" :fill="node.locked ? '#E5E7EB' : (node.completed ? '#D1FAE5' : '#EFF4FD')"/>
          <text :x="node.labelX + 35" :y="node.labelY + 15" text-anchor="middle" :font-size="11" :fill="node.locked ? '#9CA3AF' : (node.completed ? '#059669' : '#7FA1ED')" font-weight="600">
            {{ node.label }}
          </text>
        </g>

        <g v-if="currentStage >= 5 && totalTV >= 500" class="flower-group">
          <circle cx="350" cy="60" r="30" fill="#FCD34D" opacity="0.3" class="animate-ping"/>
          <text x="350" y="65" text-anchor="middle" class="text-3xl">🌸</text>
        </g>

        <text x="350" y="445" text-anchor="middle" font-size="11" fill="#9CA3AF" opacity="0.7">
          ← {{ isZh ? '按顺序解锁：选校 → 材料 → 文书 → 网申 → 面试' : 'Unlock in order: School → Docs → Essay → Apply → Interview' }} →
        </text>
      </svg>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#7FA1ED] hover:-translate-y-1 transition-transform">
        <div class="text-xs text-slate-500 mb-1">{{ isZh ? '当前阶段' : 'Current Stage' }}</div>
        <div class="font-bold text-lg text-[#7FA1ED]">{{ stageInfo.name }}</div>
        <div class="text-xs text-slate-500 mt-2">{{ stageInfo.desc }}</div>
        <div class="mt-3 flex gap-1">
          <div v-for="i in 5" :key="i" 
               class="w-6 h-1.5 rounded-full"
               :class="i <= currentStage ? 'bg-[#7FA1ED]' : 'bg-slate-200'"></div>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-amber-400 hover:-translate-y-1 transition-transform">
        <div class="text-xs text-slate-500 mb-1">{{ isZh ? '树叶收集' : 'Leaf Collection' }}</div>
        <div class="font-bold text-lg text-amber-500">{{ totalLeaves }} {{ isZh ? '片' : 'leaves' }}</div>
        <div class="text-xs text-slate-500 mt-2 flex gap-3">
          <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-[#7FA1ED]"></span>{{ isZh ? '蓝' : 'Blue' }} {{ leafCounts.blue }}</span>
          <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-400"></span>{{ isZh ? '橙' : 'Orange' }} {{ leafCounts.orange }}</span>
          <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-green-500"></span>{{ isZh ? '绿' : 'Green' }} {{ leafCounts.green }}</span>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500 hover:-translate-y-1 transition-transform">
        <div class="text-xs text-slate-500 mb-1">{{ isZh ? '成长进度' : 'Growth Progress' }}</div>
        <div class="font-bold text-lg text-green-600">{{ growthPercent }}%</div>
        <div class="w-full bg-slate-100 rounded-full h-2.5 mt-3">
          <div class="h-full bg-green-500 rounded-full transition-all duration-500" :style="{ width: growthPercent + '%' }"></div>
        </div>
        <div class="text-xs text-slate-500 mt-2">{{ isZh ? '解锁全部5关 + 收集30片叶子' : 'Unlock all 5 levels + collect 30 leaves' }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  completedLevels: { type: Array, default: () => [] },
  currentLevel: { type: String, default: '' },
  totalLearning: { type: Number, default: 0 },
  totalTask: { type: Number, default: 0 },
  maxCombo: { type: Number, default: 0 },
  daysStreak: { type: Number, default: 0 },
  isZh: { type: Boolean, default: false }
})

const emit = defineEmits(['select-stage'])

const leafPath = "M12 2C7 2 3 7 3 12c0 5 4 10 9 10s9-5 9-10c0-5-4-10-9-10z M12 6v12 M8 10s2-2 4-2 4 2 4 2 M8 14s2 2 4 2 4-2 4-2"

const currentStage = computed(() => {
  const completed = props.completedLevels.length
  return Math.min(completed + 1, 5)
})

const totalTV = computed(() => props.totalTask)

const stages = [
  { path: 'M350 360 Q280 340 220 300', width: 8, order: 1 },
  { path: 'M350 320 Q420 300 480 260', width: 8, order: 2 },
  { path: 'M350 280 Q290 240 230 200', width: 6, order: 3 },
  { path: 'M350 240 Q410 200 470 160', width: 6, order: 4 },
  { path: 'M350 200 Q350 140 350 80', width: 5, order: 5 }
]

const stageNodes = computed(() => {
  const baseNodes = [
    { x: 220, y: 300, id: 'level-1', icon: '🎓', label: '1. ' + (props.isZh ? '选校' : 'School Sel.'), order: 1, labelX: 185, labelY: 335 },
    { x: 480, y: 260, id: 'level-2', icon: '📄', label: '2. ' + (props.isZh ? '材料' : 'Doc Prep.'), order: 2, labelX: 445, labelY: 295 },
    { x: 230, y: 200, id: 'level-3', icon: '✍️', label: '3. ' + (props.isZh ? '文书' : 'Essay'), order: 3, labelX: 195, labelY: 235 },
    { x: 470, y: 160, id: 'level-4', icon: '📨', label: '4. ' + (props.isZh ? '网申' : 'Apply Sub.'), order: 4, labelX: 435, labelY: 195 },
    { x: 350, y: 80, id: 'level-5', icon: '🎤', label: '5. ' + (props.isZh ? '面试' : 'Interview'), order: 5, labelX: 315, labelY: 115 }
  ]

  return baseNodes.map(node => {
    const completed = props.completedLevels.includes(node.id)
    const current = props.currentLevel === node.id
    const locked = node.order > currentStage.value
    return { ...node, completed, current, locked }
  })
})

const displayedLeaves = computed(() => {
  const leaves = []
  const blueCount = Math.min(Math.floor(props.totalLearning / 30), 15)
  const orangeCount = Math.min(Math.floor(props.totalTask / 20), 10)
  const greenCount = Math.min(props.completedLevels.length, 5)

  for (let i = 0; i < blueCount; i++) {
    leaves.push({
      x: 150 + Math.random() * 100,
      y: 100 + Math.random() * 250,
      color: 'url(#leafBlueGrad)',
      type: 'blue'
    })
  }
  for (let i = 0; i < orangeCount; i++) {
    leaves.push({
      x: 450 + Math.random() * 100,
      y: 100 + Math.random() * 250,
      color: 'url(#leafOrangeGrad)',
      type: 'orange'
    })
  }
  for (let i = 0; i < greenCount; i++) {
    leaves.push({
      x: 320 + Math.random() * 60,
      y: 80 + Math.random() * 100,
      color: 'url(#leafGreenGrad)',
      type: 'green'
    })
  }
  return leaves.slice(0, 30)
})

const totalLeaves = computed(() => displayedLeaves.value.length)
const leafCounts = computed(() => ({
  blue: displayedLeaves.value.filter(l => l.type === 'blue').length,
  orange: displayedLeaves.value.filter(l => l.type === 'orange').length,
  green: displayedLeaves.value.filter(l => l.type === 'green').length
}))

const growthPercent = computed(() => {
  const levelProgress = (currentStage.value - 1) / 4 * 60
  const leafProgress = Math.min(displayedLeaves.value.length / 30, 1) * 40
  return Math.round(levelProgress + leafProgress)
})

const stageInfo = computed(() => {
  const stages = props.isZh ? [
    { name: '🌱 种子期', desc: '完成选校关卡解锁第一分支' },
    { name: '🌿 萌芽期', desc: '完成材料关卡解锁文书分支' },
    { name: '🪴 成长期', desc: '完成文书关卡解锁网申分支' },
    { name: '🌳 开花期', desc: '完成网申关卡解锁面试分支' },
    { name: '🍎 结果期', desc: '完成面试关卡，恭喜通关！' }
  ] : [
    { name: '1. School Selection', desc: 'Complete school selection to unlock the next branch' },
    { name: '2. Document Preparation', desc: 'Complete document prep to unlock essay branch' },
    { name: '3. Essay Writing', desc: 'Complete essay writing to unlock application branch' },
    { name: '4. Application Submission', desc: 'Complete application to unlock interview branch' },
    { name: '5. Interview Preparation', desc: 'Complete interview prep, congratulations!' }
  ]
  return stages[currentStage.value - 1] || stages[0]
})

function handleNodeClick(node) {
  if (!node.locked) {
    emit('select-stage', node.id)
  }
}

function handleLeafClick(leaf) {
  console.log('Leaf clicked:', leaf.type)
}
</script>

<style scoped>
.leaf-icon { 
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); 
  transform-origin: center; 
}
.leaf-icon:hover { 
  transform: scale(1.4) rotate(-5deg); 
}
.branch-path {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  transition: stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.branch-path.grown {
  stroke-dashoffset: 0;
}
.guide-path {
  stroke-dasharray: 6 4;
  opacity: 0.35;
}
.stage-node {
  cursor: pointer;
  transition: all 0.3s ease;
}
.stage-node:hover circle {
  filter: drop-shadow(0 4px 12px rgba(127,161,237,0.3));
}
.stage-node circle {
  transition: all 0.3s ease;
}
</style>