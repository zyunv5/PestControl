import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
			// init:false
			init:true
		},
    mutations: {
			changeInitState(state){
				state.init=true
			}
		},
    actions: {
			changeInit(){
				store.commit('changeInitState')
			}
		}
})
export default store