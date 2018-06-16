import Vue from 'vue';
import VueRouter from 'vue-router';

import './service-worker-starter.js';

import App from './App.vue';

import PageHome from './components/PageHome.vue';
import PageAbout from './components/PageAbout.vue';

import '../styles/styles.less';

global.jQuery = require('jquery');

const $ = global.jQuery;
const Bootstrap = require('bootstrap');

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: PageHome
    },
    {
        path: '/about',
        component: PageAbout
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
});

export default new Vue({
    el: '#app',
    router,
    render: c => c(App)
});