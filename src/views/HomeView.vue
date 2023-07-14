<script setup>
import cardInfo from '../components/UI/card-info.vue';
</script>

<template>
  <section class="p-10 relative overflow-hidden">
    <div
      class="block absolute bg-secondary w-80 h-80 lg:w-[800px]  lg:h-[800px] opacity-30 rounded-full -z-10 top-0 -left-20 lg:-top-28 lg:-left-28">
    </div>
    <div
      class="block absolute bg-thirth w-80 h-80 lg:w-[800px]  lg:h-[800px] opacity-20 rounded-full -z-10 top-20 -right-20 lg:-right-36 lg:top-52 ">
    </div>
    <div class="flex flex-col lg:flex-row gap-5  items-center">
      <div class="w-full xl:w-1/2">
        <h1 class="text-6xl lg:text-9xl text-center font-black mt-10 text-secondary uppercase">Gartoll</h1>
        <h2 class="text-center text-gray-900 text-3xl lg:text-6xl font-black uppercase">Seguridad Privada</h2>
        <div class="w-full xl:w-2/3 mx-auto">
          <p class="mt-5 text-center text-xl lg:text-2xl text-gray-700">Nuestro equipo de seguridad privada está preparado
            para protegerlo en todo momento, brindando tranquilidad, confianza y servicio impecable con profesionalismo y
            dedicación.</p>
        </div>
        <button
          class="text-center text-xl lg:text-2xl font-bold block bg-secondary mx-auto mt-5 text-white px-10 py-2 rounded-lg hover:bg-amber-300 transition-colors w-72 shadow-md">
          Empezar
        </button>
      </div>
      <div class="hidden xl:block">
        <img class="w-[800px] h-[800px]" src="/hero.webp" alt="">
      </div>
    </div>
  </section>

  <section class="py-10 flex flex-col lg:flex-row gap-5 px-10 lg:px-20">
    <cardInfo title="Analisis de Objetivos"
      info="Analizamos detalladamente los objetivos individuales de cada cliente, permitiéndonos ofrecer soluciones precisas y adaptadas a sus necesidades.">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-12 h-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    </cardInfo>
    <cardInfo title="Nuestra Estrategia"
      info="Desarrollamos estrategias para proteger y resguardar a nuestros valiosos clientes, brindándoles tranquilidad y confianza.">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-12 h-12">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>

    </cardInfo>
    <cardInfo title="Execución de Servicios"
      info="Ejecutamos servicios de seguridad privada con precisión y profesionalismo, siempre buscando la mejor forma de trabajar.">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-12 h-12">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>

  </cardInfo>
</section></template>
