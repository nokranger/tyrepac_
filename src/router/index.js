import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/homes.vue'
import QandA from '../views/qa.vue'
import regis from '../views/regisstations.vue'
import contact from '../views/contact.vue'
import promotion from '../views/promotion.vue'
import brand from '../views/brand.vue'
import installer from '../views/installer.vue'
// import tyrebrands from '../views/tyrebrands.vue'
import tyredetail from '../views/tyredetail.vue'
import checkout from '../views/buy.vue'
import cart from '../views/cart.vue'
import credit from '../views/checkoutcredit.vue'
import bank from '../views/checkoutbank.vue'
import shop from '../views/shop.vue'
import donebank from '../views/donebank.vue'
import donecredit from '../views/donecredit.vue'
// import test from '../views/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/faq',
    name: 'qa',
    component: QandA
  },
  {
    path: '/register-installer',
    name: 'regis',
    component: regis
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/promotions',
    name: 'promotions',
    component: promotion
  },
  {
    path: '/brand',
    name: 'brand',
    component: brand
  },
  {
    path: '/installer',
    name: 'installer',
    component: installer
  },
  // {
  //   path: '/tyrebrand/:name',
  //   name: 'tyrebrands',
  //   component: tyrebrands
  // },
  {
    path: '/tyrebrand',
    name: 'tyredetail',
    component: tyredetail
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/checkcredit',
    name: 'checkcredit',
    component: credit
  },
  {
    path: '/checkbank',
    name: 'checkbank',
    component: bank
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop
  },
  {
    path: '/donebank',
    name: 'donebank',
    component: donebank
  },
  {
    path: '/donecredit',
    name: 'donecredit',
    component: donecredit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
