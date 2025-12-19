<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Hero from "@/components/Hero.vue";
import ServiceInformation from "@/components/ServiceInformation.vue";
import AboutUs from "@/components/AboutUs.vue";
import ChildrenMeetings from "@/components/ChildrenMeetings.vue";
import Creed from "@/components/Creed.vue";
import Feed from "@/components/Feed.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import ChildrenProtection from "@/components/childrenProtection/ChildrenProtection.vue";
import ChildrenService from "@/components/ChildrenService.vue";

import { ref, onMounted } from "vue";

const childrenProtectionString: string = "standardy-ochrony-maloletnich";

const currentPage = ref<string>("");

const handleHashChange = () => {
  currentPage.value = window.location.hash;
}

onMounted(() => {
  handleHashChange()
  window.addEventListener('hashchange', handleHashChange)
})
</script>

<template>
  <main class="text-black80 max-lg:pt-22">
    <Navigation class="mb-[10px]" />
    <template v-if="!currentPage.includes(childrenProtectionString)">
      <Hero />
      <ServiceInformation />
      <AboutUs />
      <div class="px-10 py-[60px] max-lg:px-4 max-lg:py-8 grid gap-15">
        <ChildrenMeetings />
        <ChildrenService />
      </div>
      <Creed />
      <Feed />
      <Contact />
    </template>
    <template v-else-if="currentPage.includes(childrenProtectionString)">
      <ChildrenProtection />
    </template>
      <Footer />
    
  </main>
</template>

<style scoped>
</style>
