import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true },
    { path: '/404', component: () => import('@/views/404'), hidden: true },
    { path: '/register', component: () => import('@/views/register'), hidden: true },
    { path: '/businessInfo', component: () => import('@/views/businessInfo'), hidden: true },
    { path: '/insuranceInfo', component: () => import('@/views/insuranceInfo'), hidden: true },
    { path: '/loanRecords', component: () => import('@/views/loanRecords'), hidden: true },
];
export default new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});
