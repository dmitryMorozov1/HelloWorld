<template>
    <v-list dense two-line class="pa-0 mb-0 blocklight">

      <v-list-tile>
        <a :href="'profile/'+friend.id" target="_blank">
          <v-list-tile-avatar >
            <img :src="friend.avatar">
          </v-list-tile-avatar>
        </a>

        <v-list-tile-content>
          <v-list-tile-title>
            <a :href="'profile/'+friend.id" class="reg-15 black--text no-text-decoration"
               target="_blank">{{friend.name}}</a>
          </v-list-tile-title>

          <v-list-tile-sub-title class="reg-15 textdarkgrey-text mb-1">
            <a v-if="friend.social!==0 && !friend.following" :href="'https://'+friend.linkSocial"
               class="reg-15 textdarkgrey-text no-text-decoration" target="_blank">
               {{getSocialNetwork(friend)}}
            </a>
            <v-layout v-else>{{getSocialNetwork(friend)}}</v-layout>
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn v-on:click="isAdded=!isAdded;" :ripple="false" icon>
            <v-icon
                    :color="isAdded ? 'blue lighten-1' : 'blue-grey lighten-2'">
                    {{this.isAdded ? 'person' : 'person_add'}}
            </v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

    </v-list>
</template>

<script>
  export default {
    data() {
      return {
        isAdded: false
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

  .no-text-decoration{
    text-decoration: none;
  }
</style>
