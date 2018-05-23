<template>
  <v-card>
    <v-layout 
      wrap 
      d-block
      class="pb-3">
      <v-flex>
        <v-card-title class="pb-2 pl-4 med-20 textblue-text">
          СОЦИАЛЬНЫЕ СЕТИ
        </v-card-title>
      </v-flex>
      <v-flex>
        <v-card-actions class="pl-4">
          <v-btn 
            flat
            round
            depressed
            class="ma-0 capitalize add-btn med-16 textblue-text"
            :ripple="false"
            @click.native="callAddSocialDialog()">
              <v-icon> add </v-icon>
              <span class="pl-1 reg-16">Добавить</span>
          </v-btn>
        </v-card-actions>
      </v-flex>
      <v-divider 
        v-if="socials.length!==0"
        class="my-3 mx-4">
      </v-divider>
      
      <v-layout 
        v-for="(social, index) in socials" 
        :key="index"
        align-center
        class="mx-4">
        <v-btn 
          block
          round
          depressed
          :class="social.name + '-color-border ' + 
                 social.name + '-color-text med-14 social-btn'"
          @click.native="loginSocial(social.name)">
          <v-avatar 
            class="ml-1"
            size="30px">
              <img :src="social.logo">
          </v-avatar>
          <v-layout class="pl-2">
            <span class="overflow"> 
              {{ social.url + social.personId }} 
            </span>
          </v-layout>
        </v-btn>
        <v-btn 
          icon 
          flat  
          small
          class="ma-1"
          color="red"
          :ripple="false"
          @click="deleteSocial(social)">
          <v-icon 
            size="18px"
            color="red darken-1">
            clear
          </v-icon>
        </v-btn>
      </v-layout>
    </v-layout>

    <v-dialog v-model="addSocialDialog" max-width="340px">
      <add-social @addSocial="addSocial"></add-social>
    </v-dialog>

  </v-card>
</template>

<script>
import AddSocial from './addSocialDialog.vue'

export default {
  data() {
    return {
      socials: [],
      addSocialDialog: false
    }
  },
  beforeMount () {
    this.addSocials;
  },
  computed: {
    addSocials() {
      this.socials = [
        { name: 'facebook', url: 'facebook.com/', personId: 'id12312asdfdfdsadsa3', logo: 'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'},
        { name: 'vkontakte', url: 'vk.com/', personId: 'id123123', logo: 'https://icon-icons.com/icons2/1109/PNG/512/1486053615-vk_79192.png'},
        { name: 'twitter', url: 'twitter.com/', personId: 'id123123', logo: 'http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png'}
      ];
    }
  },
  methods: {
    callAddSocialDialog() {
      this.addSocialDialog = true;
    },
    addSocial(args) {
      let socialIsExist = false;
      this.socials = this.socials.map(social => {
        if(social.name.includes(args.social.name)){
          socialIsExist = true;
          return {
            name: social.name,
            url: social.url,
            personId: args.social.personId,
            logo: social.logo,
          }
        }
        else return social;
      });
      if(!socialIsExist) 
        this.socials.push(args.social);
      this.addSocialDialog = false;
    },
    deleteSocial(social) {
      this.socials.splice(this.socials.indexOf(social), 1);
    },
    loginSocial(socialName) {
      //зарегать заного (если пользователь хочет с нового аккаунта зарегаться)
      alert(socialName);
    }
  },
  components: {
    'add-social': AddSocial,
  }
}
</script>

<style scoped>
.divider {
  width: inherit;
}
.btn {
  text-transform: inherit;
}
.add-btn {
  width: 138px;
  border: 1px solid #5DA3DA !important;
}
.add-btn :nth-child(1) {
  padding-left: 0;
}
.overflow {
  text-overflow: ellipsis;
  overflow: hidden;
}
.social-btn {
  margin: 5px 0;
  height: 38px;
}
.social-btn :nth-child(1) {
  height: auto;
  padding-left: 0;
}
</style>
