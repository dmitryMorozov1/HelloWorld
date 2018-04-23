<template>
  <v-card class="px-4 question-recommendation-comp">
    <v-flex class="text-xs-center pt-3 reg-18 textblue-text">
      Порекомендовать вопрос
    </v-flex>
    <search 
      :label="'Введите имя'"
      :searchStr="search"   
      @inputsearch="inputsearch">
    </search>
    <v-container 
      class="scroll-y pa-0 border people-list">
      <v-list class="py-0">
        <v-list-tile 
          :class="choosenPeopleId.indexOf(person.id) === -1 &&
                  tile === false ? 
                 'blocklight' : 'blocklightblue'"
          avatar 
          v-for="person in filteredList" 
          :key="person.title" 
          @click="selectPerson(person.id)">
          <v-list-tile-avatar>
            <img :src="person.img">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <div class="med-16 rec-person-tile-title">
              {{ person.name }}
            </div>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-layout  
        v-if="!!!people.length"
        class="blocklight notfound">
        <v-flex  class="text-xs-center med-16">
          Пока некому рекомендовать
        </v-flex>
      </v-layout>
      <v-layout  
        v-else-if="!!!filteredList.length"
        class="blocklight notfound">
        <v-flex  class="text-xs-center med-16">
          Ваш запрос не дал результатов.
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout class="select-switch pt-2 pb-1">
      <div class="textdarkgrey-text px-3 reg-16">
        Выбрать всех
      </div>
      <v-switch 
        class="ml-3"
        hide-details
        v-model="tile"
        @click="selectAll()">
      </v-switch>
    </v-layout>
    <v-layout class="text-xs-center pb-3">
      <v-btn 
        class="capitalize med-16 cancel-btn textblue-text mx-0"
        round
        depressed
        @click.native="closeComponent()">
          Отмена
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn 
        class="capitalize med-16 ready-btn blocklight-text blockblue mx-0"
        round
        depressed
        @click.native="toRecommend()">
          Готово
      </v-btn>
    </v-layout>
    
  </v-card>
</template>

<script>
import search from './search.vue'
export default {
  data() {
    return {
      people: [],
      choosenPeopleId: [],
      search: '',
      tile: false,
      copyNames: []
    }
  },
  // to watch the dialog closure 
  props: ['dialogIsOpen'],
  watch: {
    dialogIsOpen: function (yes) {
      if(yes)
      {
        this.tile = false;
        this.search = '';
        this.choosenPeopleId = [];
        this.copyNames = [];
      }
    },
    copyNames: function () {
      this.coloringSearch();
    }
  },
  components: {
    'search': search
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
    inputsearch(input) {
      this.search = input.search;
    },
    toRecommend(people) {
      alert(this.choosenPeopleId);
      this.$emit('closeComponent');
    },
    closeComponent() {
      this.$emit('closeComponent');
    },
    selectPerson(personId) {
      if (this.tile === true) this.tile = false;
      let n = this.choosenPeopleId.indexOf(personId);
      if (n !== -1) {
        this.choosenPeopleId.splice(n, 1);
      } else {
        this.choosenPeopleId.push(personId)
      }
    },
    selectAll() {
      // todo:
      // GET request - to get all people id
      // and assign to a choosenPeopleId[]
      // may be. Now it is done so
      this.choosenPeopleId = [];
      if (!!!this.tile) {
        for (let n = 0; n < this.people.length; n++) {
          this.choosenPeopleId[n] = this.people[n].id;
        } 
        this.search = '';
      }
    },
    coloringSearch() {
      let peopleNames = document.getElementsByClassName("rec-person-tile-title");
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
.select-switch {
  align-items: center;
}
.people-list {
  border-radius: 2px;
  height: 280px !important;
}
.notfound {
  height: 56px;
  align-items: center;
}
</style>
