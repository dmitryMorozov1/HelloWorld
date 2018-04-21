<template>
  <v-container pa-0 id="top-menu-comp">
    <v-flex mb-3 class="top-1 border blocklight">
      <v-list>
        <v-list-tile 
          v-for="item in items" 
          class="top-menu-btn" 
          :id="item.id" 
          :key="item.title" 
          @click="go(item.id)">
            <v-list-tile-content 
              small
              v-text="item.title.toUpperCase()" 
              class="med-17 textdarkgrey-text pl-4">
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
    <v-layout class="top-2 border blocklight py-1">
      <v-flex class="textdarkgrey-text pl-3 reg-15">
        Показывать только новые
      </v-flex>
      <v-switch class="pr-3" 
        hide-details
        v-model="tile"
        @click="showNewQuestions()">
      </v-switch>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'День', id: 'Top-day'},
        { title: 'Неделя', id: 'Top-week'},
        { title: 'Месяц', id: 'Top-month'},
        { title: 'Всё время', id: 'Top-all'}
      ],
      currentId: "",
      tile: false
    }
  },
  mounted () {
    this.setStyles();
    this.currentId = this.$router.history.current.name || this.items[0].id;
    this.go(this.currentId);
  },
  methods: {
    go(id) {
      this.$router.push({ name: id});
      document.getElementById(this.currentId).firstChild.classList.remove("textblue-text");
      document.getElementById(this.currentId).firstChild.classList.add("textdarkgrey-text");
      if (document.getElementById(id)) {
        document.getElementById(id).firstChild.classList.add("textblue-text");
        document.getElementById(id).firstChild.classList.remove("textdarkgrey-text");
        this.currentId = id;
      }
    },
    showNewQuestions() {
      this.$emit('showNewQuestions', { tile: !this.tile });
    },
    setStyles() {
      for(let i = 0; i < 4; i++)
        document.getElementById("top-menu-comp")
                .firstElementChild.firstElementChild.children[i]
                .firstElementChild.style.height = "36px";
    }
  }
}
</script>

<style scoped>
.top-1 {
  border-radius: 2px;
}
.top-2 {
  align-items: center;
}
</style>
