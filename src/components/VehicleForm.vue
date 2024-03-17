<template>
  <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="720" rounded="lg">
    <div class="text-subtitle-1 text-medium-emphasis mb-5 text-center font-weight-bold text-sm-h4">
      Vehicle Registration Form
    </div>
    <v-form ref="vehicleForm" v-model="form" @submit.prevent="onSubmit">
      <v-text-field
        v-model="brand"
        density="compact"
        placeholder="Brand"
        variant="outlined"
        :readonly="loading"
        clearable
        label="Brand"
        class="mb-2"
        :rules="[required]"
      ></v-text-field>

      <v-text-field
        v-model="model"
        density="compact"
        placeholder="Model"
        variant="outlined"
        :readonly="loading"
        clearable
        label="Model"
        class="mb-2"
        :rules="[required]"
      ></v-text-field>

      <v-select
        v-model="productionYear"
        :items="years"
        dense
        outlined
        :readonly="loading"
        label="Production Year"
        class="mb-2"
        :rules="[required]"
      ></v-select>

      <v-text-field
        v-model="plateNumber"
        density="compact"
        placeholder="Plate Number"
        variant="outlined"
        :readonly="loading"
        clearable
        label="Plate Number"
        class="mb-2"
        :rules="[required]"
      ></v-text-field>

      <v-text-field
        v-model="km"
        density="compact"
        placeholder="Kilometers"
        variant="outlined"
        :readonly="loading"
        clearable
        label="Kilometers"
        class="mb-2"
        :rules="[required]"
      ></v-text-field>

      <v-select
        v-model="selectedFuelTypes"
        :items="fuelTypes"
        dense
        outlined
        multiple
        :readonly="loading"
        label="Fuel Type"
        class="mb-2"
        :rules="[required]"
      ></v-select>

      <v-btn
        :disabled="!form"
        :loading="loading"
        block
        class="mb-8"
        color="blue"
        size="large"
        type="submit"
        variant="elevated"
      >
        Register Vehicle
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'VehicleForm',
  data: () => ({
    form: false,
    brand: '',
    model: '',
    productionYear: '',
    plateNumber: '',
    km: '',
    selectedFuelTypes: [],
    loading: false,
    years: [],
    fuelTypes: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Other'],
  }),
  mounted() {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 80 }, (_, index) => currentYear - index);
  },
  methods: {
    onSubmit() {
      if (!this.form) return;

      const productionYear = new Date(this.productionYear + '-01-01');

      this.$emit('vehicle-registration', {
        brand: this.brand,
        model: this.model,
        productionYear: productionYear,
        plateNumber: this.plateNumber,
        km: this.km,
        fuelType: this.selectedFuelTypes,
      });

      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$refs.vehicleForm.reset();
        this.brand = '';
        this.model = '';
        this.productionYear = '';
        this.plateNumber = '';
        this.km = '';
        this.selectedFuelTypes = [];
      }, 2000);
    },
    required(value) {
      return !!value || 'Field is required';
    },
  },
};
</script>
