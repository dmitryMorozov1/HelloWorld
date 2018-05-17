<template>
  <v-container 
    class="pa-0 notifications-comp blocklight border">
    <v-container 
      id="notifications-comp"
      class="pa-0"
      v-scroll:#notifications-comp="onScroll">
      <v-layout 
        justify-center 
        class="pt-2 reg-16 textdarkgrey-text">
        Уведомления
      </v-layout>
      <v-list
        class="pa-0 mb-2 blocklight">
        <notification 
          v-for="notification in notifications" 
          :key="notification.id"
          :notification="notification">
        </notification>
      </v-list>
      <v-container class="px-0 pt-0 mb-2" 
        v-if="!notifications.length">
        <v-layout 
          justify-center  
          class="pa-2 my-0 med-16">
            У вас пока нет уведомлений
        </v-layout>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import Notification from './notification.vue'
export default {
  data() {
    return {
      notifications: []
    }
  },
  beforeMount () {
    this.addNotifications;
  },
  computed: {
    addNotifications() {
      this.notifications = [
        { id: '1', name: 'Петя Говядко', label: 'Ответил на ваш', object: 'Комментарий', date: '2018-04-22T23:33:00Z', img: "http://memesmix.net/media/created/m6tnhm.jpg"},
        { id: '2', name: 'Петя Говядко', label: 'Прокомментировала ла-ла-ла-ла-ла вам', object: 'Вопрос', date: '2018-04-23T15:00:00Z', img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"},
        { id: '3', name: 'Костя Говядко', label: 'Подписался на вас', object: '', date: '2018-04-21T20:37:00Z', img: "http://www.ovsyanko.ru/kosta/myself.jpg"},
        { id: '4', name: 'Петя Говядко', label: 'Ответил на ваш', object: 'Комментарий', date: '2018-04-22T23:33:00Z', img: "http://memesmix.net/media/created/m6tnhm.jpg"},
        { id: '5', name: 'Петя Говядко', label: 'Прокомментировала вам', object: 'Вопрос', date: '2018-04-23T15:00:00Z', img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"},
        { id: '6', name: 'Костя Говядко', label: 'Подписалась на вас', object: '', date: '2018-04-21T20:37:00Z', img: "http://www.ovsyanko.ru/kosta/myself.jpg"},
        { id: '7', name: 'Петя Говядко', label: 'Можно вставить большой текст и прокомментировать конечно этот', object: 'Комментарий', date: '2018-04-22T23:33:00Z', img: "http://memesmix.net/media/created/m6tnhm.jpg"},
        { id: '8', name: 'Петя Говядко', label: 'Прокомментировала вам', object: 'Вопрос', date: '2018-04-23T15:00:00Z', img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"},
        { id: '9', name: 'Костя Говядко', label: 'Подписалась на вас', object: '', date: '2018-04-21T20:37:00Z', img: "http://www.ovsyanko.ru/kosta/myself.jpg"},
        { id: '10', name: 'Петя Говядко', label: 'Ответил на ваш', object: 'Комментарий', date: '2018-04-22T23:33:00Z', img: "http://memesmix.net/media/created/m6tnhm.jpg"},
        { id: '11', name: 'Петя Говядко', label: 'Прокомментировала вам', object: 'Вопрос', date: '2018-04-23T15:00:00Z', img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"},
        { id: '12', name: 'Костя Говядко', label: 'Подписалась на вас', object: '', date: '2018-04-21T20:37:00Z', img: "http://www.ovsyanko.ru/kosta/myself.jpg"},
        { id: '13', name: 'Петя Говядко', label: 'Съел', object: 'Бутер', date: '2010-03-29T15:00:00Z', img: "https://i.ytimg.com/vi/3v3tRVmgcZU/hqdefault.jpg"}
      ];
    }
  },
  methods: {
    /* don't scroll window */
    onScroll(e) {
      let area = e.target;
      if (area.scrollTop == 0) {
        area.scrollTop++;
      }
      else if (area.scrollHeight - area.clientHeight - area.scrollTop <= 1) {
        area.scrollTop--;
      }
    }
  },
  components: {
    'notification': Notification
  }
}
</script>

<style scoped>
.notifications-comp {
  overflow: hidden;
  width: 306px;
  border-radius: 2px;
}
#notifications-comp {
  overflow-y: auto;
  max-height: 426px;
}
</style>