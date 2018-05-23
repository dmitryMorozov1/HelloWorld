<template>
  <v-card class="py-2">
    <v-flex class="py-2 text-xs-center med-24 textblue-text">
      Изменение пароля
    </v-flex>
    <v-form 
      id="form-registration-input-comp" 
      class="px-4"
      ref="form">
        <v-text-field
          placeholder="Старый пароль"
          v-model="oldPassword"
          :class="oldPasswordError ? '' : 'input'"
          :rules="oldPasswordRules"
          :append-icon="hideOldPassword ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (hideOldPassword = !hideOldPassword)"
          :type="hideOldPassword ? 'password' : 'text'"
          @focus="focusOn('oldPassword')"
          @blur="unFocusOn('oldPassword')">
        </v-text-field>
        <v-text-field
          placeholder="Новый пароль"
          min="8"
          v-model="newPassword"
          :class="newPasswordError ? '' : 'input'"
          :rules="newPasswordRules"
          :append-icon="hideNewPassword ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (hideNewPassword = !hideNewPassword)"
          :type="hideNewPassword ? 'password' : 'text'"
          @focus="focusOn('newPassword')"
          @blur="unFocusOn('newPassword')">
        </v-text-field>
        <v-text-field
          placeholder="Новый пароль (повторно)"
          min="8"
          v-model="newPasswordAgain"
          :class="newPasswordAgainError ? '' : 'input'"
          :rules="newPasswordAgainRules"
          :append-icon="hideNewPasswordAgain ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (hideNewPasswordAgain = !hideNewPasswordAgain)"
          :type="hideNewPasswordAgain ? 'password' : 'text'"
          @focus="focusOn('newPasswordAgain')"
          @blur="unFocusOn('newPasswordAgain')">
        </v-text-field>
    </v-form>
    <v-flex class="pb-1 pt-3 text-xs-center">
      <v-btn 
        round
        depressed
        class="capitalize save-btn med-16 textblue-text"
        color="white"
        @click.native="save()">
          Сохранить
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      oldPassword: '',
      oldPasswordRules: [
        v => !!v || 'Введите пароль'
      ],
      oldPasswordError: false,
      hideOldPassword: true,

      newPassword: '',
      newPasswordRules: [
        v => !!v || 'Введите новый пароль',
        v => v.length >= 8 || 'Минимум 8 символов'
      ],
      newPasswordError: false,
      hideNewPassword: true,

      newPasswordAgain: '',
      newPasswordAgainRules: [
        v => !!v || 'Введите новый пароль повторно',
        v => (v === this.newPassword || !this.newPasswordAgainError) || 'Пароли не совпадают'
      ],
      newPasswordAgainError: false,
      hideNewPasswordAgain: true,
     }
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$emit('closeDialog');
      }
      else {
        this.oldPasswordError = true;
        this.newPasswordError = true;
        this.newPasswordAgainError = true;
      }
    },
    focusOn(element) {
      switch (element) {
        case 'oldPassword': 
          this.oldPasswordError = false;
          break;
        case 'newPassword': 
          this.newPasswordError = false;
          break;
        case 'newPasswordAgain': 
          this.newPasswordAgainError = false;
          break;
      }
    },
    unFocusOn(element) {
      switch (element) {
        case 'oldPassword': 
          if(this.oldPassword === '') 
            this.oldPasswordError = true;
          break;
        case 'newPassword': 
          if(this.newPassword === '' || this.newPassword.length < 8) 
            this.newPasswordError = true;
          break;
        case 'newPasswordAgain': 
          if(this.newPasswordAgain === '' || this.newPasswordAgain !== this.newPassword) 
            this.newPasswordAgainError = true;
          break;
      }
    }
  }
}
</script>

<style scoped>
.save-btn {
  min-width: 140px;
  border: 1px solid #5DA3DA !important;
}
.input {
  color: #1A93F0 !important;
}
</style>
