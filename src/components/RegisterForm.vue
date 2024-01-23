<template>
  <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="720" rounded="lg">
    <div
      class="text-subtitle-1 text-medium-emphasis mb-5 text-center font-weight-bold text-sm-h4"
    >
      Register Form
    </div>
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-text-field
        v-model="name"
        density="compact"
        placeholder="Your Name"
        variant="outlined"
        :readonly="loading"
        clearable
        label="Name"
        class="mb-2"
        :rules="[required]"
      ></v-text-field>

      <v-text-field
        v-model="surname"
        density="compact"
        placeholder="Your Surname"
        variant="outlined"
        :readonly="loading"
        clearable
        label="Surname"
        class="mb-2"
        :rules="[required]"
      ></v-text-field>

      <v-text-field
        v-model="username"
        density="compact"
        placeholder="Username"
        variant="outlined"
        :readonly="loading"
        clearable
        label="Username"
        class="mb-2"
        :rules="[required]"
      ></v-text-field>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        variant="outlined"
        :readonly="loading"
        clearable
        label="E-mail"
        class="mb-2"
        :rules="[required, emailRule]"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        variant="outlined"
        :readonly="loading"
        @click:append-inner="visible = !visible"
        :rules="[required]"
        label="Password"
        clearable
        class="mb-2"
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Confirm your password"
        variant="outlined"
        :readonly="loading"
        @click:append-inner="visible = !visible"
        :rules="[required, confirmPasswordRule]"
        label="Confirm Password"
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
        Register
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "RegisterForm",
  data: () => ({
    visible: false,
    form: false,
    name: "fatih",
    surname: "sultan",
    username: "fatih",
    email: "fatih@mail.com",
    password: "12345",
    confirmPassword: "12345",
    loading: false,
  }),
  methods: {
    onSubmit() {
      if (!this.form) return;

      this.$emit("registration", {
        name: this.name,
        surname: this.surname,
        username: this.username,
        email: this.email,
        password: this.password,
      });

      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    required(value) {
      return !!value || "Field is required";
    },
    emailRule(value) {
      return /.+@.+\..+/.test(value) || "E-mail must be valid";
    },
    confirmPasswordRule(value) {
      return value === this.password || "Passwords do not match";
    },
  },
};
</script>
