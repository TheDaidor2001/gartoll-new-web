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
        },
        number: {
            type: String,
        },
        to: {
            type: String
        }
    })
</script>


<template>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-center" >
        <div class="bg-secondary text-white text-xl font-black mb-3 w-10 h-10 flex items-center justify-center mx-auto rounded-full">
            <span>{{ number }}</span>
        </div>
        <RouterLink :to="to">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ title }}</h5>
        </RouterLink>
        <p class="mb-3 font-light text-md text-gray-700">{{ description }}</p>
        <RouterLink :to="to"
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
