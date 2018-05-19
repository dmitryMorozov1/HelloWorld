<template>
  <div>
    <v-list-tile class="comment-list-tile">
      <a 
        target="_blank"
        :href="'profile/' + 1">
        <v-list-tile-avatar class="pt-1">
          <img :src="comment.img">
        </v-list-tile-avatar>
      </a>
      <v-list-tile-content>
        <v-list-tile-title>
          <a 
            class="reg-16 black--text"
            href="" 
            target="_blank">
              {{ comment.name }}
          </a>
        </v-list-tile-title>
        <v-list-tile-sub-title 
          class="reg-15 textdarkgrey-text open-question-comment-content"
        > {{ comment.label }} </v-list-tile-sub-title>
        <v-list-tile-title class="pt-1 textgrey-text">
          <v-layout class="comment-footer reg-13">
            <v-flex class="comment-date textgrey-text">
              {{ dateStr }}
            </v-flex>
            <v-flex 
              class="pointer textblue-text"
              @click="reply">
              Ответить
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex 
              class="mr-2 comment-likes pointer"
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
              class="comment-likes pointer"
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
        </v-list-tile-title>
        <v-divider 
          v-if="!last || comments.length"
          class="my-2">
        </v-divider>
      </v-list-tile-content>
    </v-list-tile>
    <comment 
      v-for="(comment, index) in comments" 
      :key="index"
      class="ml-6"
      :index="index"
      :last="index===comments.length-1 && last"
      :comment="comment"
      @reply="onReply">
    </comment>
  </div>
</template>

<script>
import comment from './comment.vue'
export default {
  name: 'comment',
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
      comments: []
    }
  },
  props: ['comment', 'last', 'index'],
  beforeMount () {
    this.addDate;
    this.addComments;
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
    },
    addComments() {
      this.comments = this.comment.comments;
    }
  },
  methods: {
    reply() {
      this.$emit('reply', { 
                commentId: this.comment.id, 
                commentName: this.comment.name,
                commentIndexes: [this.index],
                depthLevel: 0
                });
    },
    click_like() {
      if(!this.likeBtn.active) {
        this.likeBtn.count++;
        this.likeBtn.active = true;
      }
      else {
        this.likeBtn.count--;
        this.likeBtn.active = false;
      }
      if(this.dislikeBtn.active) {
        this.dislikeBtn.count--;
        this.dislikeBtn.active = false;
      }
    },
    click_dislike() {
      //this.comment.like = 1;
      if(!this.dislikeBtn.active) {
        this.dislikeBtn.count++;
        this.dislikeBtn.active = true;
      }
      else {
        this.dislikeBtn.count--;
        this.dislikeBtn.active = false;
      }
      if(this.likeBtn.active) {
        this.likeBtn.count--;
        this.likeBtn.active = false;
      }
    },
    onReply(arg) {
      let commentIndexes = arg.commentIndexes.concat(this.index);
      this.$emit('reply', { 
                commentId: arg.commentId, 
                commentName: arg.commentName,
                commentIndexes: commentIndexes,
                depthLevel: ++arg.depthLevel
                });
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
.open-question-comment-content {
  white-space: normal;
  line-height: 1.3;
}
.comment-footer .flex {
  flex: 0 1 auto;
}
.comment-date {
  width: 126px;
}
.comment-likes {
  width: 56px;
}
.comment-list-tile :nth-child(1) {
  height: inherit;
  align-items: start;
}
.pointer {
  cursor: pointer;
}
.qw {
  width: 160px;
}
.ml-6 {
  margin-left: 56px!important;
}
</style>
