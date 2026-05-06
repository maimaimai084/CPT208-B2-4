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
          ← {{ isExplorerRole ? (isZh ? '按顺序解锁：自我 → 调研 → 文书 → 抉择 → 规划' : 'Unlock in order: Identity → Research → Essays → Decide → Plan') : (isZh ? '按顺序解锁：目标 → 材料 → 提交 → 面试 → 成功' : 'Unlock in order: Goals → Materials → Submit → Interview → Success') }} →
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
    { x: 220, y: 300, id: 'level-1', icon: '🧭', label: '1. ' + (props.isZh ? '自我' : 'Identity'), order: 1, labelX: 185, labelY: 335 },
    { x: 480, y: 260, id: 'level-2', icon: '�', label: '2. ' + (props.isZh ? '调研' : 'Research'), order: 2, labelX: 445, labelY: 295 },
    { x: 230, y: 200, id: 'level-3', icon: '✍️', label: '3. ' + (props.isZh ? '文书' : 'Essays'), order: 3, labelX: 195, labelY: 235 },
    { x: 470, y: 160, id: 'level-4', icon: '⚖️', label: '4. ' + (props.isZh ? '抉择' : 'Decide'), order: 4, labelX: 435, labelY: 195 },
    { x: 350, y: 80, id: 'level-5', icon: '🧭', label: '5. ' + (props.isZh ? '规划' : 'Plan'), order: 5, labelX: 315, labelY: 115 }
  ] : [
    { x: 220, y: 300, id: 'level-1', icon: '🎯', label: '1. ' + (props.isZh ? '目标' : 'Goals'), order: 1, labelX: 185, labelY: 335 },
    { x: 480, y: 260, id: 'level-2', icon: '📋', label: '2. ' + (props.isZh ? '材料' : 'Materials'), order: 2, labelX: 445, labelY: 295 },
    { x: 230, y: 200, id: 'level-3', icon: '🚀', label: '3. ' + (props.isZh ? '提交' : 'Submit'), order: 3, labelX: 195, labelY: 235 },
    { x: 470, y: 160, id: 'level-4', icon: '💬', label: '4. ' + (props.isZh ? '面试' : 'Interview'), order: 4, labelX: 435, labelY: 195 },
    { x: 350, y: 80, id: 'level-5', icon: '🏆', label: '5. ' + (props.isZh ? '成功' : 'Success'), order: 5, labelX: 315, labelY: 115 }
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
      { name: '🧭 自我认知', desc: '探索自我兴趣与优势，明确升学方向' },
      { name: '🔍 调研探索', desc: '调研目标院校与专业，收集关键信息' },
      { name: '✍️ 文书创作', desc: '撰写个人陈述与申请文书，展现独特性' },
      { name: '⚖️ 抉择权衡', desc: '权衡不同选择，做出明智的申请决策' },
      { name: '🗺️ 规划未来', desc: '制定详细申请计划，稳步迈向目标' }
    ] : [
      { name: '🧭 Identity', desc: 'Explore your interests and strengths, define your direction' },
      { name: '🔍 Research', desc: 'Investigate target schools and programs, gather key information' },
      { name: '✍️ Essays', desc: 'Write personal statements and application essays, showcase uniqueness' },
      { name: '⚖️ Decide', desc: 'Weigh different options, make wise application decisions' },
      { name: '🗺️ Plan', desc: 'Create detailed application plan, steadily move toward your goal' }
    ]
    return explorerStages[currentStage.value - 1] || explorerStages[0]
  } else {
    const sprintStages = props.isZh ? [
      { name: '🎯 目标设定', desc: '明确申请目标，锁定理想院校' },
      { name: '📋 材料准备', desc: '高效准备申请材料，确保完整无误' },
      { name: '🚀 提交申请', desc: '快速提交申请，抢占先机' },
      { name: '💬 面试冲刺', desc: '全力准备面试，展现最佳状态' },
      { name: '🏆 成功录取', desc: '收获录取通知，开启新征程！' }
    ] : [
      { name: '🎯 Goal Setting', desc: 'Define clear application goals, target ideal schools' },
      { name: '📋 Materials', desc: 'Efficiently prepare application materials, ensure completeness' },
      { name: '🚀 Submit', desc: 'Submit applications quickly, seize the opportunity' },
      { name: '💬 Interview', desc: 'Prepare intensively for interviews, show your best self' },
      { name: '🏆 Success', desc: 'Receive admission offers, start your new journey!' }
    ]
    return sprintStages[currentStage.value - 1] || sprintStages[0]
  }
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