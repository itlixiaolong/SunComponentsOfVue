import Vue from 'vue'
import App from './App.vue'

import modalDialog from './modalDialog'
Vue.use(modalDialog)
new Vue({
  el: '#app',
  render: h => h(App)
})
