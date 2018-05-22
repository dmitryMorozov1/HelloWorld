<template>
<div>
  <v-flex xs12>
    <v-card class="mt-2 comment-comp blocklight border">
      <v-container 
        fluid 
        grid-list-lg
        class="py-2">
        <v-layout row>
          <v-flex 
            xs1
            class="pb-0 pt-1">
            <a 
              target="_blank"
              :href="'profile/' + 1">
              <v-card-media
                contain
                class="avatar"
                :src="comment.img">
              </v-card-media>
            </a>
          </v-flex>
          <v-flex 
            xs11
            class="py-0">
            <div>
              <a 
              target="_blank"
              :href="'profile/' + 1"
              class="reg-16 black--text"
                > {{ comment.name }}
              </a>
              <div
                :class="(fullComment ? 'full-comment ' : 'small-comment ') +
                'pb-0 pt-1 reg-15 textdarkgrey-text mypage-comment-content'"
                > {{ comment.label }} 
              </div>
              <div 
                v-if="!fullComment"
                class="px-0 pt-1 textblue-text pointer"
                @click="showFullComment"
                > Показать полностью
                <v-icon 
                  small
                  class="textblue-text"
                  > expand_more
                </v-icon>
              </div>
            </div>
          </v-flex>
        </v-layout>
        <v-layout 
          row 
          class="reg-13">
          <v-flex xs1></v-flex>
          <v-flex 
            xs6
            class="pb-0 pt-1 textgrey-text"
              > {{ dateStr }}
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex 
            class="px-0 pb-0 pt-1 comment-likes pointer"
            @click="click_like">
            <v-icon 
              :class="(likeBtn.active ? 'blockblue-text' : 'textgrey-text lighten-1') + ' pb-1'"
              size="14px"> 
                thumb_up 
            </v-icon>
            <span :class="(likeBtn.active ? 'blockblue-text' : 'textgrey-text lighten-1')"> 
              {{ likeBtn.count }} 
            </span>
          </v-flex>
          <v-flex 
            class="px-0 pb-0 pt-1 comment-likes pointer"
            @click="click_dislike">
            <v-icon 
              :class="(dislikeBtn.active ? 'blockblue-text' : 'textgrey-text lighten-1') + ' pb-1'"
              size="14px"> 
                thumb_down 
            </v-icon>
            <span :class="(dislikeBtn.active ? 'blockblue-text' : 'textgrey-text lighten-1')"> 
              {{ dislikeBtn.count }} 
            </span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>

  </div>
</template>

<script>
import comment from './comment.vue'
export default {
  data() {
    return {
      date: { year: "", month: "", day: "", time: ""},
      dateStr: "",
      likeBtn: {
        count: this.comment.likes,
        active: false
      },
      dislikeBtn: {
        count: this.comment.dislikes,
        active: false
      },
      fullComment: true
    }
  },
  props: ['comment', 'index'],
  beforeMount () {
    this.addDate;
  },
  mounted() {
    switch(this.comment.like) {
      case 1: {
        this.likeBtn.active = true;
        this.dislikeBtn.active = false;
        break;
      }
      case -1: {
        this.likeBtn.active = false;
        this.dislikeBtn.active = true;
        break;
      }
      case 0: {
        this.likeBtn.active = false;
        this.dislikeBtn.active = false;
        break;
      }
    };
    if (document.getElementsByClassName('mypage-comment-content')[this.index].clientHeight > 52) 
    {
      this.fullComment = false;
    }
  },
  computed: {
    addDate() {
      let date = new Date(this.comment.date);
      let nowDate = new Date();
      this.date.year = date.getFullYear();
      let ofTheMonth = ('января,февраля,марта,апреля,мая,июня,июля,'+
                   'августа,сентября,октября,ноября,декабря').split(',');
      this.date.month = ofTheMonth[date.getMonth()]
      this.date.day = date.getDate();
      this.date.time = date.toLocaleString("ru", {
                              hour: 'numeric',
                              minute: 'numeric'
                            });   
      if (nowDate - date < 1000*60) 
        this.dateStr = "Только что";
      else if (nowDate - date < 1000*3600) {
        this.dateStr = ((nowDate - date)/(1000*60)|0) % 10 === 1 ?
        "" + ((nowDate - date)/(1000*60)|0) + " минуту назад" :
        "" + ((nowDate - date)/(1000*60)|0) + " минут назад";
      }
      else if (nowDate - date < 1000*3600*2) 
        this.dateStr = "1 час назад";
      else if (nowDate - date < 1000*3600*5) 
        this.dateStr = "" + ((nowDate - date)/(1000*3600)|0) + " часа назад";
      else if (nowDate - date < 1000*3600*13) 
        this.dateStr = "" + ((nowDate - date)/(1000*3600)|0) + " часов назад";
      else if (nowDate - date < 1000*3600*24 && this.date.day === nowDate.getDate()) 
        this.dateStr = "Сегодня в " + this.date.time;
      else if (nowDate - date < 1000*3600*24*2 && this.date.day === (nowDate.getDate() - 1)) 
        this.dateStr = "Вчера в " + this.date.time;
      else if (nowDate - date < 1000*3600*24*335)
      this.dateStr = "" + this.date.day + 
                     " " + this.date.month + 
                     " в " + this.date.time;
      else if (nowDate - date >= 1000*3600*24*335)
      this.dateStr = "" + this.date.day + 
                     " " + this.date.month + 
                     " " + this.date.year + " г.";
    }
  },
  methods: {
    click_like() {
      if(!this.likeBtn.active) {
        this.likeBtn.count++;
        this.likeBtn.active = true;
      }
      else {
        this.likeBtn.count--;
        this.likeBtn.active = false;
      };
      if(this.dislikeBtn.active) {
        this.dislikeBtn.count--;
        this.dislikeBtn.active = false;
      };
    },
    click_dislike() {
      if(!this.dislikeBtn.active) {
        this.dislikeBtn.count++;
        this.dislikeBtn.active = true;
      }
      else {
        this.dislikeBtn.count--;
        this.dislikeBtn.active = false;
      };
      if(this.likeBtn.active) {
        this.likeBtn.count--;
        this.likeBtn.active = false;
      };
    },
    showFullComment() {
      this.fullComment = true;
    }
  },
  components: {
    'comment' : comment
  }
}
</script>

<style scoped>
a { 
  text-decoration: none;
} 
.comment-comp {
  border-radius: 2px;
}
.avatar {
  height: 47px !important;
  width: 47px !important;
}
.small-comment {
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.full-comment {
  white-space: pre-line;
}
.pointer {
  cursor: pointer;
}
.comment-likes {
  width: 74px;
  flex: 0 1 auto;
}

</style>
