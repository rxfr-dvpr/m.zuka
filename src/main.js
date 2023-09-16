import './assets/scss/main.scss';
import './assets/css/all.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/router';

import { createI18n } from "vue-i18n";
import { languages, defaultLocale } from "./langs/lang.js";

const messages = {...languages}
const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || defaultLocale,
    fallbackLocale: 'en',
    messages
},)


const app = createApp(App).use(i18n)
app.use(createPinia())
app.use(router)
app.mount('#app')
