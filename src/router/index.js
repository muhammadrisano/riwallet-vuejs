import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/auth/index.vue'
import Signup from '../views/auth/SignUp.vue'
import Login from '../views/auth/Login.vue'
import Pin from '../views/auth/Pin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'signup',
        name: 'Signup',
        component: Signup
      },
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'pin',
        name: 'pin',
        component: Pin
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
