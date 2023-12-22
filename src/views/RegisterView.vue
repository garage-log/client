<template>
  <div>
    <RegisterForm @registration="handleRegistration" />
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue"; 

export default {
  components: {
    RegisterForm,
  },
  methods: {
    handleRegistration(registrationData) {
      console.log("Registration data:", registrationData);
    },
  },
};
</script>
