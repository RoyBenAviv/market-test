import { createRouter, createWebHashHistory } from 'vue-router'
import taskApp from '../views/task-app.vue'
import appDashboard from '../views/app-dashboard.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: taskApp
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: appDashboard
    }
  ]
})

export default router
