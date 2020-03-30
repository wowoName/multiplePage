import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "about" */ '@/views/beijing/pages/Home.vue')
}, {
    path: '/main',
    name: 'main',
    component: () =>
        import ( /* webpackChunkName: "about" */ '@/views/beijing/pages/Main.vue')
}, ]

const router = new VueRouter({
    routes
})

export default router