import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Demo from '../views/Demo'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/demo',
      component: Demo
    }
  ]
})
