<template>
  <div class="prototype-showcase min-h-screen bg-gray-50">
    <ModuleHeader
      title="Prototype & Implementation"
      subtitle="From sketches to interactive prototype"
      icon="📱"
    />

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 py-8 pb-20">

      <!-- Section 1: User Journey -->
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

      <!-- Section 2: 5 Application Stages -->
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

      <!-- Section 3: Dual Value System -->
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

      <!-- Section 4: System Architecture -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🏗️</span> System Architecture
        </h2>

        <div class="bg-gray-50 rounded-xl p-6 mb-6">
          <img src="/images/docx/module5_prototype/image_013.png" alt="System Architecture" class="max-w-full mx-auto rounded-lg">
        </div>

        <!-- Architecture Text Content -->
        <div class="space-y-4">
          <!-- Frontend Layer -->
          <div class="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">🖥️</span>
              <h3 class="text-lg font-bold text-blue-900">Frontend Layer: Cross-platform Adaptation Design</h3>
            </div>
            <ul class="space-y-2 ml-9 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-blue-500 mt-1">•</span>
                <span><strong>Mobile Version:</strong> Fragmented learning experience, allowing users to progress through levels anytime, anywhere.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-500 mt-1">•</span>
                <span><strong>PC Version:</strong> Detailed guidance available for in-depth learning.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-500 mt-1">•</span>
                <span><strong>Advisor Version:</strong> Data dashboard for tracking students' progress.</span>
              </li>
            </ul>
          </div>

          <!-- Core System Layer -->
          <div class="bg-orange-50 rounded-xl p-5 border-2 border-orange-200">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">⚙️</span>
              <h3 class="text-lg font-bold text-orange-900">Core System Layer: Three Key Modules</h3>
            </div>
            <ul class="space-y-2 ml-9 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-orange-500 mt-1">•</span>
                <span><strong>Points System:</strong> Real-time calculation and visualization of two types of points — learning points and task completion points.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-500 mt-1">•</span>
                <span><strong>Story Database:</strong> Five stages of narrative scenarios; guides are unlocked once required scores are achieved.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-500 mt-1">•</span>
                <span><strong>Question Bank:</strong> Questions tailored to both roles, with content differentiated for explorers and those preparing for a final sprint.</span>
              </li>
            </ul>
          </div>

          <!-- Data Storage Layer -->
          <div class="bg-gray-100 rounded-xl p-5 border-2 border-gray-300">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">💾</span>
              <h3 class="text-lg font-bold text-gray-900">Data Storage Layer: LocalStorage</h3>
            </div>
            <ul class="space-y-2 ml-9 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-gray-500 mt-1">•</span>
                <span><strong>Automatic Progress Saving:</strong> Automatically saves users' progress.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-gray-500 mt-1">•</span>
                <span><strong>Cost Reduction:</strong> Eliminates backend server costs, reducing deployment costs.</span>
              </li>
            </ul>
          </div>

          <!-- Advisor Portal Layer -->
          <div class="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">👨‍💼</span>
              <h3 class="text-lg font-bold text-purple-900">Advisor Portal Layer</h3>
            </div>
            <ul class="space-y-2 ml-9 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-purple-500 mt-1">•</span>
                <span><strong>Student Analytics Panel:</strong> Provides a student analytics panel and strategy library.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-500 mt-1">•</span>
                <span><strong>Learning Loop:</strong> Closes the loop between online gamified learning and offline targeted guidance.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Section: Prototype Evolution -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>📈</span> Prototype Evolution
        </h2>

        <!-- Low-Fi -->
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Low-Fi</h3>
          <div class="rounded-xl overflow-hidden border border-gray-200 max-w-2xl mx-auto">
            <img src="/images/docx/module5_prototype/image_004.jpeg" alt="Low-fi sketch version 1.0" class="w-full">
          </div>
          <p class="text-sm text-gray-500 text-center mt-2">Version 1.0</p>
        </div>

        <!-- High-Fi -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">High-Fi</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div class="text-center">
              <div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <img src="/images/docx/module5_prototype/1.jpg" alt="High-fi 1" class="w-full h-full object-contain">
              </div>
              <p class="text-xs text-gray-500 mt-1">Role Selection - 1</p>
            </div>
            <div class="text-center">
              <div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <img src="/images/docx/module5_prototype/2.jpg" alt="High-fi 2" class="w-full h-full object-contain">
              </div>
              <p class="text-xs text-gray-500 mt-1">Role Selection - 2</p>
            </div>
            <div class="text-center">
              <div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <img src="/images/docx/module5_prototype/3.jpg" alt="High-fi 3" class="w-full h-full object-contain">
              </div>
              <p class="text-xs text-gray-500 mt-1">Dashboard</p>
            </div>
            <div class="text-center">
              <div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <img src="/images/docx/module5_prototype/4.jpg" alt="High-fi 4" class="w-full h-full object-contain">
              </div>
              <p class="text-xs text-gray-500 mt-1">Level Page</p>
            </div>
            <div class="text-center">
              <div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <img src="/images/docx/module5_prototype/5.jpg" alt="High-fi 5" class="w-full h-full object-contain">
              </div>
              <p class="text-xs text-gray-500 mt-1">Story Unlock</p>
            </div>
          </div>
          <p class="text-sm text-gray-400 text-center mt-3">Version 3.0 is available as an interactive demo - visit the /demo route to play the game</p>
        </div>

        <!-- 3 Key Improvements -->
        <div class="grid md:grid-cols-3 gap-4">
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

      <!-- Section 7: Design Decisions -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🎯</span> Design Decisions
        </h2>

        <div class="bg-gray-50 rounded-xl p-6">
          <img src="/images/docx/module5_prototype/image_012.png" alt="Design Decisions" class="max-w-full mx-auto rounded-lg">
        </div>
      </section>

      <!-- Section 8: AI Usage Declaration -->
      <section class="bg-gray-100 rounded-2xl p-6">
        <h3 class="font-bold text-gray-700 mb-2">AI Usage Declaration</h3>
        <p class="text-sm text-gray-600">
          [1] Gemini, version 2.0, accessed on 2026-04-07, available at `https://gemini.google.com/`. 
          Used for generating system architecture diagram, user journey, and design decision visualization in the prototype section.
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

const coreSteps = [
  { title: 'Register & Select Role', desc: 'Choose your postgraduate application role: Explorer (Year 2) or Sprint (Year 3)' },
  { title: 'Enter Application Stages', desc: 'Complete 5 stages: School Selection → Documents → Essay → Application → Interview' },
  { title: 'Accumulate Values', desc: 'Earn Learning Value (knowledge) and Task Value (practice) through quizzes and simulations' },
  { title: 'Unlock Strategies', desc: 'Reach value thresholds to unlock exclusive postgraduate application guides and templates' },
  { title: 'Advisor Guidance', desc: 'Advisors review student progress data for targeted offline support' }
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

/* Custom scrollbar for horizontal scrolling */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
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
</style>