<!--
  DesignProcess.vue - Module 4: Design Process
  展示设计方法论、Crazy 8s、设计决策
-->

<template>
  <div class="design-process-page min-h-screen bg-gray-50">
    <ModuleHeader 
      title="Design Process"
      subtitle="Our methodology and design decisions"
      icon="🎨"
    />

    <main class="max-w-5xl mx-auto px-4 py-8 pb-20">
      
      <!-- Project Objectives -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🎯 4 Project Objectives</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
            <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <p class="text-gray-700">Break down 5 core application stages into text-based game format</p>
          </div>
          <div class="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
            <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <p class="text-gray-700">Create dual-value system (Learning + Task) to motivate fragmented learning</p>
          </div>
          <div class="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
            <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <p class="text-gray-700">Unlock key strategies when reaching value thresholds</p>
          </div>
          <div class="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
            <div class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
            <p class="text-gray-700">Build lightweight advisor portal for hybrid online-offline guidance</p>
          </div>
        </div>
      </section>

      <!-- Design Concept -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">💡 Core Design Concept</h2>
        <div class="bg-gray-50 rounded-xl p-6">
          <div class="flex flex-wrap items-center justify-center gap-2 text-center">
            <span class="px-4 py-2 bg-white rounded-lg shadow-sm">Register</span>
            <span class="text-gray-400">→</span>
            <span class="px-4 py-2 bg-blue-100 rounded-lg shadow-sm">Select Role</span>
            <span class="text-gray-400">→</span>
            <span class="px-4 py-2 bg-green-100 rounded-lg shadow-sm">Complete 5 Stages</span>
            <span class="text-gray-400">→</span>
            <span class="px-4 py-2 bg-orange-100 rounded-lg shadow-sm">Earn Points</span>
            <span class="text-gray-400">→</span>
            <span class="px-4 py-2 bg-purple-100 rounded-lg shadow-sm">Unlock Stories</span>
            <span class="text-gray-400">→</span>
            <span class="px-4 py-2 bg-pink-100 rounded-lg shadow-sm">Get Strategies</span>
          </div>
        </div>
      </section>

      <!-- Crazy 8s -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">✏️ Crazy 8s Sketches</h2>
        <p class="text-gray-600 mb-6">8 ideas generated in 8 minutes</p>
        <div class="grid grid-cols-4 gap-4">
          <div v-for="n in 8" :key="n" class="aspect-square bg-white rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
            <span class="text-4xl mb-2">📝</span>
            <span class="text-sm text-gray-500">Sketch {{ n }}</span>
          </div>
        </div>
      </section>

      <!-- Design Decisions -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🤔 Key Design Decisions</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-3 px-4">Aspect</th>
                <th class="text-left py-3 px-4">Alternative</th>
                <th class="text-left py-3 px-4">Chosen ✅</th>
                <th class="text-left py-3 px-4">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-4 font-medium">Game Format</td>
                <td class="py-4 px-4 text-gray-500">Card/Puzzle Game</td>
                <td class="py-4 px-4"><span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Text Adventure</span></td>
                <td class="py-4 px-4 text-gray-600">Lightweight, low dev cost</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-4 font-medium">Points System</td>
                <td class="py-4 px-4 text-gray-500">Single Score</td>
                <td class="py-4 px-4"><span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Dual Values</span></td>
                <td class="py-4 px-4 text-gray-600">Distinguish learning vs doing</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-4 font-medium">Story Trigger</td>
                <td class="py-4 px-4 text-gray-500">Level Completion</td>
                <td class="py-4 px-4"><span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Points Threshold</span></td>
                <td class="py-4 px-4 text-gray-600">Motivates repeated learning</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/portfolio/ModuleHeader.vue'
</script>

<style scoped>
.design-process-page { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>
