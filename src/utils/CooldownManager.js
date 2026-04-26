const STORAGE_KEY = 'masterapply_cooldowns'
const STREAK_KEY = 'masterapply_streak'

export const COOLDOWN_CONFIG = {
  dailyQuiz: {
    type: 'daily',
    maxAttempts: 5,
    minIntervalMinutes: 120,
    resetHour: 0,
    rewardRange: [10, 20]
  },
  interviewSim: {
    type: 'daily',
    maxAttempts: 1,
    sharedWith: ['psWorkshop'],
    resetHour: 0,
    rewardRange: [30, 60]
  },
  psWorkshop: {
    type: 'daily',
    maxAttempts: 1,
    sharedWith: ['interviewSim'],
    resetHour: 0,
    rewardRange: [40, 80]
  },
  schoolSandbox: {
    type: 'weekly',
    maxAttempts: 2,
    resetDay: 1,
    rewardRange: [50, 100]
  }
}

export function getCooldownStatus(key) {
  const data = loadData()
  const config = COOLDOWN_CONFIG[key]
  if (!config) return null

  const now = new Date()
  const records = data[key] || []

  const validRecords = records.filter(r => !isExpired(r, config, now))

  let usedAttempts = validRecords.length
  if (config.sharedWith) {
    for (const sharedKey of config.sharedWith) {
      const sharedRecords = (data[sharedKey] || []).filter(r => !isExpired(r, COOLDOWN_CONFIG[sharedKey], now))
      usedAttempts += sharedRecords.length
    }
  }

  const remaining = Math.max(0, config.maxAttempts - usedAttempts)
  const lastAttempt = validRecords[validRecords.length - 1]

  let nextAvailable = null
  if (remaining <= 0) {
    nextAvailable = getResetTime(config, now)
  } else if (lastAttempt && config.minIntervalMinutes) {
    const nextInterval = new Date(lastAttempt.time + config.minIntervalMinutes * 60000)
    if (nextInterval > now) {
      nextAvailable = nextInterval
    }
  }

  return {
    key,
    remaining,
    used: usedAttempts,
    max: config.maxAttempts,
    nextAvailable,
    canAttempt: remaining > 0 && (!nextAvailable || nextAvailable <= now),
    lastAttempt: lastAttempt ? new Date(lastAttempt.time) : null
  }
}

export function recordAttempt(key, metadata = {}) {
  const data = loadData()
  if (!data[key]) data[key] = []

  data[key].push({
    time: Date.now(),
    ...metadata
  })

  saveData(data)
  updateStreak(key)

  return getCooldownStatus(key)
}

export function canAttempt(key) {
  const status = getCooldownStatus(key)
  return status ? status.canAttempt : true
}

export function getTimeHint(status, isZh = false) {
  if (!status || !status.nextAvailable) return isZh ? '现在可用' : 'Now Available'

  const now = new Date()
  const diff = status.nextAvailable - now

  if (diff <= 0) return isZh ? '现在可用' : 'Now Available'

  const hours = Math.floor(diff / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)

  if (hours > 0) {
    return isZh ? `${hours}小时${minutes}分钟后可用` : `${hours}h ${minutes}m later`
  }
  return isZh ? `${minutes}分钟后可用` : `${minutes}m later`
}

export function getStreak() {
  const data = loadStreak()
  const now = new Date()
  const today = formatDate(now)

  if (data.lastDate === today) {
    return { days: data.days, todayChecked: true }
  }

  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  if (data.lastDate === formatDate(yesterday)) {
    return { days: data.days, todayChecked: false }
  }

  return { days: 0, todayChecked: false }
}

export function checkIn() {
  const data = loadStreak()
  const today = formatDate(new Date())

  if (data.lastDate === today) return getStreak()

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  if (data.lastDate === formatDate(yesterday)) {
    data.days += 1
  } else {
    data.days = 1
  }

  data.lastDate = today
  saveStreak(data)

  return getStreak()
}

export function getStreakBonus() {
  const { days } = getStreak()
  if (days >= 30) return 1.5
  if (days >= 14) return 1.3
  if (days >= 7) return 1.2
  if (days >= 3) return 1.1
  return 1.0
}

function isExpired(record, config, now) {
  const recordTime = new Date(record.time)

  if (config.type === 'daily') {
    return !isSameDay(recordTime, now, config.resetHour || 0)
  }

  if (config.type === 'weekly') {
    return !isSameWeek(recordTime, now, config.resetDay || 1)
  }

  return false
}

function isSameDay(d1, d2, resetHour = 0) {
  const t1 = new Date(d1)
  const t2 = new Date(d2)
  t1.setHours(t1.getHours() - resetHour)
  t2.setHours(t2.getHours() - resetHour)
  return formatDate(t1) === formatDate(t2)
}

function isSameWeek(d1, d2, resetDay = 1) {
  const t1 = getWeekStart(d1, resetDay)
  const t2 = getWeekStart(d2, resetDay)
  return formatDate(t1) === formatDate(t2)
}

function getWeekStart(date, resetDay = 1) {
  const d = new Date(date)
  const day = d.getDay()
  const diff = (day < resetDay ? day + 7 : day) - resetDay
  d.setDate(d.getDate() - diff)
  d.setHours(0, 0, 0, 0)
  return d
}

function getResetTime(config, now) {
  if (config.type === 'daily') {
    const reset = new Date(now)
    reset.setDate(reset.getDate() + 1)
    reset.setHours(config.resetHour || 0, 0, 0, 0)
    return reset
  }

  if (config.type === 'weekly') {
    const reset = getWeekStart(now, config.resetDay || 1)
    reset.setDate(reset.getDate() + 7)
    reset.setHours(0, 0, 0, 0)
    return reset
  }

  return null
}

function formatDate(date) {
  const d = new Date(date)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function loadData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function loadStreak() {
  try {
    return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"days": 0, "lastDate": ""}')
  } catch {
    return { days: 0, lastDate: '' }
  }
}

function saveStreak(data) {
  localStorage.setItem(STREAK_KEY, JSON.stringify(data))
}

function updateStreak(key) {
  if (key === 'dailyQuiz' || key === 'interviewSim' || key === 'psWorkshop') {
    checkIn()
  }
}

export function resetAllCooldowns() {
  localStorage.removeItem(STORAGE_KEY)
  localStorage.removeItem(STREAK_KEY)
}

export default {
  COOLDOWN_CONFIG,
  getCooldownStatus,
  recordAttempt,
  canAttempt,
  getTimeHint,
  getStreak,
  checkIn,
  getStreakBonus,
  resetAllCooldowns
}