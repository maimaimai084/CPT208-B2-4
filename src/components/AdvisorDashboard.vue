<template>
  <div class="space-y-6">
    <!-- Demo Banner -->
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
      <span class="text-xl">⚠️</span>
      <div>
        <p class="text-sm font-semibold text-amber-800">Demonstration Mode</p>
        <p class="text-xs text-amber-700">
          This advisor dashboard is for portfolio demonstration. Mock student data is shown alongside your current player data (marked as "You").
          In a full implementation, this would connect to a live backend with real student analytics.
        </p>
      </div>
    </div>

    <!-- Student List + Analytics -->
    <div class="grid lg:grid-cols-3 gap-6">
      <!-- Student List Sidebar -->
      <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <h3 class="font-bold text-slate-900 mb-4">Students</h3>
        <div class="space-y-2">
          <div v-for="student in allStudents" :key="student.id"
               @click="selectedStudent = student"
               class="p-3 rounded-xl cursor-pointer transition-colors border"
               :class="selectedStudent?.id === student.id 
                 ? 'bg-blue-50 border-blue-200' 
                 : 'hover:bg-slate-50 border-transparent'">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                   :class="student.isPlayer 
                     ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' 
                     : 'bg-gradient-to-br from-blue-400 to-blue-600'">
                {{ student.name.charAt(0) }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                  <p class="font-semibold text-sm text-slate-800 truncate">{{ student.name }}</p>
                  <span v-if="student.isPlayer" class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                    YOU
                  </span>
                </div>
                <p class="text-xs text-slate-500">{{ student.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Analytics -->
      <div class="lg:col-span-2 space-y-6" v-if="selectedStudent">
        <!-- Value Cards -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white rounded-xl p-5 shadow-sm border border-slate-200 border-l-4 !border-l-blue-500">
            <p class="text-sm text-slate-600 mb-1">Learning Value</p>
            <p class="text-3xl font-bold text-blue-600">{{ selectedStudent.learning }}</p>
            <p class="text-xs text-slate-500 mt-1">Next unlock: 100</p>
          </div>
          <div class="bg-white rounded-xl p-5 shadow-sm border border-slate-200 border-l-4 !border-l-amber-500">
            <p class="text-sm text-slate-600 mb-1">Task Value</p>
            <p class="text-3xl font-bold text-amber-500">{{ selectedStudent.task }}</p>
            <p class="text-xs text-slate-500 mt-1">Next unlock: 200</p>
          </div>
        </div>

        <!-- Completion Chart -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h4 class="font-bold text-slate-900 mb-4">Stage Completion</h4>
          <div class="space-y-3">
            <div v-for="stage in selectedStudent.stages" :key="stage.id" class="flex items-center gap-4">
              <span class="text-sm w-36 truncate text-slate-700">{{ stage.name }}</span>
              <div class="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full bg-[#7FA1ED] rounded-full transition-all duration-700" :style="{ width: stage.progress + '%' }"></div>
              </div>
              <span class="text-sm font-semibold w-12 text-right text-slate-800">{{ stage.progress }}%</span>
            </div>
          </div>
        </div>

        <!-- Knowledge Gaps -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-red-100">
          <h4 class="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span class="text-red-500">⚠️</span> Knowledge Gaps
          </h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="gap in selectedStudent.gaps" :key="gap" class="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
              {{ gap }}
            </span>
          </div>
          <p class="text-sm text-slate-600 mt-4">Recommendation: {{ selectedStudent.recommendation || 'Focus on core application skills and seek advisor guidance.' }}</p>
        </div>
      </div>
    </div>

    <!-- Sample Q&A Panel -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h3 class="text-lg font-bold text-slate-900 mb-4">Recent Student Questions</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="q in sampleQuestions" :key="q.id" class="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold px-2 py-0.5 rounded-full"
                  :class="q.category === 'essay-writing' ? 'bg-violet-100 text-violet-700' : q.category === 'school-selection' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'">
              {{ q.categoryLabel }}
            </span>
            <span class="text-xs text-slate-400">from {{ q.student }}</span>
          </div>
          <p class="text-sm font-medium text-slate-800 mb-2">{{ q.question }}</p>
          <div class="p-3 bg-white rounded-lg border border-slate-100">
            <p class="text-xs text-slate-500 mb-1">Advisor Response:</p>
            <p class="text-sm text-slate-700">{{ q.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  playerName: { type: String, default: '' },
  playerRole: { type: String, default: '' },
  playerLearning: { type: Number, default: 0 },
  playerTask: { type: Number, default: 0 },
  playerCompletedLevels: { type: Array, default: () => [] },
  playerCombo: { type: Number, default: 0 }
})

const selectedStudent = ref(null)

const mockStudents = ref([
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Explorer',
    learning: 60,
    task: 40,
    stages: [
      { id: 1, name: 'School Selection', progress: 100 },
      { id: 2, name: 'Document Prep', progress: 50 },
      { id: 3, name: 'Essay Writing', progress: 0 },
      { id: 4, name: 'Application Submit', progress: 0 },
      { id: 5, name: 'Interview Prep', progress: 0 }
    ],
    gaps: ['PS Structure', 'Recommendation Letters'],
    recommendation: 'Focus on Essay Writing guidance and practice structuring personal statements.',
    isPlayer: false
  },
  {
    id: 2,
    name: 'Sarah Wang',
    role: 'Sprint',
    learning: 120,
    task: 180,
    stages: [
      { id: 1, name: 'School Selection', progress: 100 },
      { id: 2, name: 'Document Prep', progress: 100 },
      { id: 3, name: 'Essay Writing', progress: 80 },
      { id: 4, name: 'Application Submit', progress: 40 },
      { id: 5, name: 'Interview Prep', progress: 0 }
    ],
    gaps: ['Interview Skills'],
    recommendation: 'Schedule mock interviews and review common behavioral questions.',
    isPlayer: false
  }
])

const playerStudent = computed(() => {
  const completedCount = props.playerCompletedLevels.length
  const levelMap = {
    'level-1': 'School Selection',
    'level-2': 'Document Prep',
    'level-3': 'Essay Writing',
    'level-4': 'Application Submit',
    'level-5': 'Interview Prep'
  }

  const stages = [
    { id: 1, name: 'School Selection', progress: completedCount >= 1 ? 100 : 0 },
    { id: 2, name: 'Document Prep', progress: completedCount >= 2 ? 100 : completedCount === 1 ? 30 : 0 },
    { id: 3, name: 'Essay Writing', progress: completedCount >= 3 ? 100 : completedCount === 2 ? 30 : 0 },
    { id: 4, name: 'Application Submit', progress: completedCount >= 4 ? 100 : completedCount === 3 ? 30 : 0 },
    { id: 5, name: 'Interview Prep', progress: completedCount >= 5 ? 100 : completedCount === 4 ? 30 : 0 }
  ]

  const gaps = []
  if (completedCount < 2) gaps.push('Document Preparation')
  if (completedCount < 3) gaps.push('Essay Writing')
  if (completedCount < 4) gaps.push('Application Systems')
  if (completedCount < 5) gaps.push('Interview Skills')
  if (props.playerCombo < 3) gaps.push('Consistent Practice')

  return {
    id: 'player',
    name: props.playerName || 'You',
    role: props.playerRole === 'confused' ? 'Explorer' : props.playerRole === 'sprint' ? 'Sprint' : 'Player',
    learning: props.playerLearning,
    task: props.playerTask,
    stages,
    gaps: gaps.length > 0 ? gaps : ['Keep up the good work!'],
    recommendation: gaps.length > 0
      ? `Continue progressing through levels. Current combo: ${props.playerCombo}. Keep practicing daily!`
      : 'Excellent progress! All stages initiated. Focus on refining your interview skills.',
    isPlayer: true
  }
})

const allStudents = computed(() => {
  return [playerStudent.value, ...mockStudents.value]
})

watch(playerStudent, (newPlayer) => {
  if (selectedStudent.value?.isPlayer) {
    selectedStudent.value = newPlayer
  }
})

// Select player by default
selectedStudent.value = playerStudent.value

const sampleQuestions = [
  {
    id: 1,
    student: 'Jordan Liu',
    category: 'school-selection',
    categoryLabel: 'School Selection',
    question: 'Should I apply to US or UK for my CS master\'s? I have a 78 GPA and one internship.',
    answer: 'With a 78 GPA, you are in the strong 2:1 range. For CS, US programs offer more funding and internship opportunities (CPT/OPT), while UK programs are shorter and more focused. I recommend applying to both: target US Top 30-50 and UK Russell Group universities.'
  },
  {
    id: 2,
    student: 'Emily Zhang',
    category: 'essay-writing',
    categoryLabel: 'Essay Writing',
    question: 'How do I explain a low GPA in my first year in my personal statement?',
    answer: 'Focus on your upward trend. Mention briefly that you adapted to university-level study, then pivot to your later achievements. Committees care more about your trajectory and recent performance than one bad semester.'
  },
  {
    id: 3,
    student: 'David Wu',
    category: 'test-prep',
    categoryLabel: 'Test Prep',
    question: 'Is GRE still required for CMU ECE in 2026 intake?',
    answer: 'CMU ECE made GRE optional for 2025 intake, but a strong score (325+) still helps. Check the official program website in August 2025 for the 2026 policy update.'
  },
  {
    id: 4,
    student: 'Lisa Zhao',
    category: 'interview',
    categoryLabel: 'Interview',
    question: 'What should I ask the interviewer at the end of an admissions interview?',
    answer: 'Ask about research opportunities for master\'s students, career support services, or alumni network strength. Avoid asking things easily found on the website. Show genuine curiosity about the program culture.'
  }
]
</script>
