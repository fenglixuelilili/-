import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import utils from './utils/index'
import 'lib-flexible/flexible.js'
import './assets/css/reset.css'
Vue.config.productionTip = false
// for(let key in utils){
//   Vue.prototype.$ppx[key] = utils[key]
// }
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
