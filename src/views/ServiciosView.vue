<script setup>
import vMenu from '../components/UI/v-menu-item.vue'
import vFooter from '../components/UI/v-footer.vue';
</script>

<template>
    <vMenu />
    <section class="py-10 gap-5 px-5  md:px-16 max-w-7xl mx-auto ">
        <div class=" py-10">
            <h1 class="text-center text-xl font-normal tracking-widest text-gray-600">Servicios de Gartoll Seguridad Privada
            </h1>
            <h2 class="mx-auto text-center w-2/3 mt-3 text-2xl font-bold">Ofrecemos varias clases de servicios de <span class="text-secondary font-black">Seguridad Privada</span> en Guinea Ecuatorial.</h2>
        </div>
    </section>

    <section class="w-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col lg:flex-row mb-14 items-center" id="camaras">
        <img class="object-cover w-full lg:w-1/2 h-96 rounded-lg" src="/camara.webp" alt="https://www.freepik.es/foto-gratis/primer-plano-camara-cctv-pared_19138655.htm#query=security%20cameras&position=8&from_view=search&track=ais">

        <div class="px-5 lg:px-10 py-5 w-full lg:w-1/2">
            <h2 class="text-3xl lg:text-4xl uppercase font-extrabold text-gray-800">Cámaras y Alarmas</h2>
            <h3 class="text-gray-700 text-lg font-bold" >Expertos en instalación y mantenimiento</h3>
            <p class="mt-3 text-md font-normal text-gray-700">En Gartoll disponemos de cámaras de vigilancia y alarmas de alta seguridad incorporando lo último en avances tecnológicos. Una apuesta por la tecnología y la innovación en Seguridad Privada.</p>
            <p class="mt-2 text-md font-normal text-gray-700">El equipo está formado por por expertos cualificados en la instalacion y mantenimineto tanto de cámaras de seguridad como de alarmas.Trabajamos de una manera ordenada y satisfactoria para el beneficio de nuestros clientes.</p>        </div>
    </section>
    <section class="w-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col-reverse lg:flex-row mb-20 items-center" id="guarda-espaldas">
        <div class="px-5 lg:px-10 py-5 w-full lg:w-1/2">
            <h2 class="text-3xl lg:text-4xl uppercase font-extrabold text-gray-800">Guarda Espaldas</h2>
            <h3 class="text-gray-700 text-lg font-bold" >Trabajadores instruidos para escoltar y proteger. </h3>
            <ul class="mt-5 text-gray-700">
                <li class="flex items-center gap-3">
                    <span class="bg-secondary w-3 h-3 rounded-full"></span>
                    <p class="text-md">Guarda espaldas para eventos importantes.</p>
                </li>
                <li class="flex items-center gap-3">
                    <span class="bg-secondary w-3 h-3 rounded-full"></span>
                    <p class="text-md">Guarda espaldas personales.</p>
                </li>
                <li class="flex items-center gap-3">
                    <span class="bg-secondary w-3 h-3 rounded-full"></span>
                    <p class="text-md">Guarda espaldas para equipos o entidades.</p>
                </li>
                <li class="flex items-center gap-3">
                    <span class="bg-secondary w-3 h-3 rounded-full"></span>
                    <p class="text-md">Estudio de avanzada en seguridad.</p>
                </li>
            </ul>
            <p class="mt-5 text-gray-800 font-bold">CON GARTOLL SU PROTECCIÓN Y SEGURIDAD ESTARÁN GARANTIZADOS!</p>
        </div>
        <img class="object-cover w-full lg:w-1/2 h-96 rounded-lg" src="/vigilancia.webp" alt="">
    </section>
    <section class="w-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col lg:flex-row mb-14 items-center" id="vigilancia">
        <img class="object-cover w-full lg:w-1/2 h-96 rounded-lg" src="/poli.webp" alt="https://www.freepik.es/foto-gratis/primer-plano-camara-cctv-pared_19138655.htm#query=security%20cameras&position=8&from_view=search&track=ais">

        <div class="px-5 lg:px-10 py-5 w-full lg:w-1/2">
            <h2 class="text-3xl lg:text-4xl uppercase font-extrabold text-gray-800">Vigilancia</h2>
            <h3 class="text-gray-700 text-lg font-bold" >Equipo preparado y cualificado</h3>
            <ul class="mt-3 text-lg text-gray-700">
                <li class="block text-gray-900 mb-2">
                    <div class="flex gap-3 items-center">
                        <span class="bg-secondary w-3 h-3 rounded-full"></span>
                        <h3>Vigilancia para hogares</h3>
                    </div>
                    <p class="text-sm text-gray-700">Ofrecemos servicios de vigilancia para los hogares. Tenemos un personal muy capacitado para poder realizar este papel.</p>
                </li>
                <li class="block text-gray-900 mb-2">
                    <div class="flex gap-3 items-center">
                        <span class="bg-secondary w-3 h-3 rounded-full"></span>
                        <h3>Vigilancia para negocios</h3>
                    </div>
                    <p class="text-sm text-gray-700">Ofrecemos servicios de vigilancia para los negocios. Si desea mantener su negocio vigilado y seguro llámenos y le ayudaremos.</p>
                </li>
                <li class="block text-gray-900">
                    <div class="flex gap-3 items-center">
                        <span class="bg-secondary w-3 h-3 rounded-full"></span>
                        <h3>Vigilancia para eventos</h3>
                    </div>
                    <p class="text-sm text-gray-700">Ofrecemos servicios de vigilancia para los eventos. Si quiere que su evento o reunión social este bien vigilada y protegida podemos ayudarle.</p>
                </li>
            </ul>
        </div>
    </section>
    <section class="w-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col-reverse lg:flex-row mb-20 items-center" id="transporte-dinero">
        <div class="px-5 lg:px-10 py-5 w-full lg:w-1/2">
            <h2 class="text-3xl lg:text-4xl uppercase font-extrabold text-gray-800">Transporte de Dinero</h2>
            <h3 class="text-gray-700 text-lg font-bold" >Transporte seguro en Guinea Ecuatorial</h3>
            <p class="mt-3 text-gray-800 ">El transporte seguro del dinero es una necesidad y nosotros lo sabemos. En Gartoll tenemos un coche preparado para hacer los transportes de forma segura. Nos caracterizamos por:</p>
            <ul class="mt-2 text-gray-700 font-semibold">
                <li class="flex items-center gap-3">
                    <span class="bg-secondary w-3 h-3 rounded-full"></span>
                    <p class="text-md">Eficacia</p>
                </li>
                <li class="flex items-center gap-3">
                    <span class="bg-secondary w-3 h-3 rounded-full"></span>
                    <p class="text-md">Velocidad</p>
                </li>
                <li class="flex items-center gap-3">
                    <span class="bg-secondary w-3 h-3 rounded-full"></span>
                    <p class="text-md">Seguridad</p>
                </li>
                <li class="flex items-center gap-3">
                    <span class="bg-secondary w-3 h-3 rounded-full"></span>
                    <p class="text-md">Seriedad</p>
                </li>
                <li class="flex items-center gap-3">
                    <span class="bg-secondary w-3 h-3 rounded-full"></span>
                    <p class="text-md">Puntualidad</p>
                </li>
                <li class="flex items-center gap-3">
                    <span class="bg-secondary w-3 h-3 rounded-full"></span>
                    <p class="text-md">Profesionalidad</p>
                </li>
            </ul>
           
        </div>
        <img class="object-cover w-full lg:w-1/2 h-96 rounded-lg" src="/vigilancia.webp" alt="">
    </section>



    <vFooter />
</template>

