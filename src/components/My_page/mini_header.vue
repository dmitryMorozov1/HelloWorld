<!-- 
TODO:
1) Одинаковые padding вне зависимости от заданной ширины
HELP:
1 - В вьютифай есть какие то стандартные шаблоны - получается либо по-уродски, либо никак
   <v-btn-toggle v-model="text">, или позиционирование с помощью флексов и еще че то
1 - Алгоритм в mounted. Поиграть с ClientWidth. Это костыль
1 - padding: 0 5% (1-10%) Удивительным образом решает проблему! Но не полностью, так как 
   при первой загрузке страницы, отображение слетает. Да и вообще не стоит доверять процентам
   в падинге
1 - больше идей нет
DONE:
1) Реализован алгоритм сохранения вкладки на моей странице. Но убрал его, пока решли что не нужен
 -->

<template>
  <v-toolbar height="54px" class="mini-header">
    <v-toolbar-items class="mini-toolbar" >
      <v-btn
          flat 
          v-for="item in menuItems"
          :key="item.title"
          :id="item.id" class="mini-header-btn" @click="go(item.id, item.link)">
           <v-layout row wrap>
          <v-flex xs12>{{ item.title }}</v-flex>
          <v-flex xs12>{{ item.count }} </v-flex>
           </v-layout>
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      currentId: 'ProfileQuestions',
      currentLink: '/questions',
      menuItems: [
        { id: 'ProfileQuestions', title: 'Вопросы', link: '/questions', count: "0"},
        { id: 'ProfileAnswers', title: 'Ответы', link: '/answers', count: "0"},
        { id: 'ProfileSubscribers', title: 'Подписчики', link: '/subscribers', count: "0"},
        { id: 'ProfileSubscription', title: 'Подписки', link: '/subscription', count: "0"},
        { id: 'ProfileFavorites', title: 'Избранное', link: '/favorites', count: "0"},
        { id: 'ProfileComments', title: 'Комментарии', link: '/comments', count: "0"}
      ]
    }
  },
  mounted () {
    this.go(this.currentId, this.currentLink);
  },
  methods: {
    go(id, link) {
      document.getElementById(this.currentId).classList.remove("current-item");
      this.$router.push({ name: "profile/{id}"+link })
      if (document.getElementById(id)) {
        document.getElementById(id).classList.add("current-item");
        this.currentId = id;
      }
    }
  }
}

</script>

<style scoped>
.mini-header {
  display: flex;
  flex-direction: column;
  border-radius: 2px;
}
.mini-header .mini-toolbar {
  width: 100%;
}
.mini-header .mini-header-btn {
  font-size: 10.5pt;
  text-transform: capitalize;
  /*---------*/
 /* padding: 0 5%;*/
  width: 100%;
}
.current-item {
  /*---------*/
  color: #39F;
}

</style>
