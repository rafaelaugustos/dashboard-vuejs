import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

// CSS
import '../static/css/estilo.css'

// Utilizacao
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
