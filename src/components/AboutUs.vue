<template>
  <section id="o-nas" class="bg-cream px-4 py-[130px] flex items-center justify-center gap-[70px] max-lg:flex-col max-lg:py-8 max-lg:gap-8 max-lg:px-4">
    <Carousel />
    <div class="w-[730px] max-lg:w-[280px] max-lg:mt-10 max-lg:text-center">
      <h3 class="text-5xl max-lg:text-2xl font-bold">KIM JESTEŚMY?</h3>
      <p class="opacity-80 mt-10 max-lg:mt-2">
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
import Carousel from "./Carousel.vue";
</script>
<style scoped>

</style>
