import { defineStore } from 'pinia';

export const authStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem('authToken', token);
    },
    login({ email, password }) {
      const fakeToken = 'fake_token';

      this.setToken(fakeToken);
    },
    logout() {
      this.token = null;
      localStorage.removeItem('authToken');
    },
    checkMe() {
      const storedToken = localStorage.getItem('authToken');
      if (storedToken) {
        this.token = storedToken;
      }
    },
  },
});

authStore().checkMe();
