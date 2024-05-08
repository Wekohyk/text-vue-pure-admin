import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStoreHook } from '@/stores';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/Login.vue'),
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/appMain.vue'),
      redirect: '/layout',
      children: [
        {
          path: '/layout',
          meta: {
            isShow: true,
          },
          component: () => import('@/views/Home/Home.vue'),
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
