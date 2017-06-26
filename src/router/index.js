import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/Mine/Mine/Mine'
import Index from '@/components/Index/Index'
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
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
