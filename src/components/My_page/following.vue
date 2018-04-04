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
        class="following border blocklight med-16">
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
      search: "",
      copy_name: [],
      cur_copy_name: []
    }
  },
  components: {
    'follower': follower,
    'search': search
  },
  mounted () {
    this.addfollowing;
  },
  updated () {
    this.coloringSearch();     
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
      this.cur_copy_name = this.copy_name.filter(post => {
        let str = this.search.trim();
        return post.toLowerCase().includes(str.toLowerCase());
      });
      return this.following.filter(post => {
        if(post.sub) {
          let str = this.search.trim();
          return post.name.toLowerCase().includes(this.search.toLowerCase());
        }
        else {
          return false;
        }
      });
    }
  },
  methods: {
    inputsearch(input) {
      this.search = input.search;
    },
    coloringSearch() {
      let list = document.getElementsByClassName("follower-fild-title");
      for (let i = 0; i < list.length; i++) {
        if(!!!this.copy_name[i]){
          this.copy_name[i] = list[i].innerHTML;
        }
        if(!!this.cur_copy_name[i])
          list[i].innerHTML = this.cur_copy_name[i];
        else 
          this.cur_copy_name[i] = list[i].innerHTML;
        let str = this.search.trim();
        str = list[i].innerHTML.match(new RegExp(str,"i"));

        let result = list[i].innerHTML.match(new RegExp(str,"gi"));
        result = result.filter(function(item, pos) {
          return result.indexOf(item) == pos;
        });
        for (let k = 0; k < result.length; k++) {
          list[i].innerHTML = 
          list[i].innerHTML.replace(eval("/" + result[k] + "/g"),
            "<span style='background:#c7dae8'>" + result[k] + "</span>"); 
        }
      }
    }
  }
}
</script>

<style scoped>
.following {
  height: 58px;
  align-items: center;
}
</style>
