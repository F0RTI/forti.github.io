import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "./views/HomePage.vue";
import NProgress from 'nprogress';
import './assets/css/nprogress.css';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: HomePage,
        meta: {
            title: 'Wallet',
            isRequiresAuth: false
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    
    if (to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = 'Home';
    }

    NProgress.start();

    next();
});

router.afterEach(() => {
    NProgress.done();
});

NProgress.configure({
    showSpinner: false, // Отключаем спиннер
    speed: 500,         // Скорость анимации
    minimum: 0.2        // Минимальная начальная ширина
});

export default router;