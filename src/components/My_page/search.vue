<template>
  <v-container class="pa-0" id="my-page-search-comp">
    <v-text-field
      single-line
      class="search-line"
      label="Поиск"
      prepend-icon="search"
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
    }
  }
}
</script>

<style scoped>
.search-line {
  color: #1A93F0 !important;
}
.search-line :nth-last-child(1) {
  max-width: 100%;
}
</style>
