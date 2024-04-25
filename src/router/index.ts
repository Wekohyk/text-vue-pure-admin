import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Login/Login.vue'),
      meta: { title: 'Login' },
    },
    {
      path: '/home',
      component: () => import('@/views/Home/Home.vue'),
    },
  ],
});

export default router;
