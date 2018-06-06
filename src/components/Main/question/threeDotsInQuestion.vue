<template>
  <v-btn icon :ripple="false" class="tooltip"
         @click="(event)=>{this.clicked=!this.clicked;
                           event.stopPropagation()}">
    <v-icon color="white">more_horiz</v-icon>
    <v-flex class="tooltiptext"
            :class="clicked ? 'visible':'invisible'"
            @click="(event)=>{event.stopPropagation()}">
      <v-layout class="tooltipSlot">Сохранить</v-layout>
      <v-layout class="tooltipSlot">Порекомендовать</v-layout>
      <v-layout class="tooltipSlot">Пожаловаться</v-layout>
    </v-flex>
  </v-btn>
</template>

<script>
  export default {
    name: "threeDotsInQuestion",
    data() {
      return {
        clicked: false,
      }
    },
    mounted() {
      document.addEventListener('click', (event) => {
        const tooltipText = this.$root.$el.getElementsByClassName("tooltiptext")[0];
        const button = this.$root.$el.getElementsByClassName("tooltip")[0];
        if (event.target !== tooltipText &&
            event.target !== button &&
            this.clicked) {
            console.log(this.clicked);
            this.clicked = false;
        }
      })
    },
  }
</script>

<style scoped>
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .visible {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }

  .invisible {
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .tooltip .tooltiptext {
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 10px 15px;
    padding-top: 5px;
    text-transform: none;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 5;
    transform: translate(-35%, -70%);

  }

  .tooltipSlot {
    padding-top: 5px;
  }
</style>
