<template>
  <div class="profileInfo">
    <img v-bind:src="profileInfo.avatar" id="Photo" class="profilePhoto elevation-3"
         onclick="this.style.width = document.body.clientWidth+'px'"
         onmouseout="this.style.width = 100+'%'">
    <div class="profileName display-2" align="left">{{profileInfo.name}}</div>
    <div class="ageAndSex" align="left" style="color:#808080">{{profileInfo.age}} лет,
      {{profileInfo.sex === 1? "М" : "Ж"}}
    </div>
    <div class="links">
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
    </div>
    <div class="about display-1" align="left">О себе</div>
    <div class="aboutMe" align="left" style="color:#808080">{{profileInfo.about}}</div>
    <div class="stats-wrapper">
      <div class="statistics display-1" align="left" style="margin-bottom: 5px;">
        Статистика
      </div>
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
    <div class="achievements display-1" align="left">Достижения</div>
    <div class="achievements-wrapper">
      <img v-bind:src="profileInfo.achievements.achievement1.url" class="achievement">
      <img v-bind:src="profileInfo.achievements.achievement2.url" class="achievement">
      <img v-bind:src="profileInfo.achievements.achievement3.url" class="achievement">
      <img v-bind:src="profileInfo.achievements.achievement4.url" class="achievement">
      <img v-bind:src="profileInfo.achievements.achievement5.url" class="achievement">
      <img v-bind:src="profileInfo.achievements.achievement6.url" class="achievement">
      <img v-bind:src="profileInfo.achievements.achievement7.url" class="achievement">
    </div>
  </div>
</template>

<script>
  export default {
    name: "profile-info",
    data() {
      return {
        profileInfo: {
          id: "",
          name: "",
          sex: "",
          age: "",
          about: "",
          avatar: "",
          stats: {
            questions: "",
            shows: "",
            answers: "",
            likes: "",
            rating: "",
            dislikes: "",
          },
          achievements: {
            achievement1: {
              url: "",
              name: ""
            },
            achievement2: {
              url: "",
              name: ""
            },
            achievement3: {
              url: "",
              name: ""
            },
            achievement4: {
              url: "",
              name: ""
            },
            achievement5: {
              url: "",
              name: ""
            },
            achievement6: {
              url: "",
              name: ""
            },
            achievement7: {
              url: "",
              name: ""
            },
          },
          social: {
            facebook: "",
            vk: "",
            twitter: "",
            ok: "",
            telegram: ""
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
        })
    }

  }
</script>

<style scoped>
  .profileInfo {
    background-color: #fafafa;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 40%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
  }

  .profilePhoto {
    /*box-shadow: 0 0 10px rgba(0,0,0,0.5);*/
    border-radius: 5px;
    width: 100%;
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

  .stats-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0px;
    cursor: default;
  }

  .stats-wrapper-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
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

  .about, .profileName, .statistics, .achievements {
    font-weight: bold;
    font-size: larger;
  }

  .linkImage {
    width: 100%;
    height: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }

  .link {
    margin-left: 0px;
    margin-right: 1px;
    width: 100%;
    height: 100%;
  }

  .stats-wrapper-column {
    display: flex;
    flex-direction: column;
    width: 32%;
    margin-left: 0px;
    margin-right: 5px;
    cursor: default;
  }

  .questions, .shows, .answers {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 0px;
  }

</style>
