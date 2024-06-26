import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persistedstate';

// 创建pinia实例
export const pinia = createPinia();
// 使用pinia插件
pinia.use(persist);
// 导出pinia实例，给main使用
export default pinia;

// 统一导出，代码简洁，入口唯一
export * from './modules/item.ts';
export * from './modules/user.ts';
export * from './modules/app.ts';
export * from './modules/setting.ts';
// -- append store here --
