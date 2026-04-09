/**
 * App.vue - Main Application Component (Updated for Portfolio)
 * 
 * 修改说明：
 * 1. 添加 Navigation 组件
 * 2. 使用 router-view 替代原来的组件切换
 * 3. 保留原有游戏组件在 GameDemo 页面使用
 */

<template>
  <div class="app">
    <!-- 全局导航（Portfolio页面显示） -->
    <Navigation v-if="showNav" />
    
    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'

const route = useRoute()

// 在游戏Demo页面可选隐藏导航
const showNav = computed(() => {
  return route.name !== 'GameDemo'
})
</script>

<style>
/* 全局样式 */
.app {
  min-height: 100vh;
}
</style>
