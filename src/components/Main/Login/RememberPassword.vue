<template>
  <v-card>
    <v-btn 
      absolute
      icon 
      flat  
      class="mx-3 my-2 textblue-text"
      :ripple="false"
      @click="callPreviousDialog()">
      <v-icon>
        arrow_back
      </v-icon>
    </v-btn>
    <v-flex class="py-2 text-xs-center med-24 textblue-text">
      Восстановление пароля
    </v-flex>
    <v-flex class="px-4 pt-2 reg-18 textdarkgrey-text">
      Введите пароль или адрес электронной почты:
    </v-flex>
    <v-form class="px-4">
      <v-text-field
        label="Email или телефон"
        v-model="login"
        :class="loginError ? '' : 'input'"
        :rules="loginRules"
        @keyup.enter="seccondInput()"
        @keyup.down="seccondInput()"
        @focus="focusOn('login')"
        @blur="unFocusOn('login')">
      </v-text-field>
    </v-form>
    <v-flex class="py-3 text-xs-center">
      <v-btn 
        round
        depressed
        class="capitalize send-btn med-16 textblue-text"
        @click.native="send()">
          Отправить
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  data() {
    return { 
      login: '',
      loginError: false,
      loginRules: [
        v => !!v || 'Введите email или телефон'
      ]
    }
  },
  methods: {
    send() {
      if(!!this.login)
        this.$emit('callLoginEmailForm');
    },
    callPreviousDialog() {
      this.$emit('callLoginEmailForm');
    },
    focusOn(element) {
      switch (element) {
        case 'login': 
          this.loginError = false;
          break;
      }
    },
    unFocusOn(element) {
      switch (element) {
        case 'login': 
          if(this.login === '') 
            this.loginError = true;
          break;
      }
    }
  }
}
</script>

<style scoped>
.send-btn {
  min-width: 190px;
  border: 1px solid #5DA3DA !important;
}
.input {
  color: #1A93F0 !important;
}
</style>
