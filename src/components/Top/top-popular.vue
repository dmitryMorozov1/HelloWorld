<template>
  <v-container class="top-1 blocklight border">
    <v-flex class="text-xs-center reg-17 textdarkgrey-text">
      ПОПУЛЯРНЫЕ ТЕМЫ
    </v-flex>
    <v-flex class="pt-2">
      <v-flex class="pl-4" 
        v-for="popularTopic in popularTopics" 
        :key="popularTopic.id">
        <v-layout class="top-popular-value">
          <v-btn 
            outline
            small
            class="top-popular-tag thin-12 textdarkgrey-text"
            color="grey darken-1"
            :ripple="false"
            @click="getTopic(popularTopic.id)">
              {{ popularTopic.name }}
          </v-btn>
          <v-flex class="pt-2 pl-1 med-17 textdarkgrey-text">
            {{ popularTopic.value }}
          </v-flex>
        </v-layout>
      </v-flex>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      popularTopics: []
    }
  },
  beforeMount() {
    this.addPopularTopics;
  },
  computed: {
    addPopularTopics() {
      this.popularTopics = [
        { id: '1', name: 'Судьба', value: 97},
        { id: '2', name: 'Фамилия', value: 65},
        { id: '3', name: 'Имя', value: 45},
        { id: '4', name: 'Смена', value: 33},
        { id: '5', name: 'Политика', value: 23},
        { id: '6', name: 'Религия', value: 12},
        { id: '7', name: 'Государство', value: 4}
      ];
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
.top-1 {
  border-radius: 2px;
}
.top-popular-tag {
  border-radius: 5px;
}
.btn {
  min-width: 0;
}
</style>
