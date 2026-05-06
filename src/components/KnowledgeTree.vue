<template>
  <div class="knowledge-tree-container w-full">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-2xl font-black text-slate-700 tracking-tight drop-shadow-sm flex items-center gap-2">
          🌳 {{ isZh ? '你的申硕知识树' : 'Your Knowledge Tree' }}
        </h2>
        <p class="text-sm text-slate-500 font-medium mt-1">
          {{ isZh ? '完成关卡让树成长，收集蓝叶(LV)、橙叶(TV)、金叶(特殊)' : 'Complete levels to grow your tree, collect Blue(LV), Orange(TV), Gold(special) leaves' }}
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
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
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
          <g :transform="`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rotation}) scale(1.5)`" @click="handleLeafClick(leaf)" class="cursor-pointer">
            <path :d="leafPath" transform="translate(-12, -12)" :fill="leaf.color" stroke="rgba(255,255,255,0.4)" stroke-width="0.8" filter="url(#softGlow)" class="leaf-icon"/>
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
            :class="!node.locked ? '' : ''"
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
          <circle cx="350" cy="60" r="30" fill="#FCD34D" opacity="0.3"/>
          <text x="350" y="65" text-anchor="middle" class="text-3xl">🌸</text>
        </g>

        <text x="350" y="445" text-anchor="middle" font-size="11" fill="#9CA3AF" opacity="0.7">
          {{ isZh ? '完成当前阶段解锁下一关卡' : 'Complete current stage to unlock the next' }}
        </text>
      </svg>
    </div>

    <div class="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl">{{ stageDetail.icon }}</span>
        <div>
          <div class="font-bold text-slate-700">{{ stageDetail.title }}</div>
          <div class="text-xs text-slate-500">{{ stageDetail.subtitle }}</div>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
        <div v-for="(topic, idx) in stageDetail.topics" :key="idx"
             class="flex items-center gap-2 text-xs px-2 py-1.5 rounded-lg"
             :class="topic.covered ? 'bg-green-100 text-green-700' : 'bg-white text-slate-500 border border-slate-200'">
          <span>{{ topic.covered ? '✅' : '⬜' }}</span>
          <span>{{ topic.label }}</span>
        </div>
      </div>
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
          <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-400"></span>{{ isZh ? '金' : 'Gold' }} {{ leafCounts.green }}</span>
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
  isZh: { type: Boolean, default: false },
  userRole: { type: String, default: '' }
})

const emit = defineEmits(['select-stage'])

const leafPath = "M12 22C7 18 3 13 3 8C3 4 6 2 10 3C11 3.5 12 5 12 5C12 5 13 3.5 14 3C18 2 21 4 21 8C21 13 17 18 12 22Z M12 7V19 M8 11S10 9 12 9 16 11 16 11 M8 15S10 17 12 17 16 15 16 15"

const currentStage = computed(() => {
  const completed = props.completedLevels.length
  return Math.min(completed + 1, 5)
})

const totalTV = computed(() => props.totalTask)

const isExplorerRole = computed(() => {
  const role = props.userRole || 'explorer'
  return role === 'explorer' || role === 'confused'
})

const stages = [
  { path: 'M350 360 Q280 340 220 300', width: 8, order: 1 },
  { path: 'M350 320 Q420 300 480 260', width: 8, order: 2 },
  { path: 'M350 280 Q290 240 230 200', width: 6, order: 3 },
  { path: 'M350 240 Q410 200 470 160', width: 6, order: 4 },
  { path: 'M350 200 Q350 140 350 80', width: 5, order: 5 }
]

const stageNodes = computed(() => {
  const role = props.userRole || 'explorer'
  const isExplorer = role === 'explorer' || role === 'confused'
  
  const baseNodes = isExplorer ? [
    { x: 220, y: 300, id: 'level-1', icon: '🧭', label: '1. ' + (props.isZh ? '探索定位' : 'Discovery'), order: 1, labelX: 185, labelY: 335 },
    { x: 480, y: 260, id: 'level-2', icon: '🔍', label: '2. ' + (props.isZh ? '调研资金' : 'Research'), order: 2, labelX: 445, labelY: 295 },
    { x: 230, y: 200, id: 'level-3', icon: '✍️', label: '3. ' + (props.isZh ? '文书提交' : 'Craft'), order: 3, labelX: 195, labelY: 235 },
    { x: 470, y: 160, id: 'level-4', icon: '🔗', label: '4. ' + (props.isZh ? '面试连接' : 'Connect'), order: 4, labelX: 435, labelY: 195 },
    { x: 350, y: 80, id: 'level-5', icon: '✈️', label: '5. ' + (props.isZh ? '决策出发' : 'Depart'), order: 5, labelX: 315, labelY: 115 }
  ] : [
    { x: 220, y: 300, id: 'level-1', icon: '🎯', label: '1. ' + (props.isZh ? '目标规划' : 'Target'), order: 1, labelX: 185, labelY: 335 },
    { x: 480, y: 260, id: 'level-2', icon: '📋', label: '2. ' + (props.isZh ? '材料资金' : 'Materials'), order: 2, labelX: 445, labelY: 295 },
    { x: 230, y: 200, id: 'level-3', icon: '🚀', label: '3. ' + (props.isZh ? '申请提交' : 'Apply'), order: 3, labelX: 195, labelY: 235 },
    { x: 470, y: 160, id: 'level-4', icon: '💬', label: '4. ' + (props.isZh ? '面试连接' : 'Interview'), order: 4, labelX: 435, labelY: 195 },
    { x: 350, y: 80, id: 'level-5', icon: '🏆', label: '5. ' + (props.isZh ? '决策启程' : 'Decide'), order: 5, labelX: 315, labelY: 115 }
  ]

  return baseNodes.map(node => {
    const completed = props.completedLevels.includes(node.id)
    const current = props.currentLevel === node.id
    const locked = node.order > currentStage.value
    return { ...node, completed, current, locked }
  })
})

function getPointOnQuadraticBezier(t, p0, p1, p2) {
  const u = 1 - t
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y
  }
}

function pseudoRandom(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

function getLeafPositionsOnPath(pathStr, count, sideOffset = 12, seedOffset = 0) {
  const coords = pathStr.match(/[\d.]+/g).map(Number)
  const p0 = { x: coords[0], y: coords[1] }
  const p1 = { x: coords[2], y: coords[3] }
  const p2 = { x: coords[4], y: coords[5] }
  
  const positions = []
  const segmentCount = count + 1
  
  for (let i = 1; i <= count; i++) {
    const t = i / segmentCount
    const point = getPointOnQuadraticBezier(t, p0, p1, p2)
    
    const tangentX = 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x)
    const tangentY = 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y)
    const angle = Math.atan2(tangentY, tangentX) * 180 / Math.PI
    
    const offsetX = -Math.sin(angle * Math.PI / 180) * sideOffset
    const offsetY = Math.cos(angle * Math.PI / 180) * sideOffset
    
    const seed = (seedOffset + i) * 7.31
    const jitterX = (pseudoRandom(seed) - 0.5) * 8
    const jitterY = (pseudoRandom(seed + 3.7) - 0.5) * 8
    
    positions.push({
      x: point.x + offsetX + jitterX,
      y: point.y + offsetY + jitterY,
      rotation: angle + (sideOffset > 0 ? -90 : 90)
    })
  }
  
  return positions
}

const displayedLeaves = computed(() => {
  const blueCount = Math.min(Math.floor(props.totalLearning / 30), 14)
  const orangeCount = Math.min(Math.floor(props.totalTask / 20), 11)
  const greenCount = Math.min(props.completedLevels.length, 7)

  const leaves = []
  
  const trunkPath = 'M350 420 Q350 340 350 280'
  
  // 分支定义：path, side, maxCapacity, levelId
  const branches = [
    { path: 'M350 360 Q280 340 220 300', side: 'left', max: 5, level: 'level-1', offset: -12 },
    { path: 'M350 320 Q420 300 480 260', side: 'right', max: 5, level: 'level-2', offset: 12 },
    { path: 'M350 280 Q290 240 230 200', side: 'left', max: 6, level: 'level-3', offset: -10 },
    { path: 'M350 240 Q410 200 470 160', side: 'right', max: 6, level: 'level-4', offset: 10 },
    { path: 'M350 200 Q350 140 350 80', side: 'top', max: 5, level: 'level-5', offset: 8 }
  ]
  
  // 判断分支是否已 grown（已激活）
  // branch index i 对应 stage order i+1；grown 条件是 currentStage > i
  const isBranchGrown = (idx) => currentStage.value > idx
  
  // === 金叶：跟随已完成关卡，长在对应分支上 ===
  for (let i = 0; i < greenCount; i++) {
    if (i < props.completedLevels.length) {
      const levelId = props.completedLevels[i]
      const branch = branches.find(b => b.level === levelId)
      if (branch) {
        const positions = getLeafPositionsOnPath(branch.path, 1, branch.offset, i * 50 + 400)
        positions.forEach(pos => leaves.push({ ...pos, color: 'url(#leafGreenGrad)', type: 'green' }))
      }
    }
  }
  
  // === 蓝叶：只长在 trunk + 已 grown 的左侧分支 ===
  let remainingBlue = blueCount
  if (remainingBlue > 0) {
    const trunkNum = Math.min(3, remainingBlue)
    const trunkPositions = getLeafPositionsOnPath(trunkPath, trunkNum, -15, 0)
    trunkPositions.forEach(pos => leaves.push({ ...pos, color: 'url(#leafBlueGrad)', type: 'blue' }))
    remainingBlue -= trunkNum
  }
  
  const leftBranches = branches.filter((b, idx) => b.side === 'left' && isBranchGrown(idx))
  for (const branch of leftBranches) {
    if (remainingBlue <= 0) break
    const num = Math.min(branch.max, remainingBlue)
    const positions = getLeafPositionsOnPath(branch.path, num, branch.offset, 100 + leftBranches.indexOf(branch) * 100)
    positions.forEach(pos => leaves.push({ ...pos, color: 'url(#leafBlueGrad)', type: 'blue' }))
    remainingBlue -= num
  }
  
  // === 橙叶：只长在已 grown 的右侧分支 ===
  let remainingOrange = orangeCount
  const rightBranches = branches.filter((b, idx) => b.side === 'right' && isBranchGrown(idx))
  for (const branch of rightBranches) {
    if (remainingOrange <= 0) break
    const num = Math.min(branch.max, remainingOrange)
    const positions = getLeafPositionsOnPath(branch.path, num, branch.offset, 300 + rightBranches.indexOf(branch) * 100)
    positions.forEach(pos => leaves.push({ ...pos, color: 'url(#leafOrangeGrad)', type: 'orange' }))
    remainingOrange -= num
  }
  
  return leaves
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
  const role = props.userRole || 'explorer'
  const isExplorer = role === 'explorer' || role === 'confused'
  
  if (isExplorer) {
    const explorerStages = props.isZh ? [
      { name: '🧭 探索与定位', desc: '探索兴趣、优势与选校定位，找到最匹配的项目' },
      { name: '🔍 调研与资金', desc: '收集材料，探索奖学金与资助渠道' },
      { name: '✍️ 文书与提交', desc: '撰写文书，打磨CV，提交申请' },
      { name: '🔗 连接与面试', desc: '联系教授，准备面试，专业跟进' },
      { name: '✈️ 决策与出发', desc: '比较offer，办理签证，准备出发' }
    ] : [
      { name: '🧭 Discovery', desc: 'Explore your interests, strengths & school fit' },
      { name: '🔍 Research & Funding', desc: 'Gather documents, explore scholarships & funding' },
      { name: '✍️ Craft & Submit', desc: 'Write essays, polish CV & submit applications' },
      { name: '🔗 Connect & Interview', desc: 'Network with professors & ace interviews' },
      { name: '✈️ Decide & Depart', desc: 'Compare offers, secure visa & depart' }
    ]
    return explorerStages[currentStage.value - 1] || explorerStages[0]
  } else {
    const sprintStages = props.isZh ? [
      { name: '🎯 目标与规划', desc: '明确目标，制定选校策略与时间规划' },
      { name: '📋 材料与资金', desc: '高效准备材料，争取奖学金与资助' },
      { name: '🚀 申请与提交', desc: '完善文书与CV，高效提交申请' },
      { name: '💬 面试与连接', desc: '面试冲刺，建立人脉，专业跟进' },
      { name: '🏆 决策与启程', desc: '做出最终决策，办理签证，开启新旅程' }
    ] : [
      { name: '🎯 Target & Plan', desc: 'Define clear goals, build strategy & timeline' },
      { name: '📋 Materials & Funding', desc: 'Prepare materials efficiently, secure financial aid' },
      { name: '🚀 Apply & Submit', desc: 'Finalize essays, perfect CV & submit apps' },
      { name: '💬 Interview & Connect', desc: 'Ace interviews, build connections & follow up' },
      { name: '🏆 Decide & Go', desc: 'Make final decisions, handle visa & launch' }
    ]
    return sprintStages[currentStage.value - 1] || sprintStages[0]
  }
})

function handleNodeClick(node) {
  if (!node.locked) {
    emit('select-stage', node.id)
  }
}

const stageDetail = computed(() => {
  const isExplorer = isExplorerRole.value
  const details = isExplorer ? (props.isZh ? [
    { icon: '🧭', title: '探索与定位', subtitle: '涵盖选校定位、自我认知、目标设定', topics: [
      { label: '兴趣与优势分析', covered: props.completedLevels.includes('level-1') },
      { label: '院校调研对比', covered: props.completedLevels.includes('level-1') },
      { label: '专业方向匹配', covered: props.completedLevels.includes('level-1') },
      { label: '选校目标清单', covered: props.completedLevels.includes('level-1') }
    ]},
    { icon: '🔍', title: '调研与资金', subtitle: '涵盖材料准备、奖学金申请、研究计划', topics: [
      { label: '材料清单整理', covered: props.completedLevels.includes('level-2') },
      { label: '奖学金与资助', covered: props.completedLevels.includes('level-2') },
      { label: '推荐信准备', covered: props.completedLevels.includes('level-2') },
      { label: '成绩认证(WES)', covered: props.completedLevels.includes('level-2') }
    ]},
    { icon: '✍️', title: '文书与提交', subtitle: '涵盖文书写作、CV打磨、网申提交、研究计划', topics: [
      { label: '个人陈述撰写', covered: props.completedLevels.includes('level-3') },
      { label: 'CV/简历优化', covered: props.completedLevels.includes('level-3') },
      { label: '网申材料提交', covered: props.completedLevels.includes('level-3') },
      { label: '研究计划套磁', covered: props.completedLevels.includes('level-3') }
    ]},
    { icon: '🔗', title: '连接与面试', subtitle: '涵盖面试准备、教授套磁、跟进沟通', topics: [
      { label: '面试模拟训练', covered: props.completedLevels.includes('level-4') },
      { label: '教授套磁技巧', covered: props.completedLevels.includes('level-4') },
      { label: '常见问题应对', covered: props.completedLevels.includes('level-4') },
      { label: '面试后跟进', covered: props.completedLevels.includes('level-4') }
    ]},
    { icon: '✈️', title: '决策与出发', subtitle: '涵盖Offer比较、签证办理、行前准备', topics: [
      { label: '多offer对比', covered: props.completedLevels.includes('level-5') },
      { label: '奖学金评估', covered: props.completedLevels.includes('level-5') },
      { label: '签证申请办理', covered: props.completedLevels.includes('level-5') },
      { label: '行前准备清单', covered: props.completedLevels.includes('level-5') }
    ]}
  ] : [
    { icon: '🧭', title: 'Discovery', subtitle: 'School selection, self-assessment & goal setting', topics: [
      { label: 'Interest & Strength Analysis', covered: props.completedLevels.includes('level-1') },
      { label: 'School Research & Comparison', covered: props.completedLevels.includes('level-1') },
      { label: 'Program Fit Matching', covered: props.completedLevels.includes('level-1') },
      { label: 'Target School List', covered: props.completedLevels.includes('level-1') }
    ]},
    { icon: '🔍', title: 'Research & Funding', subtitle: 'Documents, scholarships & financial aid', topics: [
      { label: 'Document Checklist', covered: props.completedLevels.includes('level-2') },
      { label: 'Scholarships & Funding', covered: props.completedLevels.includes('level-2') },
      { label: 'Recommendation Letters', covered: props.completedLevels.includes('level-2') },
      { label: 'Credential Evaluation', covered: props.completedLevels.includes('level-2') }
    ]},
    { icon: '✍️', title: 'Craft & Submit', subtitle: 'Essays, CV, online applications & research proposals', topics: [
      { label: 'Personal Statement', covered: props.completedLevels.includes('level-3') },
      { label: 'CV / Resume Polish', covered: props.completedLevels.includes('level-3') },
      { label: 'Online Application', covered: props.completedLevels.includes('level-3') },
      { label: 'Research Proposal', covered: props.completedLevels.includes('level-3') }
    ]},
    { icon: '🔗', title: 'Connect & Interview', subtitle: 'Interview prep, networking & follow-ups', topics: [
      { label: 'Mock Interviews', covered: props.completedLevels.includes('level-4') },
      { label: 'Professor Networking', covered: props.completedLevels.includes('level-4') },
      { label: 'Common Q&A Practice', covered: props.completedLevels.includes('level-4') },
      { label: 'Post-Interview Follow-up', covered: props.completedLevels.includes('level-4') }
    ]},
    { icon: '✈️', title: 'Decide & Depart', subtitle: 'Offer comparison, visa & pre-departure prep', topics: [
      { label: 'Multi-Offer Comparison', covered: props.completedLevels.includes('level-5') },
      { label: 'Scholarship Evaluation', covered: props.completedLevels.includes('level-5') },
      { label: 'Visa Application', covered: props.completedLevels.includes('level-5') },
      { label: 'Pre-departure Checklist', covered: props.completedLevels.includes('level-5') }
    ]}
  ]) : (props.isZh ? [
    { icon: '🎯', title: '目标与规划', subtitle: '涵盖选校策略、时间管理、目标设定', topics: [
      { label: '申请目标确定', covered: props.completedLevels.includes('level-1') },
      { label: '院校排名分析', covered: props.completedLevels.includes('level-1') },
      { label: '申请时间线', covered: props.completedLevels.includes('level-1') },
      { label: '冲刺/保底策略', covered: props.completedLevels.includes('level-1') }
    ]},
    { icon: '📋', title: '材料与资金', subtitle: '涵盖材料准备、奖学金、资助申请', topics: [
      { label: '材料清单准备', covered: props.completedLevels.includes('level-2') },
      { label: '奖学金申请', covered: props.completedLevels.includes('level-2') },
      { label: '推荐信跟进', covered: props.completedLevels.includes('level-2') },
      { label: '成绩送分认证', covered: props.completedLevels.includes('level-2') }
    ]},
    { icon: '🚀', title: '申请与提交', subtitle: '涵盖文书终审、网申提交、材料完善', topics: [
      { label: '文书终审打磨', covered: props.completedLevels.includes('level-3') },
      { label: 'CV定稿', covered: props.completedLevels.includes('level-3') },
      { label: '网申系统填写', covered: props.completedLevels.includes('level-3') },
      { label: '材料提交确认', covered: props.completedLevels.includes('level-3') }
    ]},
    { icon: '💬', title: '面试与连接', subtitle: '涵盖面试冲刺、人脉建设、跟进策略', topics: [
      { label: '面试题库练习', covered: props.completedLevels.includes('level-4') },
      { label: '模拟面试', covered: props.completedLevels.includes('level-4') },
      { label: '邮件跟进模板', covered: props.completedLevels.includes('level-4') },
      { label: '教授联络策略', covered: props.completedLevels.includes('level-4') }
    ]},
    { icon: '🏆', title: '决策与启程', subtitle: '涵盖最终决策、签证办理、出发准备', topics: [
      { label: 'Offer对比决策', covered: props.completedLevels.includes('level-5') },
      { label: '奖学金/学费评估', covered: props.completedLevels.includes('level-5') },
      { label: '签证申请办理', covered: props.completedLevels.includes('level-5') },
      { label: '出发准备清单', covered: props.completedLevels.includes('level-5') }
    ]}
  ] : [
    { icon: '🎯', title: 'Target & Plan', subtitle: 'School strategy, time management & goal setting', topics: [
      { label: 'Application Goals', covered: props.completedLevels.includes('level-1') },
      { label: 'School Ranking Analysis', covered: props.completedLevels.includes('level-1') },
      { label: 'Application Timeline', covered: props.completedLevels.includes('level-1') },
      { label: 'Safety/Reach Strategy', covered: props.completedLevels.includes('level-1') }
    ]},
    { icon: '📋', title: 'Materials & Funding', subtitle: 'Documents, scholarships & financial aid', topics: [
      { label: 'Document Checklist', covered: props.completedLevels.includes('level-2') },
      { label: 'Scholarship Applications', covered: props.completedLevels.includes('level-2') },
      { label: 'Recommendation Follow-up', covered: props.completedLevels.includes('level-2') },
      { label: 'Score Sending', covered: props.completedLevels.includes('level-2') }
    ]},
    { icon: '🚀', title: 'Apply & Submit', subtitle: 'Final essay review, online apps & submission', topics: [
      { label: 'Final Essay Review', covered: props.completedLevels.includes('level-3') },
      { label: 'CV Finalized', covered: props.completedLevels.includes('level-3') },
      { label: 'Online Application', covered: props.completedLevels.includes('level-3') },
      { label: 'Submission Confirmed', covered: props.completedLevels.includes('level-3') }
    ]},
    { icon: '💬', title: 'Interview & Connect', subtitle: 'Interview prep, networking & follow-up', topics: [
      { label: 'Interview Q&A Practice', covered: props.completedLevels.includes('level-4') },
      { label: 'Mock Interviews', covered: props.completedLevels.includes('level-4') },
      { label: 'Follow-up Templates', covered: props.completedLevels.includes('level-4') },
      { label: 'Professor Outreach', covered: props.completedLevels.includes('level-4') }
    ]},
    { icon: '🏆', title: 'Decide & Go', subtitle: 'Final decisions, visa & departure prep', topics: [
      { label: 'Offer Comparison', covered: props.completedLevels.includes('level-5') },
      { label: 'Scholarship/Tuition Eval', covered: props.completedLevels.includes('level-5') },
      { label: 'Visa Application', covered: props.completedLevels.includes('level-5') },
      { label: 'Departure Checklist', covered: props.completedLevels.includes('level-5') }
    ]}
  ])
  return details[currentStage.value - 1] || details[0]
})

function handleLeafClick(leaf) {
  console.log('Leaf clicked:', leaf.type)
}
</script>

<style scoped>
.leaf-icon {
  transition: opacity 0.3s ease;
}
.leaf-icon:hover {
  opacity: 0.8;
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