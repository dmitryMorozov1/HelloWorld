<template>
  <v-container class="pa-0">
    <v-container 
      v-if="sortedList.length"
      class="pa-0">
      <question class="pb-4"
        v-for="question in sortedList" 
        :key="question.id" 
        :question="question"
        @callQuestionRecommendation="callQuestionRecommendation"
        @callComplain="callComplain"
        @callOpenQuestion="callOpenQuestion">
      </question>
    </v-container>
    <v-layout 
      v-else
      row
      wrap
      align-center
      class="empty-comp med-20 blocklight black--text border">
        <v-flex 
          xs12 
          class="text-xs-center"> 
          <v-layout d-block>
            <v-flex class="pb-3">
              <img 
                class="empty-img" 
                src="https://png.icons8.com/color/1600/christmas-star.png"
              >
            </v-flex>
            <v-flex class="pb-5">
              Здесь будут отображаться ваши закладки
            </v-flex>
          </v-layout>
        </v-flex>
    </v-layout>
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
            return Date.parse(d1.date) < Date.parse(d2.date)
          });
        default: return this.questions;
      }
    }
  },
  created() {
    this.questions = []
  },
  methods: {
    callQuestionRecommendation() {
      // Передать сюда id текущего вопроса!
      this.$emit('callQuestionRecommendation');
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
.empty-comp {
  border-radius: 2px;
  height: 583px;
}
.empty-img {
  height: 220px;
}
</style>
