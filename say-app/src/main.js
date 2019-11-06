import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import vuetify from './plugins/vuetify';
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'
Vue.config.productionTip = false
Vue.filter('date', DateFilter)
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created () {
  firebase.initializeApp({
    apiKey: 'AIzaSyDbQBvzazCYbz4ggrT42HY0XG8wRjIVnug',
    authDomain: 'projetecole-d4fbe.firebaseapp.com',
    databaseURL: 'https://projetecole-d4fbe.firebaseio.com',
    projectId: 'projetecole-d4fbe',
    storageBucket: 'projetecole-d4fbe.appspot.com'
  })
  }
}).$mount('#app')
