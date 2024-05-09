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
      redirect: '/layout',
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/layout/appMain.vue'),
      children: [
        {
          path: '',
          name: 'home',
          meta: {
            isShow: true,
            title: '首页',
          },
          component: () => import('@/views/Home/Home.vue'),
        },
        {
          path: '/components',
          name: 'components',
          meta: {
            isShow: true,
            title: '组件',
          },
          component: () => import('@/views/Components/index.vue'),
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
