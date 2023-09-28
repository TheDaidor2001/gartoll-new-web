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
    {
      path: '/noticias',
      name: 'noticias',
      component: () => import('../views/NoticiasView.vue')
    },
    {
      path: '/noticias/:id',
      name: 'noticia',
      component: () => import('../views/NoticiaView.vue')
    },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFoundView.vue')},
  ]
})

export default router
