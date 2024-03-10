<template>
  <div v-if="showNotification" class="notification-container">
    <div class="notification">
      <v-alert
        v-model="alert"
        border="start"
        close-label="Close Alert"
        :color="notification.type"
        variant="tonal"
        closable
        @click:close="closeNotification"
      >
        {{ notification.message }}
      </v-alert>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useNotificationStore } from "@/stores/notification.store.ts";

const { getNotification, setNotification, resetNotification } =
  useNotificationStore();

const showNotification = computed(
  () => getNotification.value != null || getNotification.value != undefined
);

const notification = getNotification;

const closeNotification = () => {
  resetNotification();
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  min-width: 300px;
}

.notification {
  /* background-color: #4caf50; */
  /* color: white; */
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  background-color: #f1f1f1;
  border: none;
  color: black;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
}
</style>
