/**
 * main.js - Application Entry Point (Updated)
 * 
 * 修改说明：
 * 1. 添加 router 导入
 * 2. 在 app.use() 中使用 router
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
