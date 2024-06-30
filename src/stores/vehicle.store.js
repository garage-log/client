import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth.store.js";

export const useVehicleStore = defineStore("vehicle", {
  state: () => ({
    userId: null,
  }),
  actions: {
    async registerVehicle(vehicleData) {
      try {
        const authStore = useAuthStore();
        const userId = authStore.userId;
        const response = await axios.post(
          "http://localhost:3333/vehicle/register",
          { ...vehicleData, userId }
        );
        const newVehicle = response.data;
        return newVehicle;
      } catch (error) {
        console.error("Error registering vehicle:", error);
        throw error;
      }
    },

    async findUserVehicles() {
      try {
        const authStore = useAuthStore();
        this.userId = authStore.userId;
        const storedToken = authStore.token;

        const res = await axios.post(
          "http://localhost:3000/vehicle/findUserVehicle",
          { userId: this.userId },
          {
            headers: { Authorization: `Bearer ${storedToken}` },
          }
        );

      } catch (error) {
        console.error("Error finding vehicles: ", error);
        throw error;
      }
    },
  },
});
