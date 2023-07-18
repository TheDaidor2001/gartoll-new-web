<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="flex flex-col lg:items-center justify-center sm:align-middle  h-screen m-auto max-w-7xl mx-auto px-10 lg:px-0">
        <img class="w-[500px] mx-auto" src="/404.svg" alt="https://storyset.com/web">
        <h1 class="text-2xl lg:text-6xl text-center font-bold text-gray-800">¡Vaya!, parece que te has perdido</h1>
        <RouterLink class="bg-secondary px-10 py-2 lg:px-20 lg:py-2 rounded-md mt-5 text-white font-semibold text-lg text-center" :to="{name: 'inicio'}">
            Volver al inicio
        </RouterLink>
    </div>
</template>


