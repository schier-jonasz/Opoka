<template>
    <header class="h-[340px] px-5 max-lg:px-[10px] w-full">
        <div class="bg-[url('@/assets/img/balloons.png')] w-full h-full bg-no-repeat bg-cover bg-center rounded-4xl text-white flex items-center">
            <div class="flex flex-col gap-2 ml-[166px] max-lg:ml-[28px] max-lg:w-[280px]">
                <h2 class="text-5xl max-lg:text-4xl font-bold">STANDARDY OCHRONY MAŁOLETNICH</h2>
                <p class="text-2xl max-lg:text-[18px] max-w-[600px] text-wrap">OBOWIĄZUJĄCE W KOŚCIELE EWANGELICZNYCH CHRZEŚCIJAN „OPOKA” W RADLINIE.</p>
            </div>
        </div>
    </header>
    <section class="w-full flex justify-center py-14">
        <div class="bg-cream rounded-4xl max-w-[1060px] py-10 px-4 text-center">
            <h3 class="text-black80 text-2xl font-bold mb-[30px]">PREAMBUŁA</h3>
            <p class="text-black80/80">Naczelną zasadą wszystkich działań podejmowanych przez pracowników Zboru i wolontariuszy jest działanie dla dobra dziecka i w jego najlepszym interesie. Pracownik i wolontariusz traktuje dziecko z szacunkiem oraz uwzględnia jego potrzeby. Niedopuszczalne jest stosowanie przez pracownika i wolontariusza wobec dziecka przemocy w jakiejkolwiek formie. Pracownik i wolontariusz, realizując te cele, działa w ramach obowiązującego prawa, przepisów wewnętrznych danej placówki oraz swoich kompetencji.</p>
        </div>
    </section>
    <section class="grid justify-center max-lg:px-10">
        <StandardsRenderer :standards="standards" class="max-w-[1000px] grid gap-6" />
        <div class="h-[1px] w-full bg-primary mt-9 mb-15"></div>
        <div class="max-w-[1000px] grid gap-9">
            <h3 class="text-[28px] max-lg:text-[20px] text-center text-black80">załącznik 1</h3>
            <h2 class="text-[28px] max-lg:text-[20px] text-center text-black80">Zasady bezpiecznej rekrutacji personelu</h2>
            <div class="grid gap-6 mb-15">
                <p
                    v-for="(rule, index) in recrutationRules"
                    :key="index"
                    class="text-black80/80"
                >
                    {{ `${index + 1}. ${rule}` }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { standards, recrutationRules } from './standards';
import StandardsRenderer from './StandardsRenderer.vue';
</script>
