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
      Регистрация
    </v-flex>
    <v-form 
      id="form-registration-input-comp" 
      class="px-4"
      ref="form">
        <v-text-field
          label="Имя Фамилия"
          v-model="name"
          :class="nameError ? '' : 'input'"
          :rules="nameRules"
          @keyup.enter="nextInput(1)"
          @focus="focusOn('name')"
          @blur="unFocusOn('name')">
        </v-text-field>
        <v-text-field
          label="Email или телефон"
          v-model="login"
          :class="loginError ? '' : 'input'"
          :rules="loginRules"
          @keyup.enter="nextInput(2)"
          @focus="focusOn('login')"
          @blur="unFocusOn('login')">
        </v-text-field>
        <v-text-field
          label="Пароль"
          min="8"
          v-model="password"
          :class="passwordError ? '' : 'input'"
          :rules="passwordRules"
          :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (hidePassword = !hidePassword)"
          :type="hidePassword ? 'password' : 'text'"
          @keyup.enter="next"
          @focus="focusOn('password')"
          @blur="unFocusOn('password')">
        </v-text-field>
    </v-form>
    <v-flex class="py-3 text-xs-center">
      <v-btn 
        round
        depressed
        class="capitalize next-btn med-16"
        color="white"
        @click.native="next()">
          Далее
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nameRules: [
        v => !!v || 'Введите имя и фамилию'
      ],
      nameError: false,
      login: '',
      loginRules: [
        v => !!v || 'Введите email или телефон'
      ],
      loginError: false,
      password: '',
      passwordRules: [
        v => !!v || 'Введите пароль',
        v => v.length >= 8 || 'Минимум 8 символов'
      ],
      passwordError: false,
      hidePassword: true
     }
  },
  methods: {
    next() {
      if (this.$refs.form.validate()) {
        this.$emit('callPersonDataForm');
      }
      else {
        this.nameError = true;
        this.loginError = true;
        this.passwordError = true;
      }
    },
    callPreviousDialog() {
      this.$emit('callPreviousDialog');
    },
    nextInput(n) {
      document.getElementById('form-registration-input-comp')
            .children[n].children[1].firstChild.focus();
    },
    focusOn(element) {
      switch (element) {
        case 'name': 
          this.nameError = false;
          break;
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
        case 'name': 
          if(this.name === '') 
            this.nameError = true;
          break;
        case 'login': 
          if(this.login === '') 
            this.loginError = true;
          break;
        case 'password': 
          if(this.password === '' || this.password.length < 8) 
            this.passwordError = true;
          break;
      }
    }
  }
}
</script>

<style scoped>
.next-btn {
  min-width: 190px;
  border: 1px solid #CACACA !important;
}
.input {
  color: #1A93F0 !important;
}
</style>
