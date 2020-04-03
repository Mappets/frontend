import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Secure from '@/components/Secure'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/secure',
      name: 'Secure',
      component: Secure
    }
  ]
})
