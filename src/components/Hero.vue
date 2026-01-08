<template>
  <header id="hero" class="h-[660px] px-5 max-lg:px-[10px] w-full">
    <div class="bg-[url('@/assets/img/hero-background.png')] w-full h-full bg-no-repeat bg-cover bg-center rounded-4xl text-white flex max-md:flex-col items-center justify-center max-lg:gap-28 gap-20 px-8">
      <div class="w-[470px] max-lg:w-[280px] flex flex-col gap-11">
        <h1 class="font-bold text-6xl max-lg:text-4xl max-md:text-shadow-lg">
          <span class="text-nowrap"><span class="text-primary">OPOKA</span> - Kościół</span> Ewangelicznych Chrześcijan
        </h1>
        <a href="https://www.youtube.com/@kechopokaradlin8039/featured" target="_blank" rel="noopener noreferrer">
          <Button class="max-lg:!px-3">TRANSMISJA NABOŻEŃSTWA ONLINE</Button>
        </a>
      </div>
      <p class="w-[410px] font-medium text-lg max-lg:text-base max-lg:w-2/3 max-md:bg-black80/30 max-md:p-2 max-md:rounded-xl
        relative before:absolute before:-left-7 before:top-[0.7em] max-md:before:top-[1em] before:w-[20px] before:h-[2px] before:bg-primary"
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
