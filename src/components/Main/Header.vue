<template>
  <v-toolbar dense fixed class="border blocklight">
    <v-toolbar-title class="thin-28 textblue-text mr-3 main-text">
      2Buttons
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn 
        v-for="item in menuItems"
        :key="item.id"
        :ripple="false"
        :id="item.id"
        flat
        class="capitalize med-17 textgrey-text" 
        @click="go(item.id)"
      > {{ item.title }} </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn 
      color="blockblue" 
      class="med-16 create-question blocklight-text" 
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
        { id: 'SelectQuestion', title: 'Подобрать вопрос' }
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
      else if(name === "Top") 
      {
        this.$route.name.search( /Top-/i ) !== -1 ? 
        this.$router.push({ name: this.$route.name }) :
        this.$router.push({ name: name + '-day' });
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
  color: #1A93F0 !important;
  border-bottom: 2px solid #1A93F0; 
}
.main-text {
  text-transform: uppercase;
}
.toolbar {
  border-bottom: 1px solid #E0E0E0 !important;
}
</style>
