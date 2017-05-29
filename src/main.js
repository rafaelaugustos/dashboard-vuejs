import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Icon from 'vue-awesome/components/Icon'

// CSS
import '../static/css/estilo.css'
import 'vue-awesome/icons'

// Utilizacao
Vue.use(Vuetify)
Vue.component('icon', Icon)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
