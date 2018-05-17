<template>
  <v-container class="blocklight border account-drop-menu-comp pa-0">
    <v-list dense>
      <v-list-tile
        v-for="button in buttons" 
        :key="button"
        @click="onClick(button)">
        <v-list-tile-title class="reg-14 textdarkgrey-text">
          {{ button }}
        </v-list-tile-title>
      </v-list-tile>
      <hr class="mx-2">
      <v-list-tile
        @click="onClick('Выход')">
        <v-list-tile-title class="reg-14 textdarkgrey-text">
          Выход
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      buttons: []
    }
  },
  beforeMount() {
    this.addButtons();
  },
  methods: {
    addButtons() {
      this.buttons = [
        "Моя страница",
        "Настройки",
        "Поддержка",
        "Помощь",
      ];
    },
    onClick(button) {
      switch(button) {
        case "Моя страница" : 
          break;
        case "Настройки" : 
          break;
        case "Поддержка" : 
          break;
        case "Помощь" : 
          break;
        case "Выход" : 
          this.$emit('logout');
          break;
      }
    }
  }
}
</script>

<style scoped>
.account-drop-menu-comp {
  width: 162px;
  border-radius: 2px;
}
hr {
  border: none;
  background-color: rgba(217, 217, 217, 0.4); 
  height: 1px; 
}
</style>