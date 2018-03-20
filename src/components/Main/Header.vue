<template>
  <v-toolbar dense id="app-toolbar" color="white">
    <v-toolbar-title>
      2Buttons
    </v-toolbar-title>
    <v-toolbar-items>
      <!-- <v-btn flat>2Buttons</v-btn> -->
      <v-btn flat class="body-1">Моя страница</v-btn>
      <v-btn flat class="body-1">Новости</v-btn>
      <v-btn flat class="body-1">Закладки</v-btn>
      <v-btn flat class="body-1">Лучшее</v-btn>
      <v-btn flat class="body-1">Подобрать вопрос</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <v-btn color="primary" small depressed>Задать вопрос</v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <!-- <v-btn color="primary" small depressed>Задать вопрос</v-btn> -->
      <v-btn flat>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-menu class="text-xs-center" :nudge-width="100">
        <v-toolbar-title slot="activator">
          <v-avatar size="30px">
            <img src="../../assets/av.jpg" alt="">
          </v-avatar>
          <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>

        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
    
    }
  },
  props: [''] 
}
</script>

<style scoped>
#app-toolbar .toolbar__items .btn {
  text-transform: capitalize;
}
</style>
