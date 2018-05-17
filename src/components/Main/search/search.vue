<template>
  <v-container class="pa-0 search-comp">
    <v-text-field
      single-line
      class="search-line reg-18"
      v-model="search"
      :placeholder="label"
      @focus="focusOnSearch"
      @blur="unFocusOnSearch"
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    }
  },
  props: ['label', 'searchStr', 'element'],
  watch: {
    searchStr: function(thisSearchStr) {
      this.search = thisSearchStr;
    },
    search: function(thisSearch) {
      this.$emit('inputsearch', { search: thisSearch });
    }
  },
  methods: {
    focusOnSearch() {
      let list = document.getElementsByClassName(this.element);
      for (let i = 0; i < list.length; i++) {
        for(let k = 0; k < list[i].children.length; k++)
        {
          list[i].children[k].classList.remove("blocklight");
        }
      }
    },
    unFocusOnSearch() {
      let list = document.getElementsByClassName(this.element);
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
</style>
