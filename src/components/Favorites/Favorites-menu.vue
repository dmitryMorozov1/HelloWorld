<template>
  <v-container class="pa-0">
    <v-flex class="mb-3 favorites-menu blocklight border">
      <v-list>
        <v-list-tile 
          v-for="item in items" 
          :key="item.title" 
          :id="item.id" 
          class="favorites-menu-btn" 
          @click="go(item.id)">
          <v-list-tile-content 
            small
            class="pl-4 med-17 textdarkgrey-text"
            v-text="item.title.toUpperCase()" >
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
    <v-flex class="favorites-menu blocklight border">
      <v-menu 
        offset-y 
        class="menubar"
        z-index="1"
        v-model="menuIcon">
        <v-btn 
          block
          depressed
          class="my-0 reg-17 textdarkgrey-text" 
          color="white"
          slot="activator"
          :ripple="false">
          <v-layout class="pl-4">
            СОРТИРОВКА
          </v-layout>
          <v-icon 
            v-if="!menuIcon"
            class="pr-3">
              keyboard_arrow_down
          </v-icon>
          <v-icon 
            v-else
            class="pr-3">
              keyboard_arrow_up
          </v-icon>
        </v-btn>
        <v-list>
          <v-list-tile 
            v-for="sort in sorts" 
            :key="sort.sortBy" 
            :id="'favorites-'+sort.sortBy+'-id'"
            class="sort-menu reg-15 textdarkgrey-text" 
            @click="selectSort(sort.sortBy)">
            <v-list-tile-title class="pl-4">
              {{ sort.text }}
            </v-list-tile-title>
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
      items: [],
      currentId: "",
      currentSortId: "",
      sorts: [],
      menuIcon: false
    }
  },
  beforeMount() {
    this.addItems;
    this.addSorts;
  },
  mounted () {
    this.addCurrentId;
    this.addCurrentSortId;
  },
  computed: {
    addItems() {
      this.items = [
        { title: 'Моё', id: 'Favorites-mine'},
        { title: 'Понравилось', id: 'Favorites-liked'},
        { title: 'Сохранено', id: 'Favorites-saved'}
      ];
    },
    addSorts() {
      this.sorts = [
        { sortBy: 'rating', text: 'ПО РЕЙТИНГУ' },
        { sortBy: 'watches', text: 'ПО ПОКАЗАМ' },
        { sortBy: 'date', text: 'ПО ДАТЕ' }
      ];
    },
    addCurrentId() {
      this.currentId = this.$router.history.current.name || this.items[0].id;
      this.go(this.currentId);
    },
    addCurrentSortId() {
      this.currentSortId = "favorites-rating-id";
      this.dyeElement(this.currentSortId, this.currentSortId)
    }
  },
  methods: {
    go(id) {
      this.$router.push({ name: id});
      this.dyeElement(id, this.currentId);
      this.currentId = id;
    },
    selectSort(sortBy) {
      if ("favorites-"+sortBy+"-id" !== this.currentSortId)
      {
        this.$emit('changeSorting', { sortBy: sortBy });
        this.dyeElement("favorites-"+sortBy+"-id", this.currentSortId);
        this.currentSortId = "favorites-"+sortBy+"-id";
      }
    },
    dyeElement(newId, currentId) {
      document.getElementById(currentId).firstChild.classList.remove("textblue-text");
      document.getElementById(currentId).firstChild.classList.add("textdarkgrey-text");
      if (document.getElementById(newId)) {
        document.getElementById(newId).firstChild.classList.add("textblue-text");
        document.getElementById(newId).firstChild.classList.remove("textdarkgrey-text");
      }
    }
  }
}
</script>

<style scoped>
.favorites-menu {
  border-radius: 2px;
}
.input {
  color: #1A93F0 !important;
}
.menubar {
  width: 100%;
}
.btn {
  height: 40px;
}
.favorites-menu-btn :nth-child(1) {
  height: 36px;
}
.sort-menu :nth-child(1) {
  max-height: 36px;
}
</style>
