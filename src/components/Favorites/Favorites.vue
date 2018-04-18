<template>
  <v-container class="main-layout">
    <v-layout>
      <v-flex class="favorites">
        <router-view :questionSort="questionSort"></router-view>
      </v-flex>
      <v-flex>
        <favorites-menu  
          @changeSorting="onChangeSorting" 
          class="favorites-menu mr-0 mb-3">
        </favorites-menu>
        <favorites-topics 
          class="favorites-popular mr-0">
        </favorites-topics>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import menu from './favorites-menu'
import topics from './favorites-topics'

export default {
  data() {
    return {
      questionSort: false
    }
  },
  components: {
    'favorites-menu' : menu,
    'favorites-topics' : topics
  },
  methods: {
    onChangeSorting(input) {
      alert(1);
      this.questionSort = input.tile;
    }
  },
  created () {
    if (this.$route.name === 'Favorites')
    this.$router.push({name: 'Favorites-mine'});
  }
}
</script>

<style scoped>
.favorites-menu {
  width: 275px;
  max-width: 275px;
}
.favorites-popular {
  width: 275px;
  max-width: 275px;
}
.favorites {
  width: 777px;
  max-width: 777px;
}
</style>
