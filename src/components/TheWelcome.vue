<template>
  <div v-if="username">
    <h1>Welcome {{ username }}</h1>
    <button @click="logout">Logout</button>
  </div>
  <div v-else>
    <p>Please go to login page to Login</p>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth.store.js';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = () => {
      authStore.logout();
      router.push('/login');
    };

    return {
      username: authStore.username,
      logout,
    };
  },
};
</script>
