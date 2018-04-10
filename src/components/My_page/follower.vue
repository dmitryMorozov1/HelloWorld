<template>
  <v-layout px-2 my-0 class="border blocklight med-16" id="follower-comp">
    <v-avatar class="mr-3">
      <img :src="personData.img" alt="avatar">
    </v-avatar>
    <div class="follower-fild-title"> {{ personData.name }} </div>
    <v-spacer></v-spacer>
    <v-btn round disabled class="sig med-16 border"
      v-if="personData.sig"> Подписан на вас </v-btn>
    <v-btn round class="mr-0 med-16 blockgreen border"
      v-if="sub" @click="unfollow"> Вы подписаны </v-btn>
    <v-btn round class="mr-0 med-16 blocklight-text blockblue border"
      v-else @click="follow"> Подписаться </v-btn>
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
  align-items: center;
  border-radius: 2px;
  width: 100%;
  min-height: 58px;
}
#follower-comp .avatar {
  height: 47px !important;
  width: 47px !important;
}
#follower-comp .btn {
  text-transform: inherit;
  height: 31px;
  width: 158px;
}
#follower-comp  .sig {
  background-color: #fdfdfd !important;
  color: #000 !important;
}
</style>
