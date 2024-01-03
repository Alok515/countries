<script setup>
    // eslint-disable-next-line no-unused-vars
    const props = defineProps({
        country: {
            default: null
        }
    })
</script>

<template>
    <div class="">
        {{ country.name }}
    </div>
</template>