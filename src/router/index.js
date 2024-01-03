import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/HomePage.vue'
import CountryPage from '@/views/CountryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || 'http://localhost:5173'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/:code',
      name: 'country',
      component: CountryPage
    }
  ]
})

export default router
