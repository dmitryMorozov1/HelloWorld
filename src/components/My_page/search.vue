<!-- 
Внимание: добавлена логика поиска. (Без родителя работать не будет)
-->
<template>
<v-container px-0 py-0 class="search" id="search-comp">
  <v-text-field
          class="search-line"
          label="Поиск"
          prepend-icon="search"
          single-line
          v-model="search"
          dark
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
    document.getElementById('search-comp').firstChild.childNodes[1].lastChild.style.color = "#111";
  },
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
