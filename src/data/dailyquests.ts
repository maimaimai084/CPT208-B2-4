export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  target: number;
  type: 'quiz' | 'correct' | 'perfect' | 'streak';
  reward: { learning: number; task: number };
  icon: string;
}

export const DAILY_QUESTS: DailyQuest[] = [
  {
    id: 'daily-quiz-1',
    title: 'Daily Practice',
    description: 'Complete 1 quiz level',
    target: 1,
    type: 'quiz',
    reward: { learning: 15, task: 10 },
    icon: '📝'
  },
  {
    id: 'daily-correct-5',
    title: 'Quick Learner',
    description: 'Answer 5 questions correctly',
    target: 5,
    type: 'correct',
    reward: { learning: 20, task: 15 },
    icon: '🧠'
  },
  {
    id: 'daily-perfect',
    title: 'Perfectionist',
    description: 'Complete a level with 100% correct answers',
    target: 1,
    type: 'perfect',
    reward: { learning: 30, task: 25 },
    icon: '💯'
  },
  {
    id: 'daily-streak-3',
    title: 'Consistent Learner',
    description: 'Answer 3 questions correctly in a row',
    target: 3,
    type: 'streak',
    reward: { learning: 25, task: 20 },
    icon: '🔗'
  }
]

export interface DailyProgress {
  questId: string;
  current: number;
  completed: boolean;
  lastUpdated: string;
}

export function getDailyResetTime(): Date {
  const now = new Date()
  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)
  return tomorrow
}

export function shouldResetDaily(dailyProgress: DailyProgress[]): boolean {
  if (dailyProgress.length === 0) return true
  
  const lastUpdated = new Date(dailyProgress[0].lastUpdated)
  const now = new Date()
  return lastUpdated.toDateString() !== now.toDateString()
}

export function initializeDailyProgress(): DailyProgress[] {
  const now = new Date().toISOString()
  return DAILY_QUESTS.map(quest => ({
    questId: quest.id,
    current: 0,
    completed: false,
    lastUpdated: now
  }))
}