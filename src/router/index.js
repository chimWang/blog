import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
import Blog from 'pages/blog/blog'
import BlogList from 'pages/blog/children/blogList/blogList'
import BlogDetail from 'pages/blog/children/blogList/blogDetail'
import Design from 'pages/blog/children/design/design'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: 'blogList',
          component: BlogList,
        },
        {
          path: 'design',
          component: Design
        },
        {
          name: 'blogDetail',
          path: ':id',
          component: BlogDetail
        }

      ]
    },


  ]
})
