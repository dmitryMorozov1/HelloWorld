<template>
  <v-container class="pa-0">
    <v-flex>
      <v-card class="border-radius"> 
        <v-carousel
          hide-delimiters
          class="border border-radius"
          v-model="currentBackground"
          :cycle="false">
          <v-carousel-item 
            v-for="(background,index) in backgrounds" 
            :key="index"
            class="img"
            :src="background.src">
          </v-carousel-item>
        </v-carousel>
        <v-container class="pa-0 top-content">
          <v-layout
            align-center 
            fill-height  
            class="px-4 question-center">
            <v-flex>
              <v-flex pb-3 class="text-xs-center bold-22 white--text">
                {{ question.title }}
              </v-flex>
              <v-flex class="text-xs-center">
                <v-btn 
                  v-for="(tag, index) in question.tags" 
                  :key="index"
                  outline
                  small
                  class="question-tag"
                  color="blue-grey lighten-3"
                  :ripple="false">
                    {{ tag }}
                </v-btn>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container class="pa-0 top-content">
          <v-layout
            align-end 
            class="question-center">
            <v-flex class="pb-4 text-xs-center">
              <v-btn
                flat  
                class="ma-0 add-photo"
                :ripple="false"
                @click.stop="callAddBackgroundDialog()">
                <v-icon class="blocklight-text">
                  add_a_photo
                </v-icon>
                <v-flex class="ml-2 mt-1 reg-16 blocklight-text">
                  Выбрать картинку из галереи
                </v-flex>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-layout>
      <v-flex 
        v-for="(answer, index) in question.answers"
        class="mt-3 answer"
        :key="index">
        <v-card 
          class="px-3 py-1 text-xs-center answer-block reg-16 blocklight border">
          <v-card-text>
            {{ answer }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog 
      max-width="712px"
      v-model="addBackground" >
      <add-background 
        :dialogIsOpen="addBackground"  
        @closeDialog="closeAddBackgroundDialog"
        @addBackground="onAddBackground">
      </add-background>
    </v-dialog>
  </v-container>
</template>

<script>
import AddBackground from './addBackground.vue'
export default {
  data() {
    return {
      currentBackground: 0,
      backgrounds: [],
      addBackground: false
    }
  },
  props: ['question'],
  beforeMount() {
    this.addBackgrounds;
  },
  computed: {
    addBackgrounds() {
      this.backgrounds = [
        {
          src: 'https://image.zn.ua/media/images/645x426/Apr2017/174001.jpg'
        },
        {
          src: 'https://xage.ru/media/posts/2014/4/30/1-maja-istorija-proishozhdenija-prazdnika.jpg'
        },
        {
          src: 'http://f.mypage.ru/eb3fb6898e0a87e335b2ba33f9898467_59073b49e9cb069a9e611ddd0324b1ce.jpg'
        },
        {
          src: 'https://sport-51.ru/uploads/posts/2018-04/1523041853_45.jpg'
        }
      ]
    }
  },
  methods: {
    callAddBackgroundDialog() {
      this.addBackground = true;
    },
    onAddBackground(background) {
      let index = -1;
      for(let i = 0; i < this.backgrounds.length; i++) {
        if (this.backgrounds[i].src === background.src) {
          index = i;
          break;
        }
      }
      if(index === -1) {
        this.backgrounds.unshift(background);
      }
      else {
        this.backgrounds.unshift(this.backgrounds.splice(index,1)[0]);
      }
      this.currentBackground = 0;
    },
    closeAddBackgroundDialog() {
      this.addBackground = false;
    }
  },
  components: {
    'add-background': AddBackground
  }
}
</script>

<style scoped>
.img {
  -webkit-filter: brightness(0.5);
  filter: brightness(0.5);
  border-radius: 2px;
}
.carousel {
  height: 304px;
}
.add-photo {
  text-transform: inherit;
}
.material-icons {
  font-size: 26px;
}
.top-content {
  position: absolute;
  top: 0%;
  height: 100%;
}
.question-center {
  height: 100%;
}
.question-tag {
  font-size: 12px;
  font-weight: 300;
  border-radius: 5px;
}
.answer {
  width: 50%;
  line-height: 19px;
  margin-right: 10px;
}
.answer-block {
  min-height: 100px;
  height: 100px;
  border-radius: 5px;
}
.border-radius {
  border-radius: 5px;
}
.answer:nth-last-child(1) {
  margin-right: 0px;
}
</style>
