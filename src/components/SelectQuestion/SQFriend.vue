<template>
  <v-list two-line class="py-0 mb-2 blocklight">

    <v-layout row>
      <v-list-tile-avatar class="pa-1 ml-2">
        <img :src="friend.avatar">
      </v-list-tile-avatar>


      <v-list-tile-content>
        <v-list-tile-title class="reg-15 black--text ml-2">
          {{friend.name}}
        </v-list-tile-title>
        <v-list-tile-sub-title v-if="friend.social===0 && !friend.following"
                               class="reg-15 textdarkgrey-text mb-0 ml-2">{{friend.commonFollowers}}
          {{getEnding(friend.commonFollowers)}}
        </v-list-tile-sub-title>
        <v-list-tile-sub-title v-if="friend.social===1 && !friend.following"
                               class="reg-15 textdarkgrey-text mb-0 ml-2">
          из Facebook
        </v-list-tile-sub-title>
        <v-list-tile-sub-title v-if="friend.social===2 && !friend.following"
                               class="reg-15 textdarkgrey-text mb-0 ml-2">
          из Вконтакте
        </v-list-tile-sub-title>
        <v-list-tile-sub-title v-if="friend.social===3 && !friend.following"
                               class="reg-15 textdarkgrey-text mb-0 ml-2">
          из Twitter
        </v-list-tile-sub-title>
        <v-list-tile-sub-title v-if="friend.social===4 && !friend.following"
                               class="reg-15 textdarkgrey-text mb-0 ml-2">
          из Google+
        </v-list-tile-sub-title>
        <v-list-tile-sub-title v-if="friend.social===5 && !friend.following"
                               class="reg-15 textdarkgrey-text mb-0 ml-2">
          из Telegram
        </v-list-tile-sub-title>
        <v-list-tile-sub-title v-if="friend.social===6 && !friend.following"
                               class="reg-15 textdarkgrey-text mb-0 ml-2">
          из Badoo
        </v-list-tile-sub-title>
        <v-list-tile-sub-title v-if="friend.following" class="reg-15 textdarkgrey-text mb-1 ml-2">
          подписан(а) на вас
        </v-list-tile-sub-title>


      </v-list-tile-content>
      <v-icon class="pr-3" v-on:click="isAdded=!isAdded" style="cursor: pointer;" v-if="!isAdded">
        person_add
      </v-icon>
      <v-icon class="pr-3" v-on:click="isAdded=!isAdded"
              style="cursor: pointer; color: #1A93F0; transform: translate(8%,0%)" v-if="isAdded">
        person
      </v-icon>
    </v-layout>

  </v-list>

</template>

<script>
  export default {
    data() {
      return {
        isAdded: false,
      }
    },
    props: {
      friend: {}
    },
    mounted() {

    },
    methods: {
      getEnding: (number) => {
        if (10 <= number && number <= 20) {
          return "общих друзей";
        } else {
          let lastDigit = number % 10;
          switch (true) {
            case lastDigit === 1:
              return "общий друг";
            case (2 <= lastDigit
              && lastDigit <= 4):
              return "общих друга";
            case (5 <= lastDigit
              && lastDigit <= 9):
            case lastDigit === 0:
              return "общих друзей";
          }
        }

      },
    }
  }
</script>

<style scoped>

</style>
