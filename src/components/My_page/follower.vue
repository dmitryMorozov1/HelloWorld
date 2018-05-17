<template>
  <v-layout 
    id="follower-comp"
    class="px-2 my-0 med-16 blocklight border">
    <v-avatar class="mr-3">
      <img :src="person.img" alt="avatar">
    </v-avatar>
    <div class="follower-fild-title"> 
      {{ person.name }} 
    </div>
    <v-spacer></v-spacer>
    <v-btn 
      v-if="person.follower"
      round 
      disabled 
      class="follower med-16 border"
      :ripple="false"> 
        Подписан на вас 
    </v-btn>
    <v-btn 
      v-if="following" 
      round 
      class="mr-0 med-16 blockgreen border"
      :ripple="false"
      @click="unfollow"> 
        Вы подписаны 
    </v-btn>
    <v-btn 
      v-else 
      round 
      class="mr-0 med-16 blocklight-text blockblue border"
      :ripple="false"
      @click="follow"> 
        Подписаться 
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      following: false
    }
  },
  props: ['person'],
  beforeMount () {
    this.following = this.person.following;
  },
  methods: {
    follow() {
      this.following=!this.following;
    },
    unfollow() {
      this.following=!this.following;
    }
  }
}
</script>

<style scoped>
#follower-comp {
  align-items: center;
  border-radius: 2px;
  width: 100%;
  min-height: 58px;
}
.avatar {
  height: 47px !important;
  width: 47px !important;
}
.btn {
  text-transform: inherit;
  height: 31px;
  width: 158px;
}
#follower-comp .follower {
  background-color: #fdfdfd !important;
  color: #000 !important;
}
</style>
