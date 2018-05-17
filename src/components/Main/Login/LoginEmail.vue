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
      Вход
    </v-flex>
    <v-form 
      id="form-login-input-comp" 
      class="px-4"
      ref="form">
      <v-text-field
        label="Email или телефон"
        v-model="login"
        :class="loginError ? '' : 'input'"
        :rules="loginRules"
        @keyup.enter="nextInput"
        @focus="focusOn('login')"
        @blur="unFocusOn('login')">
      </v-text-field>
      <v-text-field
        label="Пароль"
        v-model="password"
        :class="passwordError ? '' : 'input'"
        :rules="passwordRules"
        :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (hidePassword = !hidePassword)"
        :type="hidePassword ? 'password' : 'text'"
        @keyup.enter="loginEmail"
        @focus="focusOn('password')"
        @blur="unFocusOn('password')">
      </v-text-field>
    </v-form>
    <v-flex class="mr-3 text-xs-right">
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
        round
        depressed
        class="capitalize enter-btn med-16 blocklight-text blockblue"
        @click.native="loginEmail()">
          Войти
      </v-btn>
    </v-flex>
    <hr class="mt-2 mb-3 mx-4 mx-auto">
    <v-flex class="text-xs-center reg-16">
      Еще не зарегистрированы?
    </v-flex>
    <v-flex class="py-3 text-xs-center">
      <v-btn 
        round
        depressed
        class="capitalize registration-btn med-16 textblue-text"
        @click.native="callRegistrationForm()">
          Зарегистрироваться
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      loginError: false,
      passwordError: false,
      passwordRules: [
        v => !!v || 'Введите пароль'
      ],
      loginRules: [
        v => !!v || 'Введите email или телефон'
      ],
      hidePassword: true
     }
  },
  methods: {
    callRegistrationForm() {
      this.$emit('callRegistrationForm');
    },
    callPreviousDialog() {
      this.$emit('callPreviousDialog');
    },
    loginEmail() {
      if (this.$refs.form.validate()) {
        alert("log");
      }
      else {
        this.loginError = true;
        this.passwordError = true;
      }
    },
    rememberPassword() {
      this.$emit('callRememberPassword');
    },
    nextInput() {
      document.getElementById('form-login-input-comp')
              .lastChild.children[1].firstChild.focus();
    },
    onKeydown(e) {
      alert(1);
    },
    focusOn(element) {
      switch (element) {
        case 'login': 
          this.loginError = false;
          break;
        case 'password': 
          this.passwordError = false;
          break;
      }
    },
    unFocusOn(element) {
      switch (element) {
        case 'login': 
          if(this.login === '') 
            this.loginError = true;
          break;
        case 'password': 
          if(this.password === '') 
            this.passwordError = true;
          break;
      }
    }
  }
}
</script>

<style scoped>
hr {
  border: none;
  background-color: rgba(0,0,0,.42); 
  height: 1px; 
}
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
.input {
  color: #1A93F0 !important;
}
</style>
