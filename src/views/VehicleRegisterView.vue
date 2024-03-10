<template>
  <div>
    <VehicleForm @vehicle-registration="registerVehicle" />
  </div>
</template>

<script>
import { useVehicleStore } from '@/stores/vehicle.store.js';
import VehicleForm from '@/components/VehicleForm.vue';

export default {
  components: {
    VehicleForm,
  },
  methods: {
    registerVehicle(vehicleData) {
      const { registerVehicle } = useVehicleStore();
      registerVehicle(vehicleData);

      console.log('Vehicle registered successfully:', vehicleData);
    },
  },
};
</script>
