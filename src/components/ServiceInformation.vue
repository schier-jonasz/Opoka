<template>
  <section id="service-information" class="flex flex-col items-center py-10 max-lg:px-4">
    <h2 class="font-bold text-5xl max-lg:text-3xl">NABOŻEŃSTWA</h2>
    <p class="w-[660px] text-black80/80 text-center mt-8 max-lg:w-full max-lg:px-4">
      Serdecznie zapraszamy na nasze nabożeństwa. Spotykamy się, by wspólnie wielbić Boga, słuchać Jego Słowa i budować się nawzajem w wierze. Nabożeństwa mają charakter otwarty – każdy jest mile widziany, niezależnie od wieku, doświadczenia czy miejsca na drodze duchowej.
    </p>
    <div class="flex justify-center gap-4 my-10 max-lg:flex-col max-lg:gap-6 max-lg:w-full">
      <article class="px-8 py-10 rounded-xl bg-secondary flex items-center justify-center gap-3 max-lg:flex-col max-lg:gap-4 max-lg:px-6 max-lg:py-8">
        <p class="text-[28px] max-lg:text-xl max-lg:text-center"><span class="font-bold">NABOŻEŃSTWO</span> | NIEDZIELA 10:00</p>
        <a href="https://www.youtube.com/@kechopokaradlin8039/featured" target="_blank" rel="noopener noreferrer">
          <Button hover-variant="outlined" class="max-lg:w-full">TRANSMISJA</Button>
        </a>
      </article>
      <article class="px-8 py-10 rounded-xl bg-secondary flex items-center justify-center max-lg:px-6 max-lg:py-8">
        <p class="text-[28px] max-lg:text-xl max-lg:text-center"><span class="font-bold">STUDIUM SŁOWA BOŻEGO</span> | ŚRODA 18:00</p>
      </article>
    </div>
    <div class="flex items-center justify-center gap-14 max-lg:flex-col max-lg:gap-6 max-lg:px-4">
      <img src="@/assets/img/pin.svg" alt="Pin" class="logo max-lg:w-8 max-lg:h-8" />
      <p class="text-[28px] flex flex-col max-lg:text-lg max-lg:text-center">
        <span class="font-bold text-nowrap max-lg:text-wrap">KOŚCIÓŁ EWANGELICZNYCH CHRZEŚCIJAN</span>
        <span class="text-nowrap max-lg:text-wrap">UL.UJEJSKIEGO 7, 44-310 RADLIN</span>
      </p>
      <a href="https://maps.app.goo.gl/sPRGQa1tES2LeLLE9" target="_blank" rel="noopener noreferrer">
        <Button class="max-lg:w-full">ZOBACZ MAPĘ</Button>
      </a>
    </div>
  </section>
</template>
<script setup lang="ts">

import Button from "@/components/Button.vue";
</script>
<style scoped>

</style>
