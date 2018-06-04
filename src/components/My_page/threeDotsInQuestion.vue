<template>
  <v-btn icon :ripple="false" class="tooltip">
    <v-icon color="white">more_horiz</v-icon>
    <v-flex class="tooltiptext">
      <v-layout class="tooltipSlot">Сохранить</v-layout>
      <v-layout class="tooltipSlot">Порекомендовать</v-layout>
      <v-layout class="tooltipSlot">Пожаловаться</v-layout>
    </v-flex>
  </v-btn>
</template>

<script>
  export default {
    name: "threeDotsInQuestion",
  }
</script>

<style scoped>
  .tooltip {
    position: relative;
    display: inline-block;
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

    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }

  .tooltip:hover .tooltiptext {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .tooltip:not(:hover) .tooltiptext {
    visibility: hidden;
    opacity: 0;
    filter: alpha(opacity=0);
  }

  .tooltipSlot {
    padding-top: 5px;
  }
</style>
