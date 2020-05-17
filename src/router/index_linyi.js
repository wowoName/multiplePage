import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: () =>
        import ( /* webpackChunkName: "about" */ '@/views/linyi/pages/Index.vue')
}, {
    path: '/canvas',
    name: 'canvas',
    component: () =>
        import ( /* webpackChunkName: "about" */ '@/views/linyi/pages/CanvasDemo.vue')
}, ]

const router = new VueRouter({
    routes
})

export default router