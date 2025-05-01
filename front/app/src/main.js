import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import store from './store';
import router from './route';
import './assets/scss/main.scss';
// import './assets/tailwind.css';
// import DIcon from 'd-icon';

async function initializeApp() {
    try {
        const app = createApp(App);

        app.use(store);
        app.use(router);
        app.use(i18n);

        app.mount('#app');
    } catch (error) {
        console.error('Error init:', error);
    }
}

initializeApp();
