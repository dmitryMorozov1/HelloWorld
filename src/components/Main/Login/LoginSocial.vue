<template>
  <v-card id="login-social-compp">
    <v-flex class="text-xs-center pt-2 med-24 textblue-text">
      Вход
    </v-flex>
    <v-flex 
      class="mx-4 pt-1" 
      v-for="(button, index) in buttons" 
      :key="index">
        <v-btn 
          block
          :class="button.name + '-color-border ' + 
                 'capitalize ' + 
                 button.name + '-color-text med-16'"
          round
          depressed
          @click.native="loginSocial(button.name)">
            <v-avatar size="30px" class="qqq">
              <img :src="button.logo">
            </v-avatar>
            {{ button.title }}
        </v-btn>
    </v-flex>
    <v-flex class="text-xs-center pb-1">
      <v-btn 
        small
        :ripple="false"
        flat
        class="mr-0 reg-12"
        @click.native="callLoginEmailForm()"> У меня нет социальных сетей 
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      buttons: []
    }
  },
  mounted () {
    this.addButtons;
  },
  computed: {
    addButtons() {
      this.buttons = [
        { name: 'facebook', title: 'Facebook', logo: 'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'},
        { name: 'vkontakte', title: 'Вконтакте', logo: 'https://icon-icons.com/icons2/1109/PNG/512/1486053615-vk_79192.png'},
        { name: 'twitter', title: 'Twitter', logo: 'http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png'},
        { name: 'googleplus', title: 'Google +', logo: 'https://www.shareicon.net/data/512x512/2016/11/22/855140_plus_512x512.png'},
        { name: 'telegram', title: 'Telegram', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png'},
        { name: 'badoo', title: 'Baboo', logo: 'https://pbs.twimg.com/profile_images/850251877962760192/ekDNZI2J.jpg'},
      ];
    }
  },
  methods: {
    loginSocial(name) {
      alert(name);
    },
    callLoginEmailForm() {
      this.$emit('callLoginEmailForm');
    }
  }
}
</script>

<style scoped>
.btn {
  text-transform: inherit;
}
</style>
