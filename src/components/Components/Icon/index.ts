import Icon from './index.vue';
import { App } from 'vue';
// 为组件提供 install 方法，供组件对外按需引入
Icon.install = (app: App) => {
  if (!Icon.name) return;
  app.component(Icon.name, Icon);
};

export default Icon;
