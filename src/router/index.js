import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/Mine'
import Index from '@/components/Index'
import List from '@/components/List/List'
import Cart from '@/components/Cart/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/user-center',
      name: 'Mine',
      component: Mine
    }
  ]
})
