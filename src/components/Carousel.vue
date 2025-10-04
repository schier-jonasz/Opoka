<template>
    <div class="relative w-[450px] h-[300px max-lg:w-[280px] max-lg:h-[180px]">
      <img 
          :src="currentImage" 
          :alt="`Zdjęcie-${currentIndex}`"
          class="w-full h-full object-cover rounded-3xl"
        />
        <div class="w-[250px] h-9 bg-primary rounded-xl absolute -bottom-6 max-lg:-bottom-11 left-1/2 -translate-x-1/2 px-12 py-2.5 flex justify-center items-center gap-4">
            <div class="relative w-5 h-5 rounded-full bg-secondary">
                <img
                    src="@/assets/img/Arrow.svg"
                    alt="Previous image arrow"
                    class="absolute -left-1/2 top-1/2 transform transition-transform -translate-y-1/2 hover:-translate-x-1.5 cursor-pointer"
                    @click="previousImage"
                />
            </div>
            <p class="font-medium">{{ displayCounter }}</p>
            <div class="relative w-5 h-5 rounded-full bg-secondary">
                <img
                    src="@/assets/img/Arrow.svg"
                    alt="Next image arrow"
                    class="absolute left-1/2 top-1/2 transform transition-transform rotate-180 -translate-y-1/2 hover:translate-x-1.5 cursor-pointer"
                    @click="nextImage"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';

const currentIndex = ref<number>(1);
const totalImages: number = 5;
const currentImage = computed(() => {
  return new URL(`../assets/img/image-${currentIndex.value}.jpg`, import.meta.url).href
})
const displayCounter = computed(() => `${currentIndex.value}/${totalImages}`);

const nextImage = () => {
    const result = (currentIndex.value + 1) % (totalImages + 1);
    currentIndex.value = result || 1;
};

const previousImage = () => {
    currentIndex.value = currentIndex.value === 1 
    ? totalImages 
    : currentIndex.value - 1;
};
</script>