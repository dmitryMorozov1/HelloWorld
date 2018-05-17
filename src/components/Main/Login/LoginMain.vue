<template>
  <v-container class="pa-0">
    <v-dialog v-model="loginSocial" max-width="340px">
      <login-social @callLoginEmailForm="callLoginEmail"></login-social>
    </v-dialog>
    <v-dialog v-model="loginEmail" max-width="340px">
      <login-email 
        @callPreviousDialog="callLoginSocial"
        @callRememberPassword="callRememberPassword"
        @callRegistrationForm="callRegistration">
      </login-email>
    </v-dialog>
    <v-dialog v-model="registration" max-width="340px">
      <registration 
        @callPreviousDialog="callLoginEmail"
        @callPersonDataForm="callPersonData">
      </registration>
    </v-dialog>
    <v-dialog v-model="personData" max-width="340px">
      <person-data 
        @callPreviousDialog="callRegistration"
        @wasRegistered="registered">
      </person-data>
    </v-dialog>
    <v-dialog v-model="rememberPassword" max-width="450px">
      <remember-password @callLoginEmailForm="callLoginEmail"></remember-password>
    </v-dialog>
  </v-container>
</template>

<script>
import LoginSocial from '@/components/Main/Login/LoginSocial.vue'
import LoginEmail from '@/components/Main/Login/LoginEmail.vue'
import Registration from '@/components/Main/Login/Registration.vue'
import PersonData from '@/components/Main/Login/PersonData.vue'
import RememberPassword from '@/components/Main/Login/RememberPassword.vue'
export default {
  data() {
    return {
      loginSocial: false,
      loginEmail: false,
      registration: false,
      personData: false,
      rememberPassword: false
    }
  },
  beforeMount () {
     this.loginSocial = true;
  },
  updated () {
    // Tell the parent that all dialogs are closed
    if(!this.loginSocial &&
       !this.loginEmail &&
       !this.registration &&
       !this.personData &&
       !this.rememberPassword)
    {
      this.closeComponent();
    }
  },
  methods: {
    callLoginSocial() {
      this.loginEmail=false;
      this.loginSocial=true;
    },
    callLoginEmail() {
      this.loginSocial=false;
      this.rememberPassword=false;
      this.registration=false;
      this.loginEmail=true;
    },
    callRememberPassword() {
      this.loginEmail=false;
      this.rememberPassword=true;
    },
    callRegistration() {
      this.loginEmail=false;
      this.personData=false;
      this.registration=true;
    },
    callPersonData() {
      this.registration=false;
      this.personData=true;
    },
    registered() {
      this.personData=false;
      this.closeComponent();
    },
    closeComponent() {
      this.$emit('closeComponent');
    }
  },
  components: {
    'login-social': LoginSocial,
    'login-email': LoginEmail,
    'registration': Registration,
    'person-data': PersonData,
    'remember-password': RememberPassword
  }
}
</script>

<style scoped>

</style>
