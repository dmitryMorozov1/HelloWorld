<template>
<v-container class="pa-0">
  <search @inputsearch="inputsearch"></search>
  <v-container 
    v-for="person in filteredList"
    :key="person.id" 
    class="pa-0 mb-2 followers">
      <follower :person="person"></follower>
  </v-container>
  <v-container 
    v-if="!followers.length"
    class="pa-0 mb-2">
    <v-layout 
      row
      wrap
      align-center
      class="px-2 my-0 empty-comp med-20 blocklight border">
        <v-flex 
          xs12 
          class="text-xs-center"> 
          <v-layout d-block>
            <v-flex class="pb-3">
              <img 
                class="empty-img" 
                src="https://dic.academic.ru/pictures/wiki/files/50/250px-Patrick_Star.svg.png"
              >
            </v-flex>
            <v-flex class="pb-4">
              Здесь будут отображаться ваши подписчики
            </v-flex>
          </v-layout>
        </v-flex>
    </v-layout>
  </v-container>
  <v-container 
    v-else-if="!filteredList.length"
    class="pa-0 mb-2">
    <v-layout 
      align-center
      class="px-2 my-0 followers med-16 blocklight border">
        Ни одного подписчика не найдено
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
      followers: [],
      search: "",
      copyNames: []
    }
  },
  watch: {
    copyNames: function () {
      this.coloringSearch();
    }
  },
  beforeMount() {
    this.addfollowers;
  },
  computed: {
    addfollowers() {
      this.followers = [];
    },
    filteredList() {
      let search = this.search.trim();
      let searchWords = search.split(/\s+/g);
      let followingList = this.followers;
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
  },
  components: {
    'follower': follower,
    'search': search
  }
}
</script>

<style scoped>
.followers {
  height: 58px;
}
.empty-comp {
  border-radius: 2px;
  height: 440px;
}
.empty-img {
  height: 200px;
}
</style>
