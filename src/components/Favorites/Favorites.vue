<template>
  <v-container class="main-layout">
    <v-layout>
      <v-flex class="favorites">
        <router-view 
          :questionSort="questionSort"
          @callQuestionRecommendation="callQuestionRecommendation"
          @callComplain="callComplain">
        </router-view>
      </v-flex>
      <v-flex>
        <favorites-menu  
          @changeSorting="onChangeSorting" 
          class="mr-0 mb-3 favorites-menu">
        </favorites-menu>
        <favorites-topics 
          class="mr-0 favorites-popular">
        </favorites-topics>
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
import menu from './favorites-menu';
import topics from './favorites-topics';
import QuestionRecommendation from '@/components/Main/question/questionRecommendation';
import Complain from '@/components/Main/question/complain.vue';

export default {
  data() {
    return {
      questionSort: "rating",
      questionRecommendation: false,
      complain: false
    }
  },
  created () {
    if (this.$route.name === 'Favorites')
    this.$router.push({name: 'Favorites-mine'});
  },
  methods: {
    onChangeSorting(input) {
      this.questionSort = input.sortBy;
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
    'favorites-menu' : menu,
    'favorites-topics' : topics,
    'question-recommendation' : QuestionRecommendation,
    'complain': Complain
  }
}
</script>

<style scoped>
.favorites-menu {
  width: 275px;
  max-width: 275px;
}
.favorites-popular {
  width: 275px;
  max-width: 275px;
}
.favorites {
  width: 777px;
  max-width: 777px;
}
</style>
