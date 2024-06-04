import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStoreHook } from '@/stores';
import { routers } from './modules/routers';

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
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
  // 如果访问的路由不存在, 则跳转到404页面
  if (to.matched.length === 0) {
    router.push('/404');
  }
  // 否则不做任何处理
});

// 路由后置首位
router.afterEach(() => {
  document.title = `Weko的后台管理系统`;
  // 结束前关闭进度条
  NProgress.done();
});

export default router;
