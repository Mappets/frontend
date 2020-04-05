import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import OrganizationList from '@/views/organization/List'

import DashboardLayout from '@/layout/DashboardLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: DashboardLayout
    },
    {
      path: '/organizations',
      name: 'Organizations',
      component: OrganizationList
    }
  ]
})
