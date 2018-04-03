<template>
  <v-app>
    <v-content fluid class="pa-2 elevation-5 mb-3 blocklight">
      <v-flex justify-center class="border mb-0" @click.stop="showAvatar = true"
         @onmouseout.stop="showAvatar = false">
        <img v-bind:src="profileInfo.avatar" align="center" width="100%"
             class="profilePhoto elevation-3">
      </v-flex>
      <v-dialog v-model="showAvatar" max-width="750px" width="75%">
          <img v-bind:src="profileInfo.avatar" width="100%" class="pa-0 ma-0">
      </v-dialog>
      <v-content class="profileName text-xs-left med-20">{{profileInfo.name}}</v-content>
      <v-layout justify-left class="text-xs-left med-16 textgrey-text">
        {{profileInfo.age}} лет,
        {{profileInfo.sex}}
      </v-layout>
      <v-btn color="blue lighten-2 ma-0"
             v-if="!profileInfo.you_following && !profileInfo.owns"
             class="follow elevation-0 med-16 border" round>Подписаться
      </v-btn>
      <v-btn v-if="profileInfo.you_following && !profileInfo.owns"
             class="following elevation-0 ma-0 med-16 border" color="light-green lighten-4" round>Вы
        подписаны
      </v-btn>
      <v-btn v-if="profileInfo.owns" class="edit elevation-0 ma-0 med-16 border"
             icon color="grey lighten-2" round>Редактировать
      </v-btn>
      <v-btn class="options elevation-0 pa-0 ma-0 border" round icon color="grey lighten-2"><i
        class="material-icons">more_horiz</i>
      </v-btn>
      <v-layout justify-center class="follows textgrey-text"
                v-if="profileInfo.follows===true">
        Подписан(а) на вас
      </v-layout>
      <v-layout class="text-xs-left reg-14 textgrey-text">{{profileInfo.about}}
      </v-layout>
      <v-flex right row class="links mb-0">
        <v-tooltip bottom v-for="(link, index) in profileInfo.social" :key="link.url">
               <span slot="activator">
                  <a v-bind:href="link.url" target="_blank" class="link">
                   <img v-bind:src="links[index]" class="linkImage ml-1">
                  </a>
                </span>
          <span>{{link.url}}</span>
        </v-tooltip>
      </v-flex>
    </v-content>

    <v-container fluid class="pb-0 pt-2 pr-2 pl-2 elevation-5 mb-3 blocklight">
      <v-layout justify-left class="statistics text-xs-left thin-18" style="margin-bottom: 5px;">
        Статистика
      </v-layout>
      <v-layout row class="mb-2">
        <v-layout column class="mr-2">
          <v-layout align-center column class="questions stats border textgrey-text pa-1 mb-2">
            Вопросы
            <v-content>{{profileInfo.stats.questions}}</v-content>
          </v-layout>
          <v-layout align-center column class="likes stats border textgrey-text pa-1">
            Лайки
            <v-content>{{profileInfo.stats.likes}}</v-content>
          </v-layout>
        </v-layout>
        <v-layout column class="mr-2">
          <v-layout align-center column class="shows stats border textgrey-text pa-1 mb-2">
            Показы
            <v-content>{{profileInfo.stats.shows}}</v-content>
          </v-layout>
          <v-layout align-center column class="rating stats border textgrey-text pa-1">
            Рейтинг
            <v-content>{{profileInfo.stats.rating}}</v-content>
          </v-layout>
        </v-layout>
        <v-layout column class="mr-2">
          <v-layout align-center column class="answers stats border textgrey-text pa-1 mb-2">
            Ответы
            <v-content>{{profileInfo.stats.answers}}</v-content>
          </v-layout>
          <v-layout align-center column class="dislikes stats border textgrey-text pa-1">
            Дизлайки
            <v-content>{{profileInfo.stats.dislikes}}</v-content>
          </v-layout>
        </v-layout>
      </v-layout>
    </v-container>

    <v-container fluid class="pt-2 elevation-5 mb-2 pb-0 pl-2 blocklight">
      <v-content class="achievements text-xs-left thin-18" align="left">Достижения</v-content>
      <v-flex class="achievements-wrapper left med-14">
        <img v-for="(achievement, index) in profileInfo.achievements" class="ma-1 achievement"
             v-bind:src="achievement.url">
      </v-flex>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: "profile-info",
    data() {
      return {
        profile: {},
        showAvatar: false,
        links: []
      }
    },
    methods: {},
    props: {
      profileInfo: {}
    },
    mounted() {
      this.links[0] = 'https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png';
      this.links[1] = 'https://cdn.worldvectorlogo.com/logos/vkcom.svg';
      this.links[2] = 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png';
      this.links[3] = 'https://upload.wikimedia.org/wikipedia/commons/0/09/Ok_new_logo.png';
      this.links[4] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2000px-Telegram_logo.svg.png';
      switch (this.profileInfo.sex) {
        case "1":
          this.profileInfo.sex = "М";
          break;
        case "2":
          this.profileInfo.sex = "Ж";
          break;
        default:
          this.profileInfo.sex = "";
          break;
      }
      this.profileInfo.follows = true;
      this.profileInfo.you_following = false;
      this.profileInfo.owns = false;
    }

  }
</script>

<style scoped>
  .achievement {
    width: 27px;
    height: 27px;
  }

  .linkImage {
    width: 22px;
    height: 22px;
  }

  .material-icons {
    transform: scale(1.5);
  }

  .options {
    width: 43px;
  }

  .edit, .follow, .following {
    text-transform: none;
    width: 200px;
  }
</style>
