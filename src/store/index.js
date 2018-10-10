import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        goback: false,
        changePage: ''
    },
    mutations: {
        increment: state => state.count ++ ,
        decrement: state => state.count -- ,
        change(state,object) { state[object.key] = object.value}
    }
})


