<script setup>
import CountryDetail from '@/components/CountryDetail.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const countryData = ref(null)
const isLoading = ref(true)
const route = useRoute()
const countryCode = route.params.code

//loades the data on mount
onMounted(async () => {
  const rawData = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
  const parsedData = await rawData.json()
  countryData.value = parsedData
  isLoading.value = false
})
</script>

<template>
  <div class="bg-white">
    <div v-if="isLoading" class="h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
    <div v-else>
      <CountryDetail :data="countryData" />
    </div>
  </div>
</template>
