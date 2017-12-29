import Vue from 'vue'

import App from './app.vue'
import router from './router'
import {createStore} from './store'
const store = createStore()
export function createApp () {
    const app = new Vue({
        router,
        store,
        // 根实例简单的渲染应用程序组件。
        render: h => h(App)
    })
    return { app, router, store }
}