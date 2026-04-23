<!--
  Navigation.vue - Top navigation component
  顶部导航组件
-->

<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <img src="/images/logo.png" alt="MasterApply Quest" class="h-8 w-8">
          <span class="font-bold text-gray-900">MasterApply Quest</span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-6">
          <!-- Portfolio Dropdown Trigger -->
          <div class="relative" @mouseenter="showPortfolio = true" @mouseleave="showPortfolio = false">
            <button class="flex items-center gap-1 text-gray-600 hover:text-gray-900 py-2">
              Portfolio
              <span class="text-xs">▼</span>
            </button>
            
            <!-- Dropdown -->
            <div v-show="showPortfolio" 
                 class="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
              <router-link v-for="item in portfolioItems" :key="item.path"
                           :to="item.path"
                           class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                           :class="{ 'bg-blue-50 text-blue-700': $route.path === item.path }">
                {{ item.label }}
              </router-link>
            </div>
          </div>

          <!-- Demo Button -->
          <router-link to="/demo"
                       class="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg text-sm font-medium transition-colors">
            ▶ Play Demo
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="showMobile = !showMobile" class="md:hidden p-2">
          ☰
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-show="showMobile" class="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
        <div class="space-y-2">
          <p class="text-xs text-gray-400 uppercase font-medium px-2">Portfolio</p>
          <router-link v-for="item in portfolioItems" :key="item.path"
                       :to="item.path"
                       class="block px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                       :class="{ 'bg-blue-50 text-blue-700': $route.path === item.path }"
                       @click="showMobile = false">
            {{ item.label }}
          </router-link>
          <div class="pt-2 border-t border-gray-100">
            <router-link to="/demo"
                         class="block px-2 py-2 text-orange-600 font-medium"
                         @click="showMobile = false">
              ▶ Play Demo
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const showPortfolio = ref(false)
const showMobile = ref(false)

const portfolioItems = [
  { path: '/intro', label: 'Introduction' },
  { path: '/users', label: 'Target Users' },
  { path: '/process', label: 'Design Process' },
  { path: '/prototype', label: 'Prototype' },
  { path: '/evaluation', label: 'Evaluation' },
  { path: '/conclusion', label: 'Conclusion' }
]
</script>
