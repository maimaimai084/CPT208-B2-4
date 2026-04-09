<!--
  TargetUsers.vue - Module 3: Target Users & Stakeholders
  展示Personas和用户数据
-->

<template>
  <div class="target-users-page min-h-screen bg-gray-50">
    <ModuleHeader 
      title="Target Users & Stakeholders"
      subtitle="Understanding who we design for"
      icon="👥"
    />

    <main class="max-w-5xl mx-auto px-4 py-8 pb-20">
      
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
          <!-- Persona 1 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="h-32 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div class="p-6">
              <div class="w-20 h-20 bg-gray-200 rounded-full -mt-16 mb-4 border-4 border-white flex items-center justify-center text-3xl">👤</div>
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
            </div>
          </div>

          <!-- Persona 2 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="h-32 bg-gradient-to-r from-orange-400 to-orange-600"></div>
            <div class="p-6">
              <div class="w-20 h-20 bg-gray-200 rounded-full -mt-16 mb-4 border-4 border-white flex items-center justify-center text-3xl">👤</div>
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
                    <li>• Uncertain about school selection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Statistics -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">📊 Key Statistics</h2>
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
