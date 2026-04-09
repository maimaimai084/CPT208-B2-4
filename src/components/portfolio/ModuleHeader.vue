<!--
  ModuleHeader.vue - Shared header for all portfolio module pages
  模块页面统一头部组件
-->

<template>
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-5xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Back + Title -->
        <div class="flex items-center gap-4">
          <router-link to="/" 
                       class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
            ←
          </router-link>
          <div>
            <h1 class="text-xl font-bold text-gray-900">{{ title }}</h1>
            <p class="text-sm text-gray-500">{{ subtitle }}</p>
          </div>
        </div>

        <!-- Navigation Menu -->
        <div class="hidden md:flex items-center gap-2">
          <router-link v-for="item in navItems" :key="item.path"
                       :to="item.path"
                       :class="[
                         'px-3 py-1.5 rounded-lg text-sm transition-colors',
                         $route.path === item.path 
                           ? 'bg-blue-100 text-blue-700 font-medium' 
                           : 'text-gray-600 hover:bg-gray-100'
                       ]">
            {{ item.label }}
          </router-link>
        </div>

        <!-- Demo Button -->
        <router-link to="/demo"
                     class="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg text-sm font-medium transition-colors">
          ▶ Demo
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})

const navItems = [
  { path: '/intro', label: 'Intro' },
  { path: '/users', label: 'Users' },
  { path: '/process', label: 'Process' },
  { path: '/prototype', label: 'Prototype' },
  { path: '/evaluation', label: 'Eval' },
  { path: '/conclusion', label: 'Conclusion' }
]
</script>
