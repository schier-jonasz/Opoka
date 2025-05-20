<script setup lang="ts">

type NavItem = {name: string, href: string};
const menuItems: NavItem[] = [
  { name: 'NABOŻEŃSTWA', href: '#' },
  { name: 'O NAS', href: '#' },
  { name: 'WYZNANIE WIARY', href: '#' },
  { name: 'AKTUALNOŚCI', href: '#' },
  { name: 'STANDARDY OCHRONY MAŁOLETNICH', href: '#' }
];

</script>

<template>
  <nav aria-label="main-navigation" class="px-20 py-2.5 text-black/80">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="logo-link" aria-label="Strona główna">
        <img src="@/assets/img/Logo_black.svg" alt="Logo" class="logo" />
      </a>

      <!-- Menu items -->
      <ul class="flex items-center gap-2">
        <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
          <a :href="item.href" class="nav-link">{{ item.name }}</a>
        </li>
      </ul>

      <!-- Placeholder for button (to be implemented later) -->
      <div class="button-placeholder">
        SKONTAKTUJ SIĘ
        <!-- Button component will be placed here -->
      </div>
    </div>
  </nav>

</template>

<style scoped>

</style>
