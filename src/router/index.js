import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/songer',
    name: 'Songer',
    component: () => import('../views/Songer.vue')
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import('../views/Rank.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/play/:id',
    name: 'Play',
    component: () => import('../views/Play.vue')
  },
  {
    path: '/mvPlay/:id',
    name: 'MvPlay',
    component: () => import('../views/MvPlay.vue')
  },
  {
    path: '/songSheet/:id',
    name: 'SongSheet',
    component: () => import('../views/SongSheet.vue')
  },
  {
    path: '/songerDetail/:id',
    name: 'SongerDetail',
    component: () => import('../views/SongerDetail.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
