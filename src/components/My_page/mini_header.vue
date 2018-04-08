<template>
  <v-toolbar height="54px" class="border blocklight" id="mini-header-comp">
    <v-toolbar-items class="mini-toolbar">
      <v-btn
        flat 
        v-for="item in menuItems"
        :key="item.id" 
        :id="item.id"
        :ripple="false"
        class="mini-header-btn med-16 " 
        @click="go(item.id)">
          <v-layout row wrap>
            <v-flex xs12>{{ item.title }}</v-flex>
            <v-flex xs12>{{ item.count }} </v-flex>
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
      menuItems: [
        { id: 'ProfileQuestions', title: 'Вопросы', count: ""},
        { id: 'ProfileAnswers', title: 'Ответы', count: ""},
        { id: 'ProfileFollowers', title: 'Подписчики', count: ""},
        { id: 'ProfileFollowing', title: 'Подписки', count: ""},
        { id: 'ProfileFavorites', title: 'Избранное', count: ""},
        { id: 'ProfileComments', title: 'Комментарии', count: ""}
      ],
      currentId: ""
    }
  },
  mounted () {
    this.getAmounts();
    this.currentId = this.$router.history.current.name || this.menuItems[0].id;
    this.go(this.currentId);
  },
  methods: {
    go(id) {
      document.getElementById(this.currentId).classList.remove("textblue-text");
      this.$router.push({ name: id, params: { id: '1'} });
      if (document.getElementById(id)) {
        document.getElementById(id).classList.add("textblue-text");
        this.currentId = id;
      }
    },
    getAmounts(){
      this.menuItems[0].count = this.amounts.questions;
      this.menuItems[1].count = this.amounts.answers;
      this.menuItems[2].count = this.amounts.followers;
      this.menuItems[3].count = this.amounts.following;
      this.menuItems[4].count = this.amounts.favorites;
      this.menuItems[5].count = this.amounts.comments;
    }
  }
}
</script>

<style scoped>
#mini-header-comp {
  border-radius: 2px;
}
#mini-header-comp .mini-toolbar {
  width: 100%;
}
#mini-header-comp .mini-header-btn {
  text-transform: capitalize;
  width: 100%;
}

</style>
