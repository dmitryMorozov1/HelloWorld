<template>
  <v-container class="pa-0">
    <v-container 
      v-if="filteredQuestions.length"
      class="pa-0">
      <question class="pb-4"
        v-for="question in filteredQuestions" 
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
                src="https://cnlovesdigital.com/wp-content/uploads/2016/04/back-to-top-button.png"
              >
            </v-flex>
            <v-flex class="pb-5">
              Здесь вы увидите список лучших вопросов
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
  props: ['onlyNewQuestion'],
  created() {
    this.questions = [
      {
        id: 3,
        ownerName: 'Елизавета Седова',
        avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
        background: 'http://goodimg.ru/img/chernaya-kartinka2.jpg',
        date: '29.03.2018 15:00:00',
        title: 'Меняет ли смена фамилии/имени судьбу человека?',
        like: 1,
        favorite: false,
        watches: 920,
        answered: true, // is answered
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
        id: 4,
        ownerName: 'Елизавета Седова',
        avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
        background: 'https://media.tvzvezda.ru/news/vstrane_i_mire/content/201708160620-7kh1.htm/1.jpg',
        date: '29.03.2018 15:00:00',
        title: 'Меняет ли смена фамилии/имени судьбу человека?',
        like: 1,
        favorite: false,
        watches: 920,
        likes: 456,
        answered: true, // is answered
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
  computed: {
    filteredQuestions() {
      let questions = this.questions;
      questions = questions.filter(question => {
        return this.onlyNewQuestion ? question.answered === false : true;
      });
      return questions;
    }
  },
  methods: {
    callQuestionRecommendation() {
      // Передать сюда id текущего вопроса!
      this.$emit('callQuestionRecommendation');
    },
    callOpenQuestion(args) {
      // Передать сюда id текущего вопроса!
      this.$emit('callOpenQuestion', {question: args.question});
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
