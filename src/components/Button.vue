<template>
  <button
    class="py-4 px-12 rounded-xl bg-primary text-black80 transition-colors duration-200"
    :class="{
      'hover:bg-secondary': hoverVariant === 'primary',
      'hover:bg-transparent hover:border-2 hover:border-primary': hoverVariant === 'outlined'
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
