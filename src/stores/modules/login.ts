import { defineStore } from 'pinia';
import { ref } from 'vue';

export const loginStore = defineStore(
  'loginStore',
  () => {
    // is show login dialog
    const visible = ref(false);
    // toggle login form container
    const currentPage = ref(0);

    const switchForm = (index: number) => {
      currentPage.value = index;
    };

    return {
      visible,
      currentPage,
      switchForm,
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
