<template>
  <v-layout justify-center class="top-indent">
    <v-progress-circular :size=size :width=width indeterminate :color=color></v-progress-circular>
  </v-layout>
</template>

<script>
  export default {
    name: "pre-loader",
    props: {
      color: {
        type: String,
        default: "blue lighten-1",
        required: false
      },
      size: {
        type: Number,
        default: 50,
        required: false
      },
      width: {
        type: Number,
        default: 3,
        required: false
      },
    },

  }
</script>

<style scoped>
 .top-indent{
   margin-top: 50%;
 }
</style>
