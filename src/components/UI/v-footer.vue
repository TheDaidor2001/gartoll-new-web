<template>
    <footer class="text-center text-lg bg-secondary text-gray-50 py-5 flex justify-center gap-3 items-center">
    <RouterLink :to="{name: 'inicio'}">
      <img class="w-10 h-10 " src="/logo.webp" alt="">
    </RouterLink>
    <h3>&copy;Gartol Seguridad Privada {{ date.getFullYear() }}</h3>
  </footer>
</template>

<script setup>
    const date = new Date
</script>

