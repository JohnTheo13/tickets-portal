// @flow
/* eslint-disable flowtype-errors/show-errors */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '@/views/Login'
import { isTokenValid } from '../utils/helpers'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => isTokenValid() ? Home : Login
  },
  {
    path: '/:id',
    name: 'Details',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Overview.vue')
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import('../views/Tickets')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
