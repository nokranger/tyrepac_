import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/homes.vue'
import QandA from '../views/qa.vue'
import regis from '../views/regisstations.vue'
import contact from '../views/contact.vue'
import promotion from '../views/promotion.vue'
import brand from '../views/tyrebrand.vue'

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
    path: '/qa',
    name: 'qa',
    component: QandA
  },
  {
    path: '/register',
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
