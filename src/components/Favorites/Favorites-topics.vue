<template>
  <v-container class="border top-1 blocklight">
    <v-flex class="textdarkgrey-text text-xs-center reg-17">
      ЛЮБИМЫЕ ТЕМЫ
    </v-flex>

    <v-tabs v-model="active">
      <v-layout class="text-xs-center blocklight">
      <v-tab :ripple="false" class="reg-12 topic-tab">
        Мои вопросы
      </v-tab>
      <v-tab :ripple="false" class="reg-12 topic-tab">
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
          { id: '7', name: 'Государство', value: 4}
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
    }
  }
}
</script>

<style scoped>
.top-1 {
  min-height: 360px;
  border-radius: 2px;
}
.top-favorites-layout {
  text-align: center;
}
.top-favorites-tag {
  border-radius: 5px;
}
.btn {
  min-width: 0;
}
.topic-tab {
  height: 100%;
  width: 50%;
}
.topic-tab-item {
  min-height: 260px;
}
</style>
