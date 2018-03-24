<template>
  <v-app>
    <v-container fluid class="profileInfo">
      <v-content class="mb-3 elevation-5 block" >
        <v-container fluid>
          <img v-bind:src="profileInfo.avatar" id="Photo" class="profilePhoto elevation-3"
               onclick="this.style.width = document.body.clientWidth+'px'"
               onmouseout="this.style.width = 100+'%'">
          <p class="profileName text-md-right" align="left">{{profileInfo.name}}</p>
          <div class="ageAndSex " align="left" style="color:#808080">{{profileInfo.age}} лет,
            {{profileInfo.sex}}
          </div>
          <v-container class="links">
              <v-tooltip bottom>
                <span slot="activator">
                  <a v-bind:href="profileInfo.social.facebook" target="_blank" class="link">
                   <img v-bind:src="'./static/facebook.png'" class="linkImage">
                  </a>
                </span>
                <span>{{profileInfo.social.facebook}}</span>
              </v-tooltip>

              <v-tooltip bottom>
               <span slot="activator">
                 <a v-bind:href="profileInfo.social.vk" target="_blank" class="link">
                   <img v-bind:src="'./static/facebook.png'" class="linkImage">
                 </a>
               </span>
               <span>{{profileInfo.social.vk}}</span>
              </v-tooltip>

              <v-tooltip bottom>
               <span slot="activator">
                <a v-bind:href="profileInfo.social.twitter" target="_blank" class="link">
                  <img v-bind:src="'./static/facebook.png'" class="linkImage">
                </a>
               </span>
               <span>{{profileInfo.social.twitter}}</span>
              </v-tooltip>

              <v-tooltip bottom>
               <span slot="activator">
                <a v-bind:href="profileInfo.social.ok" target="_blank" class="link">
                  <img v-bind:src="'./static/facebook.png'" class="linkImage">
                </a>
               </span>
               <span>{{profileInfo.social.ok}}</span>
              </v-tooltip>

              <v-tooltip bottom>
               <span slot="activator">
                <a v-bind:href="profileInfo.social.telegram" target="_blank" class="link">
                  <img v-bind:src="'./static/facebook.png'" class="linkImage">
                </a>
               </span>
               <span>{{profileInfo.social.telegram}}</span>
              </v-tooltip>
            </v-container>
            <p class="about text-md-right" align="left">О себе</p>
            <p class="aboutMe text-lg-right" align="left" style="color:#808080">{{profileInfo.about}}</p>
          </v-container>
      </v-content>

      <v-content class="mb-3 elevation-5 block">
        <v-container fluid>
          <div class="stats-wrapper">
            <p class="statistics text-md-right" align="left" style="margin-bottom: 5px;">
              Статистика
            </p>
            <div class="stats-wrapper-row">
              <div class="stats-wrapper-column">
                <div class="questions stats">Вопросы <p>{{profileInfo.stats.questions}}</p></div>
                <div class="likes stats">Лайки <p>{{profileInfo.stats.likes}}</p></div>
              </div>
              <div class="stats-wrapper-column">
                <div class="shows stats">Показы <p>{{profileInfo.stats.shows}}</p></div>
                <div class="rating stats">Рейтинг <p>{{profileInfo.stats.rating}}</p></div>
              </div>
              <div class="stats-wrapper-column">
                <div class="answers stats">Ответы <p>{{profileInfo.stats.answers}}</p></div>
                <div class="dislikes stats">Дизлайки <p>{{profileInfo.stats.dislikes}}</p></div>
              </div>
            </div>
          </div>
        </v-container>
      </v-content>
      <v-content class="elevation-5 block">
        <v-container fluid>
          <p class="achievements text-md-right" align="left">Достижения</p>
          <div class="achievements-wrapper">
            <img v-bind:src="profileInfo.achievements.achievement1.url" class="achievement">
            <img v-bind:src="profileInfo.achievements.achievement2.url" class="achievement">
            <img v-bind:src="profileInfo.achievements.achievement3.url" class="achievement">
            <img v-bind:src="profileInfo.achievements.achievement4.url" class="achievement">
            <img v-bind:src="profileInfo.achievements.achievement5.url" class="achievement">
            <img v-bind:src="profileInfo.achievements.achievement6.url" class="achievement">
            <img v-bind:src="profileInfo.achievements.achievement7.url" class="achievement">
          </div>
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
                  profileInfo.sex="Не указан";
                  break;
          }
        })*/
    }

  }
</script>

<style scoped>
  .profileInfo {
    background-color: #c6d7e9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 40%;
    padding: 10px;
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
    width: 40%;
    height: 40%;
    margin-left: 0px;
    padding: 0px;
  }

  .stats-wrapper-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 3px;
    cursor: default;
  }

  .stats {
    margin: 0px;
    border: 1px solid #808080;
    border-radius: 5px;
    padding: 1px 1px 5px 1px;
    color: #808080;
    width: 100%;
    height: 100%;
    word-wrap: break-word;
    float: left;
    cursor: default;
    vertical-align: top;
  }

  .achievements-wrapper {
    display: flex;
    flex-direction: row;
  }

  .achievement {
    width: 10%;
    height: 10%;
    margin: 2px;
  }



  .linkImage {
    width: 100%;
    height: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }

  .stats-wrapper-column {
    display: flex;
    flex-direction: column;
    width: 33%;
    margin-left: 0px;
    margin-right: 20px;
    cursor: default;
  }

  .questions, .shows, .answers {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 0px;
  }
  .block{
       background-color: #fafafa !important;
  }

</style>
