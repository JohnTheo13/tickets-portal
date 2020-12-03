// @flow
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '@/views/Login'
import { getItem } from '../utils/localStorage'

const getHome = () => {
  const userToken = getItem('@user-token')
  // console.log(userToken.expiry)
  if (!userToken) {
    return Login
  }
  const expires = new Date(userToken?.expiry)
  const now = new Date()
  return now > expires ? Login : Home
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: getHome()
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
  history: createWebHashHistory(),
  routes
})

export default router
