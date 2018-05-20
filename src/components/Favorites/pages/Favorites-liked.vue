<template>
  <v-container class="pa-0">
    <v-container 
      v-if="sortedList.length"
      class="pa-0">
      <question class="pb-4"
        v-for="question in sortedList" 
        :key="question.id" 
        :question="question"
        @callQuestionRecommendation="callQuestionRecommendation"
        @callComplain="callComplain"
        @callOpenQuestion="callOpenQuestion">
      </question>
    </v-container>
    <v-layout 
      v-else
      row
      wrap
      align-center
      class="empty-comp med-20 blocklight black--text border">
        <v-flex 
          xs12 
          class="text-xs-center"> 
          <v-layout d-block>
            <v-flex class="pb-3">
              <img 
                class="empty-img" 
                src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925290Love.png"
              >
            </v-flex>
            <v-flex class="pb-5">
              Здесь будут отображаться ваши любимые вопросы
            </v-flex>
          </v-layout>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import question from '@/components/Main/question/question'

export default {
  data() {
    return {
      questions: []
    }
  },
  props: ['questionSort'],
  computed: {
    sortedList () {
      let questions = this.questions;
      questions = questions.filter(question => {
        return question.like === 1;
      });
      switch(this.questionSort){
        case 'rating': return questions.sort (
          function(d1, d2) {
            return (d1.likes-d1.dislikes) < (d2.likes-d2.dislikes)
          });
        case 'watches': return questions.sort (
          function(d1, d2) {
            return d1.watches < d2.watches
          });
        case 'date': return questions.sort (
          function(d1, d2) {
            return Date.parse(d1.date) < Date.parse(d2.date)
          });
        default: return questions;
      }
    }
  },
  created() {
    this.questions = [
      {
        id: 4,
        ownerName: 'Елизавета Седова',
        avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
        background: 'https://media.tvzvezda.ru/news/vstrane_i_mire/content/201708160620-7kh1.htm/1.jpg',
        date: '29.03.2018 15:00:00',
        title: 'Меняет ли смена фёмилии/имеёи судьбу чёловека?',
        like: 0,
        favorite: false,
        answered: true, // is answered
        watches: 920,
        likes: 456,
        dislikes: 118,
        tags: ['меняет', 'смена', 'фамилия', 'имя', 'судьба'],
        answers: [
          {
            text: `Конечно меняет! Фамилия - это целый род, 
                   имеющий свою карму, как хорошую, так и плохую`,
            replies: 3,
            chosen: true,
            friends: [
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              },
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              },
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              }
            ]     
          },
          {
            text: ` Я вообё хз, что тёт написать, левый вариант 
                    ответа я скопировала из интернета :)`,
            replies: 1,
            chosen: false,
            friends: [
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              }
            ]     
          }
        ]
      },
      {
        id: 5,
        ownerName: 'Елизавета Седова',
        avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
        background: 'https://media.tvzvezda.ru/news/vstrane_i_mire/content/201708160620-7kh1.htm/1.jpg',
        date: '29.03.2018 15:00:00',
        title: 'Меняет ли смена фамилии/имени судьбу человека?',
        like: 0,
        favorite: false,
        answered: true, // is answered
        watches: 920,
        likes: 456,
        dislikes: 118,
        tags: ['меняет', 'смена', 'фамилия', 'имя', 'судьба'],
        answers: [
          {
            text: `Конечно меняет! Фамилия - это целый род, 
                   имеющий свою карму, как хорошую, так и плохую`,
            replies: 3,
            chosen: true,
            friends: [
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              },
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              },
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              }
            ]     
          },
          {
            text: ` Я вообще хз, что тут написать, левый вариант 
                    ответа я скопировала из интернета :)`,
            replies: 1,
            chosen: false,
            friends: [
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              }
            ]     
          }
        ]
      },
      {
        id: 6,
        ownerName: 'Елизавета Седова',
        avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
        background: 'https://media.tvzvezda.ru/news/vstrane_i_mire/content/201708160620-7kh1.htm/1.jpg',
        date: '29.03.2018 15:00:00',
        title: 'Меняет ли смена фамилии/имени судьбу человека?',
        like: -1,
        favorite: false,
        answered: true, // is answered
        watches: 920,
        likes: 456,
        dislikes: 118,
        tags: ['меняет', 'смена', 'фамилия', 'имя', 'судьба'],
        answers: [
          {
            text: `Конечно меняет! Фамилия - это целый род, 
                   имеющий свою карму, как хорошую, так и плохую`,
            replies: 3,
            chosen: true,
            friends: [
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              },
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              },
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              }
            ]     
          },
          {
            text: ` Я вообще хз, что тут написать, левый вариант 
                    ответа я скопировала из интернета :)`,
            replies: 1,
            chosen: false,
            friends: [
              {
                id: 1,
                avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg'
              }
            ]     
          }
        ]
      }
    ]
  },
  methods: {
    callQuestionRecommendation() {
      // Передать сюда id текущего вопроса!
      this.$emit('callQuestionRecommendation');
    },
    callComplain() {
      // Передать сюда id текущего вопроса!
      this.$emit('callComplain');
    }
  },
  components: {
    'question' : question
  },
}
</script>

<style scoped>
.empty-comp {
  border-radius: 2px;
  height: 583px;
}
.empty-img {
  height: 220px;
}
</style>
