<template>
  <div>
    <!-- Navbar -->
    <nav class="bg-zinc-800 shadow-lg">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <img alt="Garage logo" class="h-20" src="@/assets/logos.png" />

        <!-- Navbar Links -->
        <div class="space-x-4">
          <v-btn text variant="plain" color="white">Home</v-btn>
          <v-btn text variant="plain" color="white">About</v-btn>
          <v-btn text variant="plain" color="white">My Cars</v-btn>
          <v-btn text variant="plain" color="white">Contact</v-btn>
        </div>

        <!-- Right Side Icons -->
        <div class="flex items-center space-x-4">
          <!-- Heart Icon -->
          <button class="text-white hover:text-teal-300">
            <v-icon>mdi-account</v-icon>
          </button>

          <!-- Avatar (Simulated login state) -->
          <v-avatar v-if="isLoggedIn" size="36">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Avatar"
            />
          </v-avatar>
          <v-btn v-else text color="white" @click="login">Login</v-btn>
          <!-- Search Button -->
          <button @click="toggleSearch" class="text-white hover:text-teal-300">
            <v-icon>mdi-magnify</v-icon>
          </button>

          <!-- Logout Icon -->
          <button class="text-white hover:text-teal-300">
            <v-icon>mdi-logout</v-icon>
          </button>
        </div>
      </div>
    </nav>

    <!-- Search Input -->
    <transition name="fade">
      <div v-if="showSearch" class="fixed top-16 right-4 z-10">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <v-text-field
            solo
            flat
            hide-details
            placeholder="Search..."
            v-model="search"
            @blur="toggleSearch"
            class="w-64"
          ></v-text-field>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showSearch: false,
      search: "",
      isLoggedIn: true,
    };
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
