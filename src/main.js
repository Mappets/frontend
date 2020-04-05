import Vue from 'vue'
import App from './App'
import router from './router'
import ArgonDashboard from '@/plugins/argon-dashboard'

library.add(faUserSecret)

// Add global component

Vue.use(ArgonDashboard)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
