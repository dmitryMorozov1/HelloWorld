<template>
  <v-card class="py-2">
    <v-flex class="py-2 text-xs-center med-24 textblue-text">
      Выбор социальной сети
    </v-flex>
    <v-flex 
      v-for="(social, index) in socials" 
      :key="index"
      class="mx-4">
      <v-btn 
        block
        round
        depressed
        :class="social.name + '-color-border ' + 
               'capitalize ' + 
               social.name + '-color-text med-16 social-btn'"
        @click.native="addSocial(social)">
        <v-avatar 
          class="ml-1"
          size="30px">
            <img :src="social.logo">
        </v-avatar>
        <v-layout class="pl-4">
          {{ social.title }}
        </v-layout>
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      socials: []
    }
  },
  beforeMount () {
    this.addSocials;
  },
  computed: {
    addSocials() {
      this.socials = [
        { name: 'facebook', title: 'Facebook', url: 'facebook.com/' , logo: 'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'},
        { name: 'vkontakte', title: 'Вконтакте', url: 'vk.com/', logo: 'https://icon-icons.com/icons2/1109/PNG/512/1486053615-vk_79192.png'},
        { name: 'twitter', title: 'Twitter', url: 'twitter.com/', logo: 'http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png'},
        { name: 'googleplus', title: 'Google +', url: 'googleplus.com/', logo: 'https://www.shareicon.net/data/512x512/2016/11/22/855140_plus_512x512.png'},
        { name: 'telegram', title: 'Telegram', url: 'telegram.com/', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png'},
        { name: 'badoo', title: 'Baboo', url: 'badoo.com/', logo: 'https://pbs.twimg.com/profile_images/850251877962760192/ekDNZI2J.jpg'},
      ];
    }
  },
  methods: {
    addSocial(social) {
      //Получить id у социалки
      let personId = 'id123123';
      this.$emit('addSocial', 
      {
        social: 
        {
          name: social.name,
          url: social.url,
          personId: personId,
          logo: social.logo
        }
      });
    }
  }
}
</script>

<style scoped>
.btn {
  height: 38px
}
.social-btn {
  margin: 10px 0;
}
.social-btn :nth-child(1) {
  height: auto;
  padding: 0;
}
</style>
