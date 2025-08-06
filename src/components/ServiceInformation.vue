<template>
  <section id="service-information" class="flex flex-col items-center py-10">
    <h2 class="font-bold text-5xl">NABOŻEŃSTWA</h2>
    <p class="w-[660px] text-black80/80 text-center mt-8">
      Serdecznie zapraszamy na nasze nabożeństwa. Spotykamy się, by wspólnie wielbić Boga, słuchać Jego Słowa i budować się nawzajem w wierze. Nabożeństwa mają charakter otwarty – każdy jest mile widziany, niezależnie od wieku, doświadczenia czy miejsca na drodze duchowej.
    </p>
    <div class="flex justify-center gap-4 my-10">
      <article class="px-8 py-10 rounded-xl bg-secondary flex items-center justify-center gap-3">
        <p class="text-[28px]"><span class="font-bold">NABOŻEŃSTWO</span> | NIEDZIELA 10:00</p>
        <Button hover-variant="outlined">TRANSMISJA</Button>
      </article>
      <article class="px-8 py-10 rounded-xl bg-secondary flex items-center justify-center">
        <p class="text-[28px]"><span class="font-bold">STUDIUM SŁOWA BOŻEGO</span> | ŚRODA 18:00</p>
      </article>
    </div>
    <div class="flex items-center justify-center gap-14">
      <img src="@/assets/img/pin.svg" alt="Pin" class="logo" />
      <p class="text-[28px] flex flex-col">
        <span class="font-bold text-nowrap">KOŚCIÓŁ EWANGELICZNYCH CHRZEŚCIJAN</span>
        <span class="text-nowrap">UL.UJEJSKIEGO 7, 44-310 RADLIN</span>
      </p>
      <Button>ZOBACZ MAPĘ</Button>
    </div>
  </section>
</template>
<script setup lang="ts">

import Button from "@/components/Button.vue";
</script>
<style scoped>

</style>
