<script setup>
  import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="w-full h-4 text-2xl font-bold pl-16 mt-6 mb-8">
        <h1 class="">
            <RouterLink to="/">Where in the world?</RouterLink>
        </h1>
    </div>
  </header>
  <RouterView/>
</template>