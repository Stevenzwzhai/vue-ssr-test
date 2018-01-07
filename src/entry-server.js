import { createApp} from './main'
var Promise = require('es6-promise').Promise;
export default context => {

    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()
        router.push(context.url)
        // 等到 router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
            Promise.all(matchedComponents.map(Component => {
                if (Component.asyncData) {
                    return Component.asyncData({
                        store,
                        route: router.currentRoute
                    })
                }
            })).then(() => {
                context.state = store.state
                resolve(app)
            }).catch((err) => {
                reject(err)
            })
            // Promise 应该 resolve 应用程序实例，以便它可以渲染
        }, reject)
    })
}