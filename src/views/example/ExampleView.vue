<script setup lang="ts">
import CollapseIcon from '@/components/icons/CollapseIcon.vue';
import ExampleCollapsableScrollView from '@/views/example/ExampleCollapsableScrollView.vue';
import ExampleGalleryView from './gallery/ExampleGalleryView.vue';
import TransparentButton from '@/components/button/TransparentButton.vue';
import FadeLayout from '@/layouts/FadeLayout.vue';
import RotateLayout from '@/layouts/RotateLayout.vue';
import AdvancedBorderLayout from '@/layouts/AdvancedBorderLayout.vue';
import ExampleScrollView from './scroll/ExampleScrollView.vue';
import BloomLayout from '@/layouts/BloomLayout.vue';
import StackLayout from '@/layouts/StackLayout.vue';
import ExampleStackLayout from './ExampleStackLayout.vue';
</script>

<template>
  <div class="viewport">
    <ExampleGalleryView/>
  </div>
</template>

<style scoped lang="scss">
.viewport {
  width: 100%;
  height: 100%;

  display: grid;
  justify-items: center;
  align-content: center;
  align-items: start;
  gap: 16px;
}

.test {
  width: 500px;
  height: 500px;

  background-color: green;
  color: white;
}
</style>