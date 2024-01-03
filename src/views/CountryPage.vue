<script setup>
import CountryDetail from '@/components/CountryDetail.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const countryData = ref(null);
const route = useRoute(); 
const countryCode = route.params.code;

onMounted(async () => {
    const rawData = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    const parsedData = await rawData.json();
    countryData.value = parsedData;
});

</script>

<template>
    <h1>Contry details</h1>
    <CountryDetail :details="countryData"/>
</template>