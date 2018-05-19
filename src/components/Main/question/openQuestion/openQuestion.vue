<!-- 
склонение комментарий
удалить свой комментарий, редактировать
-->
<template>
  <v-card class="blocklight">
    <v-btn 
      absolute
      right
      icon 
      flat  
      class="mt-2"
      color="red"
      :ripple="false"
      @click="closeComponent()">
      <v-icon color="grey darken-1">
        clear
      </v-icon>
    </v-btn>
    <v-layout class="pl-2 pt-2">
      <question-author :question="question"></question-author>
    </v-layout>
    <v-layout class="pb-2">
      <question 
        class="px-4"
        :question="question">
      </question>
    </v-layout>
    <v-list 
      v-if="!!comments.length"
      class="py-0 px-2 mb-2 blocklight">
      <v-subheader class="reg-18 black--text"> 
        {{ comments.length }} {{ commentSubHeader }} 
      </v-subheader>
      <v-divider class="mb-2 mx-3"></v-divider>
      <comment 
        v-for="(comment, index) in comments" 
        :key="index"
        :index="index"
        :comment="comment"
        :last="index===comments.length-1"
        @reply="onReply">
      </comment>
      <v-divider class="mb-2 mt-4 mx-3"></v-divider>
    </v-list>
  <v-layout class="px-4 pt-2 pb-2">
    <v-list-tile-avatar>
      <img :src="person.img">
    </v-list-tile-avatar>
    <v-flex>
      <v-text-field
        multi-line
        solo
        auto-grow
        no-resize
        class="input-open-question-new-comment blocklight blocklightblue-text border"
        placeholder="Введите ваш комментарий"
        v-model="newComment"
        :rows="2"
        @keyup.ctrl.enter="sendComment()">
      </v-text-field>
    </v-flex>
  </v-layout>
  <v-layout 
    class="pr-3 pb-2">
    <v-flex 
      xs12 
      class="text-xs-right">
      <span v-if="replyId!==''">
        <span class="textblue-text reg-15">
          {{ replyName }}
        </span>
        <span class="textdarkgrey-text reg-15">
          получит ответ
        </span>
        <v-btn 
        icon 
        flat  
        class="ma-0 clear-btn textblue-text"
        :ripple="false"
        @click="clearReply">
          <v-icon 
            class="textdarkgrey-text"
            size="18px">
              clear
          </v-icon>
        </v-btn>
      </span>
      <v-btn 
        class="capitalize send-btn med-16 blocklight-text blockblue"
        round
        depressed
        @click.native="sendComment()">
          Отправить
      </v-btn>
    </v-flex>
  </v-layout>
  </v-card>
</template>

<script>
import Question from './question'
import Comment from './comment.vue'
import QuestionAuthor from './questionAuthor.vue'

export default {
  data() {
    return {
      comments: [],
      person: { id: "1", name: 'Петя Говядко', img: "https://pp.userapi.com/c630128/v630128670/2d68/hJi8FZBqMYQ.jpg"},
      newComment: "",
      replyId: '',
      replyName: '',
      depthLevel: 0,
      commentIndexes: []
     }
  },
  props: ['question'],
  beforeMount () {
    this.addComments;
  },
  computed: {
    addComments() {
      this.comments = [
        { id: '1', 
          name: 'Петя Говядко', 
          like: 1, 
          likes: '1', 
          dislikes: '0', 
          label: 'Ответил на ваш', 
          date: '2018-04-22T23:33:00Z', 
          img: "http://memesmix.net/media/created/m6tnhm.jpg",
          comments: [{
            id: '121', 
            name: 'wqeq wqew', 
            like: 1, 
            likes: '1', 
            dislikes: '12', 
            label: 'dsadsd sdas dsad sdsad', 
            date: '2018-04-22T23:33:00Z', 
            img: "http://memesmix.net/media/created/m6tnhm.jpg",
            comments: [],
            img: "http://memesmix.net/media/created/m6tnhm.jpg",
            },
            {
            id: '12221', 
            name: 'wqeq wqew', 
            like: 1, 
            likes: '1', 
            dislikes: '12', 
            label: 'd******d', 
            date: '2018-04-22T23:33:00Z',
            img: "http://memesmix.net/media/created/m6tnhm.jpg", 
            comments: [{
              id: '121231', 
              name: 'wqeq wqew', 
              like: 1, 
              likes: '1', 
              dislikes: '12', 
              label: 'fsdgdsf', 
              date: '2018-04-22T23:33:00Z', 
              comments: [],
              img: "http://memesmix.net/media/created/m6tnhm.jpg",
              },
              {
              id: '12221231', 
              name: 'wqeq wqew', 
              like: 1, 
              likes: '1', 
              dislikes: '12', 
              label: '&&&&', 
              date: '2018-04-22T23:33:00Z', 
              comments: [{
                id: '121231', 
                name: 'wqeq wqew', 
                like: 1, 
                likes: '1', 
                dislikes: '12', 
                label: 'ВАУ', 
                date: '2018-04-22T23:33:00Z', 
                img: "http://memesmix.net/media/created/m6tnhm.jpg",
                comments: [],
              }],
            }],
          },
          {
            id: '1221', 
            name: 'wqeq wqew', 
            like: 1, 
            likes: '1', 
            dislikes: '12', 
            label: 'ds@@@@@@', 
            date: '2018-04-22T23:33:00Z', 
            img: "http://memesmix.net/media/created/m6tnhm.jpg",
            comments: [],
          }]
        },
        { id: '2', 
          name: 'Петя Говядко', 
          like: -1, 
          likes: '123', 
          dislikes: '1', 
          label: 'Прокомментsdfsdfsdfsdf jfdfkdjsf kljf dlkfjdsfkl ;sdkf psjd fsdkjf sdf jsdfkldj sdkfj sdkfj sdfkj sdlfk jsdflksdjfsldkfjsd lkfsdjf skld fjsdlfksdj fsdlkfjdsfl sdkfjsdfdgfdp gkjfdpgjfd goifhjg odfjg f;dgkjfd;gdjfg idfjgs;djfg;ofdighsfdj;p ojsfogj g;s;fdjgp ijfdio hdf sd hndljg ;ff kj kdjfodi fkjsdf oijsdf oisk fjsoidfj sdfi jsdapigjfd iog jigsh fdg fdgfg fdgdfg dgfigpj f dspaijd gifjd a[oidfj dsfjaispf jsd jdg huifh dsofk jdsf sdflsdkfjsdfkljsdflsdkfjsdfsdklfjsdlfsd ijfsdf;dgjsf; jdsdировала ла-ла-ла-ла-ла вам', 
          date: '2018-04-23T15:00:00Z', 
          img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg",
          comments: []
        },
        { id: '3', 
          name: 'Костя Говядко', 
          like: 0,
          likes: '12433', 
          dislikes: '31233', 
          label: 'Подписался на вас',  
          date: '2018-05-18T01:37:00Z', 
          img: "http://www.ovsyanko.ru/kosta/myself.jpg", 
          comments: []
        },
        { id: '12', 
          name: 'Костя Говядко', 
          like: 1,
          likes: '123', 
          dislikes: '43', 
          label: 'Подписалась на вас',  
          date: '2018-04-21T20:37:00Z', 
          img: "http://www.ovsyanko.ru/kosta/myself.jpg",
          comments: []
        },
        { id: '13', 
          name: 'Петя Говядко', 
          like: 1, 
          likes: '13', 
          dislikes: '3', 
          label: 'Съел', 
          date: '2010-03-29T15:00:00Z', 
          img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg",
          comments: [{
            id: '1212231', 
            name: 'wqeq wqew', 
            like: 1, 
            likes: '1', 
            dislikes: '12', 
            label: 'ВАУ', 
            date: '2018-04-22T23:33:00Z', 
            img: "http://memesmix.net/media/created/m6tnhm.jpg",
            comments: [{
              id: '1217231', 
              name: 'wqeq wqew', 
              like: 1, 
              likes: '1', 
              dislikes: '12', 
              label: 'ВАУ', 
              date: '2018-04-22T23:33:00Z', 
              img: "http://memesmix.net/media/created/m6tnhm.jpg",
              comments: []
            }]
          },
          { id: '1281231', 
            name: 'wqeq wqew', 
            like: 1, 
            likes: '1', 
            dislikes: '12', 
            label: 'ВАУ', 
            date: '2018-04-22T23:33:00Z', 
            img: "http://memesmix.net/media/created/m6tnhm.jpg",
            comments: []
          }]
      }];
    },
    commentSubHeader() {
      let number = this.comments.length;
      let titles = ['комментарий','комментария','комментариев'];
      let cases = [2, 0, 1, 1, 1, 2];  
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
    }
  },
  methods: {
    closeComponent() {
      this.$emit('closeComponent');
    },
    sendComment() {
      if(this.newComment !== "") {
        let newObjComment = { 
          id: this.person.id, 
          name: this.person.name, 
          like: 0, 
          likes: '0', 
          dislikes: '0', 
          label: this.newComment.trim(), 
          date: new Date(), 
          img: this.person.img,
          comments: []
        }
        if(this.replyId === '') {
          this.comments.push(newObjComment);
        }
        else {
          // вставить туда, кому отвечаем
          let thisComments = this.comments;
          for(let i = this.depthLevel; i >= 0; i--) {
            thisComments = thisComments[this.commentIndexes[i]].comments;
          }
          thisComments.push(newObjComment);
          this.replyId = '';
          this.replyName = '';
          this.commentIndexes = [];
          this.depthLevel = 0;
        }
          this.newComment = '';
      }
    },
    onReply(arg) {
      this.commentIndexes = arg.commentIndexes;
      this.depthLevel = arg.depthLevel;
      this.replyId = arg.commentId;
      this.replyName = arg.commentName;
      document.getElementsByClassName('input-open-question-new-comment')[0]
              .children[0].children[0].focus();
    },
    clearReply() {
      this.replyId = '';
      this.replyName = '';
    }
  },
  components: {
    'question' : Question,
    'comment' : Comment,
    'question-author' : QuestionAuthor
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
hr {
  border: none;
  background-color: rgba(217, 217, 217, 0.4); 
  height: 1px; 
}
.subheader {
  height: 32px;
}
.send-btn {
  width: 140px;
  height: 32px;
}
.clear-btn {
  width: 26px;
  height: 26px;
}
.divider {
  width: auto;
}
</style>
