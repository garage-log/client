import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
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
        localStorage.setItem('authToken', token);
      } catch (error) {
        console.error('Error setting token:', error);
      }
    },

    async setUser(username) {
      try {
        this.username = username;
        localStorage.setItem('username', username);
      } catch (error) {
        console.error('Error setting username:', error);
      }
    },

    async setUserId(userId) {
      try {
        this.userId = userId;
        localStorage.setItem('userId', userId);
      } catch (error) {
        console.error('Error setting userId:', error);
      }
    },

    async login({ username, password }) {
      try {
        const loginResponse = await axios.post('http://localhost:3333/users/login', {
          username,
          password,
        });

        this.isAuthenticated = true;
        console.log('store', this.isAuthenticated);
        await this.setUser(loginResponse.data.user.username);
        await this.setToken(loginResponse.data.user.token);
        await this.setUserId(loginResponse.data.user.id);
      } catch (error) {
        console.error('Login failed:', error);
      }
    },

    async register(user) {
      try {
        await axios.post('http://localhost:3333/users/register', user);
      } catch (error) {
        console.error('Registration failed:', error);
      }
    },

    logout() {
      this.isAuthenticated = false;
      console.log('logout', this.isAuthenticated);
      this.token = null;
      this.username = null;
      this.userId = null;

      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      localStorage.removeItem('userId');
    },

    checkMe() {
      try {
        const storedToken = localStorage.getItem('authToken');
        const storedUsername = localStorage.getItem('username');
        const storedUserId = localStorage.getItem('userId');
        if (storedToken && storedUsername) {
          this.token = storedToken;
          this.username = storedUsername;
          this.userId = storedUserId;
          this.isAuthenticated = true;
        }
      } catch (error) {
        console.error('Error checking local storage:', error);
      }
    },
  },
});
