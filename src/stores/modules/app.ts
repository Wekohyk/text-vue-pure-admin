import { defineStore } from 'pinia';
import { ref } from 'vue';
import { pinia } from '../index';

export const appStore = defineStore(
  'appStore',
  () => {
    const isShow = ref(true);
    let collapse = true;

    const isShowClick = () => {
      isShow.value != isShow.value;
    };
    const toggleCollapse = () => {
      collapse = !collapse;
    };
    return {
      isShow,
      collapse,

      isShowClick,
      toggleCollapse,
    };
  },
  {
    persist: {
      key: 'vue-pure-admin-appStore',
      storage: window.localStorage,
    },
  },
);

export function useAppStoreHook() {
  return appStore(pinia);
}
