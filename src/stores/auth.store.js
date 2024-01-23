import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem("authToken", token);
    },
    async login({ username, password }) {
      const loginResponse = await axios.post(
        "http://localhost:3000/users/login",
        {
          username,
          password,
        }
      );

      this.setToken(loginResponse.data.user.token);
    },
    async register(user) {
      await axios.post("http://localhost:3000/users/register", user);
    },

    logout() {
      this.token = null;
      localStorage.removeItem("authToken");
    },
    checkMe() {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        this.token = storedToken;
      }
    },
  },
});
