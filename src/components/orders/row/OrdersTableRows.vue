<script setup lang="ts">
import type { Column } from '@/data/table/Column';
import OrdersTableRow from './OrdersTableRow.vue';
import type { Order } from '@/data/order/Order';

const props = defineProps<{
  columns: Column[]
  orders: Order[]
}>()

function isEnabled(index: number): boolean {
  //return props.orders[index].id % 2 == 1;
  return true;
}
</script>

<template>
  <div class="rows">
    <template v-for="(order, index) in orders">
      <OrdersTableRow v-if="isEnabled(index)" :columns :order :index/>
    </template>
  </div>
</template>

<style scoped>
.rows {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>