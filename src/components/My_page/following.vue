<!-- 
Внимание: добавлена логика поиска. (Без родителя работать не будет)
-->
<template>
<v-container px-0 py-0>
  <v-container px-0 py-0 mb-2 v-for="person in filteredList"
  :key="person.id" v-if="person.sub" class="followers">
      <follower v-bind:person-data="person"></follower>
  </v-container>
</v-container>
</template>

<script>
import follower from './follower.vue'

export default {
  data() {
    return {
      following: []
    }
  },
  components: {
    'follower': follower
  },
  props: ['search'],
  mounted () {
    this.addfollowing();
  },
  computed: {
    addfollowing() {
      this.following = [
        { id: '1', name: 'Петя Говядко', link: '/Володя', sub: true, sig: true, img: "http://memesmix.net/media/created/m6tnhm.jpg"},
        { id: '2', name: 'Петя Говядко', link: '/Петя', sub: true, sig: false, img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"},
        { id: '3', name: 'Костя Говядко', link: '/Костя', sub: false, sig: false, img: "http://www.ovsyanko.ru/kosta/myself.jpg"},
        { id: '4', name: 'Лиза Говядко', link: '/Лизасиськи', sub: true, sig: true, img: "http://www.ivoirebusiness.net/sites/default/files/poutine%20vladi_0.jpg"},
        { id: '5', name: 'Отдых Говядко', link: '/Отдых', sub: true, sig: false, img: "https://files.adme.ru/files/news/part_88/880410/14451510-2363018019-600-e95273f1dc-1484580123.jpg"},
        { id: '6', name: 'Прапор Говядко', link: '/Прапор', sub: false, sig: true, img: "http://fans.mybspn.com/files/2012/07/2029_show_image_NpAdvSinglePhotophp_1.jpg"},
        { id: '7', name: 'Петя Говядко', link: '/Петя', sub: true, sig: true, img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"}
      ];
    },
    filteredList() {
      return this.following.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>
.followers {
  height: 58px;
}
</style>
