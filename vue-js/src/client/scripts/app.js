/* global global require process module */

import Vue from 'vue';
import VueRouter from 'vue-router';

import './pwa';

import App from './components/App.vue';

import PageHome from './components/PageHome.vue';
import PageAbout from './components/PageAbout.vue';

import '../styles/styles.less';

global.jQuery = require('jquery');

const $ = global.jQuery;
const Bootstrap = require('bootstrap');

const configs = require('../../../configs.json'),
    isProductionMode = process.env.NODE_ENV === 'production',
    baseUrl = isProductionMode ? configs.origin : '/';

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
    base: baseUrl,
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
});

export default new Vue({
    el: '#app',
    router,
    render: c => c(App)
});

if (module.hot) {
    module.hot.accept();
}
