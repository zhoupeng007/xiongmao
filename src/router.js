import Vue from 'vue'
import Router from 'vue-router'
import tab1 from '@/views/tab/1'
import tab from '@/views/tab/nuzhuang2'
import ccc from '@/views/c_detail'
import category from '@/views/category_detail'
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
      path: '/tab/:id',
      component: tab
    },
    {
      path: '/c/:id',
      component: ccc
    },
    {
      path: '/category/:id',
      component: category
    }
  ]
})
export default router
