<script setup lang="ts">
import { useScroll, type UseScrollReturn } from '@vueuse/core';
import { vScroll } from '@vueuse/components'
import { onMounted, reactive, ref } from 'vue';

const element = ref<HTMLElement>();
const { x, y, isScrolling, arrivedState, directions } = useScroll(element);

function topMaskSize(): number {
  if (arrivedState.top) {
    return 0;  
  }
  return 30;
}

function bottomMaskSize(): number {
  if (arrivedState.bottom) {
    return 0;  
  }
  return 30;
}

function getProperty(): string {
  return `linear-gradient(to bottom, transparent 0, black ${bottomMaskSize()}px, black calc(100% - ${topMaskSize()}px), transparent 100%)`
}

const gradientStyle = reactive({
  'mask-image': getProperty()
})

function onScroll(state: UseScrollReturn) {
  gradientStyle['mask-image'] = getProperty();
}

onMounted(() => {
  gradientStyle['mask-image'] = getProperty();
})
</script>

<template>
  <div v-scroll="onScroll" ref="element" class="scroll-list" :style="gradientStyle">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.scroll-list {
  overflow-y: scroll;
  height: 200px;

  padding-right: 50px;

  //margin-bottom: 50px;
}

.arrived {
  background-size: 10px;
  background: linear-gradient(#e66465, transparent);
}

/*
.fade-wrapper {
  position: relative;

  height: 4rem;

  display: flex;
  flex-grow: 1;
}

.fade-wrapper::before,
.fade-wrapper::after {
  content: '';

  z-index: 1;
  left: 0;
  right: 0;

  height: 4rem;
  pointer-events: none;
  opacity: 0;

  transition:opacity .125s ease;
}

.fade-wrapper::before {
  top: 0;
  background: linear-gradient(transparent, #e66465);
}

.fade-wrapper::after {
  bottom: 0;
  background: linear-gradient(#e66465, transparent);
}

.topFade::before,
.bottomFade::after {
  opacity: 1;
}
*/

.topFade {
  //--top-mask-size: 48px !important;

  //background-color: red;
  mask-image: linear-gradient(to bottom, transparent 0, black 30px, black calc(100% - 30px), transparent 100%);
}

.bottomFade {
  //--top-mask-size: 48px !important;

  //mask-image: linear-gradient(to bottom, transparent 0, black 30px, black calc(100% - 30px), transparent 100%);
}
</style>