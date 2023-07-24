<script setup>
    defineProps({
        title: {
            type: String,
        },
        cuantity: {
            type: String
        }
    })
</script>
<template>
    <div class="flex flex-col text-center items-center gap-2 bg-white rounded-2xl p-2 w-full md:w-1/2 xl:w-full mx-auto">
           <slot />

          <div>
            <h4 class="text-2xl font-bold text-gray-800">{{ title }}</h4>
            <p class="text-3xl font-black text-gray-800">{{ cuantity }}+</p>
          </div>
        </div>
</template>
