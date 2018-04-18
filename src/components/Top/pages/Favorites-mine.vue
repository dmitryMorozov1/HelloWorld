<template>
  <v-container class="pa-0">
    <question class="pb-4"
      v-for="question in sortedList" 
      :key="question.id" 
      :question="question"
      >
    </question>
  </v-container>
</template>

<script>
import question from '@/components/Main/question/question'

export default {
  data() {
    return {
      
    }
  },
  props: ['questionSort'],
  computed: {
    sortedList () {
      switch(this.questionSort){
        case 'rating': return this.questions.sort (
          function(d1, d2) {
            return (d1.likes-d1.dislikes) < (d2.likes-d2.dislikes)
          });
        case 'watches': return this.questions.sort (
          function(d1, d2) {
            return d1.watches < d2.watches
          });
        case 'date': return this.questions.sort (
          function(d1, d2) {
            return d1.date < d2.date
          });
        default: return this.questions;
      }
    }
  },
  updated() {
    sortedList();
  },
  created() {
    this.questions = [
      {
        id: 1,
        ownerId: 1,
        ownerName: 'Елизавета Седова',
        avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
        background: 'data:image/jpeg;base64,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',
        date: '29-03-2018 15:00:00',
        title: 'Меняет ли смена фамилии/имени судьбу человека?,lasd;lmcak ak kalksadk ;kslalkn aksjdlkanxkjasnxlanasnasnxasnxjsaxnajxalksjlaksdjaksd',
        type: '1', // 1 - open, 2 - anonimous
        like: 1, // 1 - like, 0 - nothing, -1 - dislike
        favorite: false, // is favorite ?
        answered: true, // is answered
        watches: 9220,
        replies: 4,
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
        id: 2,
        ownerName: 'Елизаветаwqeqweа',
        avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
        background: 'https://files.adme.ru/files/news/part_155/1557115/2499065-pic_nedq17lh4qeqsapj59tkjegjg6-2-1502111262-650-8edb1df01d-1502707753.jpg',
        date: '29.03.2018 15:00:00',
        title: 'Меняет ли смена фамилии/имени судьбу человека?',
        like: 1,
        favorite: false,
        watches: 9201,
        answered: false, // is answered
        likes: 4544,
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
        id: 3,
        ownerName: 'Елизавета Седова',
        avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
        background: 'http://goodimg.ru/img/chernaya-kartinka2.jpg',
        date: '22.03.2018 15:00:00',
        title: 'Меняет ли смена фамилии/имени судьбу человека?',
        like: 1,
        favorite: false,
        watches: 92330,
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
        date: '29.03.2018 14:00:00',
        title: 'Меняет ли смена фамилии/имени судьбу человека?',
        like: 1,
        favorite: false,
        watches: 1920,
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
      }
    ]
  },
  components: {
    'question' : question
  },
}
</script>

<style scoped>

</style>
