import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faPatreon, faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueSmoothScroll from 'vue3-smooth-scroll';
import Toaster from '@meforma/vue-toaster';
import './assets/sass/main.scss';

library.add(faGithub, faAngleDown, faPatreon, faCoffee, faBitcoin);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(VueSmoothScroll);
app.use(Toaster);
app.mount('#app');
