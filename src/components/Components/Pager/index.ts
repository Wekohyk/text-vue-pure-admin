import Pager from './index.vue';
import { App } from 'vue';

// 为组件提供 install 方法，供组件对外按需引入
Pager.install = (app: App) => {
  if (!Pager.name) return;
  app.component(Pager.name, Pager);
};

export default Pager;
