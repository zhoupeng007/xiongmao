import Vue from 'vue'
import Router from 'vue-router'
import tab1 from '@/views/tab/1'
import tab2 from '@/views/tab/nuzhuang2'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: tab1
    },
    {
      path: '/tab/2',
      component: tab2
    }
  ]
})
export default router
