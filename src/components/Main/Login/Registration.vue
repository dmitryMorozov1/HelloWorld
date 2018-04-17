<template>
  <v-card>
    <v-flex class="text-xs-center py-2 med-24 textblue-text">
      Регистрация
    </v-flex>
    <v-form 
      id="form-registration-input-comp" 
      class="px-4">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          @keyup.enter="nextInput(1)"
          class="input"
          label="Имя Фамилия">
        </v-text-field>
        <v-text-field
          v-model="login"
          @keyup.enter="nextInput(2)"
          class="input"
          label="Email или телефон">
        </v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          hint="Минимум 8 символов"
          min="8"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          @keyup.enter="next"
          class="input"
          label="Пароль">
        </v-text-field>
    </v-form>
    <v-flex class="text-xs-center py-3">
      <v-btn 
        color="white"
        class="capitalize med-16 next-btn"
        round
        depressed
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
      login: '',
      password: '',
      passwordRules: [
        v => !!v || 'Введите пароль'
      ],
      e1: true
     }
  },
  methods: {
    next() {
      this.$emit('callPersonDataForm');
    },
    nextInput(n) {
      document.getElementById('form-registration-input-comp')
            .children[n].children[1].firstChild.focus();
    }
  }
}
</script>

<style scoped>
.next-btn {
  min-width: 190px;
  border: 1px solid #CACACA !important;
}
#form-registration-input-comp .input {
  color: #1A93F0 !important;
}
</style>
