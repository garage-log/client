import { defineStore } from "pinia";
import { ref, computed } from "vue";

type NotificationTypes = "success" | "error" | "info" | "warning";

type Notification = {
  type: NotificationTypes;
  message: string;
} | null;

export const useNotificationStore = defineStore("notification", () => {
  const notification = ref<Notification>(null);

  /**
   *
   * @param type "success" | "error" | "info" | "warning"
   * @param message string
   * @param timer optional -> set '0' to be persistent
   * @returns
   */
  const setNotification = (
    type: NotificationTypes,
    message: string,
    timer = 10000
  ): void => {
    notification.value = { type, message };
    if (timer == 0) return;
    setTimeout(() => {
      resetNotification();
    }, timer);
  };

  const getNotification = computed(() => notification);

  const resetNotification = (): void => {
    notification.value = null;
  };

  return { setNotification, resetNotification, getNotification };
});
