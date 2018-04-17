<template>
  <v-card>
    <v-flex class="text-xs-center py-2 med-24 textblue-text">
      Регистрация
    </v-flex>
    <v-form 
      id="form-registration-input-comp" 
      class="px-4">
        <v-text-field
          class="input"
          label="Имя Фамилия">
        </v-text-field>
        <v-text-field
          class="input"
          label="Email или телефон">
        </v-text-field>
        <v-text-field
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
    return { }
  },
  methods: {
    next() {
      this.$emit('callPersonDataForm');
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
