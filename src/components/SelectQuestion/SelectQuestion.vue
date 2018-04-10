<template>
  <v-container class="main-layout">
    <v-layout>
      <v-flex class="questions border blocklight">

      </v-flex>
      <v-flex>
        <topics class="topics mr-0 mb-3 border blocklight"></topics>
        <recommended-friends class="recommended-friends mr-0 border blocklight">
        </recommended-friends>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import question from '../Main/question/question'
import topics from './Topics'
import recommendedFriends from './SQFriends'

export default {
  data() {
    return {
      
    }
  },
  components: {
    'question' : question,
    'topics' : topics,
    'recommended-friends' : recommendedFriends
  },
  mounted() {
    
  }
}
</script>

<style scoped>
.questions {
  width: 777px;
  max-width: 777px;
  height: 500px;
}
.topics {
  width: 275px;
  max-width: 275px;
  height: 293px;
}
.recommended-friends {
  width: 275px;
  max-width: 275px;
  height: 345px;
}
</style>
