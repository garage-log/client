import { defineStore } from 'pinia';

export const useStore = defineStore('users',{
  state: () => ({
    users: [
      { id: 1, name: 'Osman', old: 21, isActive: true },
      { id: 2, name: 'Mahmut', old: 32, isActive: true },
      { id: 3, name: 'Zeynep', old: 18, isActive: true },
      { id: 4, name: 'Fatma', old: 28, isActive: true },
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
