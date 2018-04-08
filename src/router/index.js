import Vue from 'vue'
import Router from 'vue-router'

// components
import Favorites from '@/components/Favorites/Favorites'
import Main from '@/components/Main/Main'
import MyPage from '@/components/My_page/My_page'
import News from '@/components/News/News'
import Top from '@/components/Top/Top'
import Error404 from '@/components/Main/404'

// My_page
import Answers from '@/components/My_page/answers'
import Comments from '@/components/My_page/comments'
import ProfileFavorites from '@/components/My_page/favorites'
import Followers from '@/components/My_page/followers'
import Following from '@/components/My_page/following'
import Questions from '@/components/My_page/questions'

// Top
import TopDay from '@/components/Top/pages/top-day'
import TopWeek from '@/components/Top/pages/top-week'
import TopMonth from '@/components/Top/pages/top-month'
import TopAll from '@/components/Top/pages/top-all'


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
      component: MyPage,
      children: [
        {
          path: 'answers',
          name: 'ProfileAnswers',
          component: Answers
        },
        {
          path: 'comments',
          name: 'ProfileComments',
          component: Comments
        },
        {
          path: 'favorites',
          name: 'ProfileFavorites',
          component: ProfileFavorites
        },
        {
          path: 'followers',
          name: 'ProfileFollowers',
          component: Followers
        },
        {
          path: 'following',
          name: 'ProfileFollowing',
          component: Following
        },
        {
          path: 'questions',
          name: 'ProfileQuestions',
          component: Questions
        }
        
      ]
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/top',
      component: Top,
      children: [
        {
          path: '',
          name: 'Top',
          component: TopDay
        },
        {
          path: '/week',
          name: 'Top-week',
          component: TopWeek
        },
        {
          path: '/month',
          name: 'Top-month',
          component: TopMonth
        },
        {
          path: '/all',
          name: 'Top-all',
          component: TopAll
        }
      ]
    },
    {
      path: '/*',
      name: '404',
      component: Error404
    }
  ]
})
