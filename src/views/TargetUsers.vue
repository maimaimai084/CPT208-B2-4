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
        <p class="text-gray-700 leading-relaxed mb-6">
          They heavily rely on self-media platforms such as Xiaohongshu, Zhihu, and Bilibili, as well as 
          experiences shared by seniors and alumnae for information access. They only have a moderate 
          understanding of the application process, with vague goals and lack of detailed planning, 
          and are accustomed to mobile-based learning in fragmented sessions of 5 to 10 minutes.
        </p>
        <div class="flex flex-col-reverse lg:flex-row items-center gap-8 justify-center bg-gray-50 rounded-xl p-8">
          <div class="flex-1 max-w-md">
            <div class="text-base font-semibold text-gray-700 mb-3">Sample Distribution</div>
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <span class="w-3 h-3 rounded-sm bg-blue-500 flex-shrink-0"></span>
                <span>Year 2 (n=40): Students with preliminary PG application intention</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <span class="w-3 h-3 rounded-sm bg-orange-500 flex-shrink-0"></span>
                <span>Year 3 (n=50): Students with clear PG application intention</span>
              </div>
            </div>
          </div>
          <PieChart :data="researchData" donut :unit="'students'" :size="220" />
        </div>
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

      <!-- Primary Users -->
      <section id="primary-users" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">👤 Primary Users: XJTLU SAT School Students</h2>
        <p class="text-gray-600 mb-6">Second and third-year undergraduate students at XJTLU SAT School preparing for postgraduate applications.</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Persona 1: Year 2 - Emily -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="h-32 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div class="p-6">
              <div class="flex items-start gap-4 -mt-16 mb-4">
                <div class="w-20 h-20 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-3xl overflow-hidden flex-shrink-0">
                  <img src="/images/exp.jpg" alt="Emily Chen" class="w-full h-full object-cover">
                </div>
                <div class="pt-16">
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Confused Year 2</span>
                </div>
              </div>
              
              <h3 class="text-xl font-bold text-gray-900 mb-1">Emily Chen</h3>
              <p class="text-gray-500 text-sm mb-5">Year 2 Student • n=40</p>

              <!-- Pain Points -->
              <div class="mb-5">
                <h4 class="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wide">Pain Points</h4>
                <ul class="space-y-1.5">
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <span class="text-red-500 mt-0.5">•</span>
                    <span>Unclear about application timeline <span class="text-red-600 font-semibold">(75%)</span></span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <span class="text-red-500 mt-0.5">•</span>
                    <span>Information overload from various sources <span class="text-red-600 font-semibold">(67%)</span></span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <span class="text-red-500 mt-0.5">•</span>
                    <span>Wants campus workshops but no time <span class="text-red-600 font-semibold">(85%)</span></span>
                  </li>
                </ul>
              </div>

              <!-- Info Cards Grid -->
              <div class="grid grid-cols-2 gap-3 mb-5">
                <div class="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <h5 class="text-xs font-bold text-blue-900 mb-1.5">Basic Information</h5>
                  <p class="text-xs text-gray-700">Age: 20</p>
                  <p class="text-xs text-gray-700">Gender: Female</p>
                  <p class="text-xs text-gray-700">Major: Economics</p>
                  <p class="text-xs text-gray-700">Residence: Jiangsu</p>
                </div>
                <div class="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <h5 class="text-xs font-bold text-blue-900 mb-1.5">Current Situation</h5>
                  <p class="text-xs text-gray-700">Grades: Avg 80+</p>
                  <p class="text-xs text-gray-700">Competition: Business comp, won award</p>
                  <p class="text-xs text-gray-700">Internship: 1 at financial company</p>
                </div>
                <div class="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <h5 class="text-xs font-bold text-blue-900 mb-1.5">Personal Characteristics</h5>
                  <p class="text-xs text-gray-700">Hobbies: Reading, painting</p>
                  <p class="text-xs text-gray-700">Social: WeChat, Xiaohongshu, Douyin</p>
                  <p class="text-xs text-gray-700">Personality: Outgoing, communicative</p>
                </div>
                <div class="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <h5 class="text-xs font-bold text-blue-900 mb-1.5">Objective</h5>
                  <p class="text-xs text-gray-700">Short: Keep GPA up</p>
                  <p class="text-xs text-gray-700">Long: Top 50 QS university</p>
                </div>
              </div>

              <!-- Requirements -->
              <div class="bg-gray-50 rounded-lg p-3 mb-5">
                <h5 class="text-xs font-bold text-gray-800 mb-1.5">Requirements</h5>
                <p class="text-xs text-gray-700">Needs to understand the complete PG application process and distinguish reliable information online.</p>
              </div>

              <!-- Data Visualization -->
              <div class="border-t border-gray-100 pt-4">
                <h4 class="font-bold text-gray-800 mb-3 text-sm">📊 Data Profile</h4>
                <div class="grid grid-cols-2 gap-3 mb-4">
                  <DataStatCard :value="88" label="Want Timeline in Game" variant="blue" subtitle="of Year 2" />
                  <DataStatCard :value="90" label="Accept 5-10min Learning" variant="green" subtitle="fragmented" />
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-gray-50 rounded-lg p-3">
                    <h5 class="text-xs font-medium text-gray-500 mb-2">Process Understanding</h5>
                    <PieChart :data="year2ProcessDetailData" donut :interactive="false" :show-center="false" :size="140" />
                  </div>
                  <div class="bg-gray-50 rounded-lg p-3">
                    <h5 class="text-xs font-medium text-gray-500 mb-2">Fragmented Learning</h5>
                    <PieChart :data="year2FragileData" donut :interactive="false" :show-center="false" :size="140" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Persona 2: Year 3 - Alex -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="h-32 bg-gradient-to-r from-orange-400 to-orange-600"></div>
            <div class="p-6">
              <div class="flex items-start gap-4 -mt-16 mb-4">
                <div class="w-20 h-20 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-3xl overflow-hidden flex-shrink-0">
                  <img src="/images/sp.jpg" alt="Alex Wang" class="w-full h-full object-cover">
                </div>
                <div class="pt-16">
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Sprint Year 3</span>
                </div>
              </div>
              
              <h3 class="text-xl font-bold text-gray-900 mb-1">Alex Wang</h3>
              <p class="text-gray-500 text-sm mb-5">Year 3 Student • n=50</p>

              <!-- Pain Points -->
              <div class="mb-5">
                <h4 class="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wide">Pain Points</h4>
                <ul class="space-y-1.5">
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <span class="text-red-500 mt-0.5">•</span>
                    <span>Struggling with essay writing <span class="text-red-600 font-semibold">(60%)</span></span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <span class="text-red-500 mt-0.5">•</span>
                    <span>Uncertain about school selection <span class="text-red-600 font-semibold">(52%)</span></span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <span class="text-red-500 mt-0.5">•</span>
                    <span>Nervous about interview preparation <span class="text-red-600 font-semibold">(40%)</span></span>
                  </li>
                </ul>
              </div>

              <!-- Info Cards Grid -->
              <div class="grid grid-cols-2 gap-3 mb-5">
                <div class="bg-orange-50 rounded-lg p-3 border border-orange-100">
                  <h5 class="text-xs font-bold text-orange-900 mb-1.5">Basic Information</h5>
                  <p class="text-xs text-gray-700">Age: 21</p>
                  <p class="text-xs text-gray-700">Gender: Male</p>
                  <p class="text-xs text-gray-700">Major: Engineering</p>
                  <p class="text-xs text-gray-700">Residence: Beijing</p>
                </div>
                <div class="bg-orange-50 rounded-lg p-3 border border-orange-100">
                  <h5 class="text-xs font-bold text-orange-900 mb-1.5">Current Situation</h5>
                  <p class="text-xs text-gray-700">GPA: 65+ (WES)</p>
                  <p class="text-xs text-gray-700">Project: Professional SURF</p>
                  <p class="text-xs text-gray-700">Internship: 2 at Internet companies</p>
                </div>
                <div class="bg-orange-50 rounded-lg p-3 border border-orange-100">
                  <h5 class="text-xs font-bold text-orange-900 mb-1.5">Personal Characteristics</h5>
                  <p class="text-xs text-gray-700">Hobbies: Sports, music</p>
                  <p class="text-xs text-gray-700">Social: WeChat, Zhihu, Douyin</p>
                  <p class="text-xs text-gray-700">Personality: Introverted, analytical</p>
                </div>
                <div class="bg-orange-50 rounded-lg p-3 border border-orange-100">
                  <h5 class="text-xs font-bold text-orange-900 mb-1.5">Objective</h5>
                  <p class="text-xs text-gray-700">Short: Improve GPA & skills</p>
                  <p class="text-xs text-gray-700">Long: Top 100 QS university</p>
                </div>
              </div>

              <!-- Requirements -->
              <div class="bg-gray-50 rounded-lg p-3 mb-5">
                <h5 class="text-xs font-bold text-gray-800 mb-1.5">Requirements</h5>
                <p class="text-xs text-gray-700">Hopes to improve writing skills, learn school matching strategies, and apply to ideal schools.</p>
              </div>

              <!-- Data Visualization -->
              <div class="border-t border-gray-100 pt-4">
                <h4 class="font-bold text-gray-800 mb-3 text-sm">📊 Data Profile</h4>
                <div class="grid grid-cols-2 gap-3 mb-4">
                  <DataStatCard :value="86" label="Want Strategy Guides" variant="orange" subtitle="unlock content" />
                  <DataStatCard :value="82" label="Willing to Try Game" variant="purple" subtitle="text adventure" />
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-gray-50 rounded-lg p-3">
                    <h5 class="text-xs font-medium text-gray-500 mb-2">Goal Clarity</h5>
                    <PieChart :data="year3GoalData" donut :interactive="false" :show-center="false" :size="140" />
                  </div>
                  <div class="bg-gray-50 rounded-lg p-3">
                    <h5 class="text-xs font-medium text-gray-500 mb-2">Unlock Content Wish</h5>
                    <PieChart :data="year3UnlockData" donut :interactive="false" :show-center="false" :size="140" />
                  </div>
                </div>
                <div class="mt-3 bg-gray-50 rounded-lg p-3">
                  <h5 class="text-xs font-medium text-gray-500 mb-2">Application Difficulties</h5>
                  <BarChart :data="year3DifficultyData" :horizontal="true" :interactive="false" :show-legend="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Persona Comparison -->
      <section id="persona-comparison" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">📊 Persona Comparison</h2>
        <p class="text-gray-600 mb-6">Key dimension comparison between Year 2 (Confused) and Year 3 (Sprint) students</p>
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <ComparisonChart 
              title="Goal Clarity Gap"
              subtitle="Have clear or general direction"
              :groups="goalComparisonData"
              note="Year 2 (n=40): 20% | Year 3 (n=50): 84%"
            />
            <ComparisonChart 
              title="Process Understanding Gap"
              subtitle="Score 1-2 (Little/No Understanding)"
              :groups="processComparisonData"
              note="Year 2 (n=40): 75% | Year 3 (n=50): 20%"
            />
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <h4 class="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Key Insights</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs flex-shrink-0">1</div>
                <div>
                  <p class="text-sm font-medium text-gray-800">Year 2 lacks direction</p>
                  <p class="text-xs text-gray-600">80% have no clear PG target vs only 16% of Year 3</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs flex-shrink-0">2</div>
                <div>
                  <p class="text-sm font-medium text-gray-800">Process knowledge gap shrinks</p>
                  <p class="text-xs text-gray-600">Year 2: 75% don't understand process → Year 3: only 20%</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs flex-shrink-0">3</div>
                <div>
                  <p class="text-sm font-medium text-gray-800">Both groups accept gamification</p>
                  <p class="text-xs text-gray-600">85% overall willingness to use game-based learning tools</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs flex-shrink-0">4</div>
                <div>
                  <p class="text-sm font-medium text-gray-800">Fragmented learning preferred</p>
                  <p class="text-xs text-gray-600">90% accept 5-10 min sessions; fits both personas' schedules</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Secondary Users -->
      <section id="secondary-users" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">👔 Secondary Users: Development Advisors</h2>
        <p class="text-gray-600 mb-6">
          Our secondary users are staff from the <strong>XJTLU Student Development Advisor Center</strong> who provide one-on-one and group guidance to students preparing for postgraduate applications.
        </p>

        <div class="grid md:grid-cols-3 gap-6 mb-6">
          <div class="p-5 bg-red-50 rounded-xl border border-red-100">
            <div class="text-2xl mb-3">🛠️</div>
            <h4 class="font-bold text-gray-900 mb-2">Burdened by Repetitive Q&A</h4>
            <p class="text-sm text-gray-700 leading-relaxed">
              Advisors currently spend a significant portion of their weekly hours answering the same foundational questions—application timelines, document checklists, and school selection basics—leaving limited time for personalized, high-value guidance on essays and interview strategy.
            </p>
          </div>

          <div class="p-5 bg-orange-50 rounded-xl border border-orange-100">
            <div class="text-2xl mb-3">📚</div>
            <h4 class="font-bold text-gray-900 mb-2">Lack of Centralized Strategy Repository</h4>
            <p class="text-sm text-gray-700 leading-relaxed">
              Core guidance materials such as school matching frameworks, personal statement templates, and interview tip sheets exist in scattered documents or individual advisors' notes. There is no unified, easily accessible repository that students can review independently before appointments.
            </p>
          </div>

          <div class="p-5 bg-purple-50 rounded-xl border border-purple-100">
            <div class="text-2xl mb-3">⚡</div>
            <h4 class="font-bold text-gray-900 mb-2">No Visibility into Student Progress</h4>
            <p class="text-sm text-gray-700 leading-relaxed">
              Advisors have no systematic way to track which students have mastered basic concepts and which are struggling with specific topics like recommendation letters or school selection. Guidance remains reactive—waiting for students to seek help—rather than proactive and data-informed.
            </p>
          </div>
        </div>

        <!-- Advisor Data Stats -->
        <div class="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h4 class="font-bold text-blue-900 mb-4">Advisor Needs: Data-Driven Evidence</h4>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h5 class="text-sm font-semibold text-gray-700 mb-3">Student-Side Pain Points</h5>
              <BarChart :data="studentPainData" horizontal :show-legend="false" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-blue-600">3.5h</div>
                <div class="text-xs text-gray-600">weekly on repetitive Q&A</div>
              </div>
              <div class="bg-white rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-orange-600">90%</div>
                <div class="text-xs text-gray-600">guidance is repetitive</div>
              </div>
              <div class="bg-white rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-green-600">30-40%</div>
                <div class="text-xs text-gray-600">expected efficiency boost</div>
              </div>
              <div class="bg-white rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-purple-600">100%</div>
                <div class="text-xs text-gray-600">advisors willing to recommend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Statistics -->
      <section id="key-statistics" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">📈 Key Statistics</h2>
        <div class="grid md:grid-cols-4 gap-4">
          <DataStatCard :value="80" label="Year 2 No Clear Target" variant="red" />
          <DataStatCard :value="60" label="Year 3 Essay Difficulty" variant="blue" />
          <DataStatCard :value="85" label="Willing to Try Game" variant="green" />
          <DataStatCard :value="90" label="Accept 5-10 min Learning" variant="purple" />
        </div>
      </section>

      <!-- Gamification Readiness -->
      <section id="gamification-readiness" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">🎮 Gamification Readiness</h2>
        <p class="text-gray-600 mb-6">Student attitudes toward game-based learning tools (n=90)</p>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-50 rounded-xl p-5">
            <h4 class="font-bold text-gray-800 mb-3 text-sm">Game-Based Learning Acceptance</h4>
            <p class="text-xs text-gray-500 mb-3">Would you try gamified PG prep tools?</p>
            <BarChart :data="gamificationAttitudeData" horizontal :show-legend="false" />
          </div>
          <div class="bg-gray-50 rounded-xl p-5">
            <h4 class="font-bold text-gray-800 mb-3 text-sm">Text Adventure Acceptance</h4>
            <p class="text-xs text-gray-500 mb-3">Acceptance of text-based quiz/story games</p>
            <BarChart :data="textAdventureAcceptanceData" horizontal :show-legend="false" />
          </div>
          <div class="bg-gray-50 rounded-xl p-5">
            <h4 class="font-bold text-gray-800 mb-3 text-sm">Progression + Unlock Mechanism</h4>
            <p class="text-xs text-gray-500 mb-3">Attitude toward points + content unlocking</p>
            <BarChart :data="progressionSystemData" horizontal :show-legend="false" />
          </div>
        </div>
        
        <div class="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-5 border border-green-100">
          <div class="flex items-center gap-3">
            <span class="text-2xl">💡</span>
            <p class="text-sm text-gray-700"><strong>Key Finding:</strong> <span class="text-green-700 font-semibold">85%</span> of students are willing to try gamified tools, with <span class="text-blue-700 font-semibold">94%</span> accepting text-based formats. The progression/unlock mechanism also enjoys <span class="text-purple-700 font-semibold">90%</span> positive reception, validating our core game design direction.</p>
          </div>
        </div>
      </section>

      <!-- Core Pain Points -->
      <section id="core-pain-points" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">😰 Core Pain Points</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 class="font-bold text-gray-800 mb-4">Current Support Channel Pain Points</h3>
            <p class="text-xs text-gray-500 mb-4">What problems exist in current PG support channels? (Multiple choice, n=90)</p>
            <BarChart :data="supportPainPointsData" horizontal :show-legend="false" />
          </div>
          <div class="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
            <h3 class="font-bold text-gray-800 mb-4">Summary of Core Pain Points</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3 bg-white/70 rounded-lg p-3">
                <span class="text-red-500 text-xl">•</span>
                <p class="text-gray-700 text-sm">Unstructured information from scattered sources</p>
              </div>
              <div class="flex items-start gap-3 bg-white/70 rounded-lg p-3">
                <span class="text-red-500 text-xl">•</span>
                <p class="text-gray-700 text-sm">Dull learning formats lacking engagement</p>
              </div>
              <div class="flex items-start gap-3 bg-white/70 rounded-lg p-3">
                <span class="text-red-500 text-xl">•</span>
                <p class="text-gray-700 text-sm">Unclear personal positioning and goals</p>
              </div>
              <div class="flex items-start gap-3 bg-white/70 rounded-lg p-3">
                <span class="text-red-500 text-xl">•</span>
                <p class="text-gray-700 text-sm">Insufficient progress management tools</p>
              </div>
              <div class="flex items-start gap-3 bg-white/70 rounded-lg p-3">
                <span class="text-red-500 text-xl">•</span>
                <p class="text-gray-700 text-sm">Limited reference cases for XJTLU students</p>
              </div>
              <div class="flex items-start gap-3 bg-white/70 rounded-lg p-3">
                <span class="text-red-500 text-xl">•</span>
                <p class="text-gray-700 text-sm">Advisors lack lightweight auxiliary tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Information Sources -->
      <section id="information-sources" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">📱 Information Sources</h2>
        <p class="text-gray-600 mb-6">Where do students currently get PG application information? (Multiple choice, n=90)</p>
        
        <div class="grid md:grid-cols-2 gap-6 items-center">
          <BarChart :data="infoSourceData" horizontal :show-legend="false" />
          <div class="bg-gray-50 rounded-xl p-5">
            <h4 class="font-bold text-gray-800 mb-3 text-sm">Why This Matters</h4>
            <p class="text-sm text-gray-700 leading-relaxed mb-3">
              <strong>78%</strong> rely on seniors' experiences and <strong>72%</strong> use social media (Xiaohongshu, Zhihu, Bilibili). This explains the "frustrating loop" in the user journey: students turn to unvetted, scattered sources first.
            </p>
            <p class="text-sm text-gray-700 leading-relaxed">
              Only <strong>32%</strong> attend campus workshops—primarily due to schedule conflicts—while <strong>45%</strong> seek advisor help, creating heavy repetitive workloads for advisors.
            </p>
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
        
        <!-- Feature Demand Data -->
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-white rounded-xl p-4 border border-gray-200">
            <h4 class="text-sm font-bold text-gray-800 mb-2">Device Preference</h4>
            <BarChart :data="devicePreferenceData" horizontal :show-legend="false" />
          </div>
          <div class="bg-white rounded-xl p-4 border border-gray-200">
            <h4 class="text-sm font-bold text-gray-800 mb-2">Task Format Preference</h4>
            <BarChart :data="taskFormatData" horizontal :show-legend="false" />
          </div>
        </div>
        
        <div class="space-y-6">
          <div class="bg-white rounded-xl p-5 border border-blue-200">
            <div class="flex items-start gap-3">
              <span class="text-2xl">1️⃣</span>
              <div>
                <h3 class="font-bold text-gray-900 mb-2">Fragmented Narrative Challenge</h3>
                <p class="text-sm text-gray-700">
                  Each of the five application stages (School Selection → Documents → Essay → Application → Interview) must be playable as a <strong>self-contained 5–10 minute text-based narrative episode</strong>, combining quiz questions with branching story decisions. This directly addresses the <strong>fragmentation gap</strong> identified in Huang et al. (2020) and Plass et al. (2015)—transforming passive information consumption into active, emotionally engaging micro-learning that fits between classes and commutes.
                </p>
                <div class="mt-2 flex gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">📊 90% accept 5-10min learning</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">📊 68% prefer mobile</span>
                </div>
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
                <div class="mt-2 flex gap-2">
                  <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">📊 90% like progression/unlock</span>
                  <span class="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">📊 52% need progress tracking</span>
                </div>
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
                <div class="mt-2 flex gap-2">
                  <span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">📊 67% say info is scattered</span>
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">📊 30-40% efficiency boost</span>
                </div>
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
import DataStatCard from '../components/DataStatCard.vue'
import PieChart from '../components/PieChart.vue'
import BarChart from '../components/BarChart.vue'
import ComparisonChart from '../components/ComparisonChart.vue'

const tocItems = [
  { id: 'research-subjects', title: '🔍 Research Subjects' },
  { id: 'stakeholders', title: '🏢 Stakeholders' },
  { id: 'primary-users', title: '👤 Primary Users' },
  { id: 'persona-comparison', title: '📊 Persona Comparison' },
  { id: 'secondary-users', title: '👔 Secondary Users' },
  { id: 'key-statistics', title: '📈 Key Statistics' },
  { id: 'gamification-readiness', title: '🎮 Gamification Readiness' },
  { id: 'core-pain-points', title: '😰 Core Pain Points' },
  { id: 'information-sources', title: '📱 Information Sources' },
  { id: 'current-user-journey', title: '🗺️ Current User Journey' },
  { id: 'break-loop', title: '🎯 How We Break the Loop' },
  { id: 'must-have-features', title: '🎮 Must-Have Features' }
]

// Research sample distribution
const researchData = [
  { label: 'Year 2 Students', value: 40, color: '#3b82f6' },
  { label: 'Year 3 Students', value: 50, color: '#f97316' }
]

// Year 2: Process understanding breakdown (75% total = 40% + 35%)
const year2ProcessDetailData = [
  { label: 'No Understanding', value: 40, color: '#ef4444' },
  { label: 'Little Understanding', value: 35, color: '#f97316' },
  { label: 'Some Understanding', value: 25, color: '#22c55e' }
]

// Year 2: Fragmented learning preference
const year2FragileData = [
  { label: 'Within 5 min', value: 30, color: '#3b82f6' },
  { label: '5-10 min', value: 60, color: '#22c55e' },
  { label: '10+ min', value: 10, color: '#64748b' }
]

// Year 3: Goal clarity distribution
const year3GoalData = [
  { label: 'Clear Goal', value: 30, color: '#22c55e' },
  { label: 'General Direction', value: 54, color: '#3b82f6' },
  { label: 'No Target', value: 16, color: '#ef4444' }
]

// Year 3: Content unlock preferences
const year3UnlockData = [
  { label: 'Strategy Guides', value: 65, color: '#f97316' },
  { label: 'Templates', value: 21, color: '#8b5cf6' },
  { label: 'Other', value: 14, color: '#64748b' }
]

// Year 3: Application difficulties
const year3DifficultyData = [
  { label: 'Essay Writing', value: 60, color: '#3b82f6' },
  { label: 'School Selection', value: 52, color: '#f97316' },
  { label: 'Interview Prep', value: 40, color: '#8b5cf6' }
]

// Persona comparison: Goal clarity
const goalComparisonData = [
  {
    label: 'Year 2',
    color: '#3b82f6',
    items: [
      { label: 'Has Direction', value: 20 }
    ]
  },
  {
    label: 'Year 3',
    color: '#f97316',
    items: [
      { label: 'Has Direction', value: 84 }
    ]
  }
]

// Persona comparison: Process understanding
const processComparisonData = [
  {
    label: 'Year 2',
    color: '#3b82f6',
    items: [
      { label: 'Little/No Understanding', value: 75 }
    ]
  },
  {
    label: 'Year 3',
    color: '#f97316',
    items: [
      { label: 'Little/No Understanding', value: 20 }
    ]
  }
]

// Student-side pain points for advisor section
const studentPainData = [
  { label: 'Info scattered', value: 67, color: '#3b82f6' },
  { label: 'Rely on advisors', value: 53, color: '#f97316' }
]

// Gamification readiness: Game-based learning acceptance
const gamificationAttitudeData = [
  { label: 'Very willing', value: 35, color: '#22c55e' },
  { label: 'Willing to try', value: 50, color: '#3b82f6' },
  { label: 'Hesitant', value: 12, color: '#f97316' },
  { label: 'Unwilling', value: 3, color: '#ef4444' }
]

// Text adventure acceptance
const textAdventureAcceptanceData = [
  { label: 'Very accepting', value: 42, color: '#22c55e' },
  { label: 'Basically accept', value: 52, color: '#3b82f6' },
  { label: 'Not accepting', value: 6, color: '#ef4444' }
]

// Progression + unlock mechanism
const progressionSystemData = [
  { label: 'Really like', value: 48, color: '#8b5cf6' },
  { label: 'Indifferent', value: 42, color: '#64748b' },
  { label: 'Dislike', value: 10, color: '#ef4444' }
]

// Core pain points: Current support channel issues
const supportPainPointsData = [
  { label: 'Info scattered, not systematic', value: 67, color: '#ef4444' },
  { label: 'Fixed time, conflicts', value: 58, color: '#f97316' },
  { label: 'Content dull, no interaction', value: 52, color: '#eab308' },
  { label: 'Low relevance to goals', value: 48, color: '#8b5cf6' },
  { label: 'Format too limited', value: 41, color: '#3b82f6' },
  { label: 'Slow feedback', value: 35, color: '#64748b' }
]

// Information sources
const infoSourceData = [
  { label: 'Seniors/alumni', value: 78, color: '#22c55e' },
  { label: 'Social media (XHS/Zhihu)', value: 72, color: '#ef4444' },
  { label: 'Advisor guidance', value: 45, color: '#3b82f6' },
  { label: 'Campus workshops', value: 32, color: '#8b5cf6' },
  { label: 'Commercial agencies', value: 28, color: '#f97316' },
  { label: 'Official websites', value: 15, color: '#64748b' }
]

// Device preference
const devicePreferenceData = [
  { label: 'Mobile', value: 68, color: '#22c55e' },
  { label: 'Dual sync', value: 45, color: '#3b82f6' },
  { label: 'PC', value: 25, color: '#64748b' }
]

// Task format preference
const taskFormatData = [
  { label: 'Story decisions', value: 62, color: '#f97316' },
  { label: 'Mini exercises', value: 58, color: '#8b5cf6' },
  { label: 'Quiz questions', value: 55, color: '#3b82f6' },
  { label: 'Daily check-in', value: 48, color: '#22c55e' }
]
</script>

<style scoped>
.target-users-page { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>
