<template>
  <nav aria-label="main-navigation" class="px-20 py-2.5">
    <div class="flex justify-between items-center">

      <a href="/" aria-label="Strona główna">
        <img src="@/assets/img/Logo_black.svg" alt="Logo" />
      </a>

      <ul class="flex items-center gap-2">
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.href">{{ item.name }}</a>
        </li>
      </ul>
      <Button>
        SKONTAKTUJ SIĘ
      </Button>
    </div>
  </nav>

</template>
<script setup lang="ts">
import Button from "@/components/Button.vue";


type NavItem = {name: string, href: string};
const menuItems: NavItem[] = [
  { name: 'NABOŻEŃSTWA', href: '#' },
  { name: 'O NAS', href: '#' },
  { name: 'WYZNANIE WIARY', href: '#' },
  { name: 'AKTUALNOŚCI', href: '#' },
  { name: 'STANDARDY OCHRONY MAŁOLETNICH', href: '#' }
];

</script>
<style scoped>

</style>
