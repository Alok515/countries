<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  data: {
    default: null
  }
})

const borders = ref(props.data[0].borders)
const languages = ref(Object.keys(props.data[0].languages))
const keyIndex = languages.value.length > 1 ? 1 : 0
const nativeLangIndex = ref(languages.value[keyIndex])
const currencieKeys = ref(Object.keys(props.data[0].currencies))
</script>

<template>
  <div class="px-12 max-sm:px-4 max-md:px-8">
    <div class="mb-4 w-32 ml-6">
      <RouterLink
        to="/"
        class="flex gap-2 px-7 py-4 shadow-xl transition duration-200 hover:shadow-md"
      >
        <img src="@/assets/icons8-back-24.png" alg="back" />
        <p>Back</p>
      </RouterLink>
    </div>
    <div
      class="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 justify-center max-lg:gap-6"
    >
      <div class="p-8 w-100%">
        <img :src="data[0].flags.svg" alt="Flag" class="object-cover" />
      </div>
      <div class="p-8">
        <h1 class="text-4xl mb-6">{{ data[0].name.common }}</h1>
        <div class="flex gap-12 flex-wrap xl:gap-30">
          <div class="flex flex-col gap-4">
            <p>
              Native Name:
              <span class="text-gray-500 font-normal">{{
                data[0].name?.nativeName[nativeLangIndex]?.common ? data[0].name?.nativeName[nativeLangIndex]?.common : data[0].name.common 
              }}</span>
            </p>
            <p>
              Population: <span class="text-gray-500 font-normal">{{ data[0].population }}</span>
            </p>
            <p>
              Region: <span class="text-gray-500 font-normal">{{ data[0].region }}</span>
            </p>
            <p>
              Sub Region: <span class="text-gray-500 font-normal">{{ data[0].subregion }}</span>
            </p>
            <p>
              Capital:
              <span class="text-gray-500 font-normal">{{
                data[0]?.capital ? data[0].capital[0] : 'Unkown'
              }}</span>
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4 flex-wrap">
              <p class="mr-2">Currencies:</p>
              
              <div class="flex gap-2 flex-col">
                <span
                class="text-gray-500 font-normal"
                v-for="currencieKey of currencieKeys"
                :key="currencieKey"
                >{{ data[0].currencies[currencieKey].symbol }}-{{
                  data[0].currencies[currencieKey].name
                }}</span>
              </div>

            </div>

            <div class="flex items-center gap-4 flex-wrap">
              <p class="mr-2">Languages:</p>
              <div class="flex gap-2 flex-col">
                <span
                v-for="lang of languages"
                :key="lang"
                class="text-gray-500 font-normal"
              >
                {{ data[0].languages[lang] }}
              </span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex flex-wrap items-center">
          <p class="font-bold">Borders:</p>
          <div v-if="borders?.length" class="mt-2">
            <p class="flex gap-2 flex-wrap">
              <span
                v-for="border of borders"
                :key="border"
                class="px-4 py-1 bg-white shadow-lg rounded-md text-gray-500 font-normal"
              >
                {{ border }}
              </span>
            </p>
          </div>
          <p v-else class="ml-2 text-gray-400">No Borders</p>
        </div>
      </div>
    </div>
  </div>
</template>
