import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import NewProduct from '../views/NewProduct.vue'
import ProductShow from '../views/ProductShow.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/new-product',
    name: 'new-product',
    component: NewProduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/product/:id',
    name: 'product-show',
    component: ProductShow,
    props: true,
    meta: { requiresAuth: true }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
 
