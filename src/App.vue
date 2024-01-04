<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-[1440px] mx-auto bg-slate-200">
    <header>
      <div class="w-full h-12 text-2xl bg-white font-bold pl-16 mt-6 pb-8">
        <h1 class="">
          <RouterLink to="/">Where in the world?</RouterLink>
        </h1>
      </div>
    </header>
    <RouterView />
  </div>
</template>
