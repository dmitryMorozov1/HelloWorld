<template>
  <v-app id="app">
    <main-header></main-header>
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
import header from '@/components/Main/Header.vue'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    'main-header' : header
  }
  
}
</script>

<style>
body {
  height: 1000px;
}
</style>
