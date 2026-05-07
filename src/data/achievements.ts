export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (progress: AchievementProgress) => boolean;
  reward: { type: 'learning' | 'task' | 'badge'; value: number };
}

export interface AchievementProgress {
  levelsCompleted: number;
  totalCorrectAnswers: number;
  maxCombo: number;
  daysStreak: number;
  totalLearning: number;
  totalTask: number;
  perfectLevels: number;
  totalTVSpent: number;
  hintTokensUsed: number;
  gearMaxed: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-quiz',
    title: 'First Step',
    description: 'Complete your first quiz',
    icon: '🎯',
    condition: (p) => p.levelsCompleted >= 1,
    reward: { type: 'learning', value: 10 }
  },
  {
    id: 'quiz-master',
    title: 'Quiz Master',
    description: 'Answer 50 questions correctly',
    icon: '🏆',
    condition: (p) => p.totalCorrectAnswers >= 50,
    reward: { type: 'learning', value: 50 }
  },
  {
    id: 'combo-master',
    title: 'Combo Master',
    description: 'Achieve a 10-question combo',
    icon: '⚡',
    condition: (p) => p.maxCombo >= 10,
    reward: { type: 'learning', value: 30 }
  },
  {
    id: 'combo-legend',
    title: 'Combo Legend',
    description: 'Achieve a 15-question combo',
    icon: '🌟',
    condition: (p) => p.maxCombo >= 15,
    reward: { type: 'learning', value: 60 }
  },
  {
    id: 'week-warrior',
    title: 'Week Warrior',
    description: 'Log in 7 days in a row',
    icon: '📅',
    condition: (p) => p.daysStreak >= 7,
    reward: { type: 'learning', value: 40 }
  },
  {
    id: 'learning-guru',
    title: 'Learning Guru',
    description: 'Earn 500 learning points',
    icon: '📚',
    condition: (p) => p.totalLearning >= 500,
    reward: { type: 'learning', value: 50 }
  },
  {
    id: 'task-master',
    title: 'Task Master',
    description: 'Earn 300 task points',
    icon: '✅',
    condition: (p) => p.totalTask >= 300,
    reward: { type: 'task', value: 30 }
  },
  {
    id: 'perfect-student',
    title: 'Perfect Student',
    description: 'Complete 3 levels with all correct answers',
    icon: '💯',
    condition: (p) => p.perfectLevels >= 3,
    reward: { type: 'learning', value: 60 }
  },
  {
    id: 'halfway-there',
    title: 'Halfway There',
    description: 'Complete 3 stages',
    icon: '🥾',
    condition: (p) => p.levelsCompleted >= 3,
    reward: { type: 'learning', value: 80 }
  },
  {
    id: 'journey-complete',
    title: 'Journey Complete',
    description: 'Complete all 5 stages',
    icon: '🎓',
    condition: (p) => p.levelsCompleted >= 5,
    reward: { type: 'learning', value: 150 }
  },
  {
    id: 'tv-spender',
    title: 'Big Spender',
    description: 'Spend 500 TV in the TV Store',
    icon: '💰',
    condition: (p) => p.totalTVSpent >= 500,
    reward: { type: 'task', value: 50 }
  },
  {
    id: 'hint-master',
    title: 'Hint Master',
    description: 'Use 10 Hint Tokens',
    icon: '💡',
    condition: (p) => p.hintTokensUsed >= 10,
    reward: { type: 'learning', value: 40 }
  },
  {
    id: 'gear-max',
    title: 'Gear Master',
    description: 'Max out any piece of gear',
    icon: '⬆️',
    condition: (p) => p.gearMaxed,
    reward: { type: 'learning', value: 100 }
  }
]

export function checkAchievements(
  progress: AchievementProgress,
  unlockedAchievements: string[]
): { newAchievements: string[]; rewards: { id: string; reward: { type: string; value: number } }[] } {
  const newAchievements: string[] = []
  const rewards: { id: string; reward: { type: string; value: number } }[] = []

  for (const achievement of ACHIEVEMENTS) {
    if (!unlockedAchievements.includes(achievement.id) && achievement.condition(progress)) {
      newAchievements.push(achievement.id)
      rewards.push({
        id: achievement.id,
        reward: { type: achievement.reward.type, value: achievement.reward.value }
      })
    }
  }

  return { newAchievements, rewards }
}

export function getAchievementById(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find(a => a.id === id)
}
