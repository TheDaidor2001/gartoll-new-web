<script setup>
    defineProps({
        title: {
            type: String
        },
        description: {
            type: String,
        },
        color: {
            type: String
        }
    })
</script>

<template>
    <div class="bg-white shadow-xl p-7 rounded-lg">
        <div class="rounded-full w-14 h-14 flex justify-center items-center mx-auto md:mx-0" :class="color">
            <slot />
        </div>
        <h4 class="font-semibold text-gray-800 text-xl mt-4 text-center md:text-left">{{ title }}</h4>
        <p class="font-light text-md mt-3 text-center md:text-left text-gray-700">{{ description }}</p>
    </div>
</template>

