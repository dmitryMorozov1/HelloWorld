<template>
  <v-layout justify-center column class="pa-1 ml-4">
    <v-layout class="reg-17 textdarkgrey-text mb-1">
      <p align="center" class="mb-0">
        ВЫБЕРИТЕ НАИБОЛЕЕ ИНТЕРЕСНУЮ ТЕМУ:
      </p>
    </v-layout>
    <v-layout column style="align-items: center;" align="center" class="mb-0 pa-0 ">
      <v-layout class="thin-12 border ma-1 px-2 pt-1 textdarkgrey-text"
                flat v-for="(tag,index) in tags"
                v-on:click="chooseTag"
                style="text-transform: uppercase;
                     cursor: pointer;
                     border-radius: 2px; "
                :key="index">{{tag}}
      </v-layout>
    </v-layout>
    <v-layout justify-center>
      <v-btn class="blockblue border blocklight-text pb-0 mb-0" style="width: 80%;">Готово</v-btn>
    </v-layout>
    <v-layout justify-center>
      <a class="textdarkgrey-text reg-10">Пропустить</a>
    </v-layout>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        tags: []
      }
    },
    mounted() {
      this.tags = ["Авто", "Будущее", "Искусство", "Мифы", "Криптовалюта"]
    },
    methods: {
      chooseTag: (event) => {
        let clickedButton = event.target;
        if (clickedButton.classList.contains("chosen")) {
          clickedButton.classList.add("border");
          clickedButton.classList.remove("chosen");

        } else {
          clickedButton.classList.add("chosen");
          clickedButton.classList.remove("border");
        }
      }
    }
  }
</script>

<style scoped>
  .chosen {
    box-shadow: 0px 0px 0px 0px !important;
    border-width: 1px !important;
    border-style: solid !important;
    border-color: #1A93F0 !important;
    border-radius: 2px;
    color: #1A93F0 !important;
  }

  .tag {
    transform: translate(0, -25%);
  }
</style>
