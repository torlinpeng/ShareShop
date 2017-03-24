import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home//Home.vue'
import ShopCar from '../components/ShopCar/ShopCar.vue'
import Finding from '../components/Finding/Finding.vue'
import User from '../components/User/User.vue'
import Items from '../components/Items/Items.vue'
import Detail from '../components/Items/Detail.vue'
import Register from '../components/User/Register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Finding',
      component: Finding
    },
    {
      path: '/Items',
      component: Items
    },
    {
      path: '/User',
      component: User
    },
    {
      path: '/ShopCar',
      component: ShopCar
    },
     {
      path: '/Detail',
      component: Detail
    },
     {
      path: '/Register',
      component: Register
    },
    { path: "*", redirect: '/Home' },
  ],
  mode: 'history'
},)
