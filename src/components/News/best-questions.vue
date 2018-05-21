<template>
  <v-flex class="mr-0 ml-4 border blocklight best-questions mb-3">
    <v-flex class="pt-2 ">
      <v-layout justify-center column class="reg-17 textdarkgrey-text mb-3 text-xs-center">
        ЛУЧШИЕ ВОПРОСЫ
        <v-layout column justify-center>
          <v-list v-for="person in persons" :key="person.id" dense class="pa-0 mb-0 blocklight">
            <v-divider class="ml-4 divider"></v-divider>
            <v-list-tile class="person mt-1 mb-2">
              <a :href="'profile/'+person.id" target="_blank">
                <v-list-tile-avatar>
                  <img :src="person.avatar">
                </v-list-tile-avatar>
              </a>
              <v-list-tile-content>
                <v-layout class="reg-14 black--text">Here could be your amazing question</v-layout>
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
        name: "best-questions",
        props: {
          persons: {}
        }
    }

</script>

<style scoped>
  .divider{
    width: 80%;
  }

</style>
