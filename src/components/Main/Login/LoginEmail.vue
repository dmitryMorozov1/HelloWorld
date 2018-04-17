<template>
  <v-card>
    <v-flex class="text-xs-center py-3 med-24 textblue-text">
      Вход
    </v-flex>
    <v-form 
      id="form-login-input-comp" 
      v-model="valid" 
      class="px-4">
        <v-text-field
          label="Email или телефон"
          v-model="name"
          :rules="nameRules">
        </v-text-field>
        <v-text-field
          label="Пароль"
          v-model="email"
          :rules="emailRules">
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
hr {
  border: none;
  background-color: rgba(0,0,0,.42); 
  height: 1px; 
}
</style>
