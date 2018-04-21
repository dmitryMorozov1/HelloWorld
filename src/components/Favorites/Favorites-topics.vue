<template>
  <v-container class="border favorites-topics blocklight" id="favorites-topics-comp">
    <v-flex class="textdarkgrey-text text-xs-center reg-17">
      ЛЮБИМЫЕ ТЕМЫ
    </v-flex>
    <v-tabs grow v-model="active">
      <v-layout class="text-xs-center blocklight">
        <v-tab :ripple="false" class="reg-12">
          Мои вопросы
        </v-tab>
        <v-tab :ripple="false" class="reg-12">
          Мои ответы
        </v-tab>
      </v-layout>
      <v-tab-item
        class="topic-tab-item"
        v-for="n in tabItemNames"
        :key="n">
        <v-flex class="pt-2">
          <v-flex class="pl-4" 
            v-for="favoritesTopic in favoritesTopics[n]" 
            :key="favoritesTopic.id">
            <v-layout row class="top-favorites-value">
              <v-btn 
                outline
                small
                :ripple="false"
                color="grey darken-1"
                class="top-favorites-tag thin-12 textdarkgrey-text"
                @click="getTopic(favoritesTopic.id)">
                  {{ favoritesTopic.name }}
              </v-btn>
              <v-flex class="med-17 textdarkgrey-text pt-2 pl-1">
                {{ favoritesTopic.value }}
              </v-flex>
            </v-layout>
          </v-flex>
        </v-flex>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      favoritesTopics: {},
      tabItemNames: []
    }
  },
  mounted () {
    this.setStyles();
    this.getAmounts();
  },
  methods: {
    getAmounts() {
      this.favoritesTopics = { 
        questions: [
          { id: '1', name: 'Судьба', value: 97},
          { id: '2', name: 'Фамилия', value: 65},
          { id: '3', name: 'Имя', value: 45},
          { id: '5', name: 'Политика', value: 23},
          { id: '6', name: 'Религия', value: 12},
          { id: '7', name: 'Государство', value: 4},
          { id: '121', name: 'eeee', value: 1}
        ],
        answers: [
          { id: '6', name: 'Религия', value: 99},
          { id: '2', name: 'Фамилия', value: 65},
          { id: '1', name: 'Судьба', value: 45},
          { id: '5', name: 'Политика', value: 23}
        ]
      };
      this.tabItemNames = ['questions', 'answers'];
    },
    getTopic(id) {
      alert(id);
    },
    setStyles() {
      document.getElementById("favorites-topics-comp")
              .children[1].firstElementChild.firstElementChild
              .firstElementChild.style.height = "36px";
    }
  }
}
</script>

<style scoped>
.favorites-topics {
  border-radius: 2px;
}
.top-favorites-tag {
  border-radius: 5px;
}
.btn {
  min-width: 0;
}
.topic-tab-item {
  min-height: 288px;
}

</style>
