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
        <div class="w-24 h-24 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden border border-gray-200">
          <img src="/images/logo.png" alt="MasterApply Quest" class="w-16 h-16">
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
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <!-- Team Member 1: Yeyun Wan -->
          <div class="text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
              <img src="/images/team/wyy.jpg" alt="Yeyun Wan" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-gray-900">Yeyun Wan</h3>
            <p class="text-sm text-gray-500">Technical Lead</p>
          </div>

          <!-- Team Member 2: Ziying Ren -->
          <div class="text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
              <img src="/images/team/rzy.jpg" alt="Ziying Ren" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-gray-900">Ziying Ren</h3>
            <p class="text-sm text-gray-500">User Research & Video</p>
          </div>

          <!-- Team Member 3: Yueyue Wang -->
          <div class="text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
              <img src="/images/team/wyy2.jpg" alt="Yueyue Wang" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-gray-900">Yueyue Wang</h3>
            <p class="text-sm text-gray-500">Content Research & Video</p>
          </div>

          <!-- Team Member 4: Ruoxuan Mai -->
          <div class="text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
              <img src="/images/team/mrx.jpg" alt="Ruoxuan Mai" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-gray-900">Ruoxuan Mai</h3>
            <p class="text-sm text-gray-500">Design Methodology & Video</p>
          </div>
        </div>
        
        <!-- Individual Contributions -->
        <div class="bg-gray-50 rounded-2xl p-8 mb-8">
          <h3 class="text-lg font-bold text-gray-900 mb-4 text-center">Individual Contributions</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="bg-gray-200">
                  <th class="p-3 text-left font-bold border">Member</th>
                  <th class="p-3 text-left font-bold border">Role</th>
                  <th class="p-3 text-left font-bold border">Key Contributions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-3 border font-medium">Yeyun Wan</td>
                  <td class="p-3 border">Technical Lead</td>
                  <td class="p-3 border">Portfolio website development (Vue 3 + Tailwind), Game Demo frontend architecture, interactive components (RoleSelect, QuizInterface, Dashboard, AdvisorPanel), system deployment on GitHub Pages</td>
                </tr>
                <tr>
                  <td class="p-3 border font-medium">Ziying Ren</td>
                  <td class="p-3 border">User Research & Video</td>
                  <td class="p-3 border">User survey design and distribution (n=90), persona creation (Emily & Alex), user testing coordination, 2-min project video production</td>
                </tr>
                <tr>
                  <td class="p-3 border font-medium">Yueyue Wang</td>
                  <td class="p-3 border">Content Research & Video</td>
                  <td class="p-3 border">Academic literature review (4 papers), commercial product analysis (4 products), research gap synthesis, 2-min project video production</td>
                </tr>
                <tr>
                  <td class="p-3 border font-medium">Ruoxuan Mai</td>
                  <td class="p-3 border">Design Methodology & Video</td>
                  <td class="p-3 border">Crazy 8s brainstorming facilitation, design process documentation, design decisions (game format / dual-value / story trigger), 2-min project video production</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- GitHub Link -->
        <div class="text-center">
          <a href="https://github.com/maimaimai084/CPT208-B2-4"
             target="_blank"
             class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
            </svg>
            View Source Code
          </a>
          <p class="text-sm text-gray-500 mt-3">If you'd like to see the source code, click the link above.</p>
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
