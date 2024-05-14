import { defineStore } from 'pinia';
import { ref } from 'vue';
import { pinia } from '../index';

export const appStore = defineStore(
  'appStore',
  () => {
    const isShow = ref('true');

    const isShowClick = () => {
      isShow.value != isShow.value;
    };
    return {
      isShow,
      isShowClick,
    };
  },
  {
    persist: {
      key: 'vue-pure-admin-userStore',
      storage: window.localStorage,
    },
  },
);

export function useUserStoreHook() {
  return appStore(pinia);
}
