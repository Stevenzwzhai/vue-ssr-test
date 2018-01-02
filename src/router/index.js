import Vue from 'vue'
import VueRouter from 'vue-router'


import pageA from '../components/page1.vue'
// import pageB from '../components/page2.vue'
const pageB = () => import ('../components/page2.vue')
import pageIndex from '../components/pageIndex.vue'
Vue.use(VueRouter)
const routes = [{
    component: pageA,
    path: '/pageA/:id'
}, {
    component: pageB,
    path: '/pageB'
},{
    path:'/pageIndex',
    component: pageIndex
},{
    path: '*',
    redirect: '/pageIndex'
}]

const router = new VueRouter({mode: 'history', routes});
Object.assign(Vue.prototype, {
    $go(path) {
        router.push({
            path: path
        });
    }
})
export default router

