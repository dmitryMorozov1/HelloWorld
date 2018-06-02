<template>
  <v-layout>
    <a @click.stop="feedBack = true"
       @onmouseout.stop="feedBack = false" class="textdarkgrey-text categories">
       Обратная связь</a>
    <v-dialog v-model="feedBack" max-width="500px" width="50%">
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
              <v-layout justify-left class="med-16 pointer mt-1"
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
  </v-layout>
</template>

<script>
    export default {
        name: "sendFeedBack",
      data() {
        return {
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
      props:{
        feedBack: false,
      },
      mounted(){
        let inputs=this.$root.$el.getElementsByClassName("input-group__input");
        let textField=inputs[inputs.length-1];
        textField.style.paddingTop="5px";
        textField.style.paddingLeft="5px";
        textField.classList.add("border");
      }
    }

</script>

<style scoped>
  .bigBtn {
    text-transform: none;
    width: 150px;
    height: 31px;
    float: right;
  }
  .pointer {
    cursor: pointer;
  }
  .categories:hover {
    color: #1A93F0 !important;
  }
</style>
