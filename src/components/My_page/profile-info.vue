<template>
  <v-app>
    <div class="mb-3 elevation-5 block">
      <v-container fluid class="pt-3 pr-3 pl-2 pb-1">
        <p class="pic" @click.stop="showAvatar = true"
           @onmouseout.stop="showAvatar = false">
          <img v-bind:src="profileInfo.avatar" id="Photo" align="center"
               class="profilePhoto elevation-3">
        </p>
        <v-dialog v-model="showAvatar" max-width="50%">
          <v-layout justify-center style="text-align: center">
            <img v-bind:src="profileInfo.avatar" style="width: 100%">
          </v-layout>
        </v-dialog>
        <p class="profileName text-xs-left">{{profileInfo.name}}</p>
        <v-layout justify-left class="ageAndSex text-xs-left" style="color:#808080">
          {{profileInfo.age}} лет,
          {{profileInfo.sex}}
        </v-layout>
        <v-btn color="blue lighten-2" round v-if="!profileInfo.you_following && !profileInfo.owns"
               class="follow elevation-5" icon>Подписаться
        </v-btn>
        <v-btn round v-if="profileInfo.you_following && !profileInfo.owns"
               class="following elevation-5" color="light-green lighten-4" icon>Вы подписаны
        </v-btn>
        <v-btn round v-if="profileInfo.owns" class="edit elevation-5 ml-3"
               icon color="grey lighten-2">Редактировать
        </v-btn>
        <v-btn round class="options elevation-5 pa-0 ma-0" icon color="grey lighten-2"><i
          class="material-icons">more_horiz</i>
        </v-btn>
        <v-layout justify-center class="follows" v-if="profileInfo.follows===true">Подписан(а) на
          вас
        </v-layout>
        <v-layout justify-left class="about text-xs-left heading">О себе</v-layout>
        <v-layout class="aboutMe text-xs-left" style="color:#808080">{{profileInfo.about}}
        </v-layout>
        <v-flex right row class="links mb-0">
          <v-tooltip bottom v-for="(link, index) in profileInfo.social" :key="link.url">
               <span slot="activator">
                  <a v-bind:href="link.url" target="_blank" class="link">
                   <img v-bind:src="link" class="linkImage">
                  </a>
                </span>
            <span>{{link.url}}</span>
          </v-tooltip>
        </v-flex>
      </v-container>
    </div>

    <v-container fluid class="pb-0 pt-2 pr-2 pl-2 elevation-5 mb-3 block">
      <div class="stats-wrapper">
        <v-layout justify-left class="statistics text-xs-left heading" style="margin-bottom: 5px;">
          Статистика
        </v-layout>
        <v-layout row class="mb-2">
          <v-layout column class="mr-2">
            <div class="questions stats pa-1 mb-2" align="center">Вопросы<p>
              {{profileInfo.stats.questions}}</p></div>
            <div class="likes stats pa-1" align="center">Лайки <p>{{profileInfo.stats.likes}}</p>
            </div>
          </v-layout>
          <v-layout column class="mr-2">
            <div class="shows stats pa-1 mb-2" align="center">Показы<p>
              {{profileInfo.stats.shows}}</p></div>
            <div class="rating stats pa-1" align="center">Рейтинг<p>
              {{profileInfo.stats.rating}}</p></div>
          </v-layout>
          <v-layout column class="mr-2">
            <div class="answers stats pa-1 mb-2" align="center">Ответы<p>
              {{profileInfo.stats.answers}}</p>
            </div>
            <div class="dislikes stats pa-1" align="center">Дизлайки<p>
              {{profileInfo.stats.dislikes}}</p>
            </div>
          </v-layout>
        </v-layout>
      </div>
    </v-container>

    <v-container fluid class="pt-2 elevation-5 mb-2 pb-0 pl-2 block">
      <p class="achievements text-xs-left heading" align="left">Достижения</p>
      <v-flex class="achievements-wrapper left">
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
      }
    },
    methods: {},
    props: {
      profileInfo: {}
    },
    mounted() {
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
      this.profileInfo.you_following = true;
      this.profileInfo.owns = false;
    }

  }
</script>

<style scoped>
  .profilePhoto {
    border-radius: 2px;
    width: 103%;
    margin-left: auto !important;
  }

  .pic {
    text-align: center;
  }

  .stats {
    margin: 0px;
    border: 2px solid #E0E0E0;
    border-radius: 2px;
    color: #808080;
    width: 100%;
    height: 100%;
    vertical-align: top;
    font-weight: 500;
    font-size: 14px;
  }

  .achievement {
    width: 27px;
    height: 27px;
  }

  .linkImage {
    width: 22px;
    height: 22px;
  }

  p {
    margin-bottom: 0px;
  }

  .material-icons {
    transform: scale(1.8);
  }

  .block {
    background-color: white !important;
    border-radius: 2px;
  }

  .options {
    width: 43px;
  }

  .edit, .follow, .following {
    text-transform: none;
    margin-left: 0px;
    margin-right: 0px;
    font-weight: 500;
    width: 200px;
  }

  .edit {
    background-color: #E0E0E0 !important;
  }

  .follows {
    text-align: center;
    color: #808080;
  }

  /*Fonts*/

  .profileName {
    font-size: 20px;
    font-weight: 500;
  }

  .ageAndSex {
    font-size: 16px;
    font-weight: 500;
  }

  .heading {
    font-size: 18px;
  }

  .aboutMe, .stats-wrapper {
    font-size: 14px;
    font-weight: 400;
  }
</style>
