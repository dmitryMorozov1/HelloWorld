<template>
  <v-card>
    <v-flex class="text-xs-center py-2 med-24 textblue-text">
      Регистрация
    </v-flex>
    <v-form 
      id="form-person-data-input-comp"
      v-model="valid" 
      class="px-4">
        <v-text-field
          class="input"
          label="Дата рождения"
          v-model="name"
          :rules="nameRules">
        </v-text-field>
        <v-text-field
          class="input"
          label="Город"
          v-model="name"
          :rules="nameRules">
        </v-text-field>
        <v-radio-group 
          row 
          v-model="row">
          <v-layout class="sex-label">
            <v-flex class="textdarkgrey-text reg-16">
              Пол
            </v-flex>
          </v-layout>
          <v-spacer></v-spacer>
          <v-layout>
            <v-flex class="pl-4">
              <v-radio 
                class="sex input"
                label="Мужской" 
                value="radio-1">
              </v-radio>
            </v-flex>
            <v-flex class="pl-4">
              <v-radio 
                class="sex input"
                label="Женский" 
                value="radio-2">
              </v-radio>
            </v-flex>
          </v-layout>
        </v-radio-group>
    </v-form>
    <v-flex class="text-xs-center pb-3">
      <v-btn 
        class="capitalize med-16 registration-btn textblue-text"
        round
        depressed
        @click.native="registration()">
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
    registration() {
      this.$emit('wasRegistered');
    }
  }
}
</script>

<style scoped>
.sex-label {
  align-items: center;
  max-height: 40px;
  max-width: 40px;
}
.sex {
  min-width: 92px;
}
.registration-btn {
  min-width: 190px;
  border: 1px solid #5DA3DA !important;
}
#form-person-data-input-comp .input {
  color: #1A93F0 !important;
}
</style>
