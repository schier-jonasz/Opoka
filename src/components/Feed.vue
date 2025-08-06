<template>
  <section id="feed" class="py-[60px]">
    <div class="bg-[url(@/assets/img/feed-background.png)] h-[540px] flex items-center justify-center bg-no-repeat bg-cover bg-center">
      <div class="feed-pseudo flex flex-col items-center justify-center gap-10 py-[60px] px-28 rounded-4xl relative"
           :class="{ 'is-hovering': isHovering }"
      >
        <h3 class="text-5xl font-bold z-10">AKTUALNOŚCI</h3>
        <p class="max-w-[435px] text-center opacity-80">Bądź na bieżąco! Wszystkie aktualności, ważne ogłoszenia
          i nadchodzące wydarzenia publikujemy na naszym Facebooku. Dołącz do naszej społeczności i śledź nas, aby zawsze być na bieżąco! Odwiedź nasz profil i zobacz, co nowego!</p>
        <Button class="absolute -bottom-5" @mouseenter="isHovering = true" @mouseleave="isHovering = false">ODWIEDŹ PROFIL</Button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Button from "@/components/Button.vue";
import {ref} from "vue";

const isHovering = ref<boolean>(false);
</script>
<style scoped>
.feed-pseudo {
  background: linear-gradient(to bottom,
  white 0%,
  white calc(100% - 12px),
  var(--color-primary) calc(100% - 12px),
  var(--color-primary) 100%
  );
  position: relative;
}

.feed-pseudo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom,
  white 0%,
  white calc(100% - 12px),
  var(--color-secondary) calc(100% - 12px),
  var(--color-secondary) 100%
  );
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.feed-pseudo.is-hovering::before {
  opacity: 1;
}
</style>
