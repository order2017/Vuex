import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProductOne from '@/components/pages/ProductOne'
import ProductTwo from '@/components/pages/ProductTwo'

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
      }
  ]
})
