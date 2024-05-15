import { defineStore } from 'pinia';
import { ref } from 'vue';

export const settingStore = defineStore(
  'settingStore',
  () => {
    const showSidebar = ref(true);

    const toggleShowSidebar = () => {
      showSidebar.value = !showSidebar.value;
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
