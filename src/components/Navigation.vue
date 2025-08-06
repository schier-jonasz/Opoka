<template>
  <nav aria-label="main-navigation" class="px-20 py-2.5">
    <div class="flex justify-between items-center">

      <a href="/" aria-label="Strona główna">
        <img src="@/assets/img/Logo_black.svg" alt="Logo" />
      </a>

      <ul class="flex items-center gap-9">
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.href">{{ item.name }}</a>
        </li>
      </ul>
      <Button @click="goToContactView">
        SKONTAKTUJ SIĘ
      </Button>
    </div>
  </nav>

</template>
<script setup lang="ts">
import Button from "@/components/Button.vue";


type NavItem = {name: string, href: string};
const menuItems: NavItem[] = [
  { name: 'NABOŻEŃSTWA', href: '#service-information' },
  { name: 'O NAS', href: '#about-us' },
  { name: 'WYZNANIE WIARY', href: '#creed' },
  { name: 'AKTUALNOŚCI', href: '#feed' },
  { name: 'STANDARDY OCHRONY MAŁOLETNICH', href: '#children-protection' }
];

function goToContactView(): void {
  const contact = document.getElementById("contact");
  contact?.scrollIntoView();
}

</script>
<style scoped>

</style>
