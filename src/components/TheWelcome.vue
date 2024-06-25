<template>
  <div v-if="props.username">
    <h1>Welcome {{ props.username }}</h1>
    <button @click="logout">Logout</button>
  </div>
  <div v-else>
    <p>Please go to login page to Login</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineEmits, defineProps } from "vue";

const router = useRouter();

const props = defineProps({
  username: {
    type: String,
    required: true,
    default: "",
  },
});

const emit = defineEmits(["logout"]);
const logout = () => {
  emit("logout");
};
</script>
