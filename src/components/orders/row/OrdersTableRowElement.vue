<script setup lang="ts">
import type { Order } from '@/data/order/Order';
import type { Column } from '@/data/table/Column';

const props = defineProps<{
  column: Column
  order: Order
  index: number
}>()
</script>

<template>
  <Transition name="smooth">
    <div class="column" v-if="column.visible">
      <component :is="column.function(column, order)"/>
    </div>
  </Transition>
</template>
  
<style scoped>
@import '@/assets/styles/motion.css';

p {
  font-size: 12px;
  text-align: center;
  text-overflow: clip;

  overflow: hidden;
}

.column {
  width: 100%;
  max-width: 100%;
  height: fit-content;

  flex-grow: 1;

  white-space: nowrap;
  text-align: center;

  overflow: hidden;
}

/*
.column:hover {
  width: 0%;
  transition: width 2s ease-out;
}
*/
</style>