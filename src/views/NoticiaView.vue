<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useNoticiasStore } from '../stores/noticiasStore';
import vMenu from '../components/UI/v-menu-item.vue'
import vFooter from '../components/UI/v-footer.vue';
import vNoticiasSqueleton from '../components/UI/v-noticiaSqueleton.vue'

const route = useRoute()
const noticiasStore = useNoticiasStore()
const noticia = ref({})

onMounted(async ()=>{
   noticia.value =  await noticiasStore.getNoticia(route.params.id)
})

</script>

<template>
    <vMenu />
   <section class="w-full max-w-7xl mx-auto my-10 px-10 lg:px-0" v-if="!noticiasStore.loading">
    <h1 class="text-center text-5xl font-bold mb-5 uppercase text-gray-900">{{ noticia.titulo }}</h1>
    <img class=" w-full lg:w-2/3 min-h-[500px] mx-auto rounded-lg object-cover" :src="noticia.imagen" :alt="noticia.alt">
    <p class="text-2xl w-2/3 mx-auto mt-10">{{ noticia.contenido  }}</p>
   </section>
    <vNoticiasSqueleton v-else />
   <vFooter />
</template>