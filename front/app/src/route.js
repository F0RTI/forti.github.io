import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "./views/builder/HomePage.vue";
import AdminHomePage from "./views/admin/HomePage.vue";
import NProgress from 'nprogress';
import './assets/css/nprogress.css';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {
            title: 'Home',
            isRequiresAuth: false
        }
    },
    {
        path: '/admin/home',
        name: 'Admin',
        component: AdminHomePage,
        meta: {
            title: 'Admin Home',
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
    showSpinner: false,
    speed: 500,
    minimum: 0.2
});

export default router;