<script setup lang="ts">
import type { Order } from '@/data/order/Order';
import type { Column } from '@/data/table/Column';
import OrdersTableElement from './OrdersTableRowElement.vue';

/*
const order: Order = withDefaults(defineProps<Order>(), {
  status: OrderStatus.UNKOWN,
  payment: PaymentStatus.UNKOWN,
  worker: "Unkown"
});
*/

/*
const orderStatusTag = computed(() => {
  switch(props.order.status) {
    case OrderStatus.UNKOWN: return UnkownTag
    case OrderStatus.UNFILLED: return UnfilledTag
    case OrderStatus.SHIPPING: return ShippingTag
    case OrderStatus.SHIPPED: return ShippedTag
  }
})

const paymentStatusTag = computed(() => {
  switch(props.order.payment) {
    case PaymentStatus.UNKOWN: return UnkownTag
    case PaymentStatus.UNPAID: return UnpaidTag
    case PaymentStatus.PAID: return PaidTag
  }
})
*/

/*
function isHidden(index: number): boolean {
  //return props.orders[index].id % 2 == 1;
  return false;
}
*/

const props = defineProps<{
  columns: Column[]
  order: Order
  index: number
}>()
</script>

<template>
  <div class="row">
    <input type="checkbox" class="checkbox" name="select" value="false">
    <template v-for="(column, index) in columns">
      <OrdersTableElement :column :order :index/>
    </template>
  </div>
</template>

<style scoped>
@import '@/assets/styles/motion.css';

p {
  font-size: 12px;
  text-align: center;
  text-overflow: clip;

  overflow: hidden;
}

.row {
  width: 100%;
  max-width: 100%;
  height: fit-content;
  
  padding-top: 6px;
  padding-bottom: 6px;

  display: flex;
  align-items: center;

  border-radius: 7px;
  background-color: white;
}
.row:hover {
  background-color: rgb(249, 251, 255);
}

.checkbox {
  width: 18px;
  height: 18px;

  position: absolute;
  margin-left: -8px;

  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;

  cursor: pointer;
  appearance: none;
}
.checkbox:checked {
  background-color: #66bb6a;
  border-color: #66bb6a;
  color: white;
}
</style>