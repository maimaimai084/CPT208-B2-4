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
      <TableOfContents :items="tocItems" />
      
      <!-- Project Outcomes -->
      <section id="project-outcomes" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
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
      <section id="research-limitations" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
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
      <section id="future-work" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
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

      <!-- Final Reflection -->
      <section id="final-reflection" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🤔 Final Reflection</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-3">Social & Ethical Implications</h3>
            <p class="text-gray-700 leading-relaxed mb-3">
              This project addresses a genuine equity gap in postgraduate application support.
              At XJTLU, students with stronger social networks or more free time often receive
              better guidance, while others are left navigating fragmented information alone.
              By transforming application preparation into a free, lightweight, and universally
              accessible text-based game, we lower the barrier to structured learning.
              The dual-end design ensures that advisors can identify "silent" struggling students
              through data rather than waiting for them to seek help, promoting
              <strong>equality, diversity, and inclusion</strong> in educational support.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Ethically, we prioritized <strong>data privacy</strong> by using browser LocalStorage
              rather than external servers, ensuring sensitive academic progress remains on the user's device.
              All application guidance content was cross-referenced with official XJTLU postgraduate support
              materials to prevent misinformation. The gamification mechanics (5–10 minute stages,
              threshold-based unlocking) were intentionally designed to encourage learning without
              fostering addictive behavior—there are no infinite scrolls, no daily streak punishments,
              and no pay-to-win elements.
            </p>
          </div>
          
          <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 class="text-lg font-bold text-gray-900 mb-3">🤖 AI Tool Usage</h3>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>Generative AI (Gemini 2.0) 🤖</strong> was used for <em>non-substantive</em> tasks only, such as generating visual assets including the Core Design Concept diagram, Double Diamond Design Process diagram, system architecture diagrams, and data-flow visualizations. It was also used for grammatical polishing of portfolio text.
            </p>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>All core design logic</strong>—including the Dual-Value system, narrative unlocking
              mechanics, five-stage application structure, user research methodology, and evaluation
              design—was developed entirely by the team. No AI was used to generate user personas,
              survey questions, or heuristic evaluation results.
            </p>
            <p class="text-gray-700 text-sm leading-relaxed">
              For coding, the project was built with <strong>Vue 3 and Tailwind CSS</strong> written
              directly by team members. If AI coding assistance was used for debugging or component
              scaffolding, all prompts are documented in the <code>/ailogs</code> folder in our
              GitHub repository.
            </p>
          </div>
        </div>
      </section>

      <!-- References -->
      <section id="references" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">📚 References</h2>
        <div class="space-y-3 text-sm text-gray-700">
          <p>[1] Sharp, H., Preece, J., & Rogers, Y. (2007). <em>Interaction design: beyond human-computer interaction</em> (2nd ed.). Wiley. — Cited in Design Process (Interaction Design Lifecycle Model).</p>
          <p>[2] Nielsen, J. (1994). <em>Usability Engineering</em>. Morgan Kaufmann Publishers. — Cited in Evaluation (Nielsen's 10 heuristics for heuristic evaluation).</p>
          <p>[3] Brooke, J. (1996). SUS: A 'quick and dirty' usability scale. In P. W. Jordan et al. (Eds.), <em>Usability Evaluation in Industry</em>. Taylor & Francis. — Cited in Evaluation (System Usability Scale methodology).</p>
          <p>[4] Deterding, S., Dixon, D., Khaled, R., & Nacke, L. (2011). From game design elements to gamefulness: Defining gamification. <em>Proceedings of the 15th International Academic MindTrek Conference</em>. — Referenced in Introduction & Conclusion (gamification concept).</p>
        </div>
      </section>

      

      <!-- Acknowledgments -->
      <section id="acknowledgments" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
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
import TableOfContents from '../components/portfolio/TableOfContents.vue'

const tocItems = [
  { id: 'project-outcomes', title: '🏆 Project Outcomes' },
  { id: 'research-limitations', title: '⚠️ Research Limitations' },
  { id: 'future-work', title: '🚀 Future Work' },
  { id: 'final-reflection', title: '🤔 Final Reflection' },
  { id: 'references', title: '📚 References' },
  { id: 'acknowledgments', title: '🙏 Acknowledgments' }
]
</script>

<style scoped>
.conclusion-page { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>
