<template>
  <v-toolbar 
    class="mini-header-comp blocklight border"
    height="54px">
    <v-toolbar-items>
      <v-btn
        v-for="item in menuItems"
        :key="item.id" 
        :id="item.id"
        flat 
        class="mini-header-btn med-16" 
        :ripple="false"
        @click="go(item.id)">
        <v-layout row wrap>
          <v-flex xs12>
            {{ item.title }}
          </v-flex>
          <v-flex xs12>
            {{ item.count }} 
          </v-flex>
        </v-layout>
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: ['amounts'],
  data() {
    return {
      menuItems: [],
      currentId: ""
    }
  },
  beforeMount() {
    this.addMenuItems;
  },
  mounted () {
    this.addCurrentId;
  },
  computed: {
    addMenuItems() {
      this.menuItems = [
        { id: 'ProfileQuestions', title: 'Вопросы', count: this.amounts.questions},
        { id: 'ProfileAnswers', title: 'Ответы', count: this.amounts.answers},
        { id: 'ProfileFollowers', title: 'Подписчики', count: this.amounts.followers},
        { id: 'ProfileFollowing', title: 'Подписки', count: this.amounts.following},
        { id: 'ProfileFavorites', title: 'Избранное', count: this.amounts.favorites},
        { id: 'ProfileComments', title: 'Комментарии', count: this.amounts.comments}
      ];
    },
    addCurrentId() {
      this.currentId = this.$router.history.current.name || this.menuItems[0].id;
      this.go(this.currentId);
    }
  },
  methods: {
    go(id) {
      document.getElementById(this.currentId).classList.remove("textblue-text");
      this.$router.push({ name: id, params: { id: '1'} });
      if (document.getElementById(id)) {
        document.getElementById(id).classList.add("textblue-text");
        this.currentId = id;
      }
    }
  }
}
</script>

<style scoped>
.mini-header-comp {
  border-radius: 2px;
}
.mini-header-btn {
  text-transform: capitalize;
  width: 100%;
}

</style>
