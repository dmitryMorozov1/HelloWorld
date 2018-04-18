<template>
  <v-container pa-0 id="favorites-menu-comp">
    <v-flex mb-3 class="favorites-1 border blocklight">
      <v-list>
        <v-list-tile 
          v-for="item in items" 
          class="favorites-menu-btn" 
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
    <v-flex class="favorites-2 border blocklight">
      <v-menu offset-y class="menubar">
        <v-btn 
          class="my-0" 
          color="white"
          block
          depressed
          :ripple="false"
          slot="activator">
            СОРТИРОВКА
        </v-btn>
        <v-list>
          <v-list-tile v-for="sort in sorts" :key="sort.title" @click="s">
            <v-list-tile-title>{{ sort.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Моё', id: 'Favorites-mine'},
        { title: 'Понравилось', id: 'Favorites-liked'},
        { title: 'Сохранено', id: 'Favorites-saved'}
      ],
      currentId: "",
      sortSelect: [],
      sorts: [
          {
            sortBy: 'rating',
            text: 'По рейтингу'
          },
          {
            sortBy: 'watches',
            text: 'По показам'
          },
          {
            sortBy: 'date',
            text: 'По дате'
          }
        ]
    }
  },
  mounted () {
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
    changeSorting() {
      this.$emit('changeSorting', { sortBy: sortSelect.sortBy });
    }
  }
}
</script>

<style scoped>
.favorites-1 {
  border-radius: 2px;
}
.favorites-2 {
  border-radius: 2px;
}
#favorites-menu-comp .input {
  color: #1A93F0 !important;
}
.menubar {
  width: 100%;
}
</style>
