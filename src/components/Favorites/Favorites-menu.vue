<template>
  <v-container pa-0 id="favorites-menu-comp">
    <v-flex mb-3 class="favorites-menu border blocklight">
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
    <v-flex class="favorites-menu border blocklight">
      <v-menu 
        offset-y 
        z-index=1
        v-model="menuIcon" 
        class="menubar">
        <v-btn 
          class="my-0 reg-17 textdarkgrey-text" 
          color="white"
          block
          depressed
          :ripple="false"
          slot="activator">
            <v-layout class="pl-4">
              СОРТИРОВКА
            </v-layout>
            <i 
              v-if="!menuIcon"
              class="material-icons pr-3">
                keyboard_arrow_down
            </i>
            <i 
              v-else
              class="material-icons pr-3">
                keyboard_arrow_up
            </i>
        </v-btn>
        <v-list>
          <v-list-tile 
            class="reg-15 textdarkgrey-text" 
            v-for="sort in sorts" 
            :key="sort.sortBy" 
            :id="'favorites-'+sort.sortBy+'-id'"
            @click="selectSort(sort.sortBy)">
            <v-list-tile-title class="pl-4" >{{ sort.text }}</v-list-tile-title>
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
      menuIcon: false,
      items: [
        { title: 'Моё', id: 'Favorites-mine'},
        { title: 'Понравилось', id: 'Favorites-liked'},
        { title: 'Сохранено', id: 'Favorites-saved'}
      ],
      currentId: "",
      currentSortId: "",
      sortSelect: [],
      sorts: [
        {
          sortBy: 'rating',
          text: 'ПО РЕЙТИНГУ'
        },
        {
          sortBy: 'watches',
          text: 'ПО ПОКАЗАМ'
        },
        {
          sortBy: 'date',
          text: 'ПО ДАТЕ'
        }
      ]
    }
  },
  mounted () {
    this.setStyles();
    this.currentId = this.$router.history.current.name || this.items[0].id;
    this.go(this.currentId);
    this.currentSortId = "favorites-rating-id",
    this.paintOverElement(this.currentSortId, this.currentSortId)
  },
  methods: {
    go(id) {
      this.$router.push({ name: id});
      this.paintOverElement(id, this.currentId);
      this.currentId = id;
    },
    paintOverElement(newId, currentId) {
      document.getElementById(currentId).firstChild.classList.remove("textblue-text");
      document.getElementById(currentId).firstChild.classList.add("textdarkgrey-text");
      if (document.getElementById(newId)) {
        document.getElementById(newId).firstChild.classList.add("textblue-text");
        document.getElementById(newId).firstChild.classList.remove("textdarkgrey-text");
      }
    },
    selectSort(sortBy) {
      if ("favorites-"+sortBy+"-id" !== this.currentSortId)
      {
        this.$emit('changeSorting', { sortBy: sortBy });
        this.paintOverElement("favorites-"+sortBy+"-id", this.currentSortId);
        this.currentSortId = "favorites-"+sortBy+"-id";
      }
    },
    setStyles() {
      for(let i = 0; i < 3; i++)
        document.getElementById("favorites-menu-comp")
                .firstElementChild.firstElementChild.children[i]
                .firstElementChild.style.height = "36px";
      document.getElementById("favorites-rating-id").style.height = "36px";
      document.getElementById("favorites-watches-id").style.height = "36px";
      document.getElementById("favorites-date-id").style.height = "36px";
    }
  }
}
</script>

<style scoped>
.favorites-menu {
  border-radius: 2px;
}
#favorites-menu-comp .input {
  color: #1A93F0 !important;
}
.menubar {
  width: 100%;
}
.btn {
  height: 40px;
}
</style>
