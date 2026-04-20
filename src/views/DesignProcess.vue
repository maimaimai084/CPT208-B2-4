<!--
  DesignProcess.vue - Module 4: Design Process
  展示设计方法论、设计概念、设计决策
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
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🎯 4 Specific Project Objectives</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
            <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <p class="text-gray-700">Deconstruct the 5 core stages of Master's applications, using a text-based game to let students master the application process and knowledge.</p>
          </div>
          <div class="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
            <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <p class="text-gray-700">Create a dual-metric system of "Learning Points + Task Points" to incentivize students' fragmented learning.</p>
          </div>
          <div class="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
            <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <p class="text-gray-700">Trigger key storylines upon reaching point thresholds, unlocking practical Master's application guides and useful templates.</p>
          </div>
          <div class="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
            <div class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
            <p class="text-gray-700">Build a lightweight auxiliary dashboard for advisors to realize a mixed scenario of online game-based learning + offline targeted guidance.</p>
          </div>
        </div>
      </section>

      <!-- Design Process Model -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🔄 Design Process</h2>
        <p class="text-gray-600 mb-4">We followed the Interaction Design Lifecycle Model by Sharp, Preece & Rogers [1].</p>
        <div class="flex justify-center mb-6">
          <img src="/images/docx/module4_process/image_003.png" alt="Interaction Design Lifecycle Model" class="max-w-full rounded-lg border border-gray-100">
        </div>
        <div class="grid md:grid-cols-4 gap-4 text-center">
          <div class="p-4 bg-blue-50 rounded-xl">
            <div class="font-bold text-blue-900">Establishing Requirements</div>
            <p class="text-sm text-gray-600 mt-1">User research & pain points</p>
          </div>
          <div class="p-4 bg-green-50 rounded-xl">
            <div class="font-bold text-green-900">Designing Alternatives</div>
            <p class="text-sm text-gray-600 mt-1">Brainstorming & Crazy 8s</p>
          </div>
          <div class="p-4 bg-orange-50 rounded-xl">
            <div class="font-bold text-orange-900">Prototyping</div>
            <p class="text-sm text-gray-600 mt-1">Low-fi → High-fi evolution</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-xl">
            <div class="font-bold text-purple-900">Evaluating</div>
            <p class="text-sm text-gray-600 mt-1">Heuristic & user testing</p>
          </div>
        </div>
      </section>

      <!-- Core Design Concept -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">💡 Core Design Concept</h2>
        <div class="bg-gray-50 rounded-xl p-6 mb-6">
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
        <div class="flex justify-center">
          <img src="/images/docx/module4_process/image_002.jpeg" alt="Core Design Concepts" class="max-w-full rounded-lg border border-gray-100">
        </div>
      </section>

      <!-- Double Diamond -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">💎 Double Diamond Design Process</h2>
        <div class="flex justify-center mb-6">
          <img src="/images/docx/module4_process/image_001.jpeg" alt="Double Diamond Design Process" class="max-w-full rounded-lg border border-gray-100">
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-bold text-blue-900 mb-2">🔵 Discover & Define (Research)</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• User surveys (n=90) and advisor interviews (n=3)</li>
              <li>• Pain point analysis: fragmented info, dull formats, no guidance</li>
              <li>• Persona creation: Confused Year 2 & Sprint Year 3</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-orange-900 mb-2">🟠 Develop & Deliver (Design)</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Crazy 8s brainstorming for game mechanics</li>
              <li>• Low-fi sketching and high-fi prototyping</li>
              <li>• Iterative design based on user feedback</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Engaging Highlights -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">✨ Engaging Highlights</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div class="text-2xl mb-2">⏱️</div>
            <h4 class="font-bold text-gray-900 mb-1">Fragmented (Micro-learning)</h4>
            <p class="text-sm text-gray-600">5-10 minutes per stage, perfectly adapting to breaks and daily commutes, aligning with students' scattered schedules.</p>
          </div>
          <div class="p-4 bg-green-50 rounded-xl border border-green-100">
            <div class="text-2xl mb-2">🎯</div>
            <h4 class="font-bold text-gray-900 mb-1">Customization</h4>
            <p class="text-sm text-gray-600">Tailored to XJTLU students' application preferences, featuring exclusive storylines and question banks.</p>
          </div>
          <div class="p-4 bg-orange-50 rounded-xl border border-orange-100">
            <div class="text-2xl mb-2">🎮</div>
            <h4 class="font-bold text-gray-900 mb-1">Interactivity</h4>
            <p class="text-sm text-gray-600">Student decisions directly impact point accumulation, and narrative outcomes provide feedback for practical application steps.</p>
          </div>
        </div>
      </section>

      <!-- Reference -->
      <section class="mb-12 bg-gray-100 rounded-2xl p-6">
        <h3 class="font-bold text-gray-700 mb-2">Reference</h3>
        <p class="text-sm text-gray-600">
          [1] Sharp, H., Preece, J., & Rogers, Y. (2007). Interaction design: beyond human-computer interaction (2nd ed.). Wiley.
        </p>
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
