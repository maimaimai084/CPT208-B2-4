<!--
  Home.vue - Portfolio Home Page
  项目入口页面，展示项目概览和模块导航
-->

<template>
  <div class="home-page min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <!-- Hero Section -->
    <section class="relative py-20 px-4">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Logo/Icon -->
        <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
          🎓
        </div>
        
        <!-- Title -->
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          MasterApply Quest
        </h1>
        
        <!-- Subtitle -->
        <p class="text-xl text-gray-600 mb-2">
          A Text-Based Game for Postgraduate Application
        </p>
        <p class="text-lg text-gray-500 mb-8">
          CPT208 Human-Centric Computing | Group B2-4
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/intro" 
                       class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-md">
            Explore Portfolio
          </router-link>
          <router-link to="/demo"
                       class="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-xl font-medium transition-colors shadow-md">
            ▶ Play Demo
          </router-link>
        </div>
      </div>
    </section>

    <!-- Module Navigation Cards -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-gray-900 text-center mb-12">
          Project Modules
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Module 1: Introduction -->
          <router-link to="/intro" 
                       class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              📋
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Introduction</h3>
            <p class="text-gray-600 text-sm">Project background, problem statement, and core research questions</p>
          </router-link>

          <!-- Module 2: Target Users -->
          <router-link to="/users"
                       class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              👥
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Target Users</h3>
            <p class="text-gray-600 text-sm">User personas, stakeholders, and data-driven insights</p>
          </router-link>

          <!-- Module 3: Design Process -->
          <router-link to="/process"
                       class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🎨
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Design Process</h3>
            <p class="text-gray-600 text-sm">Methodology, Crazy 8s sketches, and design decisions</p>
          </router-link>

          <!-- Module 4: Prototype -->
          <router-link to="/prototype"
                       class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all">
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              📱
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Prototype</h3>
            <p class="text-gray-600 text-sm">Low-fi to high-fi evolution, system architecture, and core features</p>
          </router-link>

          <!-- Module 5: Evaluation -->
          <router-link to="/evaluation"
                       class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all">
            <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              📊
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Evaluation</h3>
            <p class="text-gray-600 text-sm">User testing results, quantitative data, and qualitative feedback</p>
          </router-link>

          <!-- Module 6: Conclusion -->
          <router-link to="/conclusion"
                       class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all">
            <div class="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              ✨
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Conclusion</h3>
            <p class="text-gray-600 text-sm">Project outcomes, future work, and references</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Team Members -->
    <section class="py-16 px-4 bg-white">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Team Member 1: Ruoxuan Mai -->
          <div class="text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
              <img src="/images/mrx.jpg" alt="Ruoxuan Mai" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-gray-900">Ruoxuan Mai</h3>
          </div>

          <!-- Team Member 2: Yueyue Wang -->
          <div class="text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
              <img src="/images/wyy2.jpg" alt="Yueyue Wang" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-gray-900">Yueyue Wang</h3>
          </div>

          <!-- Team Member 3: Yeyun Wan -->
          <div class="text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
              <img src="/images/wyy.jpg" alt="Yeyun Wan" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-gray-900">Yeyun Wan</h3>
          </div>

          <!-- Team Member 4: Ziying Ren -->
          <div class="text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
              <img src="/images/rzy.jpg" alt="Ziying Ren" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-gray-900">Ziying Ren</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-gray-200">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-gray-500 text-sm">
          CPT208 Human-Centric Computing | XJTLU | 2026
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
/**
 * Home Page - Portfolio Entry
 * 项目首页，展示概览和导航
 */
</script>

<style scoped>
.home-page {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
