import Vue from 'vue'
import Router from 'vue-router'
import { ListRoutes } from '@/routes/ListRoutes'
import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)


Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/HomePage'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login/Login'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/List/ListPageView.vue'),
      children: ListRoutes,
      meta: {
        guard: { except: ['guest'] },
      },
    },
  ]
})