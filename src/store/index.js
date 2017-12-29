import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore(){
    return new Vuex.Store({
        state: {
            items: {}
        },
        actions: {
            get_items({commit}, id) {
                return new Promise((resolve, reject) => {
                    let timer = setTimeout(() => {
                        resolve((id || 'noId')+':'+Math.random().toFixed(6))
                    }, 100)
                }).then(item => {
                    commit('setItem', { id, item })
                })
            }
        },
        mutations: {
            setItem(state, { id, item }) {
                Vue.set(state.items, id, item)
            }
        }
    })
}