import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProductOne from '@/components/pages/ProductOne'
import ProductTwo from '@/components/pages/ProductTwo'

import UserOne from '@/components/users/UserOne'
import UserTwo from '@/components/users/UserTwo'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Index',
          component: Index
      },
      {
        path: '/one',
        name: 'ProductOne',
        component: ProductOne
      },
      {
          path: '/two',
          name: 'ProductTwo',
          component: ProductTwo
      },
      {
          path: '/user-one',
          name: 'UserOne',
          component: UserOne
      },
      {
          path: '/user-two',
          name: 'UserTwo',
          component: UserTwo
      }
  ]
})
