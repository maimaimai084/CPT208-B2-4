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
      
      <!-- Research Subjects Overview -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
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
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🏢 Stakeholders</h2>
        <div class="flex flex-wrap gap-4">
          <div class="px-6 py-3 bg-blue-50 rounded-xl border border-blue-100">
            <span class="font-medium text-blue-900">XJTLU SAT School</span>
          </div>
          <div class="px-6 py-3 bg-green-50 rounded-xl border border-green-100">
            <span class="font-medium text-green-900">Student Development Advisor Center</span>
          </div>
        </div>
      </section>

      <!-- Personas -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">👤 Primary Users</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Persona 1: Emily Chen -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="h-32 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div class="p-6">
              <div class="w-20 h-20 bg-gray-200 rounded-full -mt-16 mb-4 border-4 border-white flex items-center justify-center text-3xl overflow-hidden">
                <img src="/images/docx/module3_users/image_001.png" alt="Emily Chen" class="w-full h-full object-cover">
              </div>
              <div class="mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Confused Year 2</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Emily Chen</h3>
              <p class="text-gray-500 text-sm mb-4">Year 2 Student | Economics | Jiangsu</p>
              <div class="space-y-3">
                <div>
                  <h4 class="font-medium text-gray-700 mb-1">Pain Points</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Unclear about application timeline</li>
                    <li>• Information overload from various sources</li>
                    <li>• 75% have limited understanding of application process</li>
                    <li>• 85% cannot attend offline lectures due to schedule conflicts</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium text-gray-700 mb-1">Needs</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• 90% accept 5-10 min fragmented learning sessions</li>
                    <li>• 88% want application timeline/stage breakdown</li>
                    <li>• Systematic yet fragmented knowledge</li>
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
                <img src="/images/docx/module3_users/image_003.png" alt="Alex Wang" class="w-full h-full object-cover">
              </div>
              <div class="mb-4">
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Sprint Year 3</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Alex Wang</h3>
              <p class="text-gray-500 text-sm mb-4">Year 3 Student | Engineering | Beijing</p>
              <div class="space-y-3">
                <div>
                  <h4 class="font-medium text-gray-700 mb-1">Pain Points</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Struggling with essay writing (60%)</li>
                    <li>• Uncertain about school selection (52%)</li>
                    <li>• Interview preparation challenges (40%)</li>
                    <li>• Details unclear despite having goals</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium text-gray-700 mb-1">Needs</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• 86% want practical guides and templates</li>
                    <li>• 82% willing to try text-based game for knowledge</li>
                    <li>• Personalized school/major recommendations</li>
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
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">📊 Understanding of Postgraduate Application Process</h2>
        <p class="text-gray-600 mb-4">Comparison between Year 2 (Sophomore) and Year 3 (Junior) students</p>
        <div class="flex justify-center">
          <img src="/images/docx/module3_users/image_005.png" alt="Understanding Differences Chart" class="max-w-full rounded-lg border border-gray-100">
        </div>
      </section>

      <!-- Secondary Users -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">👔 Secondary Users</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div class="text-2xl mb-2">🛠️</div>
            <h4 class="font-bold text-gray-900 mb-1">Lightweight Tools</h4>
            <p class="text-sm text-gray-600">Reduce repetitive Q&A. Advisors spend 3.5h/week on basic questions.</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div class="text-2xl mb-2">📚</div>
            <h4 class="font-bold text-gray-900 mb-1">Strategy Repository</h4>
            <p class="text-sm text-gray-600">Deposit core guides: school matching, essay writing, interview tips.</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div class="text-2xl mb-2">⚡</div>
            <h4 class="font-bold text-gray-900 mb-1">Efficiency Boost</h4>
            <p class="text-sm text-gray-600">Game-based learning can improve guidance efficiency by 30-40%.</p>
          </div>
        </div>
      </section>

      <!-- Statistics -->
      <section class="mb-12">
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
      <section class="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
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

    </main>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/portfolio/ModuleHeader.vue'
</script>

<style scoped>
.target-users-page { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>
