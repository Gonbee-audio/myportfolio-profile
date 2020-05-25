import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Career from '@/components/Career'
import Portfolio from '@/components/Portfolio'
import Inform from '@/components/Inform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Career',
      name: 'Career',
      component: Career
    },
    {
      path: '/Portfolio',
      name: 'Cortfolio',
      component: Portfolio
    },
    {
      path: '/Inform',
      name: 'Inform',
      component: Inform 
    }
  ]
})