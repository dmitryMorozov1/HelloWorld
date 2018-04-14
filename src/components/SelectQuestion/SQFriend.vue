<template>
  <v-list two-line class="py-0 mb-2 blocklight">

    <v-layout row>
      <v-list-tile-avatar class="pa-1 ml-2">
        <img :src="friend.avatar">
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title class="ml-2">
          <a :href="'profile/'+friend.id" class="reg-15 black--text" target="_blank"
             style="text-decoration: none;">{{friend.name}}</a>
        </v-list-tile-title>

        <v-list-tile-sub-title class="reg-15 textdarkgrey-text mb-1 ml-2">
          <a v-if="friend.social!==0 && !friend.following" :href="'https://'+friend.linkSocial"
             class="reg-15 textdarkgrey-text" target="_blank" style="text-decoration: none;">
             {{getSocialNetwork(friend)}}
          </a>
          <v-layout v-else>{{getSocialNetwork(friend)}}</v-layout>
        </v-list-tile-sub-title>


      </v-list-tile-content>

      <v-icon v-on:click="isAdded=!isAdded;" :class="isAdded ? 'added' : ''"
              class="pr-3" style="cursor: pointer;">
              {{this.isAdded ? 'person' : 'person_add'}}
      </v-icon>
    </v-layout>

  </v-list>

</template>

<script>
  export default {
    data() {
      return {
        isAdded: false,
        iconStyle:{},
        icon:"person_add",
      }
    },

    props: {
      friend: {}
    },
    mounted() {

    },
    methods: {
      getSocialNetwork: (friend) => {
        if (friend.following) return "подписан(а) на вас";
        switch (friend.social) {
          case 0:
            if (10 <= friend.commonFollowers && friend.commonFollowers <= 20) {
              return friend.commonFollowers + " общих друзей"
            } else {
              let lastDigit = friend.commonFollowers % 10;
              switch (true) {
                case lastDigit === 1:
                  return friend.commonFollowers + " общий друг";
                case (2 <= lastDigit
                  && lastDigit <= 4):
                  return friend.commonFollowers + " общих друга";
                case (5 <= lastDigit
                  && lastDigit <= 9):
                case lastDigit === 0:
                  return friend.commonFollowers + " общих друзей";
              }
            }
          case 1:
            return "из Facebook";
          case 2:
            return "из ВКонтакте";
          case 3:
            return "из Twitter";
          case 4:
            return "из Google+";
          case 5:
            return "из Telegram";
          case 6:
            return "из Badoo";
        }
      },
    }
  }
</script>

<style scoped>
 .added{
   color: #1A93F0;
   transform:translate(8%,0%);
 }
</style>
