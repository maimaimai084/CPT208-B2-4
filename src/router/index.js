/**
 * Vue Router Configuration
 * CPT208 B2 Portfolio Website Routes
 */

import { createRouter, createWebHashHistory } from 'vue-router'

// Portfolio Pages
import Home from '../views/Home.vue'
import Introduction from '../views/Introduction.vue'
import TargetUsers from '../views/TargetUsers.vue'
import DesignProcess from '../views/DesignProcess.vue'
import Prototype from '../components/PrototypeShowcase.vue' // 现有模块5
import Evaluation from '../views/Evaluation.vue'
import Conclusion from '../views/Conclusion.vue'

// Game Demo
import GameDemo from '../views/GameDemo.vue'

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'MasterApply Quest - Portfolio' }
  },
  
  // Module 2: Introduction & Problem
  {
    path: '/intro',
    name: 'Introduction',
    component: Introduction,
    meta: { title: 'Introduction & Problem | MasterApply Quest' }
  },
  
  // Module 3: Target Users
  {
    path: '/users',
    name: 'TargetUsers',
    component: TargetUsers,
    meta: { title: 'Target Users | MasterApply Quest' }
  },
  
  // Module 4: Design Process
  {
    path: '/process',
    name: 'DesignProcess',
    component: DesignProcess,
    meta: { title: 'Design Process | MasterApply Quest' }
  },
  
  // Module 5: Prototype (Existing)
  {
    path: '/prototype',
    name: 'Prototype',
    component: Prototype,
    meta: { title: 'Prototype | MasterApply Quest' }
  },
  
  // Module 6: Evaluation
  {
    path: '/evaluation',
    name: 'Evaluation',
    component: Evaluation,
    meta: { title: 'Evaluation | MasterApply Quest' }
  },
  
  // Module 7: Conclusion
  {
    path: '/conclusion',
    name: 'Conclusion',
    component: Conclusion,
    meta: { title: 'Conclusion | MasterApply Quest' }
  },
  
  // Game Demo
  {
    path: '/demo',
    name: 'GameDemo',
    component: GameDemo,
    meta: { title: 'Live Demo | MasterApply Quest' }
  },
  
  // Redirect unknown paths to Home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating
    return { top: 0 }
  }
})

// Update page title
router.beforeEach((to) => {
  document.title = to.meta.title || 'MasterApply Quest'
})

export default router
