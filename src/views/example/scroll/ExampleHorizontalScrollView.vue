<script setup lang="ts">
import CreeperFace from '@/components/icons/CreeperFace.vue';
import FadeLayout from '@/layouts/FadeLayout.vue';
import HorizontalScrollView from '@/views/scroll/HorizontalScrollView.vue';
</script>

<template>
  <FadeLayout :top="false" :left="true" :bottom="false" :right="true">
    <HorizontalScrollView>
    <div v-for="(value, index) in 20" class="element">
      <CreeperFace/>
      <p>element #{{ index }}</p>
    </div>
  </HorizontalScrollView> 
  </FadeLayout>
</template>

<style scoped lang="scss">
.element {
  display: flex;
}
.element p {
  font-family: 'minecraft-seven';
}
</style>