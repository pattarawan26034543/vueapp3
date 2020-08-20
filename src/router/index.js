import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Customers from '../views/Customers.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue'
import Report from '../views/Report.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/customers',
      name: 'Customers',
    component: Customers
    },
    {
      path: '/products',
      name: 'Product',
    component: Product
    },
    {
      path: '/reports',
      name: 'Report',
    component: Report
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
