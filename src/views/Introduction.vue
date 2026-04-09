<!--
  Introduction.vue - Module 2: Introduction & Problem Statement
  展示项目背景、痛点、核心价值
-->

<template>
  <div class="introduction-page min-h-screen bg-gray-50">
    <!-- Module Header -->
    <ModuleHeader 
      title="Introduction & Problem Statement"
      subtitle="Understanding the postgraduate application challenges"
      icon="📋"
    />

    <main class="max-w-5xl mx-auto px-4 py-8 pb-20">
      
      <!-- Section 1: Background -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🎯</span> Background
        </h2>
        
        <div class="prose prose-gray max-w-none">
          <p class="text-gray-700 leading-relaxed mb-4">
            Every year, numerous XJTLU students embark on the journey of applying for postgraduate programs abroad. 
            However, the process is often fragmented, overwhelming, and lacks personalized guidance. 
            Students struggle with scattered information, conflicting advice, and the pressure of deadlines.
          </p>
          <p class="text-gray-700 leading-relaxed">
            This project addresses these challenges by introducing a gamified approach to postgraduate application support, 
            transforming a stressful process into an engaging, structured adventure.
          </p>
        </div>
      </section>

      <!-- Section 2: Pain Points -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>😰</span> Current Pain Points
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Campus Support -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl">🏫</span>
              <h3 class="text-lg font-bold text-gray-900">Campus Support</h3>
            </div>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">•</span>
                <span>One-way information delivery without interaction</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">•</span>
                <span>Fixed schedules conflict with classes and internships</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">•</span>
                <span>Not suitable for fragmented learning scenarios</span>
              </li>
            </ul>
          </div>

          <!-- Commercial Tools -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl">💼</span>
              <h3 class="text-lg font-bold text-gray-900">Commercial Tools</h3>
            </div>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">•</span>
                <span>Dry content without motivation mechanisms</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">•</span>
                <span>Generic advice not tailored to XJTLU students</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">•</span>
                <span>Lack of systematic knowledge organization</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Core Problem Summary -->
        <div class="mt-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
          <h3 class="font-bold text-gray-900 mb-3">🔍 Core Problem</h3>
          <p class="text-gray-700">
            Postgraduate application knowledge is fragmented, students lack motivation for active learning, 
            and advisors need lightweight auxiliary tools to improve guidance efficiency.
          </p>
        </div>
      </section>

      <!-- Section 3: Research Questions -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>❓</span> Research Questions
        </h2>
        
        <div class="space-y-4">
          <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              RQ1
            </div>
            <div>
              <p class="text-gray-700">
                Can a gamified text-based game improve XJTLU students understanding of postgraduate application processes?
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
            <div class="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              RQ2
            </div>
            <div>
              <p class="text-gray-700">
                Can a points-based progression system enhance students motivation in engaging with college guidance?
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Core Value -->
      <section class="mb-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>💡</span> Core Value
        </h2>
        
        <p class="text-lg leading-relaxed mb-6">
          MasterApply Quest transforms postgraduate application preparation into an engaging text-based adventure. 
          By combining game mechanics with educational content, we create a fragmented learning experience.
        </p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/10 backdrop-blur rounded-xl p-4">
            <div class="text-3xl mb-2">🎮</div>
            <h4 class="font-bold mb-1">Gamifies Learning</h4>
            <p class="text-sm text-white/80">Makes application preparation engaging</p>
          </div>
          <div class="bg-white/10 backdrop-blur rounded-xl p-4">
            <div class="text-3xl mb-2">📱</div>
            <h4 class="font-bold mb-1">Fragmented Learning</h4>
            <p class="text-sm text-white/80">5-10 minute sessions fit schedules</p>
          </div>
          <div class="bg-white/10 backdrop-blur rounded-xl p-4">
            <div class="text-3xl mb-2">📊</div>
            <h4 class="font-bold mb-1">Progress Tracking</h4>
            <p class="text-sm text-white/80">Visual progress motivates engagement</p>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/portfolio/ModuleHeader.vue'
</script>

<style scoped>
.introduction-page {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
