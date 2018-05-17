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
    <v-layout 
      row 
      wrap 
      align-center
      class="px-4 py-3">
      <v-flex xs6 class="pb-1 reg-18 textblue-text">
        Что вы хотите спросить?
      </v-flex>
      <v-spacer></v-spacer>
      <div class="pt-1 reg-14 textdarkgrey-text"> 
        {{ question && question.length ? question.length : 0 }} / 200
      </div>
      <v-flex xs12>
        <v-text-field
          multi-line
          solo
          no-resize
          class="blocklight input-border-radius blocklightblue-text border"
          name="input-question"
          placeholder="Введите ваш вопрос"
          v-model="question"
          :rows="4"
          :maxlength="200">
        </v-text-field>
      </v-flex>
      <v-flex xs6 class="pr-2 mt-3">
        <v-layout align-center>
          <v-flex xs8 class="pb-1 reg-18 textblue-text">
            Первый вариант ответа
          </v-flex>
          <v-spacer></v-spacer>
          <div class="reg-14 textdarkgrey-text"> 
            {{ firstAnswer && firstAnswer.length ? firstAnswer.length : 0 }} / 150
          </div>
        </v-layout>
        <v-text-field
          multi-line
          solo
          no-resize
          class="blocklight input-border-radius border"
          name="input-f-answer"
          placeholder="Введите первый вариант ответа"
          v-model="firstAnswer"
          :rows="3"
          :maxlength="150">
        </v-text-field>
      </v-flex>
      <v-flex xs6 class="pl-2 mt-3">
        <v-layout align-center>
          <v-flex class="pb-1 reg-18 textblue-text">
            Второй вариант ответа
          </v-flex>
          <v-spacer></v-spacer>
          <div class="reg-14 textdarkgrey-text"> 
            {{ seccondAnswer && seccondAnswer.length ? seccondAnswer.length : 0 }} / 150
          </div>
        </v-layout>
        <v-text-field
          multi-line
          solo
          no-resize
          class="input-border-radius blocklight border"
          name="input-s-answer"
          placeholder="Введите второй вариант ответа"
          v-model="seccondAnswer"
          :rows="3"
          :maxlength="150">
        </v-text-field>
      </v-flex>
      <v-flex xs12 class="mt-3">
        <v-flex class="pb-1 reg-18 textblue-text">
          Темы
        </v-flex>
        <v-select
          chips
          tags
          solo
          class="input-question-data-select-tag input-border-radius blocklight border"
          placeholder="Введите названия тем через Enter"
          append-icon=""
          v-model="tags"
          :maxlength="12"
          :search-input.sync="search"
          :readonly="tags.length>=5"
          @change="onInput()"
          @input="onInput()">
          <template slot="selection" slot-scope="data">
            <v-chip
              close
              disabled
              outline
              class="textblue-text"
              @input="removeTag(data.item)">
                <span class="med-16">
                  {{ data.item }}
                </span>
            </v-chip>
          </template>
        </v-select>
      </v-flex>
      <v-flex 
        v-if="tags.length < 5 && filteredTags[0]"
        class="tags-height">
        <v-btn 
          v-if="index < 8"
          v-for="(standardTag, index) in filteredTags" 
          :key="index"
          outline
          small
          class="ml-0 my-1 standard-tag thin-12 blockblue-text"
          :ripple="false"
          @click.native="setStandardTag(standardTag.name)">
            {{ standardTag.name }}
        </v-btn>
      </v-flex>
      <v-layout 
        v-else-if="!filteredTags[0]"
        align-center 
        justify-end
        class="mr-2 tags-height reg-14 blockblue-text">
          {{ feedback() }}
      </v-layout>
      <v-layout 
        v-else
        align-center 
        justify-end
        class=" mr-2 tags-height reg-14 blockblue-text">
          Максимум 5 тем
      </v-layout>
      <v-flex 
        xs12 
        class="text-xs-right">
        <v-btn 
          class="capitalize next-btn med-16 blocklight-text blockblue"
          round
          depressed
          :disabled="nextDisabled"
          @click.native="callNextDialog()">
            Далее
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      firstAnswer: "",
      seccondAnswer: "",
      tags: [],
      standardTags: [],
      search: "",
      nextDisabled: true
    }
  },
  props: ['questionIsSave'],
  watch: {
    tags: function () {
      if(!!this.tags[this.tags.length-1]) {
        this.tags[this.tags.length-1] = this.tags[this.tags.length-1]
                                            .toLowerCase()
                                            .trim()
                                            .replace(/\s+/g,' ')
                                            .replace(/ё/g,'е');
        let index = this.tags.indexOf(this.tags[this.tags.length-1]);
        if (this.tags[this.tags.length-1].length < 2) {
          this.tags.pop();
        }
        else if (index < this.tags.length-1) {
          this.tags.pop();
          this.tags.push(this.tags.splice(index,1)[0]);
        } 
      }
      this.search = "";
    },
    questionIsSave: function (yes) {
      if(!yes)
      {
        this.question = "";
        this.firstAnswer = "";
        this.seccondAnswer = "";
        this.tags = [];
        this.nextDisabled = true;
      }
    }
  },
  beforeMount() {
    this.addStandardTags;
  },
  mounted () {
    this.addStyles();
  },
  updated () {
    if (this.question.replace(/\s+/g,'').length >= 10 && 
        !!this.firstAnswer && 
        !!this.seccondAnswer) {
      this.nextDisabled = false;
    }
    else {
      this.nextDisabled = true;
    }
  },
  computed: {
    addStandardTags() {
      this.standardTags = [
          { name: 'СУДЬБА', value: 99},
          { name: 'ФАМИЛИЯ', value: 98},
          { name: 'ИМЯ', value: 97},
          { name: 'ПОЛЕЙ', value: 95},
          { name: 'РЕЛИГИЯ', value: 87},
          { name: 'ГОСУДАРСТВО', value: 86},
          { name: 'МАТЬ', value: 84},
          { name: 'РОДИНА', value: 83},
          { name: 'ДУМАЮ', value: 82},
          { name: 'СЛОВА', value: 80},
          { name: 'ШАРЯТ', value: 78},
          { name: 'ОНИ', value: 77},
          { name: 'ПОХОДУ', value: 76},
          { name: 'ПРОГАЮТ', value: 75},
          { name: 'ЧУВАКИ', value: 74},
          { name: 'ТУТ', value: 73},
          { name: 'ОХЕРЕТЬ', value: 72},
          { name: 'ПИСАТЬ', value: 67},
          { name: 'МНОГО', value: 65},
          { name: 'ЕЩЕ', value: 64},
          { name: 'ЗАД', value: 63},
          { name: 'ФИГАКС', value: 53},
          { name: 'ЧАНК', value: 35},
          { name: 'КИАНУ', value: 22},
          { name: 'ПАСПОРТУ', value: 11}
        ]
    },
    filteredTags() {
      let search = this.search || "";
      search = search.trim().toLowerCase().replace(/ё/g,'е');
      let tags = this.tags;
      let filteredTags = this.standardTags.filter(standartTag => { 
        return tags.indexOf(standartTag.name.toLowerCase()) < 0;
      });
      filteredTags = filteredTags.filter(tag => {
        return tag.name.toLowerCase().includes(search);
      });
      return filteredTags;
    }
  },
  methods: {
    callNextDialog() {
      if (this.search.length > 1 && this.tags.indexOf(this.search) === -1) 
        this.tags.push(this.search);
      let tags = [];
      for (let i = 0; i < this.tags.length; i++) {
        tags[i] = this.tags[i].trim().replace(/\s+/g,' ').toUpperCase();
      }
      this.$emit('callNextDialog',
        { title: this.question.trim().replace(/\s+/g,' ')
                                     .replace(/ё/g,'е')
                                     .replace(/Ё/g,'Е'), 
          answers: [
            this.firstAnswer.trim().replace(/\s+/g,' ')
                                   .replace(/ё/g,'е')
                                   .replace(/Ё/g,'Е'), 
            this.seccondAnswer.trim().replace(/\s+/g,' ')
                                     .replace(/ё/g,'е')
                                     .replace(/Ё/g,'Е')
          ],
          tags: tags
        });
    },
    closeDialog() {
      this.$emit('closeDialog', { isSubmit: false });
    },
    removeTag (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
      this.tags = [...this.tags];
      document.getElementsByClassName('input-question-data-select-tag')[0]
              .children[0].children[0].lastElementChild.focus();
    },
    setStandardTag(tagName) {
      if(this.tags.length < 5 && this.tags.indexOf(tagName) === -1) {
        this.tags.push(tagName.toLowerCase());
        document.getElementsByClassName('input-question-data-select-tag')[0]
                .children[0].children[0].lastElementChild.focus();
      }
    },
    onInput() {
      if(this.search === null) this.search = "";
    },
    feedback() {
      if(this.search.trim().length > 1 && this.search.length < 12)
        return 'Нажмите Enter для создания своей темы';
      else if (this.search.length < 12)
        return 'Минимум 2 символа в названии темы';
      else
        return 'Максимум 12 символов в названии темы';
    },
    addStyles() {
      document.getElementsByClassName('input-question-data-select-tag')[0]
              .children[0].children[0].lastElementChild.style.height="32px";
      document.getElementsByClassName('input-question-data-select-tag')[0]
              .children[0].style.cursor="default";
    }
  }
}
</script>

<style scoped>
.next-btn {
  width: 140px;
  height: 32px;
}
.answer {
  width: 100%;
}
.input-border-radius {
  border-radius: 2px;
}
.input-group {
  padding: 0;
}
.standard-tag {
  border-radius: 5px;
  min-width: 0;
  text-transform: capitalize;
}
.tags-height {
  height: 32px;
  width: 100%;
}
.chip {
  text-transform: capitalize;
}
</style>
