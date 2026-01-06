<template>
  <footer id="footer" class="py-12 px-12 flex items-center justify-center bg-black80 max-lg:flex-col">
      <div class="flex flex-col items-start mr-20 max-lg:mr-0">
        <img src="@/assets/img/Logo_white_text.svg" alt="Logo with text" class="mb-11 max-lg:mb-8"/>
        
        <div class="flex-col gap-2 max-w-[370px] hidden max-lg:flex max-lg:mb-8">
          <p class="font-bold text-white text-xl">ZAPRASZAMY NA NABOŻEŃSTWA STACJONARNIE LUB ONLINE</p>
          <a href="https://www.youtube.com/@kechopokaradlin8039/featured" target="_blank" rel="noopener noreferrer">
            <Button>TRANSMISJA NABOŻENSTWA ONLINE</Button>
          </a>
        </div>

        <div class="flex gap-20 text-white text-xs max-lg:flex-col max-lg:gap-6 max-lg:w-full">
          <div class="flex flex-col gap-4">
            <p>KOŚCIÓŁ EWANGELICZNYCH CHRZEŚCIJAN "OPOKA"</p>
            <p>UL.UJEJSKIEGO 7, 44-310 RADLIN</p>
          </div>
          <div class="hidden max-lg:block max-lg:w-full max-lg:h-[1px] bg-white"></div>
          <div class="flex gap-20 text-white text-xs">
            <ul class="flex flex-col gap-4">
              <li><a href="#o-nas">O NAS</a></li>
              <li><a href="#wyznanie-wiary">WYZNANIE WIARY</a></li>
              <li><a href="#standardy-ochrony-maloletnich">STANDARDY OCHRONY MAŁOLETNICH</a></li>
            </ul>
            <ul class="flex flex-col gap-4">
              <li><a href="#aktualnosci">AKTUALNOŚCI</a></li>
              <li><a href="#kontakt">KONTAKT</a></li>
              <li>
                <div class="flex items-center gap-5">              
                  <a href="https://www.facebook.com/opokaradlin" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/img/facebook.svg" alt="Facebook" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-5 max-w-[370px] max-lg:hidden">
        <p class="font-bold text-white text-xl">ZAPRASZAMY NA NABOŻEŃSTWA STACJONARNIE LUB ONLINE</p>
        <a href="https://www.youtube.com/@kechopokaradlin8039/featured" target="_blank" rel="noopener noreferrer">
          <Button>TRANSMISJA NABOŻENSTWA ONLINE</Button>
        </a>
      </div>
  </footer>
</template>
<script setup lang="ts">
import Button from './Button.vue';
</script>

<style scoped>

</style>
