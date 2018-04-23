<template>
  <v-card class="px-4 complain-comp">
    <v-flex class="text-xs-center py-3 reg-18 textblue-text">
      Выберите причину жалобы
    </v-flex>
    <v-container 
      class="scroll-y pr-0 py-0 border radio-group-container">
      <v-radio-group 
        class="complain-radio-group"
        v-model="radio">
        <v-radio
          color="blue accent-2"
          v-for="radio in radioGroup"
          :key="radio.value"
          :label="radio.description"
          :value="radio.value">
        </v-radio>
      </v-radio-group>
    </v-container>
    <v-layout class="text-xs-center py-3">
      <v-btn 
        class="capitalize med-16 cancel-btn textblue-text mx-0"
        round
        depressed
        @click.native="closeComponent()">
          Отмена
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn 
        class="capitalize med-16 ready-btn blocklight-text blockblue mx-0"
        round
        depressed
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
      alert(this.radio);
      this.$emit('closeComponent');
    },
    closeComponent() {
      this.$emit('closeComponent');
    },
    setStyles() {
      let radioGroup = document.getElementsByClassName("complain-radio-group");
      radioGroup[0].children[1].style.minHeight = "18px";
      for(let i = 0; i < 4; i++) {
        radioGroup[0].children[0].children[i].firstElementChild.style.maxWidth = "85%";
      }
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
</style>
