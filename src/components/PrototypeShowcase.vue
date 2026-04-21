<template>
  <div class="prototype-showcase min-h-screen bg-gray-50">
    <ModuleHeader
      title="Prototype & Implementation"
      subtitle="From sketches to interactive prototype"
      icon="📱"
    />

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 py-8 pb-20">

      <!-- Section 1: Evolution -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>📈</span> Prototype Evolution
        </h2>

        <!-- Low-Fi: full width row -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Low-Fi Sketches</h3>
          <div class="rounded-xl overflow-hidden border border-gray-200 max-w-2xl mx-auto">
            <img src="/images/docx/module5_prototype/image_004.jpeg" alt="Low-fi sketch version 1.0" class="w-full">
          </div>
          <p class="text-sm text-gray-500 text-center mt-2">Version 1.0</p>
        </div>

        <!-- High-Fi: full width row below -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">High-Fi Prototype</h3>
          <div class="grid md:grid-cols-2 gap-4 rounded-xl overflow-hidden border border-gray-200 max-w-4xl mx-auto">
            <img src="/images/docx/module5_prototype/1.jpg" alt="High-fi prototype version 1" class="w-full">
            <img src="/images/docx/module5_prototype/2.png" alt="High-fi prototype version 2" class="w-full">
          </div>
          <p class="text-sm text-gray-500 text-center mt-2">Version 2.0</p>
          <p class="text-sm text-gray-400 text-center mt-1">Version 3.0 is available as an interactive demo - visit the /demo route to play the game</p>
        </div>

        <!-- 3 Key Improvements -->
        <div class="mt-8 grid md:grid-cols-3 gap-4">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
            <div class="text-2xl mb-2">📱💻</div>
            <h4 class="font-bold text-gray-900">Single → Dual Platform</h4>
            <p class="text-sm text-gray-600 mt-1">Mobile for fragmented learning + PC for deep reading</p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
            <div class="text-2xl mb-2">📊</div>
            <h4 class="font-bold text-gray-900">Value Visualization</h4>
            <p class="text-sm text-gray-600 mt-1">Real-time progress bars for Learning & Task values with unlock nodes</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
            <div class="text-2xl mb-2">✨</div>
            <h4 class="font-bold text-gray-900">Simplified Interface</h4>
            <p class="text-sm text-gray-600 mt-1">Focus on core task entries, reduce visual distraction and cognitive load</p>
          </div>
        </div>
      </section>

      <!-- Section 2: System Architecture -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🏗️</span> System Architecture
        </h2>

        <div class="bg-gray-50 rounded-xl p-6">
          <img src="/images/docx/module5_prototype/image_013.png" alt="System Architecture" class="max-w-full mx-auto rounded-lg">
        </div>
      </section>

      <!-- Section 3: Core Features -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>👤</span> User Journey
        </h2>

        <img src="/images/docx/module5_prototype/image_015.png" alt="User Journey" class="max-w-full mx-auto mb-6 rounded-lg border border-gray-200">

        <div class="space-y-4">
          <div v-for="(step, index) in coreSteps" :key="index"
               class="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
              {{ index + 1 }}
            </div>
            <div>
              <h4 class="font-bold text-gray-900">{{ step.title }}</h4>
              <p class="text-gray-600">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Design Decisions -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🎯</span> Design Decisions
        </h2>

        <div class="bg-gray-50 rounded-xl p-6">
          <img src="/images/docx/module5_prototype/image_012.png" alt="Design Decisions" class="max-w-full mx-auto rounded-lg">
        </div>
      </section>

      <!-- Section 5: 5 Stages -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🎮</span> 5 Application Stages
        </h2>

        <div class="grid md:grid-cols-5 gap-4">
          <div v-for="(stage, index) in stages" :key="index"
               class="text-center p-4 rounded-xl border-2 transition-all"
               :class="stage.borderClass">
            <div class="text-3xl mb-2">{{ stage.icon }}</div>
            <div class="text-xs text-gray-500 mb-1">Stage {{ index + 1 }}</div>
            <h4 class="font-bold text-gray-900 text-sm">{{ stage.name }}</h4>
          </div>
        </div>
      </section>

      <!-- Section 6: Dual Value System -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>📊</span> Dual Value System
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl">📚</span>
              <h3 class="text-xl font-bold text-blue-900">Learning Value</h3>
            </div>
            <p class="text-gray-700 mb-4">Earned through answering quiz questions correctly. Represents theoretical knowledge about postgraduate applications.</p>
            <div class="text-sm text-blue-700 font-medium">Unlock: PS Writing Guide at 100 points</div>
          </div>

          <div class="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl">✅</span>
              <h3 class="text-xl font-bold text-orange-900">Task Value</h3>
            </div>
            <p class="text-gray-700 mb-4">Earned through completing practical tasks and simulations. Represents hands-on application skills.</p>
            <div class="text-sm text-orange-700 font-medium">Unlock: School Selection Guide at 200 points</div>
          </div>
        </div>
      </section>

      <!-- Section 7: AI Usage Declaration -->
      <section class="bg-gray-100 rounded-2xl p-6">
        <h3 class="font-bold text-gray-700 mb-2">AI Usage Declaration</h3>
        <p class="text-sm text-gray-600">
          [1] Gemini, version 2.0, accessed on 2026-04-07, available at https://gemini.google.com/.
          Used for generating low-fi sketch wireframes, high-fi UI mockups, system architecture diagram,
          and design decision visualization in the prototype section.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
/**
 * Prototype & Implementation Showcase
 * Module 5 content with images from docx files
 */

import ModuleHeader from './portfolio/ModuleHeader.vue'

const architectureLayers = [
  {
    icon: '🖥️',
    name: 'Frontend Layer',
    desc: 'Mobile/PC Dual Interface: Stages / Stats / Stories',
    bgClass: 'bg-blue-50 border-blue-200'
  },
  {
    icon: '⚙️',
    name: 'Core System',
    desc: 'Points System + Story Database + Question Bank',
    bgClass: 'bg-orange-50 border-orange-200'
  },
  {
    icon: '💾',
    name: 'Data Layer',
    desc: 'User Progress / Points Records / Learning Data (LocalStorage)',
    bgClass: 'bg-gray-100 border-gray-300'
  },
  {
    icon: '👨‍💼',
    name: 'Advisor Portal',
    desc: 'Student Analytics Panel / Strategy Library',
    bgClass: 'bg-purple-50 border-purple-200'
  }
]

const coreSteps = [
  { title: 'Register & Select Role', desc: 'Choose your postgraduate application role: Explorer (Year 2) or Sprint (Year 3)' },
  { title: 'Enter Application Stages', desc: 'Complete 5 stages: School Selection → Documents → Essay → Application → Interview' },
  { title: 'Accumulate Values', desc: 'Earn Learning Value (knowledge) and Task Value (practice) through quizzes and simulations' },
  { title: 'Unlock Strategies', desc: 'Reach value thresholds to unlock exclusive postgraduate application guides and templates' },
  { title: 'Advisor Guidance', desc: 'Advisors review student progress data for targeted offline support' }
]

const designDecisions = [
  {
    aspect: 'Game Format',
    alternative: 'Card/Puzzle Game',
    chosen: 'Text Adventure',
    rationale: 'Lightweight, low dev cost, fits fragmented learning, dual-platform friendly'
  },
  {
    aspect: 'Points System',
    alternative: 'Single Score',
    chosen: 'Dual Values (Learning + Task)',
    rationale: 'Distinguish "learning" vs "doing", fits application "study + practice" needs'
  },
  {
    aspect: 'Story Trigger',
    alternative: 'Level Completion',
    chosen: 'Points Threshold',
    rationale: 'Motivates repeated learning, prevents "quit after clear", enhances stickiness'
  }
]

const stages = [
  { icon: '🎓', name: 'School Selection', borderClass: 'border-blue-200 bg-blue-50' },
  { icon: '📄', name: 'Documents', borderClass: 'border-green-200 bg-green-50' },
  { icon: '✍️', name: 'Essay Writing', borderClass: 'border-purple-200 bg-purple-50' },
  { icon: '📨', name: 'Application', borderClass: 'border-yellow-200 bg-yellow-50' },
  { icon: '🎤', name: 'Interview', borderClass: 'border-red-200 bg-red-50' }
]
</script>

<style scoped>
.prototype-showcase {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

table {
  border-collapse: separate;
  border-spacing: 0;
}

th:first-child,
td:first-child {
  border-radius: 8px 0 0 8px;
}

th:last-child,
td:last-child {
  border-radius: 0 8px 8px 0;
}

@media (max-width: 768px) {
  .prototype-showcase h1 {
    font-size: 1.25rem;
  }

  table {
    font-size: 0.875rem;
  }
}
</style>
