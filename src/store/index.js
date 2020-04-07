import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: ""
    },
    mutations: {
        setName(state, value) {
            console.log(value)
            state.name = value
        }
    },
    actions: {},
    modules: {}
})