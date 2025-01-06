import { createApp } from 'vue'
import App from './App.vue';
import i18n from "./i18n";
import store from './store';
import router from './route';
import './assets/scss/main.scss';

async function initializeApp() {
    try {
        // await store.fetchData();
        // await store.fetchData('users');
        const app = createApp(App);
        
        app.use(store);
        app.use(router);
        app.use(i18n);

        // app.provide('store', store);
        // app.component('app-login', Login);

        app.mount('#app');
    } catch (error) {
        console.error('Error init:', error);
    }
}

// Инициализируем приложение
initializeApp();
