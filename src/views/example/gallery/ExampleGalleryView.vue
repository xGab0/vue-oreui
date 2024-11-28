<script setup lang="ts">
import TransparentButton from '@/components/button/TransparentButton.vue';
import CarouselView from '@/views/CarouselView.vue';
import GalleryView from '@/views/gallery/GalleryView.vue';

</script>

<template>
  <GalleryView/>
</template>

<style scoped lang="scss">
@font-face {
  font-family: 'minecraft-five-v2-regular';
  src: url('@/assets/fonts/minecraft-five-v2-regular.otf');
}

@font-face {
  font-family: 'minecraft-ten-v2-regular';
  src: url('@/assets/fonts/minecraft-ten-v2-regular.otf');
}

@font-face {
  font-family: 'minecraft-seven';
  src: url('@/assets/fonts/minecraft-seven.ttf');
}

p {
  font-family: 'minecraft-seven';
}
</style>