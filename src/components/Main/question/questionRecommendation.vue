<template>
  <v-card class="px-4 question-recommendation-comp">
    <v-flex class="pt-3 text-xs-center reg-18 textblue-text">
      Порекомендовать вопрос
    </v-flex>
    <search 
      :element="'question-rec-person-tile-title'"
      :label="'Введите имя'"
      :searchStr="search"   
      @inputsearch="inputsearch">
    </search>
    <v-container class="pa-0 scroll-y people-list border">
      <v-list class="py-0">
        <v-list-tile 
          v-for="person in filteredList" 
          :key="person.title" 
          avatar 
          :class="choosenPeople.indexOf(person) === -1 &&
                  tile === false ? 
                 'blocklight' : 'blocklightblue'"
          @click="selectPerson(person)">
          <v-list-tile-avatar>
            <img :src="person.img">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <div class="question-rec-person-tile-title med-16">
              {{ person.name }}
            </div>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-layout  
        v-if="!people.length"
        fill-height
        align-center
        class="blocklight">
        <v-flex  class="text-xs-center med-16">
          У вас пока нет подписчиков
        </v-flex>
      </v-layout>
      <v-layout  
        v-else-if="!filteredList.length"
        fill-height
        align-center
        class="blocklight">
        <v-flex  class="text-xs-center med-16">
          Список пуст
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout 
      align-center
      class="pt-2 pb-1">
      <div class="px-3 reg-16 textdarkgrey-text">
        Выбрать всех
      </div>
      <v-switch 
        hide-details
        class="ml-3"
        v-model="tile"
        @click="selectAll()">
      </v-switch>
    </v-layout>
    <v-layout class="pb-3 text-xs-center">
      <v-btn 
        round
        depressed
        class="mx-0 capitalize cancel-btn med-16 textblue-text"
        @click.native="closeComponent()">
          Отмена
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn 
        round
        depressed
        class="mx-0 capitalize ready-btn med-16 blocklight-text blockblue "
        @click.native="toRecommend()">
          Готово
      </v-btn>
    </v-layout>
  </v-card>
</template>

<script>
import search from '@/components/Main/search/search'
export default {
  data() {
    return {
      people: [],
      choosenPeople: [],
      search: '',
      tile: false,
      copyNames: []
    }
  },
  props: ['dialogIsOpen'],
  watch: {
    dialogIsOpen: function (yes) {
      if(yes)
      {
        this.choosenPeople = [];
        this.search = '';
        this.tile = false;
        this.copyNames = [];
      }
    },
    copyNames: function () {
      this.coloringSearch();
    }
  },
  beforeMount () {
    this.addPeople;
  },
  computed: {
    addPeople() {
      this.people = [
        { id: '1', name: 'Петя Говядко', link: '/Володя', sub: true, sig: true, img: "http://memesmix.net/media/created/m6tnhm.jpg"},
        { id: '2', name: 'Петя Говядко', link: '/Петя', sub: true, sig: false, img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"},
        { id: '3', name: 'Костя Говядко', link: '/Костя', sub: false, sig: false, img: "http://www.ovsyanko.ru/kosta/myself.jpg"},
        { id: '4', name: 'Лизгоа Говядко', link: '/Лиза', sub: true, sig: true, img: "http://www.ivoirebusiness.net/sites/default/files/poutine%20vladi_0.jpg"},
        { id: '5', name: 'Отдых Говядко', link: '/Отдых', sub: true, sig: false, img: "https://files.adme.ru/files/news/part_88/880410/14451510-2363018019-600-e95273f1dc-1484580123.jpg"},
        { id: '6', name: 'Прапор Говядко', link: '/Прапор', sub: false, sig: true, img: "http://fans.mybspn.com/files/2012/07/2029_show_image_NpAdvSinglePhotophp_1.jpg"},
        { id: '7', name: 'Петя Говядко', link: '/Петя', sub: true, sig: true, img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"},
        { id: '8', name: 'Костя Говядко', link: '/Костя', sub: false, sig: false, img: "http://www.ovsyanko.ru/kosta/myself.jpg"},
        { id: '9', name: 'Лизгоа Говядко', link: '/Лиза', sub: true, sig: true, img: "http://www.ivoirebusiness.net/sites/default/files/poutine%20vladi_0.jpg"},
        { id: '10', name: 'Отдых Говядко', link: '/Отдых', sub: true, sig: false, img: "https://files.adme.ru/files/news/part_88/880410/14451510-2363018019-600-e95273f1dc-1484580123.jpg"},
        { id: '11', name: 'Прапор Говядко', link: '/Прапор', sub: false, sig: true, img: "http://fans.mybspn.com/files/2012/07/2029_show_image_NpAdvSinglePhotophp_1.jpg"},
        { id: '21', name: 'Петя Говядко', link: '/Петя', sub: true, sig: true, img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"}
      ];
    },
    filteredList() {
      let search = this.search.trim();
      let searchWords = search.split(/\s+/g);
      let peopleList = this.people;
      for (let n = 0; n < searchWords.length; n++) {
        peopleList = peopleList.filter(person => {
          return person.name.toLowerCase().includes(searchWords[n].toLowerCase());
        });
      }
      this.copyNames = [];
      for (let n = 0; n < peopleList.length; n++) {
        this.copyNames[n] = peopleList[n].name;
      } 
      return peopleList;
    }
  },
  methods: {
    closeComponent() {
      this.$emit('closeComponent');
    },
    toRecommend() {
      //this.$emit('addRecommendation', this.choosenPeople);
      this.$emit('closeComponent');
    },
    inputsearch(input) {
      this.search = input.search;
    },
    selectPerson(person) {
      if (this.tile === true) this.tile = false;
      let n = this.choosenPeople.indexOf(person);
      if (n !== -1) {
        this.choosenPeople.splice(n, 1);
      } else {
        this.choosenPeople.push(person)
      }
    },
    selectAll() {
      // todo:
      // GET request - to get all people id
      // and assign to a choosenPeopleId[]
      // may be. Now it is done so
      this.choosenPeople = [];
      if (!this.tile) {
        for (let n = 0; n < this.people.length; n++) {
          this.choosenPeople[n] = this.people[n];
        } 
        this.search = '';
      }
    },
    coloringSearch() {
      let peopleNames = document.getElementsByClassName(
                        "question-rec-person-tile-title"
                        );
      let searchWords = this.search.trim().split(/\s+/g);
      for (let i = 0; i < peopleNames.length; i++) {
        if(this.copyNames[i]) {
          peopleNames[i].innerHTML = this.copyNames[i];
        }
        else {
          this.copyNames[i] = peopleNames[i].innerHTML;
        }
        if (!!this.search.trim())
        {
          let reg = "/" + searchWords[0];
          for ( let n = 1; n < searchWords.length; n++)
            reg += "|" + searchWords[n];
          reg += "/ig";
          peopleNames[i].innerHTML = peopleNames[i].innerHTML.replace (
            eval(reg), "<span style='background:rgba(113,186,242,0.35)'>$&</span>");
        }
      }
    }
  },
  components: {
    'search': search
  }
}
</script>

<style scoped>
.question-recommendation-comp {
  height: 500px !important;
}
.btn {
  height: 31px;
  border: 1px solid #5DA3DA !important;
}
.ready-btn {
  min-width: 174px;
}
.cancel-btn {
  min-width: 106px;
}
.people-list {
  border-radius: 2px;
  height: 280px !important;
}
</style>
