<script setup lang="ts">
import type { Column } from '@/data/table/Column';
import OrdersTableColumnName from './OrdersTableColumnName.vue';

const props = defineProps<{
  columns: Column[]
}>()
</script>

<template>
  <div class="columns-bar">
    <template v-for="(column, index) in columns" :column :index>
      <OrdersTableColumnName :column :index/>
    </template>
  </div>
</template>

<style scoped>
@import '@/assets/styles/motion.css';

.columns-bar {
  width: 100%;
  margin-bottom: 4px;

  display: flex;
  align-items: center;

  white-space: nowrap;
}
</style>