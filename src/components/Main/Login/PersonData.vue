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
      id="form-person-data-input-comp"
      class="px-4"
      ref="form">
      <v-menu
        lazy
        offset-y
        full-width
        ref="menu"
        transition="scale-transition"
        min-width="290px"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-top="24">
        <v-text-field
          readonly
          slot="activator"
          label="Дата рождения"
          v-model="date"
          :class="dateError ? '' : 'input'"
          :rules="dateRules"
          @focus="focusOn('date')"
          @blur="unFocusOn('date')">
        </v-text-field>
        <v-date-picker
          no-title  
          locale="ru"
          ref="picker"
          min="1950-01-01"
          v-model="date" 
          :max="new Date().toISOString().substr(0, 10)"
          @change="save"
          @input="menu = false">
        </v-date-picker>
      </v-menu>
      <v-select
        autocomplete
        no-data-text="Город не найден"
        item-text="name"
        label="Город"
        v-model="city"
        :class="cityError ? '' : 'input'"
        :rules="cityRules"
        :items="cities"
        @focus="focusOn('city')"
        @blur="unFocusOn('city')">
      </v-select>
      <v-radio-group 
        row
        v-model="sex"
        :rules="sexRules">
        <v-layout class="sex-label">
          <v-flex class="reg-16 textdarkgrey-text">
            Пол
          </v-flex>
        </v-layout>
        <v-spacer></v-spacer>
        <v-layout >
          <v-flex 
            class="pl-4"
            @keyup.right="changeSex('2')" 
            @keyup.up="seccondInput()"
            @click="changeSex('1')">
              <v-radio 
                label="Мужской" 
                value="1"
                :class="sexError ? 'sex' : 'sex input'">
              </v-radio>
          </v-flex>
          <v-flex 
            class="pl-4"
            @keyup.left="changeSex('1')" 
            @keyup.up="seccondInput()" 
            @click="changeSex('2')">
              <v-radio 
                label="Женский" 
                value="2"
                :class="sexError ? 'sex' : 'sex input'">
              </v-radio>
          </v-flex>
        </v-layout>
      </v-radio-group>
    </v-form>
    <v-flex class="pb-3 text-xs-center">
      <v-btn 
        class="capitalize registration-btn med-16 textblue-text"
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
      sexError: true,
      sexRules: [
        v => !!v || 'Введите ваш пол'
      ],
      cities: [],
      city: '',
      cityError: false,
      cityRules: [
        v => !!v || 'Введите ваш город'
      ],
      date: '',
      dateError: false,
      dateRules: [
        v => !!v || 'Введите дату рождения'
      ],
      menu: false
    }
  },
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
    sex: function (value) {
      if(value !== '') {
        this.sexError = false;
      }
    }
  },
  beforeMount () {
    this.addCities;
  },
  computed: {
    addCities() {
      this.cities = [
        { name: 'Москва', id: 1 },
        { name: 'Санкт-Петербург', id: 2 },
        { name: 'Няндома', id: 3 },
        { name: 'Говядко',id: 4 },
        { name: 'Сыктыквтыквкар', id: 5 },
        { name: 'Санкт-Петербург', id: 6 },
        { name: 'Няндома', id: 7 },
        { name: 'Говядко',id: 8 },
        { name: 'Сыктыквтыквкар', id: 9 },
        { name: 'Санкт-Петербург', id: 10 },
        { name: 'Няндома', id: 11 },
        { name: 'Говядко',id: 12 },
        { name: 'Сыктыквтыквкар', id: 13 }
      ];
    }
  },
  methods: {
    registration() {
      if (this.$refs.form.validate()) {
        this.$emit('wasRegistered');
      }
      else {
        this.cityError = true;
        this.dateError = true;
      }
    },
    callPreviousDialog() {
      this.$emit('callPreviousDialog');
    },
    seccondInput() {
      document.getElementById('form-person-data-input-comp')
              .children[1].children[1].children[0].lastElementChild.focus();
    },
    firstInput() {
      document.getElementById('form-person-data-input-comp')
              .children[0].children[1].children[0].focus();
    },
    changeSex(n) {
      document.getElementById('form-person-data-input-comp')
              .children[2].children[0].children[2]
              .children[n-1].children[0].focus();
      this.sex = n;
    },
    save (date) {
      this.$refs.menu.save(date)
    },
    focusOn(element) {
      switch (element) {
        case 'date': 
        //Решить
          this.date = this.date || '1995-03-13';
          this.dateError = false;
          break;
        case 'city': 
          this.cityError = false;
          break;
      }
    },
    unFocusOn(element) {
      switch (element) {
        case 'date': 
          if(this.date === '') 
            this.dateError = true;
          break;
        case 'city': 
          if(this.city === '') 
            this.cityError = true;
          break;
      }
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
.input {
  color: #1A93F0 !important;
}
</style>
