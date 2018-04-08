<template>
  <v-container class="px-0">
    <!-- IN FUTURE ↓ change on function, that will open question (or add link) -->
    <v-flex @click="a">
      <v-card class="pointer">
<!-- question background image -->
        <v-card-media
          class="white--text img"
          height="304px"
          :src="question.background"
        >
        </v-card-media>
        <v-container class="top-content pa-0">
<!-- question owner, date, favorite icon -->
          <v-list two-line dense subheader class="transparent white--text">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="question.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="reg-15"> 
                  <a :href="'/profile/' + question.ownerId"> {{ question.ownerName }} </a>
                </v-list-tile-title>
                <v-list-tile-sub-title class="reg-15 textgrey-text"> 
                  {{ question.date }} 
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
      <!-- BTN: check favorite -->
                <v-btn icon :ripple="false" @click="fav">
                  <v-icon
                    color="white"
                    medium
                    v-if="question.favorite"
                  >star</v-icon>
                  <v-icon
                    color="white"
                    medium
                    v-else
                  >star_border</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
<!-- question center -->
          <v-container fill-height px-4 class="question-center">
            <v-flex>
    <!-- question title -->
              <v-flex pb-3 class="text-xs-center bold-22">
                <a class="question-title white--text" :href="'/question/' + question.id" >
                  {{ question.title }}
                </a>
              </v-flex>
    <!-- tags -->
              <v-flex class="text-xs-center">
                <v-btn 
                  v-for="(tag, index) in question.tags" 
                  :key="index"
                  outline
                  small
                  :ripple="false"
                  color="blue-grey lighten-3"
                  class="question-tag"
                  href=""
                >
                <!--    ↑ IN FUTURE add link to tag -->
                  {{ tag }}
                </v-btn>
              </v-flex>
            </v-flex>
          </v-container>
<!-- question bottom -->
          <v-container pa-0 pt-1>
            <v-flex>
            <v-flex left>
              <v-btn 
                v-for="(btn, index) in bottom_left" 
                :key="index" 
                :ripple="false"
                flat
                class="mr-0"
                @click="click_left(index)"
              >
                <v-icon 
                  :color="btn.active ? 'white' : 'grey lighten-1'"> {{ btn.icon }}</v-icon>
                <span class="grey--text text--lighten-2 pl-1"> {{ btn.count }} </span>
              </v-btn>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex right>
              <v-btn icon :ripple="false">
                <v-icon color="white">forum</v-icon>
              </v-btn>
              <v-btn icon :ripple="false">
                <v-icon color="white">share</v-icon>
              </v-btn>
              <v-btn icon :ripple="false">
                <v-icon color="white">more_horiz</v-icon>
              </v-btn>
            </v-flex>
            </v-flex>
          </v-container>
        </v-container>
      </v-card>
    </v-flex>
<!-- two answers -->
    <v-layout>
      <answer
        v-for="answer in question.answers"
        :key="answer.text"
        :answer="answer"
        class="answer"
      ></answer>
    </v-layout>
  </v-container>
</template>

<script>
import answer from './answer'

export default {
  data() {
    return {
      bottom_left: [
        {
          icon: 'visibility',
          count: this.question.watches
        },
        {
          icon: 'thumb_up',
          count: this.question.dislikes,
          active: false
        },
        {
          icon: 'thumb_down',
          count: this.question.likes,
          active: false
        }
      ],
      date: ''
    }
  },
  props: ['question'],
  mounted() {
    switch(this.question.like) {
      case 1: {
        this.bottom_left[1].active = true;
        this.bottom_left[2].active = false;
        break;
      }
      case -1: {
        this.bottom_left[1].active = false;
        this.bottom_left[2].active = true;
        break;
      }
      case 0: {
        this.bottom_left[1].active = false;
        this.bottom_left[2].active = false;
        break;
      }
    };
    this.date = this.question.date;
  },
  methods: {
    a() {
      // this.$router.push({ name: 'Top'})
    },
    tag_show(tag) {
      // this.$router.push({ name: 'News'})
    },
    click_left(index) {
      let index2; // for like/dislike other button
      switch(index) {
        case 1: {
          index2 = 2;
          break;
        }
        case 2: {
          index2 = 1;
          break;
        }
        default: {
          return;
        }
      }
      if (this.bottom_left[index].active) {
        this.bottom_left[index].count -= 1;
      }
      else {
        this.bottom_left[index].count += 1;
        if (this.bottom_left[index2].active) {
          this.bottom_left[index2].count -= 1;
          this.bottom_left[index2].active = false;
        }
      }
      this.bottom_left[index].active = !this.bottom_left[index].active;
    },
    fav() {
      this.question.favorite = !this.question.favorite;
    }
  },
  components: {
    'answer' : answer
  }
}
</script>

<style scoped>
.img {
  -webkit-filter: brightness(0.5);
  filter: brightness(0.5);
  border-radius: 2px;
}
.main {
  border-radius: 2px;
}
.top-content {
  position: absolute;
  top: 0%;
}
.question-center {
  min-height: 188px;
  height: 188px;
}
.question-tag {
  font-size: 12px;
  font-weight: 300;
  border-radius: 5px;
}
.pointer {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
.answer {
  width: 50%;
  line-height: 19px;
  margin-right: 10px;
  cursor: pointer;
}
.answer:nth-last-child(1) {
  margin-right: 0px;
}
</style>
