<template>
  <v-container>
    <v-dialog v-model="loginSocial" max-width="340px">
      <login-social @callLoginEmailForm="showloginemail"></login-social>
    </v-dialog>
    <v-dialog v-model="loginEmail" max-width="340px">
      <login-email @callRegistrationForm="showregistration"></login-email>
    </v-dialog>
    <v-dialog v-model="registration" max-width="340px">
      <registration @callPersonDataForm="showpersondata"></registration>
    </v-dialog>
    <v-dialog v-model="personData" max-width="340px">
      <person-data @wasRegistered="registered"></person-data>
    </v-dialog>
  </v-container>
</template>

<script>
import LoginSocial from '@/components/Main/Login/LoginSocial.vue'
import LoginEmail from '@/components/Main/Login/LoginEmail.vue'
import Registration from '@/components/Main/Login/Registration.vue'
import PersonData from '@/components/Main/Login/PersonData.vue'
export default {
  data() {
    return {
      loginSocial: false,
      loginEmail: false,
      registration: false,
      personData: false
    }
  },
  mounted () {
     this.loginSocial = true;
  },
  components: {
    'login-social': LoginSocial,
    'login-email': LoginEmail,
    'registration': Registration,
    'person-data': PersonData
  },
  updated () {
    // Tell the parent that all dialogs are closed
    if(!this.loginSocial &&
       !this.loginEmail &&
       !this.registration &&
       !this.personData)
    {
      this.closeLogin();
    }
  },
  methods: {
    // 4 transitions between components
    showloginemail() {
      this.loginSocial=false;
      this.loginEmail=true;
    },
    showregistration() {
      this.loginEmail=false;
      this.registration=true;
    },
    showpersondata() {
      this.registration=false;
      this.personData=true;
    },
    registered() {
      this.personData=false;
      this.closeLogin();
    },
    closeLogin() {
      this.$emit('closeLogin');
    }
  }
}
</script>

<style scoped>

</style>
