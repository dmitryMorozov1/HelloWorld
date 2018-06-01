<template>
  <v-flex class="mr-0 ml-4 border blocklight most-active right-block mb-3">
    <v-flex class="pt-2 ">
      <v-layout justify-center column class="reg-17 textdarkgrey-text mb-3 text-xs-center">
        САМЫЕ АКТИВНЫЕ
        <v-layout column justify-center>
          <v-list two-line v-for="person in persons" :key="person.id" dense class="pa-0 mb-0 blocklight">
            <v-divider class="ml-4 divider"></v-divider>
            <v-list-tile class="person">
              <a :href="'profile/'+person.id" target="_blank">
                <v-list-tile-avatar>
                  <img :src="person.avatar">
                </v-list-tile-avatar>
              </a>
              <v-list-tile-content>
                <v-list-tile-title class="reg-14">вопросов: 16</v-list-tile-title>
                <v-list-tile-sub-title class="reg-14 black--text">комментариев: 31</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-layout>
      </v-layout>
    </v-flex>
  </v-flex>
</template>

<script>
  export default {
    name: "most-active",
    props: {
      persons: {}
    }
  }

</script>

<style scoped>
  .divider{
    width: 80%;
  }
  .most-active{
    height:340px;
  }
</style>
