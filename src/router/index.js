import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/homePage'
import index from '@/components/index/index'
import login from '@/components/login/loginIn'
import permi from '@/components/permissions/permi'
import permiList from '@/components/permissions/permissList'
import orderMoney from '@/components/order/orderMoney'
import orderTrade from '@/components/order/orderTrade'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginIn',
      component: login
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      children:[
        {
          path: 'index',
          name: 'index',
          component: index
        },
        {
          path:'permi',
          name:'permi',
          component:permi
        },
        {
          path:'permiList',
          name:'permiList',
          component:permiList
        },
        {
          path:'orderMoney',
          name:'orderMoney',
          component:orderMoney
        },
        {
          path:'orderTrade',
          name:'orderTrade',
          component:orderTrade
        }
      ]
    }
  ]
})
