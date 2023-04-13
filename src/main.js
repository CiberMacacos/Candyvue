import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from 'pinia'
import { i18n } from './plugins/i18n'


createApp(App).use(router).use(createPinia()).use(i18n).mount('#app')
