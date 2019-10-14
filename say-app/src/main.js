import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

window.bus = new Vue()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
