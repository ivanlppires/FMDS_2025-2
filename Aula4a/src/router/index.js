import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

router.addRoute({
  path: '/',
  name: 'Home',
  component: () => import('../pages/Home.vue'),
})

router.addRoute({
  path: '/clientes',
  name: 'Clientes',
  component: () => import('../pages/Clientes.vue'),
})

router.addRoute({
  path: '/produtos',
  name: 'Produtos',
  component: () => import('../pages/Produtos.vue'),
})

export default router
