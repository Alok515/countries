<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  country: {
    default: null
  }
})
</script>

<template>
  <div
    class="rounded-lg shadow-lg h-full bg-white transition-all duration-700 hover:scale-105 hover:shadow-2xl"
  >
    <img :src="country.flags.svg" alt="Flag" class="w-full h-[11.5rem] rounded-t-lg object-cover" />
    <div class="p-6">
      <h3 class="font-bold mb-6">{{ country.name.common }}</h3>
      <p class="mb-2">
        Population: <span class="text-gray-600">{{ country.population }}</span>
      </p>
      <p class="mb-2">
        Region: <span class="text-gray-600">{{ country.region }}</span>
      </p>
      <p class="mb-4">
        Capital:
        <span class="text-gray-600">{{ country.capital ? country.capital[0] : 'Unkown' }}</span>
      </p>
    </div>
  </div>
</template>
