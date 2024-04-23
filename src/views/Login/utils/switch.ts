import { ref } from 'vue';
import { loginStore } from '@/stores/index';

const store = loginStore();
const currentPage = ref(0);

// jump to forget password
const switchForm = (index: number) => {
  currentPage.value = index;
  store.visible = false;
};

export { currentPage, switchForm };
