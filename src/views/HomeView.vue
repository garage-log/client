<template>
  <main class="d-flex">
    <VechileFilter />

    <TheWelcome :username="username" @logout="hanldeLogout" />
  </main>
</template>

<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import VechileFilter from "../components/VechileFilter.vue";

import { useAuthStore } from "@/stores/auth.store.js";
import { useVehicleStore } from "@/stores/vehicle.store.js";

import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
// import router from "@/router";

const router = useRouter();
const authStore = useAuthStore();
const vehicleStore = useVehicleStore();

const username = computed(() => authStore.username);

const hanldeLogout = () => {
  authStore.logout();
  router.push("/login");
};

onMounted(async () => {
  await authStore.checkMe();
  await vehicleStore.findUserVehicles();
});
</script>

<style scoped></style>
