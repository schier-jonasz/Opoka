<template>
  <nav 
    aria-label="main-navigation" 
    class="px-20 py-2.5 bg-white w-full transition-transform duration-300 ease-in-out max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:z-50 max-lg:shadow-[0px_0px_8px_0px_#22222214]"
    :class="{
      'max-lg:-translate-y-full': isHidden && !isAtTop,
      'max-lg:translate-y-0': !isHidden || isAtTop
    }"
  >
    <div class="flex justify-between items-center">

      <a href="/" aria-label="Strona główna" class="flex-shrink-0">
        <img src="@/assets/img/Logo_black.svg" alt="Logo" />
      </a>

      <ul class="flex items-center gap-9 max-lg:hidden">
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.href">{{ item.name }}</a>
        </li>
      </ul>
      <Button @click="goToContactView" class="max-lg:hidden">
        SKONTAKTUJ SIĘ
      </Button>
      <div class="max-lg:flex hidden">
        <img src="@/assets/img/hamburger-menu.svg" alt="Hamburger menu" @click="menuOpen = true" v-if="!menuOpen" class="cursor-pointer w-7 h-7"/>
        <img src="@/assets/img/close.svg" alt="Close hamburger menu" @click="menuOpen = false" v-if="menuOpen" class="cursor-pointer w-7 h-7"/>
      </div>
    </div>
    <div class="max-lg:flex max-lg:flex-col max-lg:justify-center hidden min-h-[25svh] py-5" v-if="menuOpen">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index" class="py-2 flex justify-center items-center text-center">
          <a :href="item.href" @click="menuOpen = false">{{ item.name }}</a>
        </li>
      </ul>
      <Button @click="goToContactView" class="mt-4">
        SKONTAKTUJ SIĘ
      </Button>
    </div>
  </nav>

</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import { ref, onMounted, onUnmounted } from "vue";

type NavItem = {name: string, href: string};
const menuItems: NavItem[] = [
  { name: 'NABOŻEŃSTWA', href: '#service-information' },
  { name: 'O NAS', href: '#about-us' },
  { name: 'WYZNANIE WIARY', href: '#creed' },
  { name: 'AKTUALNOŚCI', href: '#feed' },
  { name: 'STANDARDY OCHRONY MAŁOLETNICH', href: '#standardy-ochrony-maloletnich' }
];

function goToContactView(): void {
  window.location.href = "#contact";
  const contact = document.getElementById("contact");
  contact?.scrollIntoView();
}

const menuOpen = ref<boolean>(false);
const isHidden = ref<boolean>(false);
const isAtTop = ref<boolean>(true);

let lastScrollY = 0;
let scrollStartY = 0;
const SCROLL_THRESHOLD = 80;

function handleScroll(): void {
  const currentScrollY = window.scrollY;
  isAtTop.value = currentScrollY <= 10;

  if (isAtTop.value) {
    isHidden.value = false;
    lastScrollY = currentScrollY;
    scrollStartY = currentScrollY;
    return;
  }

  const scrollingDown = currentScrollY > lastScrollY;
  const scrollingUp = currentScrollY < lastScrollY;

  if (scrollingDown) {
    isHidden.value = true;
    menuOpen.value = false;
    
    scrollStartY = currentScrollY;
  } else if (scrollingUp) {
    const scrolledDistance = scrollStartY - currentScrollY;
    
    if (scrolledDistance >= SCROLL_THRESHOLD) {
      isHidden.value = false;
    }
  }

  lastScrollY = currentScrollY;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>