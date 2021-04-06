import './utils/mtj-wx-sdk';
import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		//挂载
		    store
})
app.$mount()