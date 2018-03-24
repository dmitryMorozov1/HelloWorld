<template>
  <v-app>
    <v-container fluid class="profileInfo elevation-5 pa-2">
      <v-content class="mb-3 elevation-5 block" >
        <v-container fluid>
          <img v-bind:src="profileInfo.avatar" id="Photo" class="profilePhoto elevation-3"
               onclick="this.style.width = document.body.clientWidth+'px'"
               onmouseout="this.style.width = 100+'%'">
          <p class="profileName text-xs-left">{{profileInfo.name}}</p>
          <div class="ageAndSex text-xs-left" style="color:#808080">{{profileInfo.age}} лет,
            {{profileInfo.sex}}
          </div>
          <v-container class="links">
            <v-tooltip bottom v-for="link in profileInfo.social">
               <span slot="activator">
                  <a v-bind:href="link" target="_blank" class="link">
                   <img v-bind:src="'./static/facebook.png'" class="linkImage">
                  </a>
                </span>
              <span>{{link}}</span>
            </v-tooltip>
          </v-container>
          <p class="about text-xs-left heading">О себе</p>
          <p class="aboutMe text-xs-left" style="color:#808080">{{profileInfo.about}}</p>
        </v-container>
      </v-content>
      <v-content class="mb-3 elevation-5 block">
        <v-container fluid>
          <div class="stats-wrapper">
            <p class="statistics text-xs-left heading" align="left" style="margin-bottom: 5px;">
              Статистика
            </p>
            <div class="stats-wrapper-row mb-2">
              <div class="stats-wrapper-column mr-2">
                <div class="questions stats pa-1 mb-2">Вопросы <p>{{profileInfo.stats.questions}}</p></div>
                <div class="likes stats pa-1">Лайки <p>{{profileInfo.stats.likes}}</p></div>
              </div>
              <div class="stats-wrapper-column mr-2">
                <div class="shows stats pa-1 mb-2">Показы <p>{{profileInfo.stats.shows}}</p></div>
                <div class="rating stats pa-1">Рейтинг <p>{{profileInfo.stats.rating}}</p></div>
              </div>
              <div class="stats-wrapper-column mr-2">
                <div class="answers stats pa-1 mb-2">Ответы <p>{{profileInfo.stats.answers}}</p></div>
                <div class="dislikes stats pa-1">Дизлайки <p>{{profileInfo.stats.dislikes}}</p></div>
              </div>
            </div>
          </div>
        </v-container>
      </v-content>
      <v-content class="elevation-5 block">
        <v-container fluid>
          <p class="achievements text-xs-left heading" align="left">Достижения</p>
          <v-container class="achievements-wrapper left">
            <img v-for="achievment in profileInfo.achievements" class="ma-1 achievement" v-bind:src="achievment.url">
          </v-container>
        </v-container>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: "profile-info",
    data() {
      return {
        profileInfo: {
        }
      }
    },
    methods: {},
    props: {},
    /**
     * Makes AJAX-request to get profile data
     * !!! Should be tested
     * At least window.location.href -- is never used by me
     * */
    mounted() {
      this.profileInfo={
        id:"1",
        name:"Елизавета Седова",
        sex:"Ж",
        age:"20",
        about:"Студентка 3 курса национального исследовательского " +
        "университета информационных технологий, механики и " +
        "оптики",
        avatar:"./static/profileImage.png",
        stats:{
          questions:"94",
          shows:"123",
          answers:"321",
          likes:"94",
          rating:"123",
          dislikes:"321",
        },
        achievements:{
          achievement1:{
            url:"./static/facebook.png",
            name:"name1"
          },
          achievement2:{
            url:"./static/facebook.png",
            name:"name2"
          },
          achievement3:{
            url:"./static/facebook.png",
            name:"name3"
          },
          achievement4:{
            url:"./static/facebook.png",
            name:"name4"
          },
          achievement5:{
            url:"./static/facebook.png",
            name:"name5"
          },
          achievement6:{
            url:"./static/facebook.png",
            name:"name6"
          },
          achievement7:{
            url:"./static/facebook.png",
            name:"name7"
          },
        },
        social:{
          facebook:"https://vk.com/id224332750",
          vk:"https://vk.com/id224332750",
          twitter:"https://vk.com/id224332750",
          ok:"https://vk.com/id224332750",
          telegram:"https://vk.com/id224332750"
        },
      }
      /*let photo=this.$el.getElementsByClassName("profilePhoto")[0];
      photo.onclick=this.changePhotoSize();*/
      /*localhost:8080/profile/1*/
      /*
      let headers = new Headers();
      let options = {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        cache: 'default'
      };
      let profileUrl = window.location.href;
      console.log(this.name);
      fetch(profileUrl, options)
        .then(function (response) {
          this.profileInfo = response.body;
          switch (profileInfo.sex){
            case 1:
                  profileInfo.sex="М";
                  break;
            case 2:
                  profileInfo.sex="Ж";
                  break;
            default:
                  profileInfo.sex="";
                  break;
          }
        })*/
    }

  }
</script>

<style scoped>
  .profileInfo {
    background-color: #c6d7e9;
    width: 40%;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
  }

  .profilePhoto {
    border-radius: 5px;
    height: 50%;
  }
  .links {
    display: flex;
    flex-direction: row;
    width: 45%;
    margin-left: 0px;
    padding: 0px;
  }

  .stats-wrapper-row {
    display: flex;
    flex-direction: row;
  }

  .stats {
    margin: 0px;
    border: 1px solid #808080;
    border-radius: 5px;
    color: #808080;
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  .achievements-wrapper {
    display: flex;
    flex-direction: row;
  }

  .achievement {
    width: 10%;
    height: 10%;
  }
  .linkImage {
    width: 100%;
    height: 100%;
  }

  .stats-wrapper-column {
    display: flex;
    flex-direction: column;
    width: 33%;
    margin-left: 0px;
  }
  p {
    margin-bottom: 0px;
  }
  .block{
       background-color: #fafafa !important;
       border-radius: 5px;
  }
  /*Fonts*/
  .profileName,.ageAndSex,.heading,.aboutMe,.stats-wrapper{
    font-family: 'Roboto', sans-serif;
  }
  .profileName {
    font-size: 20px;
  }
  .ageAndSex{
    font-size: 16px;
  }
  .heading{
    font-size: 18px;
  }
  .aboutMe{
    font-size: 14px;
  }
  .stats-wrapper{
    font-size: 14px;
  }
</style>
