<template>
  <v-container class="favorites-topics blocklight border">
    <v-flex class="text-xs-center reg-17 textdarkgrey-text">
      ЛЮБИМЫЕ ТЕМЫ
    </v-flex>
    <v-tabs 
      grow 
      v-model="active">
      <v-layout class="text-xs-center blocklight">
        <v-tab 
          class="reg-12"
          :ripple="false" >
            Мои вопросы
        </v-tab>
        <v-tab  
          class="reg-12"
          :ripple="false">
            Мои ответы
        </v-tab>
      </v-layout>
      <v-tab-item
        v-for="name in tabItemNames"
        :key="name"
        class="topic-tab-item">
        <v-flex class="pt-2">
          <v-flex class="pl-4" 
            v-for="favoritesTopic in favoritesTopics[name]" 
            :key="favoritesTopic.id">
            <v-layout class="top-favorites-value">
              <v-btn 
                outline
                small
                class="top-favorites-tag thin-12 textdarkgrey-text"
                color="grey darken-1"
                :ripple="false"
                @click="getTopic(favoritesTopic.id)">
                  {{ favoritesTopic.name }}
              </v-btn>
              <v-flex class="pt-2 pl-1 med-17 textdarkgrey-text">
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
  beforeMount() {
    this.addFavoritesTopics;
    this.addTabItemNames;
  },
  computed: {
    addFavoritesTopics() {
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
    },
    addTabItemNames() {
      this.tabItemNames = ['questions', 'answers'];
    }
  },
  methods: {
    getTopic(id) {
      alert(id);
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
.tabs :nth-child(1) {
  max-height: 36px;
}
</style>
