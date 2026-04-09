<!--
  Conclusion.vue - Module 7: Conclusion & Future Work
  总结项目成果、展望未来
-->

<template>
  <div class="conclusion-page min-h-screen bg-gray-50">
    <ModuleHeader 
      title="Conclusion & Future Work"
      subtitle="Project outcomes and next steps"
      icon="✨"
    />

    <main class="max-w-5xl mx-auto px-4 py-8 pb-20">
      
      <!-- Project Outcomes -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🏆 Project Outcomes</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          MasterApply Quest successfully developed a text-based game for postgraduate application support, 
          implementing a points-based story unlocking mechanism. Through human-centered design, 
          we validated that gamification can effectively enhance student engagement and knowledge retention.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div class="text-2xl mb-2">🎮</div>
            <h4 class="font-bold text-gray-900 mb-1">For Students</h4>
            <p class="text-sm text-gray-600">Transform passive learning into active gaming experience</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-xl border border-purple-100">
            <div class="text-2xl mb-2">👔</div>
            <h4 class="font-bold text-gray-900 mb-1">For Advisors</h4>
            <p class="text-sm text-gray-600">Lightweight tool to improve guidance efficiency</p>
          </div>
          <div class="p-4 bg-green-50 rounded-xl border border-green-100">
            <div class="text-2xl mb-2">🎓</div>
            <h4 class="font-bold text-gray-900 mb-1">For B2 Track</h4>
            <p class="text-sm text-gray-600">Online-offline hybrid guidance solution</p>
          </div>
        </div>
      </section>

      <!-- Future Work -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🚀 Future Work</h2>
        <div class="space-y-4">
          <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Expand Content Library</h4>
              <p class="text-gray-600">Add more targeted content for UK/US/HK/Singapore applications</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Social Features</h4>
              <p class="text-gray-600">Enable team-based challenges and peer learning</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Enhanced Analytics</h4>
              <p class="text-gray-600">Personalized learning analytics for advisor dashboard</p>
            </div>
          </div>
        </div>
      </section>

      <!-- References -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">📚 References</h2>
        <div class="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <p class="text-gray-600 mb-2">📝 TODO: Add academic references</p>
          <ul class="text-sm text-gray-500 space-y-1">
            <li>• [1] Gamification in education research paper</li>
            <li>• [2] HCI design principles reference</li>
            <li>• [3] UEQ/SUS evaluation methodology</li>
          </ul>
        </div>
      </section>

      <!-- AI Usage Declaration -->
      <section class="mb-12 bg-gray-100 rounded-2xl p-6">
        <h3 class="font-bold text-gray-700 mb-2">AI Usage Declaration</h3>
        <p class="text-sm text-gray-600 mb-3">
          [1] Gemini, version 2.0, accessed on 2026-04-07, available at https://gemini.google.com/. 
          Used for generating visual assets and content optimization.
        </p>
        <p class="text-sm text-gray-600">
          All core game mechanics, design decisions, and user research were conducted by the team without AI assistance.
        </p>
      </section>

      <!-- Acknowledgments -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">🙏 Acknowledgments</h2>
        <p class="text-gray-700">
          We thank XJTLU students and development advisors who participated in our research and testing. 
          Special thanks to Dr. Yue Li and Dr. Teng Ma for their guidance in CPT208 Human-Centric Computing.
        </p>
      </section>

    </main>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/portfolio/ModuleHeader.vue'
</script>

<style scoped>
.conclusion-page { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>
