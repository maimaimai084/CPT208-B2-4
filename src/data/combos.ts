export interface ComboReward {
  id: string;
  name: string;
  comboRequired: number;
  bonusMultiplier: number;
  icon: string;
}

export const COMBO_REWARDS: ComboReward[] = [
  {
    id: 'combo-3',
    name: 'Triple Threat',
    comboRequired: 3,
    bonusMultiplier: 0.15,
    icon: '⚡'
  },
  {
    id: 'combo-5',
    name: 'On Fire!',
    comboRequired: 5,
    bonusMultiplier: 0.25,
    icon: '🔥'
  },
  {
    id: 'combo-10',
    name: 'Unstoppable',
    comboRequired: 10,
    bonusMultiplier: 0.5,
    icon: '🌟'
  }
]

export function calculateComboReward(baseLearning: number, baseTask: number, currentCombo: number): { learning: number; task: number; bonus: number; comboReward: ComboReward | null } {
  let bonus = 0
  let comboReward: ComboReward | null = null

  for (const reward of COMBO_REWARDS) {
    if (currentCombo >= reward.comboRequired) {
      bonus = reward.bonusMultiplier
      comboReward = reward
    }
  }

  const learningBonus = Math.floor(baseLearning * bonus)
  const taskBonus = Math.floor(baseTask * bonus)

  return {
    learning: baseLearning + learningBonus,
    task: baseTask + taskBonus,
    bonus,
    comboReward
  }
}