import { createApp } from 'vue';
// pinia and pinia-plugin-persistedstate
import pinia from './stores';
// vue-router
import router from './router';
// i18n
import i18n from './lang';
/**
 * Import the Unocss core styles
 * Best placed after reset style, before uno.css
 */
import './assets/styles/index.scss';
// Import the Unocss utilities styles
import 'uno.css';
// element-plus
import 'element-plus/dist/index.css';
// @vueUse/motion
import { MotionPlugin } from '@vueuse/motion';
// import mock
import './mock/mock';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import all free icons */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(fas);
library.add(far);
library.add(fab);

/* Register a custom component */
import Icon from '@/components/Components/Icon/index.vue';
import Button from '@/components/Components/Button/index.vue';
import Card from '@/components/Components/Card/index.vue';
// App
import App from './App.vue';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
/* Register a custom component */
app.component('Weko-Icon', Icon);
app.component('Weko-Button', Button);
app.component('Weko-Card', Card);

app.use(pinia);
app.use(i18n);
app.use(MotionPlugin);
app.use(router);
app.mount('#app');
