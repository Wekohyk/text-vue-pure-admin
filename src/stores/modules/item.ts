import { defineStore } from 'pinia';
import { isEn } from '@/lang/index';

export const item = defineStore(
  'item',
  () => {
    const toggleLanguage = isEn;

    return {
      toggleLanguage,
    };
  },
  {
    persist: {
      key: 'vue-pure-admin-item',
      storage: window.localStorage,
      paths: [],
    },
  },
);
