<template>
  <section id="creed" class="px-10">
    <div class="bg-cream rounded-4xl flex flex-col items-center justify-center py-[60px]">
      <div class="font-bold flex flex-col items-center justify-center gap-3">
        <h3 class="text-5xl">WYZNANIE WIARY</h3>
        <p>WIERZYMY W</p>
      </div>
      <div class="mt-12 mb-[60px] grid grid-cols-3 grid-rows-subgrid auto-rows-[1fr] gap-6 w-full max-w-6xl">
        <CreedCard
          v-for="(creed, index) in creeds"
          :key="creed"
          :figure="index + 1"
          :text="creed"
        />
      </div>
      <div class="text-primary text-center max-w-[830px] flex flex-col items-center justify-center">
        <img src="@/assets/img/quote.svg" alt="Quote icon" />
        <p class="text-2xl  font-semibold mt-10">Bóg nie ma względu na osobę, lecz w każdym narodzie miły Mu jest ten, kto się Go boi i sprawiedliwie postępuje.</p>
        <p class="text-xl mt-7">Dzieje Apostolskie 10:34-35</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import CreedCard from "@/components/CreedCard.vue";

const creeds: string[] = [
  "Boże natchnienie Starego i Nowego Testamentu, co oznacza nieomylność Biblii w objawieniu woli Bożej dotyczącej zbawienia grzesznego człowieka. Biblia składająca się z 66 ksiąg jest jedynym autorytetem w chrześcijańskiej wierze.",
  "Jedynego Boga , Stwórcę wszechświata , doskonałego i odwiecznie istniejącego w trzech Osobach: Ojca , Syna i Ducha Świętego",
  "Jezusa Chrystusa – narodzonego z Ducha Świętego i Marii Panny , który umarł na krzyżu, aby wybawić ludzi z grzechu. Ojciec wzbudził go z martwych, aby zasiadł na tronie w niebie",
  "Ducha Świętego, którego zadaniem jest uwielbienie Jezusa Chrystusa. W obecnym czasie przekonuje on człowieka o grzechu, sprawiedliwości i sądzie. Duch Święty odnawia grzesznika poprzez zamieszkanie w jego sercu przez wiarę oraz wyposaża w moc niezbędną do chrześcijańskiego życia.",
  "To, że człowiek został stworzony na podobieństwo Boże, lecz upadł w grzech oraz to, że jest zgubiony na wieki, jednak przez odrodzenie w Duchu Świętym i poprzez Słowo Boże może uzyskać zbawienie wieczne",
  "To , że krew Jezusa Chrystusa przelana na krzyżu i jego zmartwychwstanie są jedynym fundamentem usprawiedliwienia i zbawienia wszystkich, którzy uwierzą. Tylko ci, którzy wiarą przyjęli Jezusa, są zrodzeni na nowo przez Ducha Świętego, aby stać się dziećmi Bożymi.",
  "To , że chrzest i Wieczerza Pańska są jedynymi ustanowieniami w kościele. Praktykowanie ich nie daje jednak gwarancji zbawienia, które jest z wiary.",
  "To, że jedyną głową Kościoła jest Jezus Chrystus, a każdy lokalny zbór jest poddany jego zwierzchnictwu.",
  "W powtórne przyjście Pana Jezusa Chrystusa po swój kościół i cielesne zmartwychwstanie umarłych: wierzących do życia wiecznego, niewierzących na wieczne oddzielenie od Boga"
]
</script>
<style scoped>

</style>
