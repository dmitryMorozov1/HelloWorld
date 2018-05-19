<template>
  <v-container class="pa-0">
    <question class="pb-4"
      v-for="question in questions" 
      :key="question.id" 
      v-if="!question.answered || !onlyNewQuestion"
      :question="question"
      @callQuestionRecommendation="callQuestionRecommendation"
      @callComplain="callComplain"
      @callOpenQuestion="callOpenQuestion">
    </question>
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
        id: 4,
        ownerName: 'Елизавета Седова',
        avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
        background: 'https://media.tvzvezda.ru/news/vstrane_i_mire/content/201708160620-7kh1.htm/1.jpg',
        date: '2018-04-21T20:37:00Z',
        title: 'Меняет ли смена фамилии/имени судьбу человека?',
        like: 1,
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

</style>
