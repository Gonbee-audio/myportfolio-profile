import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vmodal from 'vue-js-modal'
import store from './store'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false;
Vue.use(Vmodal);

new Vue({
  render: h => h(App),
  router,
  Vmodal,
  vuetify,
  store
}).$mount('#app');

