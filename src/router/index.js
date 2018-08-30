import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'page',
      component:resolve => require(['@/components/Page'],resolve)
    },
    {
      path: '/page',
      name: 'Page',
      component:resolve => require(['@/components/Page'],resolve)
    },
  ]
})
