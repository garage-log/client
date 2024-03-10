import { defineStore } from "pinia";
import axios from "axios";
import { useNotificationStore } from "@/stores/notification.store.ts";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    username: null,
  }),
  actions: {
    async setToken(token) {
      try {
        this.token = token;
        localStorage.setItem("authToken", token);
      } catch (error) {
        console.error("Error setting token:", error);
      }
    },

    async setUser(username) {
      try {
        this.username = username;
        localStorage.setItem("username", username);
      } catch (error) {
        console.error("Error setting username:", error);
      }
    },

    async login({ username, password }) {
      const { setNotification } = useNotificationStore();

      try {
        console.log({ username, password });
        const loginResponse = await axios.post(
          "http://localhost:3000/users/login",
          {
            username,
            password,
          }
        );

        if (loginResponse.data.user) {
          setNotification(
            "success",
            "login success login success login success login success login success login success ",
            0
          );
        } else {
          setNotification("error", "login failed");
        }

        await this.setUser(loginResponse.data.user.username);
        await this.setToken(loginResponse.data.user.token);
      } catch (error) {
        console.error("Login failed:", error);
        setNotification("error", "login failed");
      }
    },

    async register(user) {
      try {
        await axios.post("http://localhost:3333/users/register", user);
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },

    logout() {
      this.token = null;
      this.username = null;
      localStorage.removeItem("authToken");
      localStorage.removeItem("username");
    },

    checkMe() {
      try {
        const storedToken = localStorage.getItem("authToken");
        const storedUsername = localStorage.getItem("username");
        if (storedToken && storedUsername) {
          this.token = storedToken;
          this.username = storedUsername;
        }
      } catch (error) {
        console.error("Error checking local storage:", error);
      }
    },
  },
});
