import Vue from 'vue'
import App from './app.vue'
import router from './router'
import {createStore} from './store'
import 'mint-ui/lib/style.css'
// import MintUI from 'mint-ui'
// Vue.use(MintUI);

// import createMt from './utils/mt'
import './utils/mt'
// import Vue from 'vue'
// import {Button} from 'mint-ui'
// Vue.component('MtButton', Button)
if(typeof document !== 'undefined') {
    const VueScroller = require('vue-scroller')
    Vue.use(VueScroller)
}
const store = createStore()
export function createApp () {
    // createMt();
    // if(typeof document !== 'undefined') {
    //     Vue.use(VueScroller)
    //     Vue.component('MtButton', Button)
    // }
    const app = new Vue({
        router,
        store,
        // 根实例简单的渲染应用程序组件。
        render: h => h(App)
    })
    return { app, router, store }
}