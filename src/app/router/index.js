import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import error500wsod from '@/components/error500wsod'
import error403 from '@/components/error403'
import error404 from '@/components/error404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/error500wsod',
      name: 'error500wsod',
      component: error500wsod
    },
    {
      path: '/error403',
      name: 'error403',
      component: error403
    },
    {
      path: '/error404',
      name: 'error404',
      component: error404
    },
  ]
})
