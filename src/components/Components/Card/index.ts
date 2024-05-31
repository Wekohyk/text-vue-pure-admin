import Card from './index.vue';
import { App } from 'vue';

// 为组件提供 install 方法，供组件对外按需引入
Card.install = (app: App) => {
  if (!Card.name) return;
  app.component(Card.name, Card);
};

export default Card;
