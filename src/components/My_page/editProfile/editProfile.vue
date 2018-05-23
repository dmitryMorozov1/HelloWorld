<template>
<v-container class="main-layout">
  <v-layout>
    <v-layout 
      d-block 
      class="mr-3">
      <v-flex class="mb-3 photo-comp blocklight border">              
        <photo></photo>
      </v-flex>
      <v-flex class="password-comp blocklight border">             
        <password></password>
      </v-flex>
    </v-layout>
    <v-flex class="mr-3 common-comp blocklight border">              
      <common @saveChanges="saveChanges"></common>
    </v-flex>
    <v-layout d-block>
      <v-flex class="social-comp blocklight border">             
        <social></social>
      </v-flex>
    </v-layout>
  </v-layout>

  <transition name="fade">
    <v-flex 
      v-if="savingSuccessfully"
      xs2 
      class="py-3 info-alert-content text-xs-center">
        Сохранено
    </v-flex>
  </transition>

</v-container>
</template>

<script>
import Common from './editCommon.vue';
import Photo from './editPhoto.vue';
import Password from './editPassword.vue';
import Social from './editSocial.vue';

export default {
  data () {
    return {
      profile: {},
      amounts: {},
      savingSuccessfully: false
    }
  },
  created() {
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
          name: 'Achievement1'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement2'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement3'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement4'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement5'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement6'
        },
        {
          url: 'http://www.awardsaplus.com/wp-content/uploads/2016/08/ICON_achievement-icon.png',
          name: 'Achievement7'
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
  methods: {
    saveChanges() {
      //if success
      this.savingSuccessfully  = true;
      setTimeout( () => {
        this.savingSuccessfully  = false;
      }, 700);
    }
  },
  components: {
    'common' : Common,
    'photo': Photo,
    'password' : Password,
    'social' : Social
  }
}
</script>

<style scoped>
.photo-comp {
  width: 247px;
}
.password-comp {
  width: 247px;
}
.common-comp {
  width: 492px;
}
.social-comp {
  width: 302px;
}
.info-alert-content {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -75px;
  width: 150px;
  background-color: rgba( 0, 0, 0, 0.65);
  color: #e9e9e9;
  border-radius: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
