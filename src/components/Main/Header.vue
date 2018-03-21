<template>
  <v-toolbar dense fixed color="#fcffff">
    <v-toolbar-title class="color-39F mr-3 main-text">
      2Buttons
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat id="Profile" class="capitalize" @click="go('Profile')">Моя страница</v-btn>
      <v-btn flat id="News" class="capitalize" @click="go('News')">Новости</v-btn>
      <v-btn flat id="Favorites" class="capitalize" @click="go('Favorites')">Закладки</v-btn>
      <v-btn flat id="Top" class="capitalize" @click="go('Top')">Лучшее</v-btn>
      <v-btn flat id="" class="capitalize">Подобрать вопрос</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn class="body-1 create-question capitalize" depressed>Задать вопрос</v-btn>
    <v-btn flat>
        <v-icon>notifications_none</v-icon>
      </v-btn>
    <v-menu :nudge-width="100">
      <v-toolbar-title slot="activator">
        <v-avatar size="30px">
          <img src="" alt="">
        </v-avatar>
        <v-icon>arrow_drop_down</v-icon>
      </v-toolbar-title>
      <v-list>

      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      currentName: ''
    }
  },
  props: [''],
  mounted () {
    
  },
  methods: {
    go(name) {
      if (document.getElementById(this.currentName)) {
        document.getElementById(this.currentName).classList.remove("current-page");
      }
      if(name === "Profile") {
        this.$router.push({ name: name, params: { id: '1'} })
      }
      else {
        this.$router.push({ name: name })
      }
      if (document.getElementById(name)) {
        document.getElementById(name).classList.add("current-page");
        this.currentName = name;
      }
    }
  }
}
</script>

<style scoped>
.capitalize {
  text-transform: capitalize;
}
.create-question {
  background-color: #75bdff !important;
  font-weight: 100;
  font-size: 17px !important;
  color: #fcffff;
  border-radius: 6px;
  width: 170px;
}
.color-39F {
  color: #39F;
}
.current-page {
  color: #39F;
  border-bottom: 2px solid #39F; 
}
.main-text {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Tw Cen MT';
}
.btn {
  font-size: 18px;
}

</style>
