<template>
  <v-card>
    <v-flex class="text-xs-center py-2 med-24 textblue-text">
      Регистрация
    </v-flex>
    <v-form 
      id="form-person-data-input-comp"
      class="px-4">
        <v-text-field
          v-model="date"
          @keyup.enter="nextInput(1)"
          class="input"
          label="Дата рождения">
        </v-text-field>
        <v-select
          :items="cities"
          v-model="city"
          item-text="name"
          class="input"
          label="Город"
          autocomplete
        ></v-select>
        <v-radio-group v-model="sex"
          row >
          <v-layout class="sex-label">
            <v-flex class="textdarkgrey-text reg-16">
              Пол
            </v-flex>
          </v-layout>
          <v-spacer></v-spacer>
          <v-layout >
            <v-flex 
              @keyup.right="changeSex('2')" 
              class="pl-4">
                <v-radio 
                  class="sex input"
                  label="Мужской" 
                  value="1">
                </v-radio>
            </v-flex>
            <v-flex 
              @keyup.left="changeSex('1')" 
              class="pl-4">
                <v-radio 
                  class="sex input"
                  label="Женский" 
                  value="2">
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
    return { 
      sex: '',
      cities: [],
      city: null,
      date: ''
    }
  },
  mounted () {
    this.addcities();
  },
  methods: {
    registration() {
      this.$emit('wasRegistered');
    },
    nextInput(n) {
      document.getElementById('form-person-data-input-comp')
              .children[n].children[1].children[0].children[0].focus();
      /*else {
        document.getElementById('form-person-data-input-comp')
                .children[n].children[0].children[2]
                .children[0].children[0].focus();
        this.radioGroup = "1";
      }*/
    },
    changeSex(n) {
      document.getElementById('form-person-data-input-comp')
              .children[2].children[0].children[2]
              .children[n-1].children[0].focus();
      this.sex = n;
    },
    addcities() { 
      this.cities = [
          { name: 'Москва', id: 1 },
          { name: 'Санкт-Петербург', id: 2 },
          { name: 'Няндома', id: 3 },
          { name: 'Говядко',id: 4 },
          { name: 'Сыктыквтыквкар', id: 5 }
        ]
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
