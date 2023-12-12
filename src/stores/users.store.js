import { defineStore } from 'pinia';

export const useStore = defineStore('users', {
  state: () => ({
    users: [
      { id: 1, name: 'Osman', old: 21, email: 'mail1@mail.de', password: '12345', isActive: true },
      { id: 2, name: 'Mahmut', old: 32, email: 'mail2@mail.de', password: '12345', isActive: true },
      { id: 3, name: 'Zeynep', old: 18, email: 'mail3@mail.de', password: '12345', isActive: true },
      { id: 4, name: 'Fatma', old: 28, email: 'mail4@mail.de', password: '12345', isActive: true },
    ],
    selectedUser: '',
  }),
  getters: {
    getUsers: (state) => state.users,
    getSelectedUser: (state) => state.selectedUser,
  },
  actions: {
    setSelectedUser(payload) {
      this.selectedUser = payload;
    },
  },
});
