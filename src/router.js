import Vue from 'vue'
import Router from 'vue-router'
import tab1 from '@/views/tab/1'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: tab1
    }
  ]
})
export default router
