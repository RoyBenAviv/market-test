import { createRouter, createWebHistory } from 'vue-router'
import addMarketer from '../cmps/add-marketer.vue'
import appDashboard from '../cmps/app-dashboard.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: addMarketer
    },
    {
      path: '/dashobard',
      name: 'dashboard',
      component: appDashboard
    }

  ]
})

export default router
