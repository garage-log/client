<template>
  <div v-if="username">
    <h1>Welcome {{ username }}</h1>
    <button @click="logout">Logout</button>
  </div>
  <div v-else>
    <p>Please go to login page to Login</p>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth.store.js";
import { useRouter } from "vue-router";
import { onMounted, computed, watch } from "vue";

const router = useRouter();

const authStore = useAuthStore();
const username = computed(() => authStore.username);

onMounted(async () => {
  await authStore.checkMe();
});

const logout = () => {
  authStore.logout();
  router.push("/login");
};
</script>
