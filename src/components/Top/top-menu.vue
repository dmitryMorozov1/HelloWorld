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
    <v-flex class="top-2 border blocklight">
      <v-layout row class="top-2-layout">
        <v-flex class="textdarkgrey-text pl-3 reg-15">
          Показывать только новые
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex class="pt-4">
        <v-switch
          v-model="tile"
          @click="showNewQuestions(1)">
        </v-switch>
        </v-flex>
      </v-layout>
    </v-flex>
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
    this.currentId = this.$router.history.current.name || this.items[0].id;

    // Это можно ввести, чтобы как то исправить положение,
    // но это не решит все проблемы
     if (this.currentId === 'Top') this.currentId = 'Top-day';
    

    this.go(this.currentId);
  },
  methods: {
    go(id) {
      // Можно сделать это вот это, но это не решит все проблемы
       let thisName = id==='Top-day' ? 'Top' : id;
      // и запихать в push вместо id 
      this.$router.push({ name: thisName});

      //больше я не знаю че сделать еще

      document.getElementById(this.currentId).firstChild.classList.remove("textblue-text");
      document.getElementById(this.currentId).firstChild.classList.add("textdarkgrey-text");
      if (document.getElementById(id)) {
        document.getElementById(id).firstChild.classList.add("textblue-text");
        document.getElementById(id).firstChild.classList.remove("textdarkgrey-text");
        this.currentId = id;
      }
    },
    showNewQuestions(id) {
      this.$emit('showNewQuestions', { tile: !this.tile });
    }
  }
}
</script>

<style scoped>
.top-1 {
  border-radius: 2px;
}
.top-2 {
  height: 45px;
  border-radius: 2px;
}
.top-2-layout {
  align-items: center;
  max-height: 45px;
}
</style>
