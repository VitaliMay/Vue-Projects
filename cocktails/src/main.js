import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

import router from './router';

import '@/assets/styles/global.scss';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// createApp(App).mount('#app')

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount('#app');
