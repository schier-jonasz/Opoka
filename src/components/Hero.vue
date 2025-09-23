<template>
  <header id="hero" class="h-[660px] px-5 w-full">
    <div class="bg-[url('@/assets/img/hero-background.png')] w-full h-full bg-no-repeat bg-cover bg-center rounded-4xl text-white flex items-center justify-center gap-20">
      <div class="w-[470px] flex flex-col gap-11">
        <h1 class="font-bold text-6xl">
          <span class="text-nowrap"><span class="text-primary">OPOKA</span> - Kościól</span> Ewangelicznych Chrześcijan
        </h1>
        <a href="https://www.youtube.com/@kechopokaradlin8039/featured" target="_blank" rel="noopener noreferrer">
          <Button>TRANSMISJA NABOŻEŃSTWA ONLINE</Button>
        </a>
      </div>
      <p class="w-[410px] font-medium text-lg
        relative before:absolute before:-left-7 before:top-[0.7em] before:w-[20px] before:h-[2px] before:bg-primary"
      >
        “Jeśli kto pragnie, niech przyjdzie do mnie i pije.
        Kto wierzy we mnie, jak powiada Pismo, z wnętrza jego popłyną rzeki wody żywej.”
      </p>
    </div>
  </header>
</template>
<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>


<style scoped>

</style>
