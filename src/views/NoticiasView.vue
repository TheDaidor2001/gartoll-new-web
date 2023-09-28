<script setup>
import { onMounted } from 'vue';
import { useNoticiasStore } from '../stores/noticiasStore'
import {formatDate} from '../helpers'
import vMenu from '../components/UI/v-menu-item.vue'
import vFooter from '../components/UI/v-footer.vue';
import vSqueleton from '../components/UI/v-squeleton.vue'
import vSqueletonTwo from '../components/UI/v-squeletonTwo.vue'

const noticiasStore = useNoticiasStore()

onMounted(() => {
    noticiasStore.getNoticias()
})
</script>

<template>
    <vMenu />
    <section class="py-10 gap-5 px-10 md:px-16 max-w-7xl mx-auto ">
        <div class=" py-10">
            <h1 class="text-center text-xl font-normal tracking-widest text-gray-600">Bienvenidos a las noticias de Gartoll
            </h1>
            <h2 class="mx-auto text-center w-2/3 mt-3 text-2xl font-bold">Descubre lo último en nuestra sección de noticias.
                Mantente <span class="text-secondary font-black border-b-2 border-secondary ">informado, inspirado y
                    conectado</span> con el mundo.</h2>
        </div>
    </section>
    <section class="pt-5 pb-10 gap-5 px-10 md:px-16 max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-10" v-if="!noticiasStore.loading">
            <div class="w-full lg:w-1/2">
                <img class="rounded-lg h-96 w-full object-cover" :src="noticiasStore.noticiasIndex[0]?.imagen"
                    :alt="noticiasStore.noticiasIndex[0]?.alt">
            </div>
            <div class="w-full lg:w-1/2 flex flex-col py-10">
                <h2 class="text-4xl font-bold text-gray-800 uppercase">{{ noticiasStore.noticiasIndex[0]?.titulo }}</h2>
                <p class="text-ellipsis overflow-hidden mt-2">{{ noticiasStore.noticiasIndex[0]?.info }}</p>
                <p>Fecha</p>
                <RouterLink :to="`/noticias/${noticiasStore.noticiasIndex[0]?.id}`"
                    class="text-center text-md font-normal block bg-secondary mt-2 text-white px-5 py-2 rounded-lg hover:bg-amber-300 transition-colors w-full lg:w-1/3 shadow-md mx-auto lg:mx-0">
                    Saber más
                </RouterLink>
            </div>
        </div>
        <vSqueleton v-else />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10" v-if="!noticiasStore.loading">
            <div class="flex flex-col justify-center " v-for="item in noticiasStore.deleteLatestNew" :key="item.id">
                <img class="rounded-lg object-cover h-52 w-auto" :src="item.imagen" :alt="item.alt">
                <h1 class="text-xl h-10 uppercase font-bold mt-2 block">{{ item.titulo }}</h1>
                <p class="font-light text-lg overflow-hidden truncate mt-5">{{ item.contenido }}</p>
                <p class="font-normal text-black mt-1">Publicado: {{ formatDate(item.fecha.toDate()) }}</p>
                <RouterLink :to="{ name: 'noticia', params: { id: item.id } }"
                    class="text-center text-md font-normal block bg-secondary mt-4 text-white px-5 py-2 rounded-lg hover:bg-amber-300 transition-colors w-full shadow-md mx-auto lg:mx-0">
                    Saber más
                </RouterLink>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10" v-else>
            <vSqueletonTwo />
        </div>
    </section>
    <vFooter />
</template>