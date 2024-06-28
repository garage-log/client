<template>
  <div class="bg-gray-200 p-4 shadow-lg w-1/4 h-screen">
    <h2 class="text-lg font-semibold mb-4">Car Filters</h2>

    <!-- Brand Filter -->
    <div class="mb-4">
      <label for="brand" class="block text-sm font-medium text-gray-700"
        >Brand</label
      >
      <select
        v-model="selectedBrand"
        id="brand"
        name="brand"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">All Brands</option>
        <option v-for="brand in brands" :key="brand" :value="brand">
          {{ brand }}
        </option>
      </select>
    </div>

    <!-- Model Filter -->
    <div class="mb-4">
      <label for="model" class="block text-sm font-medium text-gray-700"
        >Model</label
      >
      <select
        v-model="selectedModel"
        id="model"
        name="model"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">All Models</option>
        <option v-for="model in models" :key="model" :value="model">
          {{ model }}
        </option>
      </select>
    </div>

    <!-- Years -->
    <div class="mb-4">
      <label for="model" class="block text-sm font-medium text-gray-700"
        >Years</label
      >
      <select
        v-model="selectedYears"
        id="model"
        name="model"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select Years</option>
        <option v-for="year in years" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>

    <!-- Fuel Type Filter -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-2"
        >Fuel Type</label
      >
      <div class="flex items-center space-x-2">
        <label>
          <input
            type="checkbox"
            v-model="selectedFuelTypes"
            value="Gasoline"
            class="form-checkbox"
          />
          <span class="ml-2">Gasoline</span>
        </label>
        <label>
          <input
            type="checkbox"
            v-model="selectedFuelTypes"
            value="Diesel"
            class="form-checkbox"
          />
          <span class="ml-2">Diesel</span>
        </label>
        <label>
          <input
            type="checkbox"
            v-model="selectedFuelTypes"
            value="Electric"
            class="form-checkbox"
          />
          <span class="ml-2">Electric</span>
        </label>
      </div>
    </div>

    <!-- Apply Filter Button -->
    <div class="text-right">
      <button
        @click="applyFilters"
        type="button"
        class="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
      >
        Apply Filters
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarFilter",
  mounted() {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 80 }, (_, index) => currentYear - index);
  },
  data() {
    return {
      brands: ["Toyota", "Honda", "Ford", "BMW", "Mercedes"],
      models: ["Sedan", "SUV", "Coupe", "Hatchback"],
      selectedBrand: "",
      selectedModel: "",
      selectedYears: "",
      selectedFuelTypes: [],
      years: [],
    };
  },
  methods: {
    applyFilters() {
      if (
        this.selectedBrand == "" &&
        this.selectedModel == "" &&
        this.selectedFuelTypes == "" &&
        this.selectedYears == ""
      ) {
        alert("En az bir ozellik secili olmali...");
        return;
      }
      // Burada filtreleme işlemlerini gerçekleştirebilirsiniz
      console.log("Selected Brand:", this.selectedBrand);
      console.log("Selected Model:", this.selectedModel);
      console.log("Selected Fuel Types:", this.selectedFuelTypes);
      // Bu verileri arabaları filtrelemek için kullanabilirsiniz
    },
  },
};
</script>

<style scoped>
/* İhtiyaca göre scoped stil sınıfları ekleyebilirsiniz */
</style>
