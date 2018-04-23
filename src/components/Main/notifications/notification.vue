<template>
  <div>
    <hr class="my-2 mx-3">
    <v-list-tile class="notification-list-tile">
      <a :href="'profile/' + 1" target="_blank">
        <v-list-tile-avatar class="pt-1">
          <img :src="notification.img">
        </v-list-tile-avatar>
      </a>
      <v-list-tile-content>
        <v-list-tile-title>
          <a href="" class="reg-14 textblue-text"
             target="_blank">{{ notification.name }}</a>
        </v-list-tile-title>
        <v-list-tile-sub-title 
          class="reg-14 textdarkgrey-text notification-content">
          {{ notification.label }} 
          <a href="" class="reg-14 textblue-text"
             target="_blank">{{ notification.object }}</a>
        </v-list-tile-sub-title>
        <v-list-tile-title class="reg-14 textgrey-text pt-1">
          {{ dateStr }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  data() {
    return {
        date: { year: "", month: "", day: "", time: ""},
        dateStr: ""
    }
  },
  props: ['notification'],
  beforeMount () {
    this.addDate;
  },
  mounted() {
    this.setStyles();
  },
  computed: {
    addDate() {
      let date = new Date(this.notification.date);
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
  methods: {
    setStyles() {
      let listTile = document.getElementsByClassName("notification-list-tile");
      for(let i = 0; i < listTile.length; i++) {
        listTile[i].firstElementChild.style.height = "auto";
        listTile[i].firstElementChild.style.display = "-webkit-inline-box";
        listTile[i].firstElementChild.style["-webkit-box-align"] = "start";
      }
    }
  }
}
</script>

<style scoped>
hr {
  border: none;
  background-color: rgba(217, 217, 217, 0.4); 
  height: 1px; 
}
a { 
  text-decoration: none;
} 
.notification-content {
  white-space: normal;
  line-height: 1.3;
}
</style>
