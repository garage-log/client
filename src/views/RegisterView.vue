<template>
  <div>
    <RegisterForm @registration="handleRegistration" />
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth.store.js";
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  components: {
    RegisterForm,
  },
  methods: {
    handleRegistration(registrationData) {
      const { register } = useAuthStore();
      register(registrationData);
      console.log("Registration data:", registrationData);
    },
  },
};
</script>
