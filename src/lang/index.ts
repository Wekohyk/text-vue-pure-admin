// localStorage.getItem('lang');
import { createI18n } from 'vue-i18n';
import { getLocalStorage } from '@/utils/localStorage';
import zh from './zh';
import en from './en';

// judge if it is English
export const isEn =
  getLocalStorage('text-vue-pure-admin-lang') === 'en' ? true : false;

// restraint all lang object to typeof zh
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getLocalStorage('text-vue-pure-admin-lang') || 'en',
  messages: {
    zh,
    en,
  },
});

export default i18n;

// use vue-i18n in modules
export const $t = i18n.global.t.bind(i18n.global);
