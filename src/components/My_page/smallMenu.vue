<template>
  <v-content class="main border blocklight mx-3">
    <v-content v-for="category in categories" class="ml-2 mt-2" :key="category.id">
      
      <send-feedback v-if="category.id===3" :feedBack="feedBack"></send-feedback>
      <a v-if="category.id!==3" class="textdarkgrey-text categories">{{category.name}}</a>
      <v-divider v-if="category.id===3" class="divider mt-1"></v-divider>

    </v-content>
  </v-content>
</template>
<script>
  import sendFeedBack from './sendFeedBack'
  export default {
    data() {
      return {
        feedBack:false,
        categories: [
          {
            id: 1,
            name: "Моя страница",
          },
          {
            id: 2,
            name: "Настройки",
          },
          {
            id: 3,
            name: "Обратная связь",
          },
          {
            id: 4,
            name: "Выход",
          },
        ],
      }
    },
    name: "smallMenu",
    components: {
      'send-feedback': sendFeedBack,
    },

  }
</script>

<style scoped>
  .main {
    max-width: 150px;
    max-height: 125px;
    height: 125px;
    width: 150px;
  }

  .divider {
    width: 95%;
  }

  .categories:hover {
    color: #1A93F0 !important;
  }
</style>
