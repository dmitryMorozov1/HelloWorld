<template>
  <v-card>
    <v-layout wrap>
      <v-flex>
        <v-card-title class="pb-2 med-20 textblue-text">
          НАСТРОЙКИ ПАРОЛЯ
        </v-card-title>
      </v-flex>
      <v-card-actions>
        <v-btn 
          flat
          class="textdarkgrey-text"
          :ripple="false"
          @click="callEditPassword()">
            <v-icon class="pb-1"> lock </v-icon>
            <span class="pl-1 reg-16">Изменить пароль</span>
        </v-btn>
      </v-card-actions>
    </v-layout>

    <v-dialog v-model="editPasswordDialog" max-width="340px">
      <edit-password @closeDialog="closeEditPassword"></edit-password>
    </v-dialog>

  </v-card>
</template>

<script>
import EditPassword from './editPasswordDialog.vue'

export default {
  data() {
    return {
      editPasswordDialog: false
    }
  },
  methods: {
    callEditPassword() {
      this.editPasswordDialog = true;
    },
    closeEditPassword() {
      this.editPasswordDialog = false;
    }
  },
  components: {
    'edit-password': EditPassword,
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
