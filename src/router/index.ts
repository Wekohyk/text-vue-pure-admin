import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Login/Login.vue'),
      meta: { title: 'Login' },
    },
  ],
});

export default router;
