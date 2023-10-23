<script setup>
import vMenuVue from '../components/UI/v-menu-item.vue';
import vFooterVue from '../components/UI/v-footer.vue';
import HeadingText from '../components/UI/heading-text.vue';
</script>

<template>
    <vMenuVue />
    <!-- <section class="py-10 gap-5 px-10 md:px-16 max-w-7xl mx-auto ">
        <div class=" py-10">
            <h1 class="text-center text-xl font-normal tracking-widest text-gray-600">¿Quienes somos?
            </h1>
            <h2 class="mx-auto text-center w-2/3 mt-3 text-2xl font-bold">Una empresa con <span
                    class="text-secondary font-black border-b-2 border-secondary ">
                    más de 10 años
                </span> aportando soluciones a la seguridad.</h2>
        </div>
    </section> -->

    <section class="my-28 px-10 max-w-7xl mx-auto">
        <HeadingText title="Nuestra Historia" />
        <p class=" mx-auto text-gray-700 text-center text-lg">Desde el 27 de enero de 2011 nuestra empresa presta los
            servicios de seguridad privada.
            Estamos comprometidos con la creación de valor sostenible de largo plazo para nuestros clientes, empleados y la
            sociedad en general.Entendemos que una gestión responsable debe ser parte fundamental de la cultura corporativa
            de una empresa. Velamos por el cumplimiento de nuestras obligaciones frente a los diferentes públicos de
            interés. Así, para ofrecer a los clientes el mejor servicio, establecemos e impulsamos un enfoque de mejora
            continua a través de nuestra política de calidad.</p>
    </section>
    <section class="px-10 max-w-7xl mx-auto">
        <video class="w-full lg:w-2/3 aspect-video mx-auto" src="/gartoll.mp4" controls poster="/portada.png"></video>
    </section>
    <section class="my-28 px-10 max-w-7xl mx-auto">
        <HeadingText title="¿Cuál es nuestro deseo?" />
        <p class="text-left lg:text-center mx-auto text-gray-700 text-lg">En Gartoll nuestro deseo es poder
            prestar el mejor servicio posible respecto a
            las necesidades
            de la seguridad.
            Tenemos una serie de objetivos, valores y metas para llegar a desarrolar nuestro trabajo de una manera
            satisfactoria.</p>
    </section>
    <section
        class=" mb-28 px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 lg:gap-0">
        <div>
            <h4 class="text-3xl font-bold uppercase text-center text-gray-800">Objetivos</h4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-16 h-16 bg-secondary rounded-full p-3 mt-5 mx-auto text-white">
                <path fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd" />
            </svg>
            <p class="text-md mt-5 text-gray-700 w-full lg:w-2/3 mx-auto">Gartoll S.L. busca brindar seguridad de calidad
                con innovación y cumplimiento de estándares globales.</p>
        </div>
        <div>
            <h4 class="text-3xl font-bold uppercase text-center text-gray-800">Misión</h4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-16 h-16 bg-secondary rounded-full p-3 mt-5 mx-auto text-white">
                <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
            </svg>
            <p class="text-md mt-5 text-gray-700 w-full lg:w-2/3 mx-auto">Nuestra misión es brindar seguridad y confianza,
                actuando de forma oportuna en zonas de riesgo para mejorar la seguridad ciudadana.</p>
        </div>
        <div>
            <h4 class="text-3xl font-bold uppercase text-center text-gray-800">Valores</h4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-16 h-16 bg-secondary rounded-full p-3 mt-5 mx-auto text-white">
                <path
                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <ul class=" text-gray-700 mt-5">
                <li>
                    <span class="font-bold">Competitividad:</span>
                    Actuamos con profesionalidad, integridad moral, lealtad y respeto.
                </li>
                <li>
                    <span class="font-bold">Conducta Ética:</span>
                    Ofrecemos la mejor relación calidad-precio-garantías del mercado.
                </li>
                <li>
                    <span class="font-bold">Trabajo en equipo:</span>
                    Fomentamos la participación de todos para lograr un objetivo común, compartiendo la información y los
                    conocimientos.
                </li>
                <li>
                    <span class="font-bold">Seguridad y salud:</span>
                    Nos comprometemos decididamente con la seguridad y salud laboral promoviendo una cultura preventiva.
                </li>
            </ul>

        </div>
    </section>
    <vFooterVue />
</template>

