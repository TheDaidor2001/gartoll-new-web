<script setup>
    defineProps({
        title: {
            type: String,
        },
        info: {
            type: String
        }
    })
</script>

<template>
    <div class="bg-white text-center lg:text-left w-full md:w-2/3 mx-auto lg:w-1/3 flex flex-col gap-5 px-3 lg:pl-10 py-10 rounded-lg shadow-xl">
        <div class="bg-secondary w-10 h-10 mx-auto lg:mx-0 rounded-full flex items-center justify-center">
            <slot />
        </div>
        <div class="border-0 xl:border-l-4 border-secondary">
            <h3 class="text-xl font-semibold uppe text-gray-800 mb-3 ml-0 lg:ml-5">{{ title }}</h3>
            <p class="lg:ml-5 ml-0 text-gray-700 text-md lg:pr-2"> {{ info }}</p>
        </div>
    </div>
</template>

