import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStoreHook } from '@/stores';
import { $t } from '@/lang/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/Login.vue'),
    },
    {
      path: '/',
      redirect: '/dashboard',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard/index.vue'),
          meta: {
            isShow: true,
            title: $t('dashboard.dashboard'), // 仪表盘
          },
        },
        {
          path: 'components',
          name: 'Components',
          component: () => import('@/views/Components/index.vue'),
          meta: {
            isShow: true,
            title: $t('dashboard.components'), // 组件
          },
        },
      ],
    },
  ],
});

// 路由前置守卫 --> 访问权限控制
router.beforeEach(to => {
  // 跳转前开启进度条
  NProgress.start();
  // 不需要登录的页面，白名单
  const wihteList = ['/login', '/login/callback'];
  // 如果没有登录且不在白名单内，去登录
  if (!useUserStoreHook().token && !wihteList.includes(to.path))
    return '/login';
  // 否则不做任何处理
});

// 路由后置首位
router.afterEach(() => {
  document.title = `Weko的后台管理系统`;
  // 结束前关闭进度条
  NProgress.done();
});

export default router;
