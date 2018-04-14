<template>
  <v-layout justify-center column class="pa-1 ml-4">
    <v-layout class="reg-17 textdarkgrey-text mb-1 text-xs-center">
      ВЫБЕРИТЕ НАИБОЛЕЕ ИНТЕРЕСНУЮ ТЕМУ:
    </v-layout>
    <v-layout column style="align-items: center;" align="center" class="mb-0 pa-0 ">
      <v-btn
        small
        class="thin-12 border ma-1 textdarkgrey-text"
        :class="choosenTags.indexOf(tag) !== -1 ? 'chosen' : ''"
        outline
        :ripple="false"
        v-for="(tag,index) in tags"
        v-on:click="chooseTag(tag)"
        :key="index">{{tag}}
      </v-btn>
    </v-layout>
    <v-layout justify-center>
      <v-btn class="blockblue border blocklight-text pb-0 mb-1 mx-4" block
             v-on:click="getQuestionsByTags">Готово
      </v-btn>
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
        tags: [],
        choosenTags: [],
        questions: [],
      }
    },
    mounted() {
      let headers = new Headers();
      let options = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default'
      };

      fetch('https://siteurl.com', options).then(function (response) {
        this.tags = response.body;
      });
      this.tags = ["Авто", "Будущее", "Искусство", "Мифы", "Криптовалюта"]
    },
    methods: {
      chooseTag(tag) {
        let n = this.choosenTags.indexOf(tag);
        if (n !== -1) {
          this.choosenTags.splice(n, 1);
        } else {
          this.choosenTags.push(tag)
        }
      },
      getQuestionsByTags() {
        let headers = new Headers();
        let options = {
          method: 'POST',
          headers: headers,
          mode: 'cors',
          cache: 'default',
          body: this.tags,
        };
        fetch('https://siteurl.com', options).then(function (response) {
          this.questions = response.body;
        });
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

  .btn {
    min-width: 0 !important;
  }
</style>
