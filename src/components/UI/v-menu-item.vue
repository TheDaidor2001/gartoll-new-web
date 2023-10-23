<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import vMenu from '../icons/v-menu.vue';
import vCross from '../icons/v-crossMenu.vue'

const active = ref(false)

const toggleMenu = () => {
    active.value = !active.value
}
</script>

<template>
    <header class="bg-gray-950 z-20 sticky top-0">
        <nav class="max-w-screen-2xl mx-auto flex p-5 justify-between items-center">
            <img class="w-10 h-10" src="/logo.webp" alt="logo Gartoll Seguridad Privada">
            <div>
                <button v-if="!active" class="block lg:hidden" @click="toggleMenu">
                    <vMenu />
                </button>
                <button v-else class="block lg:hidden" @click="toggleMenu">
                    <vCross />
                </button>
                <ul v-if="active"
                    class="bg-gray-950 w-full text-center absolute top-20 left-0 h-56 transition-all flex flex-col gap-2 lg:hidden text-white animate-fade-down animate-duration-500">
                    <RouterLink active-class="text-secondary" :to="{ name: 'inicio' }" class="hover:text-secondary font-bold text-md transition-colors">Inicio
                    </RouterLink>
                    <RouterLink :to="{name: 'servicios'}" active-class="text-secondary" class="hover:text-secondary font-bold text-md transition-colors">Servicios</RouterLink>
                    <RouterLink :to="{name: 'aboutUs'}" active-class="text-secondary" class="hover:text-secondary font-bold text-md transition-colors">Información</RouterLink>
                    <RouterLink :to="{name: 'noticias'}" active-class="text-secondary" class="hover:text-secondary font-bold text-md transition-colors">Noticias</RouterLink>
                    <button
                        class="border-2 border-secondary text-secondary rounded-3xl py-1 block w-1/2 mx-auto hover:bg-secondary hover:text-white font-bold transition-colors">Contáctanos</button>
                </ul>
                <ul class="hidden justify-around gap-5 lg:flex items-center text-sm text-white">
                    <RouterLink :to="{ name: 'inicio' }" active-class="text-secondary" class="hover:text-secondary font-bold text-sm transition-colors">Inicio
                    </RouterLink>
                    <RouterLink :to="{name: 'servicios'}" active-class="text-secondary" class="hover:text-secondary font-bold text-sm transition-colors">Servicios</RouterLink>
                    <RouterLink :to="{name: 'aboutUs'}" active-class="text-secondary" class="hover:text-secondary font-bold text-sm transition-colors">Información</RouterLink>
                    <RouterLink :to="{name: 'noticias'}" active-class="text-secondary" class="hover:text-secondary font-bold text-sm transition-colors">Noticias</RouterLink>
                    <button
                        class="border-2 border-secondary text-secondary rounded-3xl px-3 py-1 block w-1/2 mx-auto hover:bg-secondary hover:text-white font-bold transition-colors">Contáctanos</button>
                </ul>
            </div>
        </nav>
    </header>     
</template>
