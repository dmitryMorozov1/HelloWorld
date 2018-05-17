<template>
  <v-card>
    <v-container class="px-4 py-0">
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
      <v-flex class="pt-3 pb-4 text-xs-center med-24 textblue-text">
        Изменение фонового рисунка
      </v-flex>
      <v-layout class="pb-3 text-xs-center">
        <v-btn 
          round
          depressed
          class="ma-0 capitalize download-btn reg-16 textblue-text"
          @click.native="closeComponent()">
          <v-icon class="pr-2">
            add
          </v-icon>
          <v-flex>
            Загрузить файл
          </v-flex>
        </v-btn>
      </v-layout>
      <v-flex class="reg-18 textdarkgrey-text">
        Последние загруженные
      </v-flex>
      <hr class="my-2">
    </v-container>
    <v-container 
      grid-list-lg
      fluid
      class="py-2 px-4">
      <v-layout row wrap>
        <v-flex
          v-for="(background, index) in personBackgrounds"
          :key="index"
          v-if="index < backgroundCounter"
          xs4
          @click="selectBackground(background)">
          <v-card 
            flat 
            tile
            class="background-img pointer">
            <v-card-media
              class="border"
              height="80px"
              :src="background.src">
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout class="pb-2">
      <div 
        v-if="backgroundCounter !== 3"
        class="pl-4 pointer reg-16 textblue-text"
        @click="hidePersonBackgrounds">
          Скрыть
      </div>
      <v-spacer></v-spacer>
      <div 
        v-if="backgroundCounter <= personBackgrounds.length"
        class="pointer pr-4 reg-16 textblue-text"
        @click="showMore">
          Показать ещё
      </div>
    </v-layout>
    <v-container class="px-4 py-0">
      <v-flex class="reg-18 textdarkgrey-text">
        Стандартные картинки
      </v-flex>
      <hr class="my-2">
    </v-container>
    <v-container 
      grid-list-lg
      fluid
      class="py-2 px-4">
      <v-layout row wrap>
        <v-flex
          v-for="(background, index) in standardBackgrounds"
          :key="index"
          xs4
          @click="selectBackground(background)">
          <v-card 
            flat 
            tile
            class="background-img pointer">
            <v-card-media
              class="border"
              height="80px"
              :src="background.src">
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      standardBackgrounds: [],
      personBackgrounds: [],
      backgroundCounter: 3
    }
  },
  props: ['dialogIsOpen'],
  watch: {
    dialogIsOpen: function (yes) {
      if(yes)
      {
        this.backgroundCounter = 3;
      }
    }
  },
  beforeMount () {
    this.addStandardBackgrounds;
    this.addPersonBackgrounds;
  },
  mounted () {
    this.setStyles();
  },
  computed: {
    addStandardBackgrounds() {
      this.standardBackgrounds = [
        {
          src: "http://artfcity.com/wp-content/uploads/2017/07/1473185883EMBW_07.gif"
        },
        {
          src: "https://st3.depositphotos.com/10654668/14113/i/450/depositphotos_141134008-stock-photo-red-roses-on-table.jpg"
        },
        {
          src: "https://www.firestock.ru/wp-content/uploads/2015/05/Tumblr-Guy-Backgrounds-12-700x437.jpg"
        },
        {
          src: "https://wallpapershome.ru/images/pages/pic_hs/4019.jpg"
        },
        {
          src: "https://img.getbg.net/upload/full/www.GetBg.net_Backgrounds_Blue_Black_Background_107698_.jpg"
        },
        {
          src: "http://bipbap.ru/wp-content/uploads/2017/05/depositphotos_1607211-stock-photo-green-beautiful-background.jpg"
        },
        {
          src: "https://t3.ftcdn.net/jpg/01/25/33/28/240_F_125332817_SkSl1fXjF1ZeB8M4h6hkbU53Y1DHtnDB.jpg"
        },
        {
          src: "https://avatanplus.com/files/resources/mid/575bd926c3b1d1553ec83f92.jpg"
        },
        {
          src: "http://bipbap.ru/wp-content/uploads/2017/12/0f92147ad2284aae418b40faf24dc68902960019_hq-640x456.jpg"
        },
        {
          src: "http://anasko.ru/uploads/dleposts/2016-06/1465390381_yellow_rays.png"
        },
        {
          src: "http://peterbald-cat.ru/oboi/4/fon_tochki_ten_pyatna_1920x1080.jpg"
        },
        {
          src: "https://www.sunhome.ru/i/wallpapers/139/sinii-fon.orig.jpg"
        },
        {
          src: "https://avatanplus.com/files/resources/mid/575bd926c3b1d1553ec83f92.jpg"
        },
        {
          src: "http://risovach.ru/upload/2014/11/generator/eto-nyashnyy-kosmos-_67684962_orig_.jpg"
        },
        {
          src: "https://nz4.ru/wp-content/uploads/2014/12/94.jpg"
        },
        {
          src: "http://bipbap.ru/wp-content/uploads/2017/05/maxresdefault-14.jpg"
        },
        {
          src: "https://images.freeimages.com/images/premium/previews/5805/58059810-square-white-brick-wall-background.jpg"
        },
        {
          src: "http://bryanskoboi.ru/upload/iblock/283/%D0%A120%D0%91%D0%A0%20%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%20%D1%84%D0%BE%D0%BD%201.jpg"
        }
      ];
    },
    addPersonBackgrounds() {
      this.personBackgrounds = [
        {
          src: "https://avatanplus.com/files/resources/mid/575bd926c3b1d1553ec83f92.jpg"
        },
        {
          src: "http://bipbap.ru/wp-content/uploads/2017/12/0f92147ad2284aae418b40faf24dc68902960019_hq-640x456.jpg"
        },
        {
          src: "http://anasko.ru/uploads/dleposts/2016-06/1465390381_yellow_rays.png"
        },
        {
          src: "http://peterbald-cat.ru/oboi/4/fon_tochki_ten_pyatna_1920x1080.jpg"
        },
        {
          src: "https://www.sunhome.ru/i/wallpapers/139/sinii-fon.orig.jpg"
        },
        {
          src: "https://avatanplus.com/files/resources/mid/575bd926c3b1d1553ec83f92.jpg"
        },
        {
          src: "http://risovach.ru/upload/2014/11/generator/eto-nyashnyy-kosmos-_67684962_orig_.jpg"
        },
        {
          src: "https://nz4.ru/wp-content/uploads/2014/12/94.jpg"
        },
        {
          src: "http://bipbap.ru/wp-content/uploads/2017/05/maxresdefault-14.jpg"
        },
        {
          src: "https://images.freeimages.com/images/premium/previews/5805/58059810-square-white-brick-wall-background.jpg"
        },
        {
          src: "http://bryanskoboi.ru/upload/iblock/283/%D0%A120%D0%91%D0%A0%20%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%20%D1%84%D0%BE%D0%BD%201.jpg"
        }
      ];
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog');
    },
    selectBackground(background) {
      this.$emit('addBackground', background);
      this.$emit('closeDialog');
    },
    showMore() {
      this.backgroundCounter += 6;
    },
    hidePersonBackgrounds() {
      this.backgroundCounter = 3;
    },
    setStyles() {
      document.getElementsByClassName('download-btn')[0]
              .firstElementChild.style.paddingLeft = "8px";
    }
  }
}
</script>

<style scoped>
hr {
  border: none;
  background-color: rgba(217, 217, 217, 0.8); 
  height: 1px; 
}
.download-btn {
  height: 31px;
  border: 1px solid #5DA3DA !important;
}
.pointer {
  cursor: pointer;
}
.background-img {
  border-radius: 2px;
}
</style>
