<template>
  <footer id="footer" class="py-12 px-12 flex items-center justify-center bg-black80">
      <div class="flex flex-col items-start mr-20">
        <img src="@/assets/img/Logo_white_text.svg" alt="Logo with text" class="mb-11"/>
        <div class="flex gap-20 text-white text-xs">
          <div class="flex flex-col gap-4">
            <p>KOŚCIÓŁ EWANGELICZNYCH CHRZEŚCIJAN “OPOKA</p>
            <p>UL.UJEJSKIEGO 7, 44-310 RADLIN</p>
          </div>
          <ul class="flex flex-col gap-4">
            <li><a href="#about-us">O NAS</a></li>
            <li><a href="#creed">WYZNANIE WIARY</a></li>
            <li><a href="#children-protection">STANDARDY OCHRONY MAŁOLETNICH</a></li>
          </ul>
          <ul class="flex flex-col gap-4">
            <li><a href="#feed">AKTUALNOŚCI</a></li>
            <li><a href="#contact">KONTAKT</a></li>
            <li>
              <div class="flex items-center gap-5">
                <img src="@/assets/img/facebook.svg" alt="Facebook" />
                <img src="@/assets/img/instagram.svg" alt="Instagram" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-5 max-w-[370px]">
        <p class="font-bold text-white text-xl">ZAPRASZAMY NA NABOŻENSTWA STACJONARNIE LUB ONLINE</p>
        <Button>TRANSMISJA NABOŻENSTWA ONLINE</Button>
      </div>
  </footer>
</template>
<script setup lang="ts">
import Button from './Button.vue';
</script>

<style scoped>

</style>
