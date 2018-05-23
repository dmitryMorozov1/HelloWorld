<template>
  <v-card>
    <v-layout wrap>
      <v-card-title class="med-20 textblue-text">
          ФОТО ПРОФИЛЯ
      </v-card-title>
      <v-flex class="text-xs-center">
        <v-avatar size="160px">
          <img src="http://memesmix.net/media/created/m6tnhm.jpg" alt="avatar">
        </v-avatar>
      </v-flex>
      <v-card-actions class="pt-3">
        <v-btn 
          flat
          class="textdarkgrey-text"
          :ripple="false"
          @click="callEditPhoto()">
            <v-icon class="pb-1"> add_a_photo </v-icon>
            <span class="pl-1 reg-16">Изменить фотографию</span>
        </v-btn>
      </v-card-actions>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
        
    }
  },
  methods: {
    callEditPhoto() {
      alert(1);
    }
  }
}
</script>

<style scoped>
.btn {
  text-transform: inherit;
}
.btn :nth-child(1) {
  padding-left: 6px;
  padding-right: 6px;
}
</style>
