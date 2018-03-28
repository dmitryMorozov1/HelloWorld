<template>
  <v-toolbar dense fixed color="white">
    <v-toolbar-title class="blue--text text--accent-1 mr-3 main-text">
      2Buttons
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn 
        v-for="item in menuItems"
        :key="item.id"
        :ripple="false"
        :id="item.id"
        flat
        class="capitalize" 
        @click="go(item.id)"
      > {{ item.title }} </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn 
      color="blue accent-1" 
      class="subheading create-question grey--text text--lighten-5" 
      round depressed>Задать вопрос</v-btn>
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
        <!-- some links will be here in future -->
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      currentName: '',
      menuItems: [
        { id: 'Profile', title: 'Моя страница' },
        { id: 'News', title: 'Новости' },
        { id: 'Favorites', title: 'Закладки' },
        { id: 'Top', title: 'Лучшее' },
        { id: 'GetQuestion', title: 'Подобрать вопрос' }
      ]
    }
  },
  mounted () {
    // getting name of loading page 
    if(document.getElementById((this.$router.history.current.matched[0].name))) {
      this.currentName = this.$router.history.current.matched[0].name;
      document.getElementById((this.$router.history.current.matched[0].name))
                               .classList.add("current-page");
    }
  },
  methods: {
    go(name) {
      if (document.getElementById(this.currentName)) {
        document.getElementById(this.currentName).classList.remove("current-page");
      }
      // CRUTCH ! need to change
      if(name === "Profile") {
        this.$router.push({ name: name, params: { id: '1'} })
      }
      else {
        this.$router.push({ name: name })
      }
      // checking for right element name and adding class
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
  text-transform: inherit;
}
.create-question {
  text-transform: inherit;
  height: 31px;
  width: 159px;
}
.current-page {
  color: #448AFF;
  border-bottom: 2px solid #448AFF; 
}
.main-text {
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 100;
}
.btn {
  font-size: 18px;
  font-weight: 400;
}

</style>
