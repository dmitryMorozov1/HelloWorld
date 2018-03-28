<template>
<v-container class="main-layout px-0">
  <v-layout>
    <v-flex>              <!-- send all information for this component as abject 'profile'-->
      <profile-info class="profile-info mr-4" :profile="profile"></profile-info>
    </v-flex>
    <v-flex>              <!-- send amounts for this component as abject 'amounts'-->
      <mini-header class="mini-header" :amounts="amounts"></mini-header>
      <router-view/>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import profileInfo from './profile-info'
import miniHeader from './mini_header'

export default {
  data () {
    return {
      profile: {},
      amounts: {}
    }
  },
  mounted() {
    // request to server will be here
    // but now
    this.profile = {
      id: '1',
      name: 'Елизавета Седова',
      sex: '2',
      age: '20',
      about: `Студентка 3 курса национального исседовательского университета 
              информационных технологий, механики и оптики`,
      avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
      stats: {
        questions: '100',
        shows: '123',
        answers: '349',
        likes: '94',
        rating: '123',
        dislikes: '321'
      },
      achievements: [
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement'
        }
      ],
      social: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/someid'
        },
        {
          name: 'vk',
          url: 'https://vk.com/someid'
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/someid'
        },
        {
          name: 'ok',
          url: 'https://ok.ru/someid'
        },
        {
          name: 'telegram',
          url: 'https://www.telegram.org/someid'
        }        
      ]
    }
    this.amounts = {
      questions: '100',
      answers: '349',
      followers: '230',
      following: '126',
      favorites: '332',
      comments: '23'
    }
  },
  components: {
    'profile-info' : profileInfo,
    'mini-header' : miniHeader
  }
}
</script>

<style scoped>
.profile-info {
  width: 275px;
  max-width: 275px;
}
.mini-header {
  width: 775px;
  max-width: 775px;
}
.main-layout {
  width: 1076px;
  max-width: 1076px;
}
</style>
