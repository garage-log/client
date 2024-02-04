<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">
        {{ $t("login.account") }}
      </div>
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="username"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          :readonly="loading"
          clearable
          :label="$t('login.username')"
          class="mb-2"
          :rules="[required]"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          {{ $t("login.password") }}
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?
          </a>
        </div>

        <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          :readonly="loading"
          @click:append-inner="visible = !visible"
          :rules="[required]"
          :label="$t('login.password')"
          clearable
        ></v-text-field>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          class="mb-8"
          color="blue"
          size="large"
          type="submit"
          variant="elevated"
        >
          {{ $t("login.btn") }}
        </v-btn>

        <v-card class="mb-12" color="surface-variant" variant="tonal">
          <v-card-text class="text-medium-emphasis text-caption">
            If you are not a member yet, you can become a free member with the
            link below.
          </v-card-text>
        </v-card>
        <v-card-text class="text-center">
          <v-btn
            class="text-blue text-decoration-none"
            to="register"
            rel="noopener noreferrer"
          >
            Sign up now
            <v-icon icon="mdi-chevron-right"></v-icon>
          </v-btn>
        </v-card-text>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth.store.js";
export default {
  name: "LoginForm",

  data: () => ({
    visible: false,
    form: false,
    email: null,
    password: "12345",
    loading: false,
    username: "murat",
  }),
  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      const { login } = useAuthStore();

      login({ username: this.username, password: this.password });

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
