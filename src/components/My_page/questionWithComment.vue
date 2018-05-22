<template>
<v-flex>
  <question 
    :question="question"
    @callQuestionRecommendation="callQuestionRecommendation"
    @callComplain="callComplain">
  </question>
  <comment 
    :index="index"
    :comment="comment">
  </comment>
</v-flex>
</template>

<script>
import Question from '@/components/Main/question/question.vue';
import Comment from './comment.vue';

export default {
  data() {
    return {
    }
  },
  props: ['comment', 'question', 'index'],
  methods: {
    callQuestionRecommendation() {
      this.$emit('callQuestionRecommendation');
    },
    callComplain() {
      this.$emit('callComplain');
    }
  },
  components: {
    'question' : Question,
    'comment' : Comment
  }
}
</script>

<style scoped>

</style>
