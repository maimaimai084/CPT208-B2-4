<!--
  Conclusion.vue - Module 7: Conclusion & Future Work
  总结项目成果、展望未来、参考文献
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
          we validated that gamification [4] can effectively enhance student engagement and knowledge retention.
        </p>
        <p class="text-gray-700 leading-relaxed mb-6">
          The project addresses core pain points identified through user research: fragmented information, 
          dull learning formats, unclear personal positioning, and insufficient advisor support tools. 
          By combining game mechanics with educational content, we created a fragmented learning experience 
          that fits students' busy schedules while providing systematic knowledge about postgraduate applications.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div class="text-2xl mb-2">🎮</div>
            <h4 class="font-bold text-gray-900 mb-1">For Students</h4>
            <p class="text-sm text-gray-600">Transform passive learning into active gaming experience with 5-10 minute sessions.</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-xl border border-purple-100">
            <div class="text-2xl mb-2">👔</div>
            <h4 class="font-bold text-gray-900 mb-1">For Advisors</h4>
            <p class="text-sm text-gray-600">Lightweight tool to improve guidance efficiency by 30-40% through data-driven insights.</p>
          </div>
          <div class="p-4 bg-green-50 rounded-xl border border-green-100">
            <div class="text-2xl mb-2">🎓</div>
            <h4 class="font-bold text-gray-900 mb-1">For B2 Track</h4>
            <p class="text-sm text-gray-600">Online-offline hybrid guidance solution aligned with XJTLU student needs.</p>
          </div>
        </div>
      </section>

      <!-- Research Limitations -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">⚠️ Research Limitations</h2>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <span class="text-gray-400 mt-1">•</span>
            <p class="text-gray-700">Sample size limited to 90 students and 3 advisors within XJTLU, which may not fully represent all postgraduate application scenarios.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-gray-400 mt-1">•</span>
            <p class="text-gray-700">The prototype uses LocalStorage for data persistence; a full backend system would be needed for production deployment.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-gray-400 mt-1">•</span>
            <p class="text-gray-700">Long-term learning effectiveness has not been measured; future work should include longitudinal studies.</p>
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
              <p class="text-gray-600">Add more targeted content for UK/US/HK/Singapore applications with region-specific guidance and templates.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Social Features</h4>
              <p class="text-gray-600">Enable team-based challenges, peer learning communities, and leaderboard competitions to boost engagement.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Enhanced Analytics</h4>
              <p class="text-gray-600">Personalized learning analytics for advisor dashboard with AI-powered recommendation engines.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Backend Integration</h4>
              <p class="text-gray-600">Migrate from LocalStorage to a full backend database with user accounts, progress synchronization, and cloud saves.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- References -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">📚 References</h2>
        <div class="space-y-3 text-sm text-gray-700">
          <p>[1] Sharp, H., Preece, J., & Rogers, Y. (2007). <em>Interaction design: beyond human-computer interaction</em> (2nd ed.). Wiley. — Cited in Design Process (Interaction Design Lifecycle Model).</p>
          <p>[2] Nielsen, J. (1994). <em>Usability Engineering</em>. Morgan Kaufmann Publishers. — Cited in Evaluation (Nielsen's 10 heuristics for heuristic evaluation).</p>
          <p>[3] Brooke, J. (1996). SUS: A 'quick and dirty' usability scale. In P. W. Jordan et al. (Eds.), <em>Usability Evaluation in Industry</em>. Taylor & Francis. — Cited in Evaluation (System Usability Scale methodology).</p>
          <p>[4] Deterding, S., Dixon, D., Khaled, R., & Nacke, L. (2011). From game design elements to gamefulness: Defining gamification. <em>Proceedings of the 15th International Academic MindTrek Conference</em>. — Referenced in Introduction & Conclusion (gamification concept).</p>
        </div>
      </section>

      <!-- AI Usage Declaration -->
      <section class="mb-12 bg-gray-100 rounded-2xl p-6">
        <h3 class="font-bold text-gray-700 mb-2">AI Usage Declaration</h3>
        <p class="text-sm text-gray-600 mb-3">
          [1] Gemini, version 2.0, accessed on 2026-04-07, available at https://gemini.google.com/. 
          Used for generating visual assets (low-fi wireframes, high-fi UI mockups, system architecture diagrams) 
          and content optimization in the portfolio section.
        </p>
        <p class="text-sm text-gray-600">
          All core game mechanics, design decisions, user research, and evaluation were conducted by the team without AI assistance.
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
