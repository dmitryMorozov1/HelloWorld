<template>
  <v-flex class="mt-3" @click="choose">
    <v-card 
      class="px-3 py-1 reg-16 text-xs-center border answer-block" 
      :class="answer.chosen ? 'blocklightblue' : 'blocklight'"
    >
      <v-card-text>
        {{ answer.text }}
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: ['answer'],
  mounted() {

  },
  methods: {
    choose() {
      
    }
  }
}
</script>

<style scoped>
.chosen {
  background-color: #D3E3F0;
}
.answer-block {
  min-height: 100px;
  height: 100px;
}
</style>

