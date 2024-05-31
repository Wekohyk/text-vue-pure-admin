import Dropdown from './index.vue';
import { App } from 'vue';

// 为组件提供 install 方法，供组件对外按需引入
Dropdown.install = (app: App) => {
  if (!Dropdown.name) return;
  app.component(Dropdown.name, Dropdown);
};

export default Dropdown;
