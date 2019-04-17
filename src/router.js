import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PostDetails from './views/PostDetails.vue'
import Create from './views/Create.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'details',
      component: PostDetails
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
