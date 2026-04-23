<!--
  Introduction.vue - Module 2: Introduction & Problem Statement
  展示项目背景、痛点、核心价值
-->

<template>
  <div class="introduction-page min-h-screen bg-gray-50">
    <!-- Module Header -->
    <ModuleHeader 
      title="Introduction & Research"
      subtitle="Understanding the postgraduate application challenges"
      icon="📋"
    />

    <main class="max-w-5xl mx-auto px-4 py-8 pb-20">
      <TableOfContents :items="tocItems" />
      
      <!-- Section 1: Background -->
      <section id="motivation" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🎯</span> Motivation
        </h2>
        
        <div class="prose prose-gray max-w-none">
          <p class="text-gray-700 leading-relaxed mb-4">
            Every year, <strong>over 80% of XJTLU graduates pursue overseas master's degrees</strong>. Yet our field research reveals critical gaps: <strong>75% of Year 2 students</strong> rate their understanding of the application process below 2/5, while <strong>Year 3 students</strong> struggle with fragmented information on essay writing and school selection. Campus support relies on <strong>one-way lectures</strong> that clash with class schedules; commercial tools offer <strong>generic, demotivating content</strong> not tailored to XJTLUs.
          </p>
          <p class="text-gray-700 leading-relaxed">
            The <strong>B2 "Gamified Student Development"</strong> track directly addresses the urgent need to transform students from <strong>passive recipients</strong> into <strong>active explorers</strong>. By gamifying the postgraduate journey into <strong>5–10 minute fragmented stages</strong>, we aim to boost student initiative while equipping advisors with <strong>lightweight data tools</strong>—filling the gap in interactive, human-centric application support.
          </p>
        </div>
      </section>

      <!-- Section 2: Pain Points -->
      <section id="pain-points" class="mb-12">
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
      <section id="research-questions" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
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
      <section id="core-value" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>💡</span> Core Value
        </h2>
        
        <p class="text-lg leading-relaxed mb-6 text-gray-700">
          MasterApply Quest transforms postgraduate application preparation into an engaging text-based adventure. 
          By combining game mechanics with educational content, we create a fragmented learning experience.
        </p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div class="text-3xl mb-2">🎮</div>
            <h4 class="font-bold mb-1 text-gray-900">Gamifies Learning</h4>
            <p class="text-sm text-gray-600">Makes application preparation engaging</p>
          </div>
          <div class="bg-green-50 rounded-xl p-4 border border-green-100">
            <div class="text-3xl mb-2">📱</div>
            <h4 class="font-bold mb-1 text-gray-900">Fragmented Learning</h4>
            <p class="text-sm text-gray-600">5-10 minute sessions fit schedules</p>
          </div>
          <div class="bg-orange-50 rounded-xl p-4 border border-orange-100">
            <div class="text-3xl mb-2">📊</div>
            <h4 class="font-bold mb-1 text-gray-900">Progress Tracking</h4>
            <p class="text-sm text-gray-600">Visual progress motivates engagement</p>
          </div>
        </div>
      </section>

      <!-- Section 5: Literature Review -->
      <section id="literature-review" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>📚</span> Literature Review
        </h2>
        <p class="text-gray-600 mb-6">To ground our design in established theory, we critically reviewed <strong>4 key papers</strong> that shaped our understanding of gamification in education.</p>
        
        <!-- Paper 1 -->
        <div class="mb-8 pb-8 border-b border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Paper 1: Sailer et al. (2017) — Psychological Need Satisfaction</h3>
          <p class="text-sm text-gray-500 mb-3"><em>Computers in Human Behavior</em>, 69, 371-380. <a href="https://doi.org/10.1016/j.chb.2016.11.048" target="_blank" class="text-blue-600 hover:underline ml-1">🔗 https://doi.org/10.1016/j.chb.2016.11.048</a></p>
          <div class="bg-blue-50 rounded-xl p-4 mb-4">
            <p class="text-gray-700 text-sm">Based on Self-Determination Theory (SDT), this study used a 2×2×2 factorial design to examine how badges, leaderboards, and narrative elements differentially satisfy psychological needs (competence, autonomy, relatedness). <strong>Narrative elements showed the strongest positive effect on intrinsic motivation.</strong></p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 rounded-xl p-4 border border-green-100">
              <h4 class="font-bold text-green-800 mb-2">✅ Strengths</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• <strong>Directly supports our core mechanic</strong>: Validates narrative elements most strongly boost intrinsic motivation</li>
                <li>• <strong>Rigorous factorial design</strong>: Controls for interaction effects across multiple elements</li>
                <li>• <strong>Design-aligned ranking</strong>: "Narrative > Leaderboard > Badge" motivation hierarchy</li>
              </ul>
            </div>
            <div class="bg-red-50 rounded-xl p-4 border border-red-100">
              <h4 class="font-bold text-red-800 mb-2">❌ Limitations</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• <strong>Short-term lab setting</strong>: Single-session experiments lack longitudinal tracking</li>
                <li>• <strong>Cultural homogeneity</strong>: German university sample; cross-cultural applicability needs verification</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Paper 2 -->
        <div class="mb-8 pb-8 border-b border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Paper 2: Plass et al. (2015) — Foundations of Game-Based Learning</h3>
          <p class="text-sm text-gray-500 mb-3"><em>Educational Psychologist</em>, 50(4), 258-283. <a href="https://doi.org/10.1080/00461520.2015.1122533" target="_blank" class="text-blue-600 hover:underline ml-1">🔗 https://doi.org/10.1080/00461520.2015.1122533</a></p>
          <div class="bg-blue-50 rounded-xl p-4 mb-4">
            <p class="text-gray-700 text-sm">Proposes a three-pillar theoretical framework—<strong>cognitive</strong>, <strong>motivational</strong>, and <strong>affective</strong>—and identifies core design elements for effective gamified learning: feedback, adaptivity, interactivity, and goal-orientation.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 rounded-xl p-4 border border-green-100">
              <h4 class="font-bold text-green-800 mb-2">✅ Strengths</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• <strong>Multidimensional framework</strong>: Explains gamification across cognitive, motivational, affective</li>
                <li>• <strong>Clear design principles</strong>: "Immediate feedback" and "adaptive difficulty" directly map to our progress bars</li>
              </ul>
            </div>
            <div class="bg-red-50 rounded-xl p-4 border border-red-100">
              <h4 class="font-bold text-red-800 mb-2">❌ Limitations</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• <strong>Generic educational contexts</strong>: Primarily K-12 and general higher education</li>
                <li>• <strong>Technological aging</strong>: Published in 2015; doesn't address mobile fragmented learning</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Paper 3 -->
        <div class="mb-8 pb-8 border-b border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Paper 3: Li et al. (2024) — Intrinsic Motivation Meta-Analysis</h3>
          <p class="text-sm text-gray-500 mb-3"><em>Educational Technology Research and Development</em>, 72(3), 765-796. <a href="https://doi.org/10.1007/s11423-023-10337-7" target="_blank" class="text-blue-600 hover:underline ml-1">🔗 https://doi.org/10.1007/s11423-023-10337-7</a></p>
          <div class="bg-blue-50 rounded-xl p-4 mb-4">
            <p class="text-gray-700 text-sm">A 2024 meta-analysis grounded in SDT finds gamification significantly enhances <strong>intrinsic motivation, autonomy, and relatedness</strong>, but has <strong>minimal impact on competency</strong>.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 rounded-xl p-4 border border-green-100">
              <h4 class="font-bold text-green-800 mb-2">✅ Strengths</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• <strong>Latest evidence (2024)</strong>: Confirms SDT's sustained validity via meta-analysis</li>
                <li>• <strong>Supports Dual-Value design</strong>: Distinguishes positive effects on autonomy and relatedness</li>
              </ul>
            </div>
            <div class="bg-red-50 rounded-xl p-4 border border-red-100">
              <h4 class="font-bold text-red-800 mb-2">❌ Limitations</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• <strong>Western-centric bias</strong>: Limited evidence for Chinese Sino-foreign universities like XJTLU</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Paper 4 -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Paper 4: Huang et al. (2020) — Learning Outcomes Meta-Analysis</h3>
          <p class="text-sm text-gray-500 mb-3"><em>Education Tech Research Dev</em>, 68, 1875-1901. <a href="https://doi.org/10.1007/s11423-020-09807-z" target="_blank" class="text-blue-600 hover:underline ml-1">🔗 https://doi.org/10.1007/s11423-020-09807-z</a></p>
          <div class="bg-blue-50 rounded-xl p-4 mb-4">
            <p class="text-gray-700 text-sm">Meta-analysis of 2010–2020 gamification studies finds a <strong>moderate effect size (g = 0.58)</strong> on factual knowledge, but highly variable effects on procedural and conceptual knowledge depending on pedagogical approach.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 rounded-xl p-4 border border-green-100">
              <h4 class="font-bold text-green-800 mb-2">✅ Strengths</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• <strong>High evidence grade</strong>: Meta-analytic synthesis with quantified effect sizes</li>
                <li>• <strong>Knowledge-type taxonomy</strong>: Distinguishes factual/procedural/conceptual knowledge</li>
              </ul>
            </div>
            <div class="bg-red-50 rounded-xl p-4 border border-red-100">
              <h4 class="font-bold text-red-800 mb-2">❌ Limitations</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• <strong>Domain transfer issues</strong>: Focused on mathematics education</li>
                <li>• <strong>Fragmentation gap</strong>: Doesn't cover 5-10 minute mobile fragmented learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 6: Commercial Products -->
      <section id="commercial-products" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>💼</span> Commercial Products
        </h2>
        <p class="text-gray-600 mb-6">We analyzed <strong>4 commercial products</strong> to identify market gaps and design opportunities.</p>
        
        <div class="space-y-6">
          <!-- Product 1: Duolingo -->
          <div class="border border-gray-100 rounded-xl p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2">Product 1: Duolingo</h3>
            <p class="text-sm text-gray-500 mb-3">The world's most popular language-learning app, built on XP points, streaks, leaderboards, and badges. Average session: 5–10 minutes.</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-green-50 rounded-lg p-3 border border-green-100">
                <h4 class="font-bold text-green-800 text-sm mb-1">✅ Strengths</h4>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Extreme fragmentation</strong>: 3-5 minute lessons fit commutes</li>
                  <li>• <strong>Mature gamification</strong>: Streaks, leaderboards, badges</li>
                  <li>• <strong>Adaptive AI paths</strong>: Dynamically adjusts difficulty</li>
                </ul>
              </div>
              <div class="bg-red-50 rounded-lg p-3 border border-red-100">
                <h4 class="font-bold text-red-800 text-sm mb-1">❌ Limitations</h4>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Limited content depth</strong>: Lacks academic-writing content</li>
                  <li>• <strong>Social competition anxiety</strong>: May cause stress</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product 2: ApplyBoard -->
          <div class="border border-gray-100 rounded-xl p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2">Product 2: ApplyBoard</h3>
            <p class="text-sm text-gray-500 mb-3">A Canadian B2B study-abroad platform connecting students, agents, and partner institutions. Offers one-stop services from school selection to visa application.</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-green-50 rounded-lg p-3 border border-green-100">
                <h4 class="font-bold text-green-800 text-sm mb-1">✅ Strengths</h4>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Systematic workflow management</strong>: Integrates selection, application, visa</li>
                  <li>• <strong>Massive institutional database</strong>: Covers multiple countries</li>
                </ul>
              </div>
              <div class="bg-red-50 rounded-lg p-3 border border-red-100">
                <h4 class="font-bold text-red-800 text-sm mb-1">❌ Limitations</h4>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Zero gamification</strong>: Pure tool-based platform</li>
                  <li>• <strong>Not XJTLU-specific</strong>: Lacks customized content</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product 3: Xiaohongshu / Zhihu -->
          <div class="border border-gray-100 rounded-xl p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2">Product 3: Xiaohongshu / Zhihu</h3>
            <p class="text-sm text-gray-500 mb-3">China's leading social media platforms and the primary channels XJTLU students use to gather application advice via peer-shared experiences.</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-green-50 rounded-lg p-3 border border-green-100">
                <h4 class="font-bold text-green-800 text-sm mb-1">✅ Strengths</h4>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• <strong>High content authenticity</strong>: Real application experiences</li>
                  <li>• <strong>Active community interaction</strong>: Comment sections enable Q&A</li>
                </ul>
              </div>
              <div class="bg-red-50 rounded-lg p-3 border border-red-100">
                <h4 class="font-bold text-red-800 text-sm mb-1">❌ Limitations</h4>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Extreme information fragmentation</strong>: No systematic curation</li>
                  <li>• <strong>No learning incentives</strong>: No progress tracking or rewards</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product 4: Applash -->
          <div class="border border-gray-100 rounded-xl p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2">Product 4: Applash</h3>
            <p class="text-sm text-gray-500 mb-3">An AI-driven study-abroad platform matching international students with 140,000+ university programs worldwide.</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-green-50 rounded-lg p-3 border border-green-100">
                <h4 class="font-bold text-green-800 text-sm mb-1">✅ Strengths</h4>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• <strong>AI intelligent matching</strong>: Recommends suitable institutions</li>
                  <li>• <strong>Scholarship data integration</strong>: 1,500+ partner institutions</li>
                </ul>
              </div>
              <div class="bg-red-50 rounded-lg p-3 border border-red-100">
                <h4 class="font-bold text-red-800 text-sm mb-1">❌ Limitations</h4>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Matching-heavy, learning-light</strong>: Focuses on "finding schools"</li>
                  <li>• <strong>No gamification</strong>: Pure information-query tool</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 7: Research Gap -->
      <section id="research-gap" class="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🔍</span> Research Gap Identified
        </h2>
        
        <p class="text-gray-700 mb-6">Existing studies and products collectively lack four critical dimensions:</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-white rounded-xl p-4 border border-indigo-100">
            <h4 class="font-bold text-indigo-800 mb-2">1️⃣ Longitudinal Engagement Tracking</h4>
            <p class="text-sm text-gray-600">Most gamification research relies on single-session lab experiments</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-indigo-100">
            <h4 class="font-bold text-indigo-800 mb-2">2️⃣ Mobile-Native Fragmented Learning</h4>
            <p class="text-sm text-gray-600">Ignores 5-10 minute commute/break contexts</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-indigo-100">
            <h4 class="font-bold text-indigo-800 mb-2">3️⃣ Postgraduate-Application-Specific Content</h4>
            <p class="text-sm text-gray-600">Generic templates fail to address the five-stage journey</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-indigo-100">
            <h4 class="font-bold text-indigo-800 mb-2">4️⃣ Advisor-Student Dual-End Design</h4>
            <p class="text-sm text-gray-600">No solution provides analytics for targeted offline guidance</p>
          </div>
        </div>

        <div class="bg-indigo-600 text-white rounded-xl p-6">
          <h4 class="font-bold mb-3">MasterApply Quest addresses these gaps by:</h4>
          <ul class="text-sm space-y-2">
            <li>✅ <strong>Long-term tracking</strong> via cumulative Learning/Task Values with threshold-based story triggers</li>
            <li>✅ <strong>Mobile-native fragmented design</strong> with 5-10 minute text-based stages</li>
            <li>✅ <strong>Postgraduate-specific content</strong> structured around XJTLU students' five-stage journey</li>
            <li>✅ <strong>Dual-end ecosystem</strong> with student gameplay + advisor analytics dashboard</li>
          </ul>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/portfolio/ModuleHeader.vue'
import TableOfContents from '../components/portfolio/TableOfContents.vue'

const tocItems = [
  { id: 'motivation', title: '🎯 Motivation' },
  { id: 'pain-points', title: '😰 Pain Points' },
  { id: 'research-questions', title: '❓ Research Questions' },
  { id: 'core-value', title: '💡 Core Value' },
  { id: 'literature-review', title: '📚 Literature Review' },
  { id: 'commercial-products', title: '💼 Commercial Products' },
  { id: 'research-gap', title: '🔍 Research Gap Identified' }
]
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
