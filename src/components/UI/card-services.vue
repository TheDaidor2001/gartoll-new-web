<script setup>
import { RouterLink } from 'vue-router';
    defineProps({
        title: {
            type:String,
        },
        description: {
            type: String
        },
        position: {
            type: String
        }
    })
</script>


<template>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-center" >
        <RouterLink to="/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ title }}</h5>
        </RouterLink>
        <p class="mb-3 font-normal text-gray-700">{{ description }}</p>
        <RouterLink to="/"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg">
            Saber más
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </RouterLink>
    </div>
</template>
