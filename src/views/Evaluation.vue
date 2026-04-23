<!--
  Evaluation.vue - Module 6: Evaluation & Results
  展示用户测试数据、量化结果和质性反馈
-->

<template>
  <div class="evaluation-page min-h-screen bg-gray-50">
    <ModuleHeader 
      title="Evaluation & Results"
      subtitle="Early evaluation and user feedback"
      icon="📊"
    />

    <main class="max-w-5xl mx-auto px-4 py-8 pb-20">
      <TableOfContents :items="tocItems" />
      
      <!-- Evaluation Methods -->
      <section id="evaluation-methods" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🔬 Evaluation Methods</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 class="font-bold text-blue-900 mb-2">Heuristic Evaluation</h3>
            <p class="text-gray-700 text-sm">Evaluated interface usability based on human-computer interaction design principles (Nielsen's 10 heuristics) [2].</p>
          </div>
          <div class="p-6 bg-green-50 rounded-xl border border-green-100">
            <h3 class="font-bold text-green-900 mb-2">User Testing</h3>
            <p class="text-gray-700 text-sm">Pilot testing with 8 students and 2 advisors completing core game levels and providing task-based feedback.</p>
          </div>
          <div class="p-6 bg-purple-50 rounded-xl border border-purple-100">
            <h3 class="font-bold text-purple-900 mb-2">System Usability Scale (SUS)</h3>
            <p class="text-gray-700 text-sm">Standardized 10-item questionnaire measuring perceived usability of the game interface [3].</p>
          </div>
        </div>
      </section>

      <!-- User Quotes -->
      <section id="user-feedback" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">💬 User Feedback</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">👤</div>
              <div>
                <div class="font-medium text-gray-900">Year 2 Student</div>
                <div class="text-sm text-gray-500">Confused Type</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"5 minutes per level fits perfectly into my break time. Unlocking strategies with points feels rewarding!"</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">👤</div>
              <div>
                <div class="font-medium text-gray-900">Year 3 Student</div>
                <div class="text-sm text-gray-500">Sprint Type</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"The essay writing scenarios are very practical. The tips I unlocked helped me avoid common mistakes."</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">👔</div>
              <div>
                <div class="font-medium text-gray-900">Development Advisor</div>
                <div class="text-sm text-gray-500">Secondary User</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"Students now understand the basics before coming to me. I can focus on personalized guidance instead of repetitive Q&A."</p>
          </div>
        </div>
      </section>

      <!-- Key Findings -->
      <section id="key-findings" class="mb-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <h2 class="text-2xl font-bold mb-4">🔍 Key Findings</h2>
        <p class="text-lg leading-relaxed">
          The points-based story unlocking mechanism effectively enhances students' motivation and knowledge retention in postgraduate application preparation. 
          Gamification proves to be an effective complement to traditional college guidance. The dual-value system successfully 
          distinguishes theoretical learning from practical skills, giving students clear feedback on their progress.
        </p>
      </section>

      <!-- Reference -->
      <section id="reference" class="mb-12 bg-gray-100 rounded-2xl p-6">
        <h3 class="font-bold text-gray-700 mb-2">📚 Reference</h3>
        <p class="text-sm text-gray-600 mb-2">[2] Nielsen, J. (1994). Usability Engineering. Morgan Kaufmann Publishers.</p>
        <p class="text-sm text-gray-600">[3] Brooke, J. (1996). SUS: A 'quick and dirty' usability scale. In P. W. Jordan et al. (Eds.), Usability Evaluation in Industry. Taylor & Francis.</p>
      </section>

    </main>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/portfolio/ModuleHeader.vue'
import TableOfContents from '../components/portfolio/TableOfContents.vue'

const tocItems = [
  { id: 'evaluation-methods', title: '🔬 Evaluation Methods' },
  { id: 'user-feedback', title: '💬 User Feedback' },
  { id: 'key-findings', title: '🔍 Key Findings' },
  { id: 'reference', title: '📚 Reference' }
]
</script>

<style scoped>
.evaluation-page { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>
