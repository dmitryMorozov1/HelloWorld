<template>
  <v-container class="pa-0">
    <v-flex class="mb-3 top-1 blocklight border">
      <v-list>
        <v-list-tile 
          v-for="item in items" 
          :key="item.title" 
          :id="item.id" 
          class="top-menu-btn" 
          @click="go(item.id)">
          <v-list-tile-content 
            small
            class="med-17 textdarkgrey-text pl-4"
            v-text="item.title.toUpperCase()" >
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
    <v-layout class="py-1 top-2 blocklight border">
      <v-flex 
        class="pl-3 reg-15 textdarkgrey-text pointer"
        @click="changeTile()">
          Показывать только новые
      </v-flex>
      <v-switch 
        hide-details
        class="pr-3" 
        v-model="tile">
      </v-switch>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      currentId: "",
      tile: false
    }
  },
  watch: {
    tile: function () {
      this.$emit('showNewQuestions', { tile: this.tile });
    }
  },
  beforeMount() {
    this.addItems;
  },
  mounted () {
    this.addCurrentId;
  },
  computed: {
    addItems() {
      this.items = [
        { title: 'День', id: 'Top-day'},
        { title: 'Неделя', id: 'Top-week'},
        { title: 'Месяц', id: 'Top-month'},
        { title: 'Всё время', id: 'Top-all'}
      ];
    },
    addCurrentId() {
      this.currentId = this.$router.history.current.name || this.items[0].id;
      this.go(this.currentId);
    }
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
    changeTile() {
      this.tile = !this.tile;
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
.pointer {
  cursor: pointer;
}
.top-menu-btn :nth-child(1) {
  height: 36px;
}
</style>
