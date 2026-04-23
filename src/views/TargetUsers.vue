<!--
  TargetUsers.vue - Module 3: Target Users & Stakeholders
  展示Personas、用户数据、研究对象及痛点需求
-->

<template>
  <div class="target-users-page min-h-screen bg-gray-50">
    <ModuleHeader 
      title="Target Users & Stakeholders"
      subtitle="Understanding who we design for"
      icon="👥"
    />

    <main class="max-w-5xl mx-auto px-4 py-8 pb-20">
      <TableOfContents :items="tocItems" />
      
      <!-- Research Subjects Overview -->
      <section id="research-subjects" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🔍 Research Subjects</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          This research focuses on the undergraduate population preparing for study abroad applications, 
          establishing a clear user persona along with corresponding needs and pain point systems. 
          The primary users are second- and third-year undergraduate students with clear or preliminary 
          intentions to study abroad, covering all majors, with main target regions including the UK, 
          the US, Singapore, Hong Kong, and Australia.
        </p>
        <p class="text-gray-700 leading-relaxed">
          They heavily rely on self-media platforms such as Xiaohongshu, Zhihu, and Bilibili, as well as 
          experiences shared by seniors and alumnae for information access. They only have a moderate 
          understanding of the application process, with vague goals and lack of detailed planning, 
          and are accustomed to mobile-based learning in fragmented sessions of 5 to 10 minutes.
        </p>
      </section>

      <!-- Stakeholders -->
      <section id="stakeholders" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🏢 Stakeholders</h2>
        <div class="flex flex-wrap gap-4">
          <div class="px-6 py-3 bg-blue-50 rounded-xl border border-blue-100">
            <span class="font-medium text-blue-900">XJTLU SAT School Students</span>
          </div>
          <div class="px-6 py-3 bg-green-50 rounded-xl border border-green-100">
            <span class="font-medium text-green-900">Student Development Advisor Center</span>
          </div>
        </div>
      </section>

      <!-- Personas -->
      <section id="primary-users" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">👤 Primary Users: XJTLU SAT School Students</h2>
        <p class="text-gray-600 mb-6">Second and third-year undergraduate students at XJTLU SAT School preparing for postgraduate applications.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Persona 1: Emily Chen -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="h-32 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div class="p-6">
              <div class="w-20 h-20 bg-gray-200 rounded-full -mt-16 mb-4 border-4 border-white flex items-center justify-center text-3xl overflow-hidden">
                <img src="/images/exp.jpg" alt="Emily Chen" class="w-full h-full object-cover">
              </div>
              <div class="mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Confused Year 2</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Emily Chen</h3>
              <p class="text-gray-500 text-sm mb-4">Year 2 Student</p>
              <div class="space-y-3">
                <div>
                  <h4 class="font-medium text-gray-700 mb-1">Pain Points</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Unclear about application timeline</li>
                    <li>• Information overload from various sources</li>
                  </ul>
                </div>
              </div>
              <div class="mt-4">
                <img src="/images/docx/module3_users/image_002.png" alt="Emily Chen Details" class="w-full rounded-lg border border-gray-100">
              </div>
            </div>
          </div>

          <!-- Persona 2: Alex Wang -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="h-32 bg-gradient-to-r from-orange-400 to-orange-600"></div>
            <div class="p-6">
              <div class="w-20 h-20 bg-gray-200 rounded-full -mt-16 mb-4 border-4 border-white flex items-center justify-center text-3xl overflow-hidden">
                <img src="/images/sp.jpg" alt="Alex Wang" class="w-full h-full object-cover">
              </div>
              <div class="mb-4">
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Sprint Year 3</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Alex Wang</h3>
              <p class="text-gray-500 text-sm mb-4">Year 3 Student</p>
              <div class="space-y-3">
                <div>
                  <h4 class="font-medium text-gray-700 mb-1">Pain Points</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Struggling with essay writing (60%)</li>
                    <li>• Uncertain about school selection (52%)</li>
                  </ul>
                </div>
              </div>
              <div class="mt-4">
                <img src="/images/docx/module3_users/image_004.png" alt="Alex Wang Details" class="w-full rounded-lg border border-gray-100">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Understanding Comparison Chart -->
      <section id="understanding-chart" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">📊 Understanding of Postgraduate Application Process</h2>
        <p class="text-gray-600 mb-4">Comparison between Year 2 (Sophomore) and Year 3 (Junior) students</p>
        <div class="flex justify-center">
          <img src="/images/docx/module3_users/image_005.png" alt="Understanding Differences Chart" class="max-w-full rounded-lg border border-gray-100">
        </div>
      </section>

      <!-- Secondary Users -->
      <section id="secondary-users" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">👔 Secondary Users: Development Advisors</h2>
        <p class="text-gray-600 mb-6">
          Our secondary users are staff from the <strong>XJTLU Student Development Advisor Center</strong> who provide one-on-one and group guidance to students preparing for postgraduate applications.
        </p>

        <div class="grid md:grid-cols-3 gap-6">
          <!-- Pain Point 1 -->
          <div class="p-5 bg-red-50 rounded-xl border border-red-100">
            <div class="text-2xl mb-3">🛠️</div>
            <h4 class="font-bold text-gray-900 mb-2">Burdened by Repetitive Q&A</h4>
            <p class="text-sm text-gray-700 leading-relaxed">
              Advisors currently spend a significant portion of their weekly hours answering the same foundational questions—application timelines, document checklists, and school selection basics—leaving limited time for personalized, high-value guidance on essays and interview strategy.
            </p>
          </div>

          <!-- Pain Point 2 -->
          <div class="p-5 bg-orange-50 rounded-xl border border-orange-100">
            <div class="text-2xl mb-3">📚</div>
            <h4 class="font-bold text-gray-900 mb-2">Lack of Centralized Strategy Repository</h4>
            <p class="text-sm text-gray-700 leading-relaxed">
              Core guidance materials such as school matching frameworks, personal statement templates, and interview tip sheets exist in scattered documents or individual advisors' notes. There is no unified, easily accessible repository that students can review independently before appointments.
            </p>
          </div>

          <!-- Pain Point 3 -->
          <div class="p-5 bg-purple-50 rounded-xl border border-purple-100">
            <div class="text-2xl mb-3">⚡</div>
            <h4 class="font-bold text-gray-900 mb-2">No Visibility into Student Progress</h4>
            <p class="text-sm text-gray-700 leading-relaxed">
              Advisors have no systematic way to track which students have mastered basic concepts and which are struggling with specific topics like recommendation letters or school selection. Guidance remains reactive—waiting for students to seek help—rather than proactive and data-informed.
            </p>
          </div>
        </div>

        <!-- Advisor Needs Summary -->
        <div class="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h4 class="font-bold text-blue-900 mb-3">What Advisors Need</h4>
          <ul class="space-y-2 text-sm text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>A <strong>lightweight, read-only analytics dashboard</strong> that displays student progress, completed stages, and identified knowledge gaps—enabling targeted, efficient offline consultations.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>A <strong>centralized strategy library</strong> where curated guides on school matching, essay writing, and interview preparation are embedded into the game and automatically unlocked as students progress.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>A <strong>game-based learning channel</strong> that empowers students to acquire foundational application knowledge autonomously, so face-to-face advisor time can be reserved for complex, personalized coaching rather than repetitive basics.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Statistics -->
      <section id="key-statistics" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">📈 Key Statistics</h2>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
            <div class="text-3xl font-bold text-blue-600 mb-2">80%</div>
            <div class="text-sm text-gray-600">Year 2 no clear target</div>
          </div>
          <div class="bg-orange-50 rounded-xl p-6 text-center border border-orange-100">
            <div class="text-3xl font-bold text-orange-600 mb-2">60%</div>
            <div class="text-sm text-gray-600">Year 3 struggle with essay</div>
          </div>
          <div class="bg-purple-50 rounded-xl p-6 text-center border border-purple-100">
            <div class="text-3xl font-bold text-purple-600 mb-2">3.5h</div>
            <div class="text-sm text-gray-600">Weekly repetitive Q&A</div>
          </div>
          <div class="bg-green-50 rounded-xl p-6 text-center border border-green-100">
            <div class="text-3xl font-bold text-green-600 mb-2">90%</div>
            <div class="text-sm text-gray-600">Accept 5-10 min learning</div>
          </div>
        </div>
      </section>

      <!-- Pain Points Summary -->
      <section id="core-pain-points" class="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">😰 Core Pain Points</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-3">
            <span class="text-red-500 text-xl">•</span>
            <p class="text-gray-700">Unstructured information from scattered sources</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-red-500 text-xl">•</span>
            <p class="text-gray-700">Dull learning formats lacking engagement</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-red-500 text-xl">•</span>
            <p class="text-gray-700">Unclear personal positioning and goals</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-red-500 text-xl">•</span>
            <p class="text-gray-700">Insufficient progress management tools</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-red-500 text-xl">•</span>
            <p class="text-gray-700">Limited reference cases for XJTLU students</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-red-500 text-xl">•</span>
            <p class="text-gray-700">Advisors lack lightweight auxiliary tools</p>
          </div>
        </div>
      </section>

      <!-- Current User Journey -->
      <section id="current-user-journey" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🗺️ Current User Journey</h2>
        <p class="text-gray-600 mb-6">Before MasterApply Quest, students were trapped in a <strong>frustrating, fragmented loop</strong> with no structured support:</p>
        
        <div class="flex flex-wrap flex-col md:flex-row items-center justify-center gap-4">
          <div class="px-4 py-3 bg-gray-100 rounded-lg text-center">
            <div class="text-2xl mb-1">🎓</div>
            <div class="text-sm font-medium">Student considers<br/>PG study</div>
          </div>
          <div class="flex flex-row md:flex-col items-center gap-4 md:gap-0">
            <span class="text-3xl text-gray-400">→</span>
            <span class="text-2xl">😰</span>
          </div>
          <div class="px-4 py-3 bg-gray-100 rounded-lg text-center">
            <div class="text-2xl mb-1">📱</div>
            <div class="text-sm font-medium">Opens<br/>Xiaohongshu/Zhihu</div>
          </div>
          <div class="flex flex-row md:flex-col items-center gap-4 md:gap-0">
            <span class="text-3xl text-gray-400">→</span>
            <span class="text-2xl">😵‍💫</span>
          </div>
          <div class="px-4 py-3 bg-gray-100 rounded-lg text-center">
            <div class="text-2xl mb-1">📚</div>
            <div class="text-sm font-medium">Information overload<br/>conflicting advice</div>
          </div>
          <div class="flex flex-row md:flex-col items-center gap-4 md:gap-0">
            <span class="text-3xl text-gray-400">→</span>
            <span class="text-2xl">😤</span>
          </div>
          <div class="px-4 py-3 bg-gray-100 rounded-lg text-center">
            <div class="text-2xl mb-1">🏫</div>
            <div class="text-sm font-medium">Wants campus<br/>workshop</div>
          </div>
          <div class="flex flex-row md:flex-col items-center gap-4 md:gap-0">
            <span class="text-3xl text-gray-400">→</span>
            <span class="text-2xl">😫</span>
          </div>
          <div class="px-4 py-3 bg-red-100 rounded-lg text-center">
            <div class="text-2xl mb-1">❌</div>
            <div class="text-sm font-medium">Schedule conflict<br/>class/internship</div>
          </div>
        </div>
      </section>

      <!-- How MasterApply Quest Breaks This Loop -->
      <section id="break-loop" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🎯</span> How MasterApply Quest Breaks This Loop
        </h2>
        
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-gray-100">
                <th class="p-3 text-left font-bold border">Pain Point</th>
                <th class="p-3 text-left font-bold border">Our Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">😵‍💫 Scattered, conflicting info</td>
                <td class="p-3 border">📚 <strong>5 structured stages</strong> with curated, XJTLU-specific content</td>
              </tr>
              <tr>
                <td class="p-3 border">😫 Fixed workshop schedules</td>
                <td class="p-3 border">📱 <strong>5–10 min mobile stages</strong> playable anytime, anywhere</td>
              </tr>
              <tr>
                <td class="p-3 border">😩 Repetitive advisor Q&A</td>
                <td class="p-3 border">📊 <strong>Advisor Dashboard</strong> with progress tracking & gap alerts</td>
              </tr>
              <tr>
                <td class="p-3 border">😭 Low motivation, passive learning</td>
                <td class="p-3 border">🎮 <strong>Dual-Value + Story Unlock</strong> transforms prep into active adventure</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 3 Must-Have Features for Playful Experience -->
      <section id="must-have-features" class="mb-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
        <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🎮</span> 3 Must-Have Features for "Playful Experience"
        </h2>
        <p class="text-gray-700 mb-6">
          Based on insights from our literature review and commercial product analysis, we identified <strong>three non-negotiable features</strong> that the system must implement to deliver a genuinely playful and human-centric experience:
        </p>
        
        <div class="space-y-6">
          <div class="bg-white rounded-xl p-5 border border-blue-200">
            <div class="flex items-start gap-3">
              <span class="text-2xl">1️⃣</span>
              <div>
                <h3 class="font-bold text-gray-900 mb-2">Fragmented Narrative Challenge</h3>
                <p class="text-sm text-gray-700">
                  Each of the five application stages (School Selection → Documents → Essay → Application → Interview) must be playable as a <strong>self-contained 5–10 minute text-based narrative episode</strong>, combining quiz questions with branching story decisions. This directly addresses the <strong>fragmentation gap</strong> identified in Huang et al. (2020) and Plass et al. (2015)—transforming passive information consumption into active, emotionally engaging micro-learning that fits between classes and commutes.
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-5 border border-green-200">
            <div class="flex items-start gap-3">
              <span class="text-2xl">2️⃣</span>
              <div>
                <h3 class="font-bold text-gray-900 mb-2">Dual-Value Progression with Threshold Unlock</h3>
                <p class="text-sm text-gray-700">
                  The system must implement a <strong>real-time Dual-Value system</strong> (Learning Value for theoretical knowledge + Task Value for practical skills) paired with <strong>threshold-based story unlocking</strong>. This design is grounded in Sailer et al. (2017)—narrative elements most strongly satisfy intrinsic motivation—and Li et al. (2024)—separating knowledge acquisition from skill practice better supports autonomy and relatedness. Visual progress bars and immediate "+X LV / +X TV" feedback provide the <strong>instant feedback loop</strong> Plass et al. identify as critical for engagement.
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-5 border border-purple-200">
            <div class="flex items-start gap-3">
              <span class="text-2xl">3️⃣</span>
              <div>
                <h3 class="font-bold text-gray-900 mb-2">Advisor-Student Dual-End Ecosystem</h3>
                <p class="text-sm text-gray-700">
                  The system must provide a <strong>lightweight, read-only Advisor Dashboard</strong> displaying student progress, knowledge-gap tags (e.g., "PS Structure," "Recommendation Letters"), and stage-completion rates. This addresses the <strong>dual-end design gap</strong> absent in all four commercial products and existing literature—bridging online gamified learning with offline human-centric guidance, and reducing advisors' repetitive Q&A workload by 30–40%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/portfolio/ModuleHeader.vue'
import TableOfContents from '../components/portfolio/TableOfContents.vue'

const tocItems = [
  { id: 'research-subjects', title: '🔍 Research Subjects' },
  { id: 'stakeholders', title: '🏢 Stakeholders' },
  { id: 'primary-users', title: '👤 Primary Users' },
  { id: 'understanding-chart', title: '📊 Understanding Chart' },
  { id: 'secondary-users', title: '👔 Secondary Users' },
  { id: 'key-statistics', title: '📈 Key Statistics' },
  { id: 'core-pain-points', title: '😰 Core Pain Points' },
  { id: 'current-user-journey', title: '🗺️ Current User Journey' },
  { id: 'break-loop', title: '🎯 How MasterApply Quest Breaks This Loop' },
  { id: 'must-have-features', title: '🎮 3 Must-Have Features for Playful Experience' }
]
</script>

<style scoped>
.target-users-page { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>
