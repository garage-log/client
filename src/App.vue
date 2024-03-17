<template>
  <header>
    <img alt="Garage logo" class="logo" src="@/assets/logos.png" height="125" />

    <div class="wrapper">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link v-if="loggedIn" to="/vehicleregister"
          >Vehicle Register</router-link
        >
        <router-link v-else to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </nav>
    </div>
  </header>
  <Notification />
  <RouterView />
</template>

<script setup>
import { ref, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Notification from "@/components/notification/Notification.vue";
import { useAuthStore } from "@/stores/auth.store.js";

const authStore = useAuthStore();
const loggedIn = ref(authStore.isAuthenticated);

watch(
  () => authStore.isAuthenticated,
  (value) => {
    loggedIn.value = value;
  }
);
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
