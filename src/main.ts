import { createApp } from 'vue';

import App from './App.vue';

import './style.css';

const vueInstance = createApp(App);
vueInstance.mount(document.querySelector('#app') as Element);
