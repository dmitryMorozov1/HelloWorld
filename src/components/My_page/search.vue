<template>
  <v-container px-0 py-0 id="search-comp">
    <v-text-field
      class="search-line"
      label="Поиск"
      prepend-icon="search"
      single-line
      v-model="search"
      @focus="focusOnSearch"
      @blur="unFocusOnSearch"
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  watch: {
    search: function() {
      this.$emit('inputsearch', { search: this.search });}
  },
  mounted () {
    document.getElementById('search-comp').firstChild.lastChild.style.maxWidth = "100%";
    document.getElementById('search-comp').firstChild.childNodes[1].lastChild.classList.add("med-18");
  },
  methods: {
    focusOnSearch() {
      let list = document.getElementsByClassName("follower-fild-title");
      for (let i = 0; i < list.length; i++) {
        for(let k = 0; k < list[i].children.length; k++)
        {
          list[i].children[k].classList.remove("blocklight");
        }
      }
    },
    unFocusOnSearch() {
      let list = document.getElementsByClassName("follower-fild-title");
      for (let i = 0; i < list.length; i++) {
        for(let k = 0; k < list[i].children.length; k++)
        {
          list[i].children[k].classList.add("blocklight");
        }
      }
    },
  }
}
</script>

<style scoped>
#search-comp {
  width: 100%;
}
#search-comp .search-line {
  color: #1A93F0 !important;
}
</style>
