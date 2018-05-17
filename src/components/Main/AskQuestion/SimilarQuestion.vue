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
      @click="closeDialog()">
      <v-icon color="grey darken-1">
        clear
      </v-icon>
    </v-btn>
    <v-flex class="pt-2 pb-1 text-xs-center med-24 textblue-text">
      Задать вопрос
    </v-flex>
    <v-btn 
      flat  
      small
      class="ml-4 my-0 capitalize arrow-back reg-16 textblue-text"
      :ripple="false"
      @click="callPreviousDialog()">
      <v-icon class="pr-2 textblue-text">
        arrow_back
      </v-icon> 
      <div class="pl-1"> 
        Назад 
      </div>
    </v-btn>
    <v-layout 
      align-end
      class="pt-1 px-4">
      <v-flex 
        xs-6 
        class="reg-18 textdarkgrey-text">
          Похожие вопросы:
      </v-flex>
      <v-spacer>
      </v-spacer>
      <v-flex 
        xs-6 
        class="text-xs-right">
        <v-btn 
          round
          depressed
          class="ma-0 capitalize next-btn med-16 blocklight-text blockblue"
          @click.native.stop="callNextDialog()">
            Далее
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout class="pt-3">
      <questions class="px-4"></questions>
    </v-layout>
  </v-card>
</template>

<script>
import Questions from './components/setOfSimilarQuestion.vue'
export default {
  data() {
    return {

     }
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog', { isSubmit: false });
    },
    callNextDialog() {
      this.$emit('callNextDialog');
    },
    callPreviousDialog() {
      this.$emit('callPreviousDialog');
    }
  },
  components: {
    'questions' : Questions
  }
}
</script>

<style scoped>
.next-btn {
  width: 140px;
  height: 32px;
}
.arrow-back :nth-child(1) {
  padding-left: 0;
}
</style>
