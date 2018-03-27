<template>
  <v-layout px-2 my-0 elevation-3 class="follower" id="follower-comp">
        <v-avatar>
          <img :src="personData.img" alt="avatar">
        </v-avatar>
        {{ personData.name }}
        <v-spacer></v-spacer>
      <v-btn disabled v-if="personData.sig" class="sig"> Подписан на вас </v-btn>
      <v-btn v-if="sub" @click="unfollow" class="issub"> Вы подписаны </v-btn>
      <v-btn v-else @click="follow" class="nosub"> Подписаться </v-btn>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      sub: false
    }
  },
  props: ['personData'],
  mounted () {
    this.sub = this.personData.sub;
  },
  methods: {
    follow() {
      this.sub=!this.sub;
    },
    unfollow() {
      this.sub=!this.sub;
    }
  }
}
</script>

<style scoped>
#follower-comp {
  font-size: 16px;
  /*------*/
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  min-height: 58px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2) !important;
}
#follower-comp .avatar {
  height: 47px !important;
  width: 47px !important;
  margin-right: 10px;
}
#follower-comp .btn {
  text-transform: inherit;
  border-radius: 5px;
  height: 31px;
  width: 142px;
}
#follower-comp  .sig {
  box-shadow: 0 0 1px rgba(0,0,0,0.2) !important;
  background-color: #fefefe !important;
  color: #000 !important;
}
#follower-comp .nosub {
  box-shadow: 0 1px 2px rgba(0,0,0,0.2) !important;
  background-color: #5cb1f2 !important; 
  color: #fefefe;
  margin-right: 0;
}
#follower-comp .issub {
  box-shadow: 0 1px 2px rgba(0,0,0,0.2) !important;
  background-color: #ddf1ca !important;
  margin-right: 0;
}
</style>
