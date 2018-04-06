<template>
  <v-app>
    <v-content fluid class="pa-2 border mb-3 blocklight">
      <v-flex justify-center class="border mb-0" @click.stop="showAvatar = true"
              @onmouseout.stop="showAvatar = false">
        <img v-bind:src="profileInfo.avatar" align="center" width="100%">
      </v-flex>
      <v-dialog v-model="showAvatar" max-width="500px" width="50%">
        <img v-bind:src="profileInfo.avatar" width="100%" class="pa-0 ma-0">
      </v-dialog>
      <v-content class="text-xs-left med-20">{{profileInfo.name}}</v-content>
      <v-layout class="text-xs-left med-16 black--text">
        {{profileInfo.age}} лет{{profileInfo.sex}}
      </v-layout>
      <v-layout row>
        <v-layout justify-center column>
          <v-btn v-if="!profileInfo.you_following && !profileInfo.owns"
                 class="bigBtn med-16 border blockblue ma-0" style="height: 31px;" round depressed>
            Подписаться
          </v-btn>
          <v-btn v-if="profileInfo.you_following && !profileInfo.owns"
                 class="bigBtn med-16 border blockgreen mx-0" style="height: 31px;"
                 round depressed>Вы подписаны
          </v-btn>
          <v-btn v-if="profileInfo.owns" class="bigBtn mx-0 med-16 border blockgrey"
                 round depressed style="width: 100%; height: 31px;">Редактировать
          </v-btn>
          <v-layout justify-center class="textgrey-text thin-12" v-if="profileInfo.follows===true">
            Подписан(а) на вас
          </v-layout>
        </v-layout>
        <v-btn v-if="!profileInfo.owns" class="blocklight options border ml-2 "
               style="height: 31px; min-width: 43px;" round depressed>
          <v-icon class="material-icons">more_horiz</v-icon>
        </v-btn>
      </v-layout>
      <v-layout class="text-xs-left reg-14 textgrey-text">{{profileInfo.about}}
      </v-layout>
      <v-flex right row class="mb-0">
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

    <v-container fluid class="pb-0 pt-2 px-0 border mb-3 blocklight">
      <v-layout class="text-xs-left thin-18 ml-2 black-text">
        Статистика
      </v-layout>
      <v-layout wrap row class="mb-2 px-1">
        <v-layout style="width: 25%" v-for="(stat, index) in profileInfo.stats" :key="index"
                  align-center column class="border black--text pa-1 mb-2 mx-1">
          {{categories[index]}}
          <v-content>{{stat}}</v-content>
        </v-layout>
      </v-layout>
    </v-container>

    <v-container fluid class="pt-2 border mb-2 pb-0 pl-2 blocklight">
      <v-content class="text-xs-left thin-18 black-text" align="left">Достижения</v-content>
      <v-flex class="left med-14">
        <img v-for="achievement in profileInfo.achievements" class="ma-1 achievement"
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
        links: [],
        categories: {
          questions: "Вопросы",
          likes: "Лайки",
          shows: "Показы",
          rating: "Рейтинг",
          answers: "Ответы",
          dislikes: "Дизлайки",
        },
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
          this.profileInfo.sex = ", М";
          break;
        case "2":
          this.profileInfo.sex = ", Ж";
          break;
        default:
          this.profileInfo.sex = "";
          break;
      }
      this.profileInfo.follows = true;
      this.profileInfo.you_following = true;
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

  .bigBtn {
    text-transform: none;
    width: 200px;
  }
</style>
