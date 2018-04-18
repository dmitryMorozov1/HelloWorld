<template>
  <v-container class="border top-1 blocklight">
    <v-flex class="textdarkgrey-text text-xs-center reg-17">
      ПОПУЛЯРНЫЕ ТЕМЫ
    </v-flex>
    <v-flex class="pt-2">
      <v-flex class="pl-4" 
        v-for="popularTopic in popularTopics" 
        :key="popularTopic.id">
        <v-layout row class="top-popular-value">
          <v-btn 
            outline
            small
            :ripple="false"
            color="grey darken-1"
            class="top-popular-tag thin-12 textdarkgrey-text"
            @click="getTopic(popularTopic.id)">
              {{ popularTopic.name }}
          </v-btn>
          <v-flex class="med-17 textdarkgrey-text pt-2 pl-1">
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
  mounted () {
    this.getAmounts();
  },
  methods: {
    getAmounts() {
      this.popularTopics = [
        { id: '1', name: 'Судьба', value: 97},
        { id: '2', name: 'Фамилия', value: 65},
        { id: '3', name: 'Имя', value: 45},
        { id: '4', name: 'Смена', value: 33},
        { id: '5', name: 'Политика', value: 23},
        { id: '6', name: 'Религия', value: 12},
        { id: '7', name: 'Государство', value: 4}
      ];
    },
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
.top-popular-layout {
  text-align: center;
}
.top-popular-tag {
  border-radius: 5px;
}
.btn {
  min-width: 0;
}
</style>
