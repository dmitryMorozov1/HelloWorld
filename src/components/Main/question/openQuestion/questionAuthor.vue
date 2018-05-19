<template>
  <v-flex xs6>
    <v-list two-line dense subheader class="transparent black--text">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img :src="question.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title class="reg-18"> 
            <a :href="'/profile/' + question.ownerId"> {{ question.ownerName }} </a>
          </v-list-tile-title>
          <v-list-tile-sub-title class="reg-17 textgrey-text"> 
            {{ dateStr }} 
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      date: { year: "", month: "", day: "", time: ""},
      dateStr: ""
    }
  },
  props: ['question'],
  watch: {
    question: function() {
      this.addDate;
    }
  },
  computed: {
    addDate() {
      let date = new Date(this.question.date);
      let nowDate = new Date();
      this.date.year = date.getFullYear();
      let ofTheMonth = ('января,февраля,марта,апреля,мая,июня,июля,'+
                   'августа,сентября,октября,ноября,декабря').split(',');
      this.date.month = ofTheMonth[date.getMonth()]
      this.date.day = date.getDate();
      this.date.time = date.toLocaleString("ru", {
                              hour: 'numeric',
                              minute: 'numeric'
                            });   
      if (nowDate - date < 1000*60) 
        this.dateStr = "Только что";
      else if (nowDate - date < 1000*3600) {
        this.dateStr = ((nowDate - date)/(1000*60)|0) % 10 === 1 ?
        "" + ((nowDate - date)/(1000*60)|0) + " минуту назад" :
        "" + ((nowDate - date)/(1000*60)|0) + " минут назад";
      }
      else if (nowDate - date < 1000*3600*2) 
        this.dateStr = "1 час назад";
      else if (nowDate - date < 1000*3600*5) 
        this.dateStr = "" + ((nowDate - date)/(1000*3600)|0) + " часа назад";
      else if (nowDate - date < 1000*3600*13) 
        this.dateStr = "" + ((nowDate - date)/(1000*3600)|0) + " часов назад";
      else if (nowDate - date < 1000*3600*24 && this.date.day === nowDate.getDate()) 
        this.dateStr = "Сегодня в " + this.date.time;
      else if (nowDate - date < 1000*3600*24*2 && this.date.day === (nowDate.getDate() - 1)) 
        this.dateStr = "Вчера в " + this.date.time;
      else if (nowDate - date < 1000*3600*24*335)
      this.dateStr = "" + this.date.day + 
                     " " + this.date.month + 
                     " в " + this.date.time;
      else if (nowDate - date >= 1000*3600*24*335)
      this.dateStr = "" + this.date.day + 
                     " " + this.date.month + 
                     " " + this.date.year + " г.";
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
