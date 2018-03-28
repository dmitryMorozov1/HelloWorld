<template>
  <v-app id="app">
    <main-header></main-header>
    <transition>
      <router-view class="mt-5"/>
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
  background-color: #F7F7F7;
}
</style>
