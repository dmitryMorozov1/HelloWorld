<template>
  <v-app id="app">
    <main-header></main-header>
    <transition>
      <router-view/>
    </transition>
  </v-app>
</template>

<script>
import header from '@/components/Main/Header.vue'

export default {
  name: 'App',
  data () {
    return {
      tab: ''
    }
  },
  components: {
    'main-header': header
  }
}
</script>

<style>
#app {
  background-color: #C6D7E9;
  height: 1000px;
}
</style>
