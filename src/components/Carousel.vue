<template>
    <div class="relative w-[450px] h-[300px] max-lg:w-[280px] max-lg:h-[180px]">
      <img 
          :src="currentImage" 
          :alt="`Zdjęcie-${currentIndex}`"
          class="w-full h-full object-cover rounded-3xl transition-opacity duration-300"
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
import { ref, computed, onMounted } from 'vue';
import image1 from '@/assets/img/image-1.jpg';
import image2 from '@/assets/img/image-2.jpg';
import image3 from '@/assets/img/image-3.jpg';
import image4 from '@/assets/img/image-4.jpg';
import image5 from '@/assets/img/image-5.jpg';

const currentIndex = ref<number>(1);
const totalImages: number = 5;

const images = [image1, image2, image3, image4, image5];

const currentImage = computed(() => {
  return images[currentIndex.value - 1];
});

const displayCounter = computed(() => `${currentIndex.value}/${totalImages}`);

onMounted(() => {
  images.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
});

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