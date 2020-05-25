import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vmodal from 'vue-js-modal'
import store from './store'


Vue.config.productionTip = false;
Vue.use(Vmodal);

new Vue({
  render: h => h(App),
  router,
  Vmodal,
  store,
}).$mount('#app');

