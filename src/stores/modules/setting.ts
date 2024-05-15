import { defineStore } from 'pinia';

export const settingStore = defineStore(
  'settingStore',
  () => {
    let showSidebar = true;

    const toggleShowSidebar = () => {
      showSidebar = !showSidebar;
    };
    return {
      showSidebar,

      toggleShowSidebar,
    };
  },
  {
    persist: {
      key: 'vue-pure-admin-settingStore',
      storage: window.localStorage,
    },
  },
);
