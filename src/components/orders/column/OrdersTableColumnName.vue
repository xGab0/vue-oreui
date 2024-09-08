<script setup lang="ts">
import type { Order } from '@/data/order/Order';
import type { Column } from '@/data/table/Column';

const props = defineProps<{
  column: Column
  index: number
}>()

function onDragStart(event: DragEvent, index: number) {

}

function onDragEnd(event: DragEvent, index: number) {

}
</script>

<template>
  <Transition name="smooth">
    <div
      v-if="column.visible"
      class="column"
      draggable="true"
      @dragstart="onDragStart($event, index)"
      @dragend="onDragEnd($event, index)"
    >
      <p>{{ column.name }}</p>
      <img class="icon" src="@/assets/icons/filter.svg" alt="filter-svg">
    </div>
  </Transition>
</template>

<style scoped>
p {
  font-weight: 600;
  font-size: 10px;

  text-transform: uppercase;
  text-align: center;
  text-overflow: clip;
  color: rgb(78, 78, 78);

  overflow: hidden;
}

.column {
  width: 100%;
  max-width: 100%;

  display: inline-flex;
  justify-content: center;
  gap: 6px;

  overflow: hidden;
}
.column img {
  width: 13px;
}

/*
.column:hover {
  width: 0%;
  transition: width 2s ease-out;
}
*/
</style>