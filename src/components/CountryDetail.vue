<script setup>
import { RouterLink } from 'vue-router';
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    details: {
        default: null
    }
})
</script>

<template>
    <div>
        <RouterLink to="/">
            Back
        </RouterLink>
    </div>
    {{ details }}
</template>