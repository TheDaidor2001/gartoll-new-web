<script setup>
import { onMounted } from 'vue';
import { useNoticiasStore } from '../stores/noticiasStore'
import vMenu from '../components/UI/v-menu-item.vue'
import vFooterVue from '../components/UI/v-footer.vue';
import cardInfo from '../components/UI/card-info.vue';
import cardDiferences from '../components/UI/card-diferences.vue';
import headingText from '../components/UI/heading-text.vue';
import cardServices from '../components/UI/card-services.vue';
import cardAnimated from '../components/UI/card-animated.vue';

import { formatDate } from '../helpers'


const noticiasStore = useNoticiasStore()

onMounted(() => {
  noticiasStore.getNoticias()
})

</script>

<template>
  <vMenu />
  <section class="pt-20 pb-20 xl:pb-0 overflow-hidden h-auto bg-hero-section bg-cover">
    <div class="flex flex-col lg:flex-row gap-5 items-center justify-center max-w-7xl mx-auto">
      <div class="w-full xl:w-1/2">
        <h1 class="text-6xl lg:text-8xl text-center font-black  text-gray-900 uppercase">Gartoll
        </h1>
        <h2 class="text-center text-gray-800 text-4xl lg:text-6xl font-semibold uppercase">Seguridad Privada</h2>
        <div class="w-full xl:w-2/3 mx-auto">
          <p class="mt-5 text-center text-lg mx-auto text-gray-700 px-10 lg:px-0">Nuestro equipo de seguridad privada está
            preparado
            para protegerlo en todo momento, brindando tranquilidad, confianza y servicio impecable con profesionalismo y
            dedicación.</p>
        </div>
        <button
          class="text-center text-xl lg:text-2xl font-black block mx-auto mt-5 border-2 border-gray-800 text-gray-800 px-10 py-2 rounded-lg hover:bg-gray-800 hover:text-white   transition-colors w-72 shadow-md">
          Empezar
        </button>
      </div>
      <div class="hidden xl:block -mt-16 mx-auto">
        <img class="w-[550px] h-[550px]" src="/hero.png" alt="">
      </div>
    </div>
  </section>

  <section class="py-10 flex flex-col lg:flex-row gap-5 px-10 md:px-16 max-w-7xl mx-auto">
    <cardInfo title="Analisis de Objetivos"
      info="Analizamos detalladamente los objetivos individuales de cada cliente, permitiéndonos ofrecer soluciones precisas y adaptadas a sus necesidades.">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-6 h-w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    </cardInfo>
    <cardInfo title="Nuestra Estrategia"
      info="Desarrollamos estrategias para proteger y resguardar a nuestros valiosos clientes, brindándoles tranquilidad y confianza.">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-6 h-w-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>

    </cardInfo>
    <cardInfo title="Execución de Servicios"
      info="Ejecutamos servicios de seguridad privada con precisión y profesionalismo, siempre buscando la mejor forma de trabajar.">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-6 h-w-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </cardInfo>
  </section>

  <section
    class="py-10 px-10 lg:px-0 mx-auto container flex flex-col-reverse lg:flex-row justify-center items-center gap-10 text-center lg:text-left">
    <div class="flex flex-col gap-5 w-full lg:w-1/3">
      <h3 class="text-4xl lg:text-5xl font-normal text-gray-800">Tu empresa de <span class="font-black">Seguridad
          Privada</span></h3>
      <p class="text-gray-600 font-light text-md">Con más de una década de experiencia en el sector nos enorgullecemos de
        ser una opción de seguridad privada confiable y dedicada.</p>
      <p class="text-gray-600 font-light text-md">Hemos estado comprometidos en salvaguardar lo que más valoras, brindando
        tranquilidad a nuestros clientes en cada paso del camino. Nuestra trayectoria sólida y exitosa es el reflejo de un
        equipo altamente capacitado y apasionado por proteger a comunidades, hogares y negocios.</p>
      <button
        class="text-center text-xl lg:text-lg font-bold block bg-secondary mt-5 text-white px-5 py-2 rounded-lg hover:bg-amber-300 transition-colors w-full lg:w-1/3 md:w-2/3 shadow-md mx-auto lg:mx-0">
        Saber más
      </button>
    </div>
    <img class="w-[500px] rounded-lg" src="/seguridad.webp" alt="">
  </section>

  <section class="my-20 px-10 max-w-7xl mx-auto">
    <headingText title="¿Qué nos diferencia?" description="Nuestra forma de
      abordar la seguridad está basada en una serie de ventajas competitivas que nos posicionan como referentes en nuestro
      sector." />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-10 gap-5">
      <cardDiferences title="Buen Servicio"
        description="En Gartoll seguridad privada, ofrecemos servicios de excelencia, brindando protección confiable y tranquilidad absoluta a nuestros clientes."
        color="bg-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>

      </cardDiferences>
      <cardDiferences title="Calidad"
        description="Somos una empresa de seguridad privada comprometida con la calidad, proporcionando soluciones efectivas y confiables para proteger lo que más valoras."
        color="bg-thirth">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      </cardDiferences>
      <cardDiferences title="Equipo Profesional"
        description="Contamos con un equipo altamente profesional, preparado para salvaguardar tus intereses y garantizar la tranquilidad que mereces."
        color="bg-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>

      </cardDiferences>
      <cardDiferences title="Experiencia"
        description="Más de 10 años de experiencia nos avalan, dando servicio a todo tipo de clientes y corporaciones."
        color="bg-four">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </cardDiferences>
    </div>
  </section>

  <section class="my-28 px-10 max-w-7xl mx-auto">
    <headingText title="Nuestros servicios"
      description="Servicios personalizados para potenciar tu negocio y proteger todos tus bienes preciados." />
    <div class="max-w-7xl mx-auto mt-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 items-center">
        <div class="flex flex-col gap-5 items-center">
          <cardServices title="Vigilancia" description="Tenemos sistemas de vigilancia para empresas, casas particulares y también
            para los eventos." position="text-end" number="1" to="/servicios" />
          <cardServices title="Guarda Espaldas"
            description="Tenemos personal muy competente para escoltar y proteger a cualquiera que solicite este servicio."
            position="text-end" number="2" to="/servicios#vigilancia" />
        </div>
        <img class="w-64 mx-auto hidden lg:block" src="/security.png" alt="">
        <div class="flex flex-col gap-5 items-center">
          <cardServices title="Cámaras y alarmas"
            description="Disponemos de cámaras de seguridad y alarmas de alta calidad para poder localizar a los intrusos."
            position="text-start" number="3" to="/servicios" />
          <cardServices title="Transporte de dinero"
            description="Tenemos camiones blindados muy seguros para asegurar los transportes del dinero en cualquier parte del pais."
            position="text-start" number="4" to="/servicios" />
        </div>
      </div>
    </div>
  </section>

  <section class="w-full max-w-7xl mx-auto">
    <div class="py-10 grid grid-cols-1 xl:grid-cols-2 gap-5">
      <div class="text-center xl:text-left flex flex-col justify-center  px-20 xl:px-0">
        <h3 class="text-3xl xl:text-4xl font-black text-gray-800 uppercase mb-5">Contamos con una amplia experiencia
          profesional</h3>
        <p class="font-light text-gray-600 text-md xl:text-lg">Con una amplia experiencia a nivel nacional y ubicaciones
          estratégicas en todo el país, trabajamos estrechamente con numerosas empresas y clientes para brindar servicios
          personalizados y de alta calidad.</p>
      </div>
      <div class="bg-secondary rounded-xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <cardAnimated title="Clientes" cuantity="300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e8c547" class="w-12 h-12">
            <path fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clip-rule="evenodd" />
          </svg>

        </cardAnimated>
        <cardAnimated title="Trabajadores" cuantity="1300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e8c547" class="w-12 h-12">
            <path fill-rule="evenodd"
              d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd" />
            <path
              d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
          </svg>

        </cardAnimated>
        <cardAnimated title="Empresas" cuantity="100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e8c547" class="w-12 h-12">
            <path fill-rule="evenodd"
              d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
              clip-rule="evenodd" />
          </svg>

        </cardAnimated>
        <cardAnimated title="Ubicaciones" cuantity="10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e8c547" class="w-12 h-12">
            <path fill-rule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd" />
          </svg>

        </cardAnimated>
      </div>
    </div>
  </section>
  <section class="w-full max-w-7xl mx-auto mt-10 relative">
    <headingText title="Contáctanos"
      description="Estamos deseando trabajar con usted y brindarle el mejor servicio de seguridad privada." />
    <iframe class="mt-10 w-full z-10"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7962.640018817794!2d8.729777301049795!3d3.7402832810288458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10669ff467f7884b%3A0xd7c3938a528feec2!2sGartoll!5e0!3m2!1ses!2s!4v1695717247915!5m2!1ses!2s"
      height="600" style="border:0; z-index: 1;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class=" absolute z-10 top-44 w-ful lg:w-96 left-10 bg-secondary px-10 py-5 rounded-lg shadow-lg">
      <FormKit type="form" :actions="false" :incomplete-message="false">
        <FormKit type="text" label="Nombre o Empresa" name="name" placeholder="Ej: Juan Ondo  o Martínez Hmnos"
          validation="required" :validation-messages="{
            required: 'El nombre o empresa es obligatorio',
          }" />
        <FormKit type="tel" label="Teléfono" name="phone" placeholder="xxx-xxx-xxx" validation="required|number"
          :validation-messages="{
            required: 'El teléfono es obligatorio',
            number: 'Solo se admiten números'
          }" validation-visibility="dirty" />
        <FormKit type="email" label="Email" name="email" placeholder="Ingresa tu Email" validation="required|email"
          :validation-messages="{
            required: 'El email es obligatorio',
            email: 'Debe ser un email válido'
          }" />
        <FormKit type="select" label="¿Qué servicio quiere solicitar?" name="services" :options="[
          'Vigilancia',
          'Guarda Espaldas',
          'Cámaras y Alarmas',
          'Transporte de dinero',
        ]" validation="required" :validation-messages="{
  required: 'El servicio es obligatorio'
}" />
        <FormKit type="submit">
          Enviar
        </FormKit>
      </FormKit>
    </div>
  </section>
  <section class="w-full max-w-7xl mx-auto mt-32 px-10 lg:px-0">
    <headingText title="Últimas Noticias"
      description="Las últimas noticias mas relevantes de nuestra empresa o del sector de la seguridad privada." />
    <div class="flex flex-col lg:flex-row my-20 gap-5 justify-center">
      <div class="w-full lg:w-1/2 mx-auto flex flex-col justify-center">
        <img :src="noticiasStore.noticiasIndex[0]?.imagen" :alt="noticiasStore.noticiasIndex[0]?.alt"
          class="rounded-lg w-full">
        <h1 class="text-xl lg:text-3xl font-bold uppercase text-gray-900 mt-3">{{ noticiasStore?.noticiasIndex[0]?.titulo
        }}</h1>
        <p class="text-md lg:text-lg text-gray-800 font-thin mt-2 truncate overflow-hidden">{{
          noticiasStore?.noticiasIndex[0]?.contenido }}</p>
        <p class="font-normal text-black mt-1">Publicado: {{ formatDate(noticiasStore?.noticiasIndex[0]?.fecha.toDate())
        }}</p>
        <RouterLink :to="`/noticias/${noticiasStore?.noticiasIndex[0]?.id}`"
          class="text-center text-sm lg:text-md font-normal block bg-secondary mt-2 text-white px-5 py-2 rounded-lg hover:bg-amber-300 transition-colors lg:w-1/3 w-2/3 shadow-md">
          Saber más</RouterLink>
      </div>
      <div class=" lg:w-1/2 w-full flex flex-col gap-4">
        <div class="flex flex-col lg:flex-row gap-3" v-for="noticia in noticiasStore.noticiasCortadas" :key="noticia.id">
          <img :src="noticia.imagen" :alt="noticia.alt" class="rounded-lg h-40 object-cover w-full lg:w-52">
          <div>
            <h1 class="text-sm lg:text-xl uppercase font-bold text-gray-900">{{ noticia.titulo }}</h1>
            <p></p>
            <p class="font-normal text-black mt-1">Publicado: {{ formatDate(noticia.fecha.toDate()) }}</p>
            <RouterLink :to="{ name: 'noticia', params: { id: noticia.id } }"
              class="text-center text-md font-normal block bg-secondary mt-2 text-white px-5 py-2 rounded-lg hover:bg-amber-300 transition-colors w-40 shadow-md mx-auto lg:mx-0">
              Saber más</RouterLink>
          </div>
        </div>

      </div>

    </div>
  </section>
  <vFooterVue />
</template>
