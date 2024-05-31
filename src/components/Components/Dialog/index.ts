import Dialog from './index.vue';
import { App } from 'vue';

// 为组件提供 install 方法，供组件对外按需引入
Dialog.install = (app: App) => {
  if (!Dialog.name) return;
  app.component(Dialog.name, Dialog);
};

export default Dialog;
