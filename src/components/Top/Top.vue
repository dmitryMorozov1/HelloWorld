<template>
  <v-container class="main-layout">
    <v-layout>
      <v-flex class="top">
        <router-view></router-view>
      </v-flex>
      <v-flex>
        <top-menu class="top-menu mr-0 mb-3"></top-menu>
        <top-popular class="top-popular mr-0"></top-popular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import question from '../Main/question/question'
import menu from './top-menu'
import popular from './top-popular'

export default {
  data() {
    return {
      
    }
  },
  components: {
    'question' : question,
    'top-menu' : menu,
    'top-popular' : popular
  },
  mounted() {
    // this.$router.push({ name: 'Top-day' })
  }
}
</script>

<style scoped>
.top-menu {
  width: 275px;
  max-width: 275px;
}
.top-popular {
  width: 275px;
  max-width: 275px;
}
.top {
  width: 777px;
  max-width: 777px;
}
</style>
