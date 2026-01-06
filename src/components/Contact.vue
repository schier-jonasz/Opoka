<template>
  <section id="kontakt" class="rounded-t-4xl bg-secondary mx-10 max-md:mx-0 py-[60px] flex flex-col items-center justify-center">
    <h3 class="font-bold text-5xl max-lg:text-3xl max-md:text-2xl">SKONTAKTUJ SIĘ Z NAMI</h3>
    <div class="w-[960px] max-lg:w-[400px] max-md:w-[280px] mt-[60px] max-lg:mt-[30px] flex flex-col">
      <div class="flex max-md:flex-col items-center gap-10 max-lg:gap-8 pb-10 border-b border-primary">
        <div class="flex items-start gap-10 max-lg:gap-2">
          <img src="@/assets/img/pin.svg" alt="Pin" class="flex-shrink-0 max-lg:h-8 max-lg:w-8" />
          <div class="flex-1 text-[28px] max-lg:text-xl max-md:text-lg">
            <h4 class="text-nowrap max-lg:text-balance font-bold">KOŚCIÓŁ EWANGELICZNYCH CHRZEŚCIJAN</h4>
            <p>UL.UJEJSKIEGO 7, 44-310 RADLIN</p>
          </div>
        </div>
        <a href="https://maps.app.goo.gl/sPRGQa1tES2LeLLE9" target="_blank" rel="noopener noreferrer">
          <Button hover-variant="outlined" class="flex-shrink-0">ZOBACZ MAPĘ</Button>
        </a>
      </div>
      <div class="flex items-center gap-10 py-10 border-b border-primary">
        <div class="flex items-start gap-10 max-lg:gap-2">
          <img src="@/assets/img/question-mark.svg" alt="Question mark" class="flex-shrink-0 max-lg:h-8 max-lg:w-8" />
          <div class="flex-1 text-[28px] max-lg:text-xl max-md:text-lg">
            <h4 class="font-bold">MASZ PYTANIE LUB POTRZEBUJESZ DUCHOWEGO WSPARCIA?</h4>
            <div class="flex text-nowrap divide-x divide-primary max-lg:flex-col max-lg:divide-x-0 max-lg:gap-2">
              <p class="pr-4 max-lg:pr-0">ALEKSANDER 690 498 984</p>
              <p class="pl-4 max-lg:pl-0">MICHAŁ 607 131 190</p>
            </div>
            <p class="mt-2">kontakt.opokaradlin@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="flex items-start gap-10 pt-10">
        <div class="flex items-start gap-10 max-lg:gap-2">
          <img src="@/assets/img/heart.svg" alt="Heart" class="flex-shrink-0 mt-2 max-lg:h-8 max-lg:w-8" />
          <div class="flex-1 text-[28px] max-lg:text-xl max-md:text-lg">
            <h4 class="mb-4 font-bold">JEŚLI BÓG PORUSZA TWOJE SERCE ABY WESPRZEĆ NASZĄ SŁUŻBĘ, PODAJEMY NUMER KONTA BANKOWEGO.</h4>
            <p class="mb-2 max-lg:hidden">KOŚCIÓŁ EWANGELICZNYCH CHRZEŚCIJAN SPOŁECZNOŚĆ CHRZEŚCIJAŃSKA OPOKA</p>
            <p class="mb-2 hidden max-lg:block">SPOŁECZNOŚĆ CHRZEŚCIJAŃSKA OPOKA</p>
            <p>58 8436 0003 0101 0430 6199 0002</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

import Button from "@/components/Button.vue";
</script>
