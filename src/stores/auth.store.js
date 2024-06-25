import { defineStore } from "pinia";
import axios from "axios";
import { useNotificationStore } from "@/stores/notification.store.ts";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    username: null,
    userId: null,
    isAuthenticated: false,
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

    async setUserId(userId) {
      try {
        this.userId = userId;
        localStorage.setItem("userId", userId);
      } catch (error) {
        console.error("Error setting userId:", error);
      }
    },

    async login({ username, password }) {
      const { setNotification } = useNotificationStore();

      try {
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

        this.isAuthenticated = true;
        console.log("store", this.isAuthenticated);
        await this.setUser(loginResponse.data.user.username);
        await this.setToken(loginResponse.data.user.token);
        await this.setUserId(loginResponse.data.user.id);
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
      this.isAuthenticated = false;
      console.log("logout", this.isAuthenticated);
      this.token = null;
      this.username = null;
      localStorage.removeItem("authToken");
      localStorage.removeItem("username");
    },

    async checkMe() {
      try {
        const storedToken = localStorage.getItem("authToken");
        const storedUsername = localStorage.getItem("username");

        if (!storedToken) {
          (this.token = null), (this.username = null);
          return;
        }

        router.push('/')

        const res = await axios.get("http://localhost:3000/users/check/me", {
          headers: { Authorization: `Bearer ${storedToken}` },
        });

        if (storedToken && storedUsername) {
          await this.setUser(res.data.username);
          await this.setToken(res.data.token);
          await this.setUserId(res.data.id);
          this.isAuthenticated = true;
        }
      } catch (error) {
        console.error("Error checking local storage:", error);
      }
    },
  },
});
