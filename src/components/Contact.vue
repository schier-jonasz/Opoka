<template>
  <section id="contact" class="rounded-t-4xl bg-secondary mx-10 py-[60px] flex flex-col items-center justify-center">
    <h3 class="font-bold text-5xl">SKONTAKTUJ SIĘ Z NAMI</h3>
    <div class="w-[960px] mt-[60px] flex flex-col">
      <div class="flex items-center gap-10 pb-10 border-b border-primary">
        <img src="@/assets/img/pin.svg" alt="Pin" class="flex-shrink-0" />
        <div class="flex-1">
          <h4 class="text-nowrap">KOŚCIÓŁ EWANGELICZNYCH CHRZEŚCIJAN</h4>
          <p>UL.UJEJSKIEGO 7, 44-310 RADLIN</p>
        </div>
        <Button hover-variant="outlined" class="flex-shrink-0">ZOBACZ MAPĘ</Button>
      </div>
      <div class="flex items-center gap-10 py-10 border-b border-primary">
        <img src="@/assets/img/question-mark.svg" alt="Question mark" class="flex-shrink-0" />
        <div class="flex-1">
          <h4>MASZ PYTANIE LUB POTRZEBUJESZ DUCHOWEGO WSPARCIA?</h4>
          <div class="flex text-nowrap divide-x divide-primary">
            <p class="pr-4">ALEKSANDER 690 498 984</p>
            <p class="px-4">KRYSTIAN 604 189 626</p>
            <p class="pl-4">MICHAŁ 607 131 190</p>
          </div>
        </div>
      </div>
      <div class="flex items-start gap-10 pt-10">
        <img src="@/assets/img/heart.svg" alt="Heart" class="flex-shrink-0 mt-2" />
        <div class="flex-1">
          <h4 class="mb-4">JEŚLI BÓG PORUSZA TWOJE SERCE ABY WESPRZEĆ NASZĄ SŁUŻBĘ, PODAJEMY NUMER KONTA BANKOWEGO.</h4>
          <p class="mb-2">KOŚCIÓŁ EWANGELICZNYCH CHRZEŚCIJAN SPOŁECZNOŚĆ CHRZEŚCIJAŃSKA OPOKA</p>
          <p>58 8436 0003 0101 0430 6199 0002</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

import Button from "@/components/Button.vue";
</script>
<style scoped>
h4 {
  font-weight: 700;
  font-size: 28px;
}

p {
  font-size: 28px;
}
</style>
