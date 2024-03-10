<template>
  <main>
    <LoginForm @login="handleLogin"/>
  </main>
</template>

<script>
import { useAuthStore } from "@/stores/auth.store.js";
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
  methods: {
    handleLogin(loginData) {
      const { login } = useAuthStore();
      login(loginData);
      console.log("login data:", loginData);
    },
  },
  };
</script>
