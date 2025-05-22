<template>
  <div class="rounded-4xl bg-white p-8">
    <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
      <span class="font-bold text-2xl">{{figure}}</span>
    </div>
    <p class="opacity-80 mt-3">{{text}}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  figure: number
  text: string
}>();
</script>
<style scoped>

</style>
