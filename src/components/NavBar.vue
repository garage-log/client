<template>
  <!-- Navbar IF -->
  <div v-if="isAuthenticated">
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
          <v-btn text variant="plain" color="white">Register Vehicle</v-btn>
          <v-btn text variant="plain" color="white">Contact</v-btn>
        </div>

        <!-- Right Side Icons -->
        <div class="flex items-center">
          <!-- Avatar (Simulated login state) -->
          <v-avatar class="mr-2" v-if="isAuthenticated" size="36">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Avatar"
            />
          </v-avatar>
          <!-- Search Button -->
          <v-btn
            class="pa-0"
            color="white"
            flat
            variant="text"
            rounded="false"
            elevation="0"
            @click="toggleSearch"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <!-- Logout Icon -->
          <v-btn
            class="pa-0"
            color="white"
            flat
            variant="text"
            rounded="false"
            elevation="0"
          >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
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

  <!-- Navbar ELSE -->
  <div v-else>
    <nav class="bg-zinc-800 shadow-lg">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <img alt="Garage logo" class="h-20" src="@/assets/logos.png" />

        <!-- Navbar Links -->
        <div>
          <v-btn text variant="plain" color="white">Home</v-btn>
          <v-btn text variant="plain" color="white">About</v-btn>
          <v-btn text variant="plain" color="white">Contact</v-btn>
        </div>

        <!-- Right Side Icons -->
        <div class="flex items-center">
          <!-- Search Button -->
          <v-btn
            class="pa-0"
            color="white"
            flat
            variant="text"
            rounded="false"
            elevation="0"
            @click="toggleSearch"
          >
            <v-icon size="large">mdi-magnify</v-icon>
          </v-btn>

          <!-- Logout Icon -->
          <v-btn
            class="pa-0"
            color="white"
            flat
            variant="text"
            rounded="false"
            elevation="0"
          >
            <v-icon size="large">mdi-login</v-icon>
          </v-btn>
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

<script setup>
import { ref, defineProps } from "vue";

const showSearch = ref(false);
const search = ref("");

const props = defineProps({
  isAuthenticated: {
    type: Boolean,
    required: true,
  },
});

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  console.log("tiklandi", showSearch.value);
};

// export default {
//   name: "Navbar",
//   data() {
//     return {
//       showSearch: false,
//       search: "",
//       isLoggedIn: true,
//     };
//   },
//   methods: {
//     toggleSearch() {
//       this.showSearch = !this.showSearch;
//     },
//   },
// };
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
