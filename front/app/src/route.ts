import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/views/builder/HomePage.vue';
import AdminHomePage from './components/views/admin/HomePage.vue';
import Login from './components/views/builder/Login.vue';
import NProgress from 'nprogress';
import './assets/css/nprogress.css';

import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {
            title: 'Home',
            isRequiresAuth: false,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login',
            isRequiresAuth: false,
        },
    },
    {
        path: '/admin/home',
        name: 'Admin',
        component: AdminHomePage,
        meta: {
            title: 'Admin Home',
            isRequiresAuth: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title as string;
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
    showSpinner: false,
    speed: 500,
    minimum: 0.2,
});

export default router;
