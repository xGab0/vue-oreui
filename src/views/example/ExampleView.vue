<script setup lang="ts">
import CollapseIcon from '@/components/icons/CollapseIcon.vue';
import ExampleCollapsableScrollView from '@/views/example/ExampleCollapsableScrollView.vue';
import ExampleGalleryView from './gallery/ExampleGalleryView.vue';
import TransparentButton from '@/components/button/TransparentButton.vue';
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

  /*
  display: grid;
  justify-items: center;
  align-items: start;
  gap: 16px;
  */
}
</style>