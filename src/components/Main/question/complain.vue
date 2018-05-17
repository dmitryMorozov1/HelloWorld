<template>
  <v-card class="px-4 complain-comp">
    <v-flex class="py-3 text-xs-center reg-18 textblue-text">
      Выберите причину жалобы
    </v-flex>
    <v-container 
      class="pr-0 py-0 scroll-y radio-group-container border">
      <v-radio-group 
        class="py-3 complain-radio-group"
        v-model="radio">
        <v-radio
          v-for="radio in radioGroup"
          :key="radio.value"
          color="blue accent-2"
          :label="radio.description"
          :value="radio.value">
        </v-radio>
      </v-radio-group>
    </v-container>
    <v-layout class="py-3 text-xs-center">
      <v-btn 
        round
        depressed
        class="mx-0 capitalize cancel-btn med-16 textblue-text"
        @click.native="closeComponent()">
          Отмена
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn 
        round
        depressed
        class="mx-0 capitalize ready-btn med-16 blocklight-text blockblue"
        @click.native="toComplain()">
          Готово
      </v-btn>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      radio: 1,
      radioGroup: []
    }
  },
  // to watch the dialog closure 
  props: ['dialogIsOpen'],
  beforeMount () {
    this.addRadioGroup;
  },
  mounted() {
    this.setStyles();
  },
  computed: {
    addRadioGroup() {
      this.radioGroup = [
        { value: 1, description: "Спам" },
        { value: 2, description: "Оскорбление"},
        { value: 3, description: "Отталкивающий контент"},
        { value: 4, description: "Материал для взрослых"}
      ]
    }
  },
  watch: {
    dialogIsOpen: function (yes) {
      if(yes)
      {
        this.radio = 1;
      }
    }
  },
  methods: {
    toComplain() {
      /* to do smthng */
      this.$emit('closeComponent');
    },
    closeComponent() {
      this.$emit('closeComponent');
    },
    setStyles() {
      document.getElementsByClassName("complain-radio-group")[0]
              .children[1].style.minHeight="0";
    }
  }
}
</script>

<style scoped>
.btn {
  height: 31px;
  border: 1px solid #5DA3DA !important;
}
.ready-btn {
  min-width: 174px;
}
.cancel-btn {
  min-width: 106px;
}
.radio-group-container {
  border-radius: 2px;
}
.complain-radio-group :nth-child(1) {
  padding-left: 0;
}
</style>
