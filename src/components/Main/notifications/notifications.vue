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
          row
          wrap
          align-center
          class="px-2 pt-3 my-0 med-18 blocklight black--text">
            <v-flex 
              xs12 
              class="text-xs-center"> 
              <v-layout d-block>
                <v-flex class="pb-3">
                  <img 
                    class="empty-img" 
                    src="https://cs8.pikabu.ru/images/previews_comm/2017-12_2/151259131615249038.png"
                  >
                </v-flex>
                <v-flex>
                  У вас пока нет уведомлений
                </v-flex>
              </v-layout>
            </v-flex>
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
      this.notifications = [];
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

.empty-img {
  height: 160px;
}
</style>