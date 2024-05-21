import type { FormInstance, FormItemProp } from 'element-plus';
import { message } from './message';
import { $t } from '@/lang/index';
import { ref } from 'vue';

const isDisabled = ref(false);
const timer = ref<number | null>(null);
const text = ref('');

export const useVerifyCode = () => {
  const start = async (
    formEl: FormInstance | undefined,
    props: FormItemProp,
    time = 60,
  ) => {
    if (!formEl) return;
    await formEl.validateField(props, isValid => {
      if (isValid) {
        if (timer.value) {
          clearInterval(timer.value);
        }
        isDisabled.value = true;
        text.value = `${time}`;
        // The next two lines can be deleted, pure clown code
        message($t('openControlConsole'), { type: 'success' });
        timer.value = window.setInterval(() => {
          if (time > 0) {
            time -= 1;
            text.value = `${time}`;
          } else {
            text.value = '';
            isDisabled.value = false;
            if (timer.value) {
              clearInterval(timer.value);
            }
          }
        }, 1000);
      }
    });
  };

  const end = () => {
    text.value = '';
    isDisabled.value = false;
    if (timer.value) {
      clearInterval(timer.value);
    }
  };

  return {
    isDisabled,
    timer,
    text,
    start,
    end,
  };
};
