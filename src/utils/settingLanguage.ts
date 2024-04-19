import i18n from '@/lang/index';
import { ToggleLanguage } from '@/types/item';

const { locale } = i18n.global;
export const selectLanguage = (language: ToggleLanguage) => {
  locale.value = language;
  localStorage.setItem('text-vue-pure-admin-lang', language);
};
