<template>
  <v-container class="main-layout">
    <v-layout>
      <v-flex class="top">
        <router-view 
          :only-new-question="onlyNewQuestion"
          @callQuestionRecommendation="callQuestionRecommendation"
          @callComplain="callComplain">
        </router-view>
      </v-flex>
      <v-flex>
        <top-menu  
          class="mr-0 mb-3 top-menu"
          @showNewQuestions="onShowNewQuestions" >
        </top-menu>
        <top-popular 
          class="mr-0 top-popular">
        </top-popular>
      </v-flex>
    </v-layout>
    
    <v-dialog 
      v-model="questionRecommendation" 
      max-width="340px">
      <question-recommendation 
        :dialogIsOpen="questionRecommendation"  
        @closeComponent="closeQuestionRecommendation">
      </question-recommendation>
    </v-dialog>

    <v-dialog 
      v-model="complain" 
      max-width="340px">
      <complain
        :dialogIsOpen="complain"  
        @closeComponent="closeComplain">
      </complain>
    </v-dialog>

  </v-container>
</template>

<script>
import menu from './top-menu';
import popular from './top-popular';
import QuestionRecommendation from '@/components/Main/question/questionRecommendation';
import Complain from '@/components/Main/question/complain.vue';

export default {
  data() {
    return {
      onlyNewQuestion: false,
      questionRecommendation: false,
      complain: false
    }
  },
  created () {
    if (this.$route.name === 'Top')
    this.$router.push({name: 'Top-day'});
  },
  methods: {
    onShowNewQuestions(input) {
      this.onlyNewQuestion = input.tile;
    },
    callQuestionRecommendation() {
      this.questionRecommendation = true;
    },
    closeQuestionRecommendation() {
      this.questionRecommendation = false;
    },
    callComplain() {
      this.complain = true;
    },
    closeComplain() {
      this.complain = false;
    }
  },
  components: {
    'top-menu' : menu,
    'top-popular' : popular,
    'question-recommendation' : QuestionRecommendation,
    'complain': Complain
  }
}
</script>

<style scoped>
.top-menu {
  width: 275px;
  max-width: 275px;
}
.top-popular {
  width: 275px;
  max-width: 275px;
}
.top {
  width: 777px;
  max-width: 777px;
}
</style>
