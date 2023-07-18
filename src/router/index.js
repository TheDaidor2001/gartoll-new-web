import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/ServiciosView.vue')
    },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFoundView.vue')},
  ]
})

export default router
