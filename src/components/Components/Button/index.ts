import Button from './index.vue';
import { App } from 'vue';

// 为组件提供 install 方法，供组件对外按需引入
Button.install = (app: App) => {
  if (!Button.name) return;
  app.component(Button.name, Button);
};

export default Button;
