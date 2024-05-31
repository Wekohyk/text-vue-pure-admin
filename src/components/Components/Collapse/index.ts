import Collapse from './index.vue';
import CollapseItem from './CollapseItem.vue';
import { App } from 'vue';

// 为组件提供 install 方法，供组件对外按需引入
Collapse.install = (app: App) => {
  if (!Collapse.name) return;
  app.component(Collapse.name, Collapse);
};
CollapseItem.install = (app: App) => {
  if (!CollapseItem.name) return;
  app.component(CollapseItem.name, CollapseItem);
};

export default {
  Collapse,
  CollapseItem,
};
