<script setup>
    defineProps({
        title: {
            type: String
        },
        description: {
            type: String
        }
    })
</script>

<template>
    <h3 class="text-center text-3xl md:text-5xl font-bold text-gray-800 uppercase">{{ title }}</h3>
    <p class="w-full lg:w-2/3 mx-auto text-sm lg:text-lg mt-5 text-center font-light text-gray-600">{{ description }}</p>
</template>

