<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <!-- Header -->
    <header class="bg-white rounded-xl shadow-sm p-4 mb-6 flex items-center justify-between">
      <div>
        <h1 class="text-xl font-bold text-gray-900">Advisor Dashboard</h1>
        <p class="text-sm text-gray-500">Student Progress Analytics</p>
      </div>
      <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">✕ Close</button>
    </header>

    <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <!-- Student List Sidebar -->
      <div class="bg-white rounded-xl shadow-sm p-4">
        <h3 class="font-bold text-gray-900 mb-4">Students</h3>
        <div class="space-y-2">
          <div v-for="student in students" :key="student.id" 
               @click="selectedStudent = student"
               class="p-3 rounded-lg cursor-pointer transition-colors"
               :class="selectedStudent?.id === student.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold">
                {{ student.name.charAt(0) }}
              </div>
              <div>
                <p class="font-semibold text-sm">{{ student.name }}</p>
                <p class="text-xs text-gray-500">{{ student.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Analytics -->
      <div class="md:col-span-2 space-y-6" v-if="selectedStudent">
        <!-- Value Cards -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white rounded-xl p-4 shadow-sm border-l-4 border-blue-500">
            <p class="text-sm text-gray-600 mb-1">Learning Value</p>
            <p class="text-3xl font-bold text-blue-600">{{ selectedStudent.learning }}</p>
            <p class="text-xs text-gray-500 mt-1">Next unlock: 100</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm border-l-4 border-orange-500">
            <p class="text-sm text-gray-600 mb-1">Task Value</p>
            <p class="text-3xl font-bold text-orange-500">{{ selectedStudent.task }}</p>
            <p class="text-xs text-gray-500 mt-1">Next unlock: 200</p>
          </div>
        </div>

        <!-- Completion Chart -->
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <h4 class="font-bold text-gray-900 mb-4">Stage Completion</h4>
          <div class="space-y-3">
            <div v-for="stage in selectedStudent.stages" :key="stage.id" class="flex items-center gap-4">
              <span class="text-sm w-32 truncate">{{ stage.name }}</span>
              <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-blue-500 rounded-full" :style="{ width: stage.progress + '%' }"></div>
              </div>
              <span class="text-sm font-semibold w-12 text-right">{{ stage.progress }}%</span>
            </div>
          </div>
        </div>

        <!-- Knowledge Gaps -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-red-100">
          <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span class="text-red-500">⚠️</span> Knowledge Gaps
          </h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="gap in selectedStudent.gaps" :key="gap" class="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
              {{ gap }}
            </span>
          </div>
          <p class="text-sm text-gray-600 mt-4">Recommendation: Focus on Essay Writing guidance</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['close'])

const selectedStudent = ref(null)

const students = ref([
  { id: 1, name: 'Alex Chen', role: 'Explorer', learning: 60, task: 40, stages: [
    { id: 1, name: 'School Selection', progress: 100 },
    { id: 2, name: 'Document Prep', progress: 50 },
    { id: 3, name: 'Essay Writing', progress: 0 },
  ], gaps: ['PS Structure', 'Recommendation Letters'] },
  { id: 2, name: 'Sarah Wang', role: 'Sprint', learning: 120, task: 180, stages: [
    { id: 1, name: 'School Selection', progress: 100 },
    { id: 2, name: 'Document Prep', progress: 100 },
    { id: 3, name: 'Essay Writing', progress: 80 },
  ], gaps: ['Interview Skills'] }
])

// Select first student by default
selectedStudent.value = students.value[0]
</script>