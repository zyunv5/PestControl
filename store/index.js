import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
			// init:false
			init:true,
			detail:{}
		},
    mutations: {
			changeInitState(state){
				state.init=true
			},
			changeDetailData(state,payload){
				state.detail=payload;
			},
			clearDetail(state){
				state.detail={}
			}
		},
    actions: {
			changeInit(){
				store.commit('changeInitState')
			},
			changeDetail(data,payload){
				store.commit("changeDetailData",payload)
			},
			clearDetail(){
				store.commit("clearDetail")
			}
		}
})
export default store