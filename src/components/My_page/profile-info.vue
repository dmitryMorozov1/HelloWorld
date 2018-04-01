<template>
  <v-app>
    <div class="mb-3 elevation-5 block">
      <v-container fluid class="pt-3 pr-3 pl-3 pb-1">
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
        <v-layout justify-left class="ageAndSex text-xs-left" style="color:#808080">{{profileInfo.age}} лет,
          {{profileInfo.sex}}
        </v-layout>
        <v-layout row justify-left class="buttons">
          <v-btn color="grey lighten-2" round v-if="!profileInfo.you_following && !profileInfo.owns"
                 class="follow elevation-5 pr-1 pl-1" block small>Подписаться
          </v-btn>
          <v-btn round v-if="profileInfo.you_following && !profileInfo.owns"
                 class="following elevation-5" block small>Вы подписаны
          </v-btn>
          <v-btn round v-if="profileInfo.owns" class="edit elevation-5 ml-3"
                 block small>Редактировать
          </v-btn>
          <v-btn round class="options elevation-5" small><i class="material-icons">more_horiz</i>
          </v-btn>
        </v-layout>
        <v-layout justify-center class="follows" v-if="profileInfo.follows===true">Подписан(а) на вас</v-layout>
        <v-layout justify-left class="about text-xs-left heading">О себе</v-layout>
        <v-layout class="aboutMe text-xs-left" style="color:#808080">{{profileInfo.about}}</v-layout>
        <v-container class="links mb-0">
          <v-tooltip bottom v-for="(link, index) in profileInfo.social" :key="link.url">
               <span slot="activator">
                  <a v-bind:href="link.url" target="_blank" class="link">
                   <img v-bind:src="link" class="linkImage">
                  </a>
                </span>
            <span>{{link.url}}</span>
          </v-tooltip>
        </v-container>
      </v-container>
    </div>
    <div class="mb-3 elevation-5 block">
      <v-container fluid class="pb-0 pt-1 pr-1">
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
    </div>
    <div class="elevation-5 block mb-2 pb-1">
      <v-container fluid class="pt-1">
        <p class="achievements text-xs-left heading" align="left">Достижения</p>
        <v-container class="achievements-wrapper left">
          <img v-for="(achievement, index) in profileInfo.achievements" class="ma-1 achievement"
               v-bind:src="achievement.url">
        </v-container>
      </v-container>
    </div>
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
    /**
     * Makes AJAX-request to get profile data
     * !!! Should be tested
     * At least window.location.href -- is never used by me
     * */
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
      this.profileInfo.you_following=true;
      this.profileInfo.owns = false;
    }

  }
</script>

<style scoped>
  .profilePhoto {
    border-radius: 2px;
    width: 100%;
    margin-left: auto !important;
  }

  .pic {
    text-align: center;
  }
  .links {
    display: flex;
    flex-direction: row;
    width: 45%;
    margin-left: 0px;
    padding: 0px;
    float: right;
  }



  .stats {
    margin: 0px;
    border: 2px solid #E0E0E0;
    border-radius: 2px;
    color: #808080;
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  .achievements-wrapper {
    display: flex;
    flex-direction: row;
    padding: 0px;
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
    background-color: #fafafa !important;

  }

  .edit, .follow, .following {
    text-transform: none;
    margin-left: 0px;
    margin-right: 0px;
    font-weight: bold;
    width: 100% !important;
  }

  .edit {
    background-color: #E0E0E0 !important;
  }

  .follow {
    background-color: #64B5F6 !important;
  }

  .following {
    background-color: #DCEDC8 !important;
  }

  .follows {
    text-align: center;
    color: #808080;
  }

  /*Fonts*/
  .profileName, .ageAndSex, .heading, .aboutMe, .stats-wrapper{
    font-family: 'Roboto', sans-serif;
  }

  .profileName {
    font-size: 20px;
  }

  .ageAndSex {
    font-size: 16px;
  }

  .heading {
    font-size: 18px;
  }

  .aboutMe, .stats-wrapper {
    font-size: 14px;
  }
</style>
