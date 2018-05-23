<template>
  <v-card>
    <v-layout 
      wrap 
      d-block
      class="px-4">
      <v-flex>
        <v-card-title class="px-0 pb-2 med-20 textblue-text">
          ОБЩЕЕ
        </v-card-title>
      </v-flex>
      <v-flex>
        <v-form ref="form">
          <v-layout row align-center>
            <v-flex 
              xs5
              class="reg-16 textdarkgrey-text"> 
                Имя Фамилия 
            </v-flex>
            <v-text-field
              single-line
              class="input"
              v-model="name">
            </v-text-field>
          </v-layout>
          <v-layout row align-center>
            <v-flex 
              xs5
              class="reg-16 textdarkgrey-text"> 
                Email
            </v-flex>
            <v-text-field
              single-line
              class="input"
              v-model="email">
            </v-text-field>
          </v-layout>
          <v-layout row align-center>
            <v-flex 
              xs5
              class="reg-16 textdarkgrey-text"> 
                Телефон
            </v-flex>
            <v-text-field
              single-line
              class="input"
              v-model="phone">
            </v-text-field>
            </v-layout>
          <v-layout row align-center>
            <v-flex 
              xs5
              class="reg-16 textdarkgrey-text"> 
                Дата рождения
            </v-flex>
            <v-flex xs7>
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
                  single-line
                  readonly
                  class="input"
                  slot="activator"
                  v-model="date">
                </v-text-field>
                <v-date-picker
                  no-title  
                  scrollable
                  locale="ru"
                  min="1950-01-01"
                  ref="picker"
                  v-model="date" 
                  :max="new Date().toISOString().substr(0, 10)"
                  @change="save"
                  @input="menu = false">
                </v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
          <v-layout row align-center>
            <v-flex 
              xs5
              class="reg-16 textdarkgrey-text"> 
                Город
            </v-flex>
            <v-select
              autocomplete
              class="input"
              no-data-text="Город не найден"
              item-text="name"
              v-model="city"
              :items="cities">
            </v-select>
          </v-layout>
          <v-layout row align-center>
            <v-flex 
              xs5
              class="reg-16 textdarkgrey-text"> 
                Пол
            </v-flex> 
            <v-radio-group 
              row
              v-model="sex">
              <v-layout >
                <v-flex 
                  class="pl-4"
                  @click="changeSex('1')">
                    <v-radio 
                      label="Мужской" 
                      value="1"
                      class="sex input">
                    </v-radio>
                </v-flex>
                <v-flex 
                  class="pl-4"
                  @click="changeSex('2')">
                    <v-radio 
                      label="Женский" 
                      value="2"
                      class="sex input">
                    </v-radio>
                </v-flex>
              </v-layout>
            </v-radio-group>
          </v-layout>
          <v-layout 
            row
            class="pt-3">
            <v-flex 
              xs5
              class="reg-16 textdarkgrey-text"> 
                О себе
            </v-flex>
            <v-flex xs7>
              <v-text-field
                multi-line
                single-line
                solo
                auto-grow
                no-resize
                class="blocklight border"
                name="input-about-me"
                v-model="aboutMe"
                :rows="3">
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
      <v-flex right>
        <v-card-actions class="px-0 py-3">
          <v-btn 
            flat
            round
            depressed
            class="ma-0 capitalize add-btn med-16 textblue-text"
            :ripple="false"
            @click.native="saveChanges()">
              Сохранить изменения
          </v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      sex: '',
      cities: [],
      city: '',
      date: '',
      menu: false,
      aboutMe: ''
    }
  },
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  beforeMount() {
    this.addData;
  },
  computed: {
    addData() {
      this.name = 'Евген Пелмен',
      this.email = 'e.rere@pochta.com',
      this.phone = '8 (911) 678 22 33',
      this.sex = '1',
      this.cities = [
        { name: 'Москва', id: 1 },
        { name: 'Санкт-Петербург', id: 2 },
        { name: 'Няндома', id: 3 },
        { name: 'Говядко',id: 4 }
      ]
      this.city = this.cities[2],
      this.date = '1995-03-13',
      this.aboutMe = 'ваыа ваывп ап ыпыпкцавы ва выпар екупвы павп к ыав па  вапвап вап рпвр апкпкпвап ав пвапкупаппв а пвап авпвав пыапывпыфыа выпваыавп авпавпыв'
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    saveChanges() {
      //to do smthg
      this.$emit('saveChanges');
    }
  }
}
</script>

<style scoped>
.btn {
  text-transform: inherit;
}
.add-btn {
  border: 1px solid #5DA3DA !important;
}
.input {
  color: #1A93F0 !important;
}
</style>
