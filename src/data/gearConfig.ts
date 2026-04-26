export interface Gear {
  id: string
  name: { en: string; zh: string }
  description: { en: string; zh: string }
  icon: string
  maxLevel: number
  prices: number[]
  tvBonus: number[]
  levels: { en: string; zh: string }[]
}

export const GEAR_CONFIG: Gear[] = [
  {
    id: 'ielts',
    name: { en: 'IELTS Score', zh: '雅思成绩' },
    description: { 
      en: 'Improves interview response quality', 
      zh: '提升面试回答质量' 
    },
    icon: '📝',
    maxLevel: 4,
    prices: [0, 50, 100, 200],
    tvBonus: [0.1, 0.2, 0.35, 0.5],
    levels: [
      { en: '6.0', zh: '6.0' },
      { en: '6.5', zh: '6.5' },
      { en: '7.0', zh: '7.0' },
      { en: '7.5', zh: '7.5' }
    ]
  },
  {
    id: 'gpa',
    name: { en: 'GPA', zh: 'GPA成绩' },
    description: { 
      en: 'Enhances PS writing quality', 
      zh: '提升文书写作质量' 
    },
    icon: '📊',
    maxLevel: 4,
    prices: [0, 50, 100, 200],
    tvBonus: [0.1, 0.2, 0.35, 0.5],
    levels: [
      { en: '3.0', zh: '3.0' },
      { en: '3.3', zh: '3.3' },
      { en: '3.5', zh: '3.5' },
      { en: '3.8+', zh: '3.8+' }
    ]
  },
  {
    id: 'internship',
    name: { en: 'Internship', zh: '实习经历' },
    description: { 
      en: 'Adds interview/PS experience options', 
      zh: '增加面试/文书经历类选项' 
    },
    icon: '💼',
    maxLevel: 3,
    prices: [0, 30, 80, 150],
    tvBonus: [0.05, 0.15, 0.25],
    levels: [
      { en: 'None', zh: '无' },
      { en: '1段', zh: '1段' },
      { en: '2段', zh: '2段' },
      { en: '3段+', zh: '3段+' }
    ]
  },
  {
    id: 'research',
    name: { en: 'Research', zh: '科研背景' },
    description: { 
      en: 'Unlocks advanced simulation scenes', 
      zh: '解锁高难度模拟场景' 
    },
    icon: '🔬',
    maxLevel: 2,
    prices: [0, 40, 120],
    tvBonus: [0.15, 0.30],
    levels: [
      { en: 'None', zh: '无' },
      { en: 'Course Project', zh: '课程项目' },
      { en: 'formal Research', zh: '正式科研' }
    ]
  }
]

export interface GearState {
  [gearId: string]: number
}

export function getDefaultGearState(): GearState {
  const state: GearState = {}
  GEAR_CONFIG.forEach(gear => {
    state[gear.id] = 0
  })
  return state
}

export function calculateTVBonus(gearState: GearState): number {
  let totalBonus = 0
  GEAR_CONFIG.forEach(gear => {
    const currentLevel = gearState[gear.id] || 0
    if (currentLevel > 0 && currentLevel <= gear.tvBonus.length) {
      totalBonus += gear.tvBonus[currentLevel - 1]
    }
  })
  return totalBonus
}

export function getGearLevelLabel(gear: Gear, level: number, isZh: boolean): string {
  const levelIndex = level - 1
  if (levelIndex >= 0 && levelIndex < gear.levels.length) {
    return gear.levels[levelIndex][isZh ? 'zh' : 'en']
  }
  return isZh ? '无' : 'None'
}

export function canUpgradeGear(gear: Gear, currentLevel: number, currentLV: number): boolean {
  const nextLevel = currentLevel + 1
  if (nextLevel > gear.maxLevel) return false
  const price = gear.prices[nextLevel]
  return currentLV >= price
}