import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import login from '../components/login/login.vue'
import register from '../components/login/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
