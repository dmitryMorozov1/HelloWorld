<template>
  <v-card>
    <v-flex class="text-xs-center py-2 med-24 textblue-text">
      Вход
    </v-flex>
    <v-form 
      id="form-login-input-comp" 
      class="px-4">
        <v-text-field
          class="input"
          label="Email или телефон">
        </v-text-field>
        <v-text-field
          class="input"
          label="Пароль">
        </v-text-field>
    </v-form>
    <v-flex class="text-xs-right mr-3">
      <v-btn 
        small
        flat
        class="reg-14 textblue-text"
        @click="rememberPassword()"> 
          Забыли пароль? 
      </v-btn>
    </v-flex>
    <v-flex class="text-xs-center">
      <v-btn 
        class="capitalize med-16 enter-btn blocklight-text blockblue"
        round
        depressed
        @click.native="login()">
          Войти
      </v-btn>
    </v-flex>
    <hr class="mx-auto mt-2 mb-3 mx-4">
    <v-flex class="text-xs-center reg-16">
      Еще не зарегистрированы?
    </v-flex>
    <v-flex class="text-xs-center py-3">
      <v-btn 
        class="capitalize med-16 registration-btn textblue-text"
        round
        depressed
        @click.native="callRegistrationForm()">
          Зарегистрироваться
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
const ENTER = 38;
export default {
  data() {
    return { }
  },
  methods: {
    callRegistrationForm() {
      this.$emit('callRegistrationForm');
    },
    login() {
      alert("log");
    },
    rememberPassword() {
      alert("ОКАЙ");
    },
    onKeydown(e) {
      if (e.keyCode === ENTER) {
        //document.getElementById('form-login-input-comp')
          //  .firstElementChild.children[1].firstElementChild.focus();
      }
    }
  },
  mounted () {
    document.getElementById('form-login-input-comp')
            .firstChild.lastChild.style.minHeight = "12px";
    document.getElementById('form-login-input-comp')
            .lastChild.lastChild.style.minHeight = "6px";
  }
}
</script>

<style scoped>
.btn {
  text-transform: inherit;
}
.enter-btn {
  min-width: 145px;
  border: 1px solid #5DA3DA !important;
}
.registration-btn {
  min-width: 190px;
  border: 1px solid #5DA3DA !important;
}
#form-login-input-comp .input {
  color: #1A93F0 !important;
}
hr {
  border: none;
  background-color: rgba(0,0,0,.42); 
  height: 1px; 
}
</style>
