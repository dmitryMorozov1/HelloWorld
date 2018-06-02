<template>
  <v-content class="main border blocklight mx-3">
    <v-content v-for="category in categories" class="ml-2 mt-2" :key="category.id">
      <a v-if="category.id===3" @click.stop="feedBack = true"
         @onmouseout.stop="feedBack = false" class="textdarkgrey-text categories">
        {{category.name}}</a>

      <v-dialog v-if="category.id===3" v-model="feedBack" max-width="500px" width="50%">
        <v-card class="pa-2">

          <v-layout class="right">
            <v-icon @click="feedBack=false" class="material-icons pointer">
              clear
            </v-icon>
          </v-layout>
          <v-layout justify-center class="textblue-text bold-22 mt-2">Обратная связь</v-layout>


          <v-flex class="ml-2">
            <v-layout justify-left class="textblue-text med-18">Выберите тему</v-layout>
            <v-layout justify-left column v-for="problem in problems" :key="problem.id">
              <v-layout row>
                <v-checkbox color="blue" class="check" hide-details v-model="problem.checked"
                            style="max-width: 30px;"></v-checkbox>
                <v-layout justify-left class="med-16 pointer"
                          @click="problem.checked=!problem.checked">{{problem.name}}
                </v-layout>
              </v-layout>
            </v-layout>
          </v-flex>

          <v-container class="px-2 pt-0 pb-0">
            <v-layout justify-left class="textblue-text med-16 mt-2 mb-0">Сообщение</v-layout>
            <v-text-field
              class="pt-0"
              placeholder="Введите ваше сообщение разработчикам"
              light
              color="black"
              :counter="400"
              multi-line
              textarea
            ></v-text-field>
            <v-content>
              <v-btn class="bigBtn med-16 border blockblue white--text" round depressed>
                Отправить
              </v-btn>
            </v-content>
          </v-container>
        </v-card>
      </v-dialog>

      <a v-if="category.id!==3" class="textdarkgrey-text categories">{{category.name}}</a>
      <v-divider v-if="category.id===3" class="divider mt-1"></v-divider>


    </v-content>
  </v-content>
</template>
<script>
  export default {
    data() {
      return {
        categories: [
          {
            id: 1,
            name: "Моя страница",
          },
          {
            id: 2,
            name: "Настройки",
          },
          {
            id: 3,
            name: "Обратная связь",
          },
          {
            id: 4,
            name: "Выход",
          },
        ],
        feedBack: false,
        problems: [
          {
            id: 1,
            name: "Ошибка",
            checked: false,
          },
          {
            id: 2,
            name: "Предложение",
            checked: false,
          },
          {
            id: 3,
            name: "Жалоба",
            checked: false,
          },
          {
            id: 4,
            name: "Другое",
            checked: false,
          },

        ]
      }
    },
    name: "smallMenu"
  }
</script>

<style scoped>
  .main {
    max-width: 150px;
    max-height: 125px;
    height: 125px;
    width: 150px;
  }

  .divider {
    width: 95%;
  }

  .pointer {
    cursor: pointer;
  }

  .categories:hover {
    color: #1A93F0 !important;
  }

  .bigBtn {
    text-transform: none;
    width: 150px;
    height: 31px;
    float: right;
  }
</style>
