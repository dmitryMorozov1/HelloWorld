<template>
<v-container px-0 py-0>
  <search @inputsearch="inputsearch"></search>
  <v-container px-0 py-0 mb-2 
    v-for="person in filteredList"
    :key="person.id" 
    class="following">
      <follower :person-data="person"></follower>
  </v-container>
  <v-container px-0 py-0 mb-2 
    v-if="!!!filteredList.length">
      <v-layout px-2 my-0
        class="followers border blocklight med-16">
          Ни одной подписки не найдено.
      </v-layout>
  </v-container>
</v-container>
</template>

<script>
import follower from './follower.vue'
import search from './search.vue'

export default {
  data() {
    return {
      following: [],
      search: ""
    }
  },
  components: {
    'follower': follower,
    'search': search
  },
  mounted () {
    this.addfollowing;
  },
  computed: {
    addfollowing() {
      this.following = [
        { id: '1', name: 'Петя Говядко', link: '/Володя', sub: true, sig: true, img: "http://memesmix.net/media/created/m6tnhm.jpg"},
        { id: '2', name: 'Петя Говядко', link: '/Петя', sub: true, sig: false, img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"},
        { id: '3', name: 'Костя Говядко', link: '/Костя', sub: false, sig: false, img: "http://www.ovsyanko.ru/kosta/myself.jpg"},
        { id: '4', name: 'Лиза Говядко', link: '/Лиза', sub: true, sig: true, img: "http://www.ivoirebusiness.net/sites/default/files/poutine%20vladi_0.jpg"},
        { id: '5', name: 'Отдых Говядко', link: '/Отдых', sub: true, sig: false, img: "https://files.adme.ru/files/news/part_88/880410/14451510-2363018019-600-e95273f1dc-1484580123.jpg"},
        { id: '6', name: 'Прапор Говядко', link: '/Прапор', sub: false, sig: true, img: "http://fans.mybspn.com/files/2012/07/2029_show_image_NpAdvSinglePhotophp_1.jpg"},
        { id: '7', name: 'Петя Говядко', link: '/Петя', sub: true, sig: true, img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"}
      ];
    },
    filteredList() {
      return this.following.filter(post => {
        if(post.sub)
        return post.name.toLowerCase().includes(this.search.toLowerCase());
        else
        return false;
      });
    }
  },
  methods: {
    inputsearch(input) {
      this.search = input.search;
    }
  }
}
</script>

<style>
.following {
  height: 58px;
}
</style>
