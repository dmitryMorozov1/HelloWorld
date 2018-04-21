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
      copyNames: []
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
        { id: '1', name: 'Петяов Говядко', link: '/Володя', sub: true, sig: true, img: "http://memesmix.net/media/created/m6tnhm.jpg"},
        { id: '2', name: 'Петя Бовядко', link: '/Петя', sub: true, sig: false, img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"},
        { id: '3', name: 'Кос0я Говядко', link: '/Костя', sub: true, sig: false, img: "http://www.ovsyanko.ru/kosta/myself.jpg"},
        { id: '4', name: 'Лизгоа Говядко', link: '/Лиза', sub: true, sig: true, img: "http://www.ivoirebusiness.net/sites/default/files/poutine%20vladi_0.jpg"},
        { id: '5', name: 'Отдых Говядко', link: '/Отдых', sub: true, sig: false, img: "https://files.adme.ru/files/news/part_88/880410/14451510-2363018019-600-e95273f1dc-1484580123.jpg"},
        { id: '6', name: 'Прапор Говядко', link: '/Прапор', sub: true, sig: true, img: "http://fans.mybspn.com/files/2012/07/2029_show_image_NpAdvSinglePhotophp_1.jpg"},
        { id: '7', name: 'Петя Говядко', link: '/Петя', sub: true, sig: true, img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"}
      ];
    },
    filteredList() {
      let search = this.search.trim();
      let searchWords = search.split(/\s+/g);
      let followingList = this.following;
      for (let n = 0; n < searchWords.length; n++) {
        followingList = followingList.filter(follower => {
          return follower.name.toLowerCase().includes(searchWords[n].toLowerCase());
        });
      }
      this.copyNames = [];
      for (let n = 0; n < followingList.length; n++) {
        this.copyNames[n] = followingList[n].name;
      } 
      return followingList;
    }
  },
  watch: {
    copyNames: function () {
      this.coloringSearch();
    }
  },
  methods: {
    inputsearch(input) {
      this.search = input.search;
    },
    coloringSearch() {
      let folowerNames = document.getElementsByClassName("follower-fild-title");
      let searchWords = this.search.trim().split(/\s+/g);
      for (let i = 0; i < folowerNames.length; i++) {
        if(this.copyNames[i]) {
          folowerNames[i].innerHTML = this.copyNames[i];
        }
        else {
          this.copyNames[i] = folowerNames[i].innerHTML;
        }
        if (!!this.search.trim())
        {
          let reg = "/" + searchWords[0];
          for ( let n = 1; n < searchWords.length; n++)
            reg += "|" + searchWords[n];
          reg += "/ig";
          folowerNames[i].innerHTML = folowerNames[i].innerHTML.replace (
            eval(reg), "<span style='background:rgba(113,186,242,0.35)'>$&</span>"); 
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
