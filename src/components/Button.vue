<template>
  <button
    class="px-12 rounded-xl bg-primary text-black80 transition-colors duration-200 h-12 text-nowrap text-center"
    :class="{
      'hover:bg-secondary': hoverVariant === 'primary',
      'hover:bg-transparent hover:ring-2 hover:ring-primary': hoverVariant === 'outlined'
    }"
    type="button"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
type ButtonProperties = {hoverVariant?: 'primary' | 'outlined'}

withDefaults(defineProps<ButtonProperties>(), {
  hoverVariant: 'primary'
});

</script>
<style scoped>

</style>
