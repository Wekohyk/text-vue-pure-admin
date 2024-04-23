import { defineStore } from 'pinia';
import { ref } from 'vue';

export const loginStore = defineStore(
  'loginStore',
  () => {
    // is show login dialog
    const visible = ref(false);

    return {
      visible,
    };
  },
  {
    persist: {
      key: 'vue-pure-admin-loginStore',
      storage: window.localStorage,
      paths: [],
    },
  },
);
