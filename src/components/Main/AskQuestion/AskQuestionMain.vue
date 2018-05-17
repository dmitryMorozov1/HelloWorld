<!-- 
TODO: 
-! убрать то что наделал у диалогов

- backspace (chips)
- scroll
- картинки по ссылке
- добавить фотку
- затемнение диалога
- обрезка картинки
? ё убираем
-? долбаная карусель и вьютифайщики
-->
<template>
  <v-container class="pa-0">
    <v-dialog 
      persistent
      max-width="820px"
      v-model="inputQuestionData" >
      <input-question-data 
        :questionIsSave="questionIsSave"
        @closeDialog="closeDialog"
        @callNextDialog="callSimilarQuestion">
      </input-question-data>
    </v-dialog>
    <v-dialog 
      persistent
      max-width="820px"
      v-model="similarQuestion">
      <similar-question 
        @callPreviousDialog="callInputQuestionData"
        @closeDialog="closeDialog"
        @callNextDialog="callPreview">
      </similar-question>
    </v-dialog>
    <v-dialog 
      persistent
      max-width="820px"
      v-model="preview" >
      <preview 
        :question="question"
        :dialogIsOpen="preview"
        @callPreviousDialog="callInputQuestionData"
        @closeDialog="closeDialog"
        @publishQuestion="onPublishQuestion">
      </preview>
    </v-dialog>
  </v-container>
</template>

<script>
import InputQuestionData from '@/components/Main/AskQuestion/InputQuestionData.vue'
import SimilarQuestion from '@/components/Main/AskQuestion/SimilarQuestion.vue'
import Preview from '@/components/Main/AskQuestion/Preview.vue'
export default {
  data() {
    return {
      inputQuestionData: false,
      similarQuestion: false,
      preview: false,
      question: {
        background: "",
        title: "",
        answers: [],
        tags: []
      },
      questionIsSave: false
    }
  },
  props: ["openDialog"],
  watch: {
    openDialog: function(openDialog) {
      if (openDialog) {
        this.questionIsSave = true;
      }
      this.inputQuestionData = openDialog;
    }
  },
  beforeMount() {
    this.questionIsSave = true;
  },
  methods: {
    callInputQuestionData() {
      this.similarQuestion=false;
      this.preview=false;
      this.inputQuestionData=true;
    },
    callSimilarQuestion(question) {
      this.question.title = question.title;
      this.question.answers = question.answers;
      this.question.tags = question.tags;
      this.inputQuestionData=false;
      this.similarQuestion=true;
    },
    callPreview() {
      this.similarQuestion = false;
      this.preview = true;
    },
    closeDialog(param) {
      this.questionIsSave = !!!param.isSubmit;
      this.inputQuestionData = false;
      this.similarQuestion = false;
      this.preview = false;
      this.$emit('closeDialog');
    },
    onPublishQuestion() {
      // do something...
    }
  },
  components: {
    'input-question-data': InputQuestionData,
    'similar-question': SimilarQuestion,
    'preview': Preview
  }
}
</script>

<style scoped>

</style>
