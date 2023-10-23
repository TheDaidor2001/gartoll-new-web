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
    <vFooterVue />
</template>

