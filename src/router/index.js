import Vue from 'vue'
import Router from 'vue-router'
import Favorites from '@/components/Favorites/Favorites'
import Main from '@/components/Main/Main'
import MyPage from '@/components/My_page/My_page'
import News from '@/components/News/News'
import Top from '@/components/Top/Top'
import Error404 from '@/components/Main/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: MyPage
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/*',
      name: '404',
      component: Error404
    }
  ]
})
