import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/Mine/Mine/Mine'
import Index from '@/components/Index/Index'
import List from '@/components/List/List'
import Cart from '@/components/Cart/Cart'
import Tijiaodingdan from '@/components/Cart/Tijiaodingdan/Tijiaodingdan'
import Detail from'@/components/Index/Detail/Index'
import Order from '@/components/Mine/Order/Order'
import Manage from '@/components/Mine/Manage/Manage'

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
    },
    {
      path: '/tijiaodingdan',
      name: 'Tijiaodingdan',
      component: Tijiaodingdan
    },
    {
      path:'/detail',
      name:"Detail",
      component:Detail
    }
    ,
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    }



  ]
})
