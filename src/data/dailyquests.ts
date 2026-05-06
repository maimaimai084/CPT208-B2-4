export interface DailyQuest {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  target: number;
  type: 'quiz' | 'correct' | 'perfect' | 'streak' | 'interview' | 'ps' | 'minigame' | 'multi';
  period: 'daily' | 'weekly';
  reward: { learning: number; task: number };
  icon: string;
}

export const DAILY_QUESTS: DailyQuest[] = [
  {
    id: 'daily-quiz-1',
    title: { en: 'Daily Practice', zh: '日常练习' },
    description: { en: 'Complete 1 quiz level', zh: '完成1个Journey关卡' },
    target: 1,
    type: 'quiz',
    period: 'daily',
    reward: { learning: 15, task: 10 },
    icon: '📝'
  },
  {
    id: 'daily-correct-5',
    title: { en: 'Quick Learner', zh: '快速学习者' },
    description: { en: 'Answer 5 questions correctly', zh: '正确回答5道题' },
    target: 5,
    type: 'correct',
    period: 'daily',
    reward: { learning: 20, task: 15 },
    icon: '🧠'
  },
  {
    id: 'daily-perfect',
    title: { en: 'Perfectionist', zh: '完美主义者' },
    description: { en: 'Complete a level with 100% correct answers', zh: '完美通关1次' },
    target: 1,
    type: 'perfect',
    period: 'daily',
    reward: { learning: 30, task: 25 },
    icon: '💯'
  },
  {
    id: 'daily-streak-3',
    title: { en: 'Consistent Learner', zh: '坚持学习者' },
    description: { en: 'Answer 3 questions correctly in a row', zh: '连续正确回答3题' },
    target: 3,
    type: 'streak',
    period: 'daily',
    reward: { learning: 25, task: 20 },
    icon: '🔗'
  },
  {
    id: 'daily-interview',
    title: { en: 'Interview Practice', zh: '面试练习' },
    description: { en: 'Complete 1 interview simulation', zh: '完成1次面试模拟' },
    target: 1,
    type: 'interview',
    period: 'daily',
    reward: { learning: 0, task: 30 },
    icon: '🎤'
  },
  {
    id: 'daily-ps',
    title: { en: 'Essay Workshop', zh: '文书润色' },
    description: { en: 'Complete 1 PS workshop session', zh: '完成1次文书工作坊' },
    target: 1,
    type: 'ps',
    period: 'daily',
    reward: { learning: 25, task: 0 },
    icon: '✍️'
  },
  {
    id: 'daily-minigame',
    title: { en: 'Quest Explorer', zh: '探索任务' },
    description: { en: 'Complete 1 TV Quest mini-game', zh: '完成1个TV Quest小游戏' },
    target: 1,
    type: 'minigame',
    period: 'daily',
    reward: { learning: 10, task: 20 },
    icon: '🎯'
  },
  {
    id: 'daily-3-quest',
    title: { en: 'Triple Duty', zh: '三项达标' },
    description: { en: 'Complete 3 daily quests', zh: '完成3个日常任务' },
    target: 3,
    type: 'multi',
    period: 'daily',
    reward: { learning: 20, task: 20 },
    icon: '⭐'
  },
  {
    id: 'weekly-tv-100',
    title: { en: 'TV Accumulator', zh: 'TV收集者' },
    description: { en: 'Earn 100 TV this week', zh: '本周累计获得100 TV' },
    target: 100,
    type: 'correct',
    period: 'weekly',
    reward: { learning: 0, task: 100 },
    icon: '🎯'
  },
  {
    id: 'weekly-login-3',
    title: { en: 'Regular Visitor', zh: '常客' },
    description: { en: 'Log in 3 days this week', zh: '本周登录3天' },
    target: 3,
    type: 'streak',
    period: 'weekly',
    reward: { learning: 30, task: 50 },
    icon: '🔥'
  },
  {
    id: 'weekly-level-5',
    title: { en: 'Level Grinder', zh: '关卡达人' },
    description: { en: 'Complete 5 Journey levels this week', zh: '本周完成5个Journey关卡' },
    target: 5,
    type: 'quiz',
    period: 'weekly',
    reward: { learning: 50, task: 80 },
    icon: '📖'
  },
  {
    id: 'weekly-all-daily',
    title: { en: 'Daily Champion', zh: '日任冠军' },
    description: { en: 'Complete daily quests 5 days this week', zh: '本周完成日任5天' },
    target: 5,
    type: 'multi',
    period: 'weekly',
    reward: { learning: 40, task: 60 },
    icon: '🏆'
  }
]

export interface DailyProgress {
  questId: string;
  current: number;
  completed: boolean;
  lastUpdated: string;
}

export function getDailyQuests(): DailyQuest[] {
  return DAILY_QUESTS.filter(q => q.period === 'daily')
}

export function getWeeklyQuests(): DailyQuest[] {
  return DAILY_QUESTS.filter(q => q.period === 'weekly')
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

export function shouldResetWeekly(dailyProgress: DailyProgress[]): boolean {
  if (dailyProgress.length === 0) return true
  const lastUpdated = new Date(dailyProgress[0].lastUpdated)
  const now = new Date()
  const weekStart = new Date(now)
  weekStart.setDate(now.getDate() - now.getDay())
  weekStart.setHours(0, 0, 0, 0)
  return lastUpdated < weekStart
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
