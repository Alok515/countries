<script setup>
import { onMounted, ref } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { RouterLink } from 'vue-router'
import CardItem from '@/components/CardItem.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const apiData = ref([])
const isLoading = ref(true)
const regions = ['Asia', 'Africa', 'Antarctic', 'Europe', 'Americas', 'Oceania']
const searchValue = ref('')
const regionFilter = ref('')

onMounted(async () => {
  try {
    const rawData = await fetch('https://restcountries.com/v3.1/all')
    const parsedData = await rawData.json()
    parsedData.sort((item1, item2) => {
      const name1 = item1.name.common
      const name2 = item2.name.common
      return name1.localeCompare(name2)
    })
    apiData.value = parsedData
  } catch (error) {
    console.log('failed to get the Data')
  } finally {
    isLoading.value = false
  }
})

watchDebounced(
  regionFilter,
  async () => {
    try {
      const rawData = await fetch(`https://restcountries.com/v3.1/region/${regionFilter.value}`)
      const parsedData = await rawData.json()
      apiData.value = parsedData
    } catch (error) {
      console.log('failied to get the data')
    }
  },
  {
    debounce: 500
  }
)

watchDebounced(
  searchValue,
  async () => {
    try {
      if (searchValue.value.length > 0) {
        const rawData = await fetch(`https://restcountries.com/v3.1/name/${searchValue.value}`)
        const parsedData = await rawData.json()
        apiData.value = parsedData
      } else {
        const rawData = await fetch(`https://restcountries.com/v3.1/all`)
        const parsedData = await rawData.json()
        parsedData.sort((item1, item2) => {
          const name1 = item1.name.common.toLowerCase()
          const name2 = item2.name.common.toLowerCase()
          if (name1 < name2) return -1
          else return 1
        })
        apiData.value = parsedData
      }
    } catch (error) {
      console.log('failied to get the data')
    }
  },
  {
    debounce: 1000
  }
)
</script>

<template>
  <main class="px-8 max-md:px-6 max-sm:px-4">
    <div v-if="isLoading" class="h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
    <div v-else>
      <header class="flex justify-between py-14 max-sm:flex-col gap-4 text-sm">
        <div class="px-5 py-3 bg-white rounded-lg w-1/2 max-sm:w-[100%] max-sm:text-lg">
          <img src="@/assets/icons8-search.svg" alt="icon" class="inline px-2" />
          <input
            type="text"
            v-model="searchValue"
            placeholder="Search the Country By Name.."
            class="w-4/5 focus:outline-none"
          />
        </div>
        <div class="px-5 pt-4 bg-white rounded-lg">
          <select
            class="text-sm bg-white focus:outline-none text-gray-500 max-sm:w-[100%] max-sm:text-lg max-sm:pb-4"
            v-model="regionFilter"
          >
            <option disabled value="">Select Region</option>
            <option v-for="region of regions" :value="region" :key="region">{{ region }}</option>
          </select>
        </div>
      </header>
      {{ apiData.name }}
      <div class="grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <RouterLink v-for="country of apiData" :key="country?.cca3" :to="country?.cca3">
          <CardItem :country="country" />
        </RouterLink>
      </div>
    </div>
  </main>
</template>
