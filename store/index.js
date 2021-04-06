import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
			init:false,
			detail:{}
		},
    mutations: {
			changeInitState(state,payload){
				state.init=payload
			},
			changeDetailData(state,payload){
				state.detail=payload;
			},
			clearDetail(state){
				state.detail={}
			}
		},
    actions: {
			changeInit(data,payload){
				store.commit('changeInitState',payload)
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