import { createRouter, createWebHistory } from 'vue-router'

import BullsAndCows from '@/components/BullsAndCows.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BullsAndCows
    }
  ]
})

export default router
