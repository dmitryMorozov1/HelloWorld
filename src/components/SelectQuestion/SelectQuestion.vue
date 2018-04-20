<template>
  <v-container class="main-layout">
    <v-layout>
      <v-layout column>
        <question v-for="question in questions" :key="question.id" class="py-0 mb-4"
                  :question="question"></question>
      </v-layout>
      <v-flex>
        <topics class="topics mr-0 mb-3 border blocklight"></topics>
        <v-layout class="mr-0 ml-4 border blocklight">
          <v-flex  class="pt-2">
            <v-layout justify-center class="reg-17 textdarkgrey-text mb-3">
              ВОЗМОЖНЫЕ ДРУЗЬЯ
            </v-layout>
            <recommended-friend v-for="friend in friends" :key="friend.id"
                                :friend="friend">
            </recommended-friend>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import question from '../Main/question/question'
  import topics from './Topics'
  import recommendedFriend from './SQFriend'

  export default {
    data() {
      return {
        questions: [],
        friends: this.friends,

      }
    },
    components: {
      'question': question,
      'topics': topics,
      'recommended-friend': recommendedFriend
    },
    mounted() {
      this.questions = [
        {
          id: 1,
          ownerId: 1,
          ownerName: 'Елизавета Седова',
          avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
          background: "https://img1.goodfon.ru/wallpaper/big/1/ca/foto-makro-kartinka-zelenye.jpg",
          date: '29-03-2018 15:00:00.1111',
          title: 'Меняет ли смена фамилии/имени судьбу человека?,lasd;lmcak ak kalksadk ;kslalkn aksjdlkanxkjasnxlanasnasnxasnxjsaxnajxalksjlaksdjaksd',
          type: '1', // 1 - open, 2 - anonimous
          like: 1, // 1 - like, 0 - nothing, -1 - dislike
          favorite: false, // is favorite ?
          answered: true, // is answered
          watches: 920,
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
          ownerId: 1,
          ownerName: 'Елизавета Седова',
          avatar: 'https://pp.userapi.com/c622120/v622120519/2607c/k0wPW3Pp__k.jpg',
          background: "https://img1.goodfon.ru/wallpaper/big/1/ca/foto-makro-kartinka-zelenye.jpg",
          date: '29-03-2018 15:00:00.1111',
          title: 'Меняет ли смена фамилии/имени судьбу человека?,lasd;lmcak ak kalksadk ;kslalkn aksjdlkanxkjasnxlanasnasnxasnxjsaxnajxalksjlaksdjaksd',
          type: '1', // 1 - open, 2 - anonimous
          like: 1, // 1 - like, 0 - nothing, -1 - dislike
          favorite: false, // is favorite ?
          answered: true, // is answered
          watches: 920,
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
        }
      ];


      this.friends = [
        {
          id: 1,
          name: 'Седова Елизавета',
          avatar: 'https://wallpaperbrowse.com/media/images/pictures-2.jpg',
          social: 0, // social id, 0 - no social, 1 - facebook, 2 - vkontakte, 3 - twitter, 4 - google+, 5 - telegram, 6 - badoo
          linkSocial: 'https://google.com',
          commonFollowers: 5, // only a number
          following: false // is following to you
        },
        {
          id: 2,
          name: 'Седова Елизавета',
          avatar: 'https://wallpaperbrowse.com/media/images/pictures-2.jpg',
          social: 0, // social id, 0 - no social, 1 - facebook, 2 - vkontakte, 3 - twitter, 4 - google+, 5 - telegram, 6 - badoo
          linkSocial: '',
          commonFollowers: 5, // only a number
          following: false // is following to you
        },
        {
          id: 3,
          name: 'Илья Говядко',
          avatar: 'https://wallpaperbrowse.com/media/images/pictures-2.jpg',
          social: 2, // social id, 0 - no social, 1 - facebook, 2 - vkontakte, 3 - twitter, 4 - google+, 5 - telegram, 6 - badoo
          linkSocial: 'vk.com/id43376670',
          commonFollowers: 0, // only a number
          following: false // is following to you
        },
        {
          id: 4,
          name: 'Седова Елизавета',
          avatar: 'https://wallpaperbrowse.com/media/images/pictures-2.jpg',
          social: 0, // social id, 0 - no social, 1 - facebook, 2 - vkontakte, 3 - twitter, 4 - google+, 5 - telegram, 6 - badoo
          linkSocial: '',
          commonFollowers: 0, // only a number
          following: true // is following to you
        },
        {
          id: 5,
          name: 'Илья Говядко',
          avatar: 'https://wallpaperbrowse.com/media/images/pictures-2.jpg',
          social: 0, // social id, 0 - no social, 1 - facebook, 2 - vkontakte, 3 - twitter, 4 - google+, 5 - telegram, 6 - badoo
          linkSocial: '',
          commonFollowers: 2, // only a number
          following: false // is following to you
        }
      ]

    }
  }
</script>

<style scoped>

  .topics {
    width: 275px;
    max-width: 275px;
  }


</style>
