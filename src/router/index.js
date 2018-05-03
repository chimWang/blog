import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
import Blog from 'pages/blog/blog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog',
      component: Blog
    }
  ]
})
