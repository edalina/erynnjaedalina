import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueGtm from 'vue-gtm'

Vue.use(Buefy)
Vue.use(VueGtm, {
  id: 'GTM-TPRB93T',
  enabled: true,
  loadScript: true,
  vueRouter: router
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
