<template>
    <v-app-bar app color="white" dark>
      <v-toolbar-title class="text-lg-right">MyLogo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="gray" class="text-lg-right">
        Home
      </v-btn>
      <v-btn text color="gray" class="text-lg-right">
        About
      </v-btn>
      <v-btn text color="gray" class="text-lg-right">
        Services
      </v-btn>
      <v-btn text color="gray" class="text-lg-right">
        Contact
      </v-btn>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" app right>
        <v-list>
          <v-list-item link>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .text-lg-right {
    margin-left: auto;
    margin-right: 16px;
  }
  </style>
  