<script setup lang="ts">
import { useScroll, type UseScrollReturn } from '@vueuse/core';
import { vScroll } from '@vueuse/components'
import { reactive, ref } from 'vue';

const element = ref<HTMLElement>();
const { x, y, isScrolling, arrivedState, directions } = useScroll(element);

function leftMaskSize(): number {
  if (arrivedState.left) {
    return 0;  
  }
  return 30;
}

function rightMaskSize(): number {
  if (arrivedState.bottom) {
    return 0;  
  }
  return 30;
}

const gradientStyle = reactive({
  'mask-image': `linear-gradient(to left, transparent 0, black ${rightMaskSize()}px, black calc(100% - ${leftMaskSize()}px), transparent 100%)`
})

function onScroll(state: UseScrollReturn) {
  gradientStyle['mask-image'] = `linear-gradient(to left, transparent 0, black ${rightMaskSize()}px, black calc(100% - ${leftMaskSize()}px), transparent 100%)`;
}
</script>

<template>
  <div v-scroll="onScroll" ref="element" class="scroll-list" :style="gradientStyle">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.scroll-list {
  overflow-x: scroll;
  display: flex;
  width: 500px;
}
</style>