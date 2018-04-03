<template>
  <v-container>
    <v-expansion-panel popout>
      <v-expansion-panel-content class="text-xs-center">
        <div slot="header">Typography</div>
        <v-flex pa-1 v-for="(e, index) in el" :key="index" :class="e">
          .{{ e }}
        </v-flex>
      </v-expansion-panel-content>
      <v-expansion-panel-content class="text-xs-center">
        <div slot="header">Background colors</div>
        <v-flex class="blackborder" pa-3 mx-5 v-for="(e, index) in el2" :key="index" :class="e">
          .{{ e }}
        </v-flex>
      </v-expansion-panel-content>
      <v-expansion-panel-content class="text-xs-center">
        <div slot="header">Text colors</div>
        <v-flex 
          mx-5
          class="med-17" 
          v-for="(e, index) in el2" :key="index"
          :class="index === 0 || index === 3 ? 'blockblue' : 'blocklight'">
          <p :class="e + '-text'">
            .{{ e }}
          </p>
        </v-flex>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      el: ['thin-12', 'thin-18', 'thin-28', 'reg-14', 'reg-15', 'reg-16', 
           'med-14', 'med-16', 'med-17', 'med-18', 'med-20', 'med-24', 
           'bold-14', 'bold-22'],
      el2: ['blocklight', 'blockblue', 'textblue', 'blockgrey', 
            'blocklightblue', 'blockgreen', 'textgrey']
    }
  }
}
</script>

<style scoped>
.blackborder {
  border: 1px solid black;
}
</style>
