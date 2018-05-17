<template>
  <v-container class="pa-0">
    <v-card class="px-4 pb-3 blocklight">
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
        class="ma-0 capitalize arrow-back textblue-text reg-16"
        :ripple="false"
        @click="callPreviousDialog()">
        <v-icon class="pr-2 textblue-text">
          arrow_back
        </v-icon> 
        <div class="pl-1"> 
          Назад
        </div>
      </v-btn>
      <v-layout class="pt-1">
        <v-flex class="reg-18 textdarkgrey-text">
          Ваш вопрос будет выглядеть так:
        </v-flex>
      </v-layout>
      <question
        class="py-3"
        :question="question">
      </question>
      <v-flex 
        d-inline-block 
        class="pr-2 reg-18 textdarkgrey-text">
        {{ feedback() }}
      </v-flex>
      <!-- *****  change href  ****** -->
      <a 
        v-if="recomendationCounter > 0"
        target="_blank"
        :href="'profile/111'" >
        <v-flex 
          d-inline-block 
          class="pointer thin-18 textblue-text">
          {{ firstRecomendation }}<span 
                                  v-if="recomendationCounter > 1" 
                                  class="textdarkgrey-text">,
                                  </span>
        </v-flex>
      </a>
      <!-- *****  change href  ****** -->
      <a 
        v-if="recomendationCounter > 1"
        target="_blank"
        :href="'profile/111'">
        <v-flex 
          d-inline-block 
          class="pointer thin-18 textblue-text">
          {{ seccondRecomendation }}
        </v-flex>
      </a>
      <v-flex 
        v-if="recomendationCounter > 2"
        d-inline-block
        class="thin-18 textdarkgrey-text">
          и еще
      </v-flex>
      <v-flex 
        v-if="recomendationCounter > 2"
        d-inline-block 
        class="pointer thin-18 textblue-text"
        @click="callQuestionRecommendation()">
        {{ showRecomendationCounter() }} 
      </v-flex>
      <v-flex class="pt-1">
        <v-btn 
          round
          depressed
          class="mx-0 capitalize add-user-btn med-16 textblue-text"
          @click.native="callQuestionRecommendation()">
          <v-icon class="pr-2 textblue-text">
            add
          </v-icon> 
            Добавить пользователей
        </v-btn>
      </v-flex>
      <v-flex 
        xs5 
        class="mt-3 pointer reg-18 textdarkgrey-text"
        @click="showAdditionalSettings()">
          Дополнительные настройки
        <v-icon>
          {{ additionalSettings ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}
        </v-icon> 
      </v-flex>
      <v-container 
        v-if="additionalSettings"
        class="py-1">
        <v-layout align-center>
          <div class="preview-flex-checkbox">
            <v-checkbox 
              class="preview-checkbox"
              v-model="isAnonymousQuestion">
            </v-checkbox>
          </div>
          <v-tooltip 
            right 
            color="blue lighten-1">          
            <v-flex 
              class="pointer reg-16" 
              slot="activator"
              @click="isAnonymousQuestion=!isAnonymousQuestion">
                Анонимный вопрос
            </v-flex>
            <span class="cursor">
              Скрыть имена пользователей
            </span>
          </v-tooltip>
        </v-layout>
        <v-layout align-center>
          <div class="preview-flex-checkbox">
            <v-checkbox 
              class="preview-checkbox"
              v-model="isAnonymousPublication">
            </v-checkbox>
          </div>
          <v-tooltip 
            right 
            color="blue lighten-1">          
            <v-flex 
              class="pointer reg-16" 
              slot="activator"
              @click="isAnonymousPublication=!isAnonymousPublication">
                Опубликовать вопрос анонимно
            </v-flex>
            <span class="cursor">
              Скрыть мое имя
            </span>
          </v-tooltip>
        </v-layout>
        <v-layout align-center>
          <div class="preview-flex-checkbox">
            <v-checkbox 
              class="preview-checkbox"
              v-model="isOnlyForFollowers">
            </v-checkbox>
          </div>
          <v-tooltip 
            right 
            color="blue lighten-1">          
            <v-flex 
              class="pointer reg-16" 
              slot="activator"
              @click="isOnlyForFollowers=!isOnlyForFollowers">
                Вопрос виден только подписчикам
            </v-flex>
            <span class="cursor">
              Только для подписчиков
            </span>
          </v-tooltip>
        </v-layout>
      </v-container> 
      <v-flex class="text-xs-right">
        <v-btn 
          round
          depressed
          class="ma-0 capitalize publish-btn med-16 blocklight-text blockblue"
          @click.native="publishQuestion()">
            Опубликовать вопрос
        </v-btn>
      </v-flex>
    </v-card>
    <v-dialog 
      max-width="340px"
      v-model="questionRecommendation" >
      <question-recommendation 
        :dialogIsNew="dialogIsOpen"  
        :dialogIsOpen="questionRecommendation"  
        @addRecommendation="onAddRecommendation" 
        @closeComponent="closeQuestionRecommendation">
      </question-recommendation>
    </v-dialog>
  </v-container>
</template>

<script>
import Question from './components/previewQuestion.vue'
import QuestionRecommendation from './components/questionRecommendation.vue';
export default {
  data() {
    return {
      questionRecommendation: false,
      isAnonymousQuestion: false,
      isAnonymousPublication: false,
      isOnlyForFollowers: true,
      additionalSettings: false,
      firstRecomendation: "",
      seccondRecomendation: "",
      recomendationCounter: 0
    }
  },
  props: ["question", "dialogIsOpen"],
  watch: {
    dialogIsOpen: function (yes) {
      if(yes)
      {
        this.isAnonymousQuestion = false;
        this.isAnonymousPublication = false;
        this.isOnlyForFollowers = true;
        this.additionalSettings = false;
        this.firstRecomendation = "";
        this.seccondRecomendation = "";
        this.recomendationCounter = 0
      }
    }
  },
  mounted () {
    this.setStyles();
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog', { isSubmit: false });
    },
    callPreviousDialog() {
      this.$emit('callPreviousDialog');
    },
    publishQuestion() {
      this.$emit('publishQuestion');
      this.$emit('closeDialog', { isSubmit: true });
    },
    callQuestionRecommendation() {
      this.questionRecommendation = true;
    },
    onAddRecommendation(choosenPeople) {
      this.recomendationCounter = choosenPeople.length;
      if(choosenPeople[0]) this.firstRecomendation = choosenPeople[0].name;
      if(choosenPeople[1]) this.seccondRecomendation = choosenPeople[1].name;
    },
    showRecomendationCounter() {
      let count = this.recomendationCounter - 2;
      let resultStr = '' + count + ' ';
      return resultStr += count % 100 > 4 && 
                   count % 100 < 20 || 
                   count % 10 <= 1 || 
                   count % 10 >= 5 ?
                   'человек' : 'человека';
    },
    closeQuestionRecommendation() {
      this.questionRecommendation = false;
    },
    showAdditionalSettings() {
      this.additionalSettings = !this.additionalSettings;
    },
    feedback() {
      if(this.recomendationCounter === 0)
        return 'Порекомендовать вопрос:';
      else if (this.recomendationCounter === 1)
        return 'Ваш вопрос увидит:';
      else
        return 'Ваш вопрос увидят:';
    },
    setStyles() {
      document.getElementsByClassName('add-user-btn')[0]
              .firstElementChild.style.paddingLeft = "8px";
    }
  },
  components: {
    'question' : Question,
    'question-recommendation': QuestionRecommendation
  }
}
</script>

<style scoped>
.publish-btn {
  width: 240px;
  height: 32px;
}
.add-user-btn {
  height: 32px;
  border: 1px solid #5DA3DA !important;
}
.preview-checkbox {
  color: #1A93F0 !important;
}
.preview-flex-checkbox {
  width: 32px;
}
.pointer {
  cursor: pointer;
}
.cursor {
  cursor: default;
}
.checkbox :nth-last-child(1) {
  min-height: 0;
}
.arrow-back :nth-child(1) {
  padding-left: 0;
}
</style>
