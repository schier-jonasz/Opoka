<template>
  <section class="bg-cream px-4 py-[130px] flex items-center justify-center gap-[70px]">
    <div class="relative">
      <img src="@/assets/img/about-us.png" alt="About us" />
      <Button class="absolute -bottom-6 left-1/2 -translate-x-1/2">ZOBACZ GALERIĘ</Button>
    </div>
    <div class="w-[730px] ">
      <h3 class="text-5xl font-bold">KIM JESTEŚMY?</h3>
      <p class="opacity-80 mt-10">
        Społeczność Chrześcijańska ‘OPOKA’ w Radlinie należy do Kościoła Ewangelicznych Chrześcijan w Polsce. Jesteśmy kościołem protestanckim prawnie działającym w Rzeczpospolitej Polskiej w oparciu o Statut, zatwierdzony przez MSWiA. Kościół Ewangelicznych Chrześcijan jest społecznością wielu lokalnych zborów, w których nabożeństwa charakteryzują się osobistym wyrażeniem swojej wiary w Jezusa Chrystusa jako osobistego Pana i Zbawiciela.
      </p>
      <p class="opacity-80 mt-7">
        Członkostwo w kościele nie polega na ,podpisaniu się’ pod wykazem doktryn, czy przyjęciu pewnych etycznych standardów. Członkiem kościoła staje się osoba mogąca zaświadczyć, że doświadczyła zbawiającej wiary w Pana Jezusa Chrystusa. Podstawą wiary są słowa Biblii.
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">

import Button from "@/components/Button.vue";
</script>
<style scoped>

</style>
