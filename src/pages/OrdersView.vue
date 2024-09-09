<script setup lang="ts">
import OrdersTableToolsbar from '@/components/orders/tool/OrdersTableToolsbar.vue';
import OrdersTableColumns from '@/components/orders/column/OrdersTableColumns.vue';
import OrdersTableRows from '@/components/orders/row/OrdersTableRows.vue';
import PaidTag from '@/components/orders/tag/PaidTag.vue';
import ShippedTag from '@/components/orders/tag/ShippedTag.vue';
import ShippingTag from '@/components/orders/tag/ShippingTag.vue';
import UnfilledTag from '@/components/orders/tag/UnfilledTag.vue';
import UnkownTag from '@/components/orders/tag/UnkownTag.vue';
import UnpaidTag from '@/components/orders/tag/UnpaidTag.vue';
import { OrderStatus, PaymentStatus, type Order } from '@/data/order/Order';

import type { Column } from '@/data/table/Column';
import { h, onMounted, ref } from 'vue';


const orders = ref<Order[]>([]);
const columns = ref<Column[]>([]);

/*
const orders: Order[] = [
  {
    id: 1,
    order_emission_date: Date.now(),
    order_expiration_date: Date.now(),
    status: OrderStatus.SHIPPING,
    payment: PaymentStatus.PAID,
    worker: "Mario Rossi"
  },
  {
    id: 2,
    order_emission_date: Date.now(),
    order_expiration_date: Date.now(),
    status: OrderStatus.SHIPPED,
    payment: PaymentStatus.PAID,
    worker: "Maria Rosa"
  },
  {
    id: 3,
    order_emission_date: Date.now(),
    order_expiration_date: Date.now(),
    status: OrderStatus.UNFILLED,
    payment: PaymentStatus.UNPAID,
    worker: "Giulio Verdi"
  }
]
*/

function addOrder() {
  const order: Order = {
    id: 10,
    order_emission_date: Date.now(),
    order_expiration_date: Date.now(),
    order_completion_date: Date.now(),
    status: OrderStatus.SHIPPED,
    payment: PaymentStatus.PAID,
    worker: "Claudio Blu",
    client: "IShowSpeed"
  }

  orders.value.push(order);

  console.info("order added");
}

setInterval(addOrder, 10000);

onMounted(() => {
  orders.value!.push({
    id: 1,
    order_emission_date: Date.now(),
    order_expiration_date: Date.now(),
    order_completion_date: Date.now(),
    status: OrderStatus.SHIPPING,
    payment: PaymentStatus.PAID,
    worker: "Mario Rossi",
    client: "IShowSpeed"
  })

  orders.value!.push({
    id: 2,
    order_emission_date: Date.now(),
    order_expiration_date: Date.now(),
    order_completion_date: Date.now(),
    status: OrderStatus.SHIPPED,
    payment: PaymentStatus.PAID,
    worker: "Maria Rosa",
    client: "IShowSpeed"
  })

  orders.value!.push({
    id: 3,
    order_emission_date: Date.now(),
    order_expiration_date: Date.now(),
    order_completion_date: Date.now(),
    status: OrderStatus.UNFILLED,
    payment: PaymentStatus.UNPAID,
    worker: "Giulio Verdi",
    client: "IShowSpeed"
  })

  columns.value!.push({
    name: 'Order ID',
    visible: true,
    function: (column: Column, order: Order) => {
      return h('p', '#ID' + order.id.toString().padStart(6, '0'));
    }
  })

  columns.value!.push({
    name: 'Emission',
    visible: true,
    function: (column: Column, order: Order) => {
      return h('p', '8 May 2024');
    }
  })

  columns.value!.push({
    name: 'Expiration',
    visible: true,
    function: (column: Column, order: Order) => {
      return h('p', '30 June 2024');
    }
  })

  columns.value!.push({
    name: 'Completion',
    visible: true,
    function: (column: Column, order: Order) => {
      return h('p', '30 June 2024');
    }
  })

  columns.value!.push({
    name: 'Status',
    visible: true,
    function: (column: Column, order: Order) => {
      switch(order.status) {
        case OrderStatus.UNKOWN: return UnkownTag
        case OrderStatus.UNFILLED: return UnfilledTag
        case OrderStatus.SHIPPING: return ShippingTag
        case OrderStatus.SHIPPED: return ShippedTag
      }
    }
  })

  columns.value!.push({
    name: 'Payment',
    visible: true,
    function: (column: Column, order: Order) => {
      switch(order.payment) {
        case PaymentStatus.UNKOWN: return UnkownTag
        case PaymentStatus.UNPAID: return UnpaidTag
        case PaymentStatus.PAID: return PaidTag
      }
    }
  })

  columns.value!.push({
    name: 'Worker',
    visible: true,
    function: (column: Column, order: Order) => {
      return h('p', order.worker);
    }
  })

  columns.value!.push({
    name: 'Client',
    visible: true,
    function: (column: Column, order: Order) => {
      return h('p', order.client);
    }
  })
})
</script>

<template>
  <div class="order-view">
    <h1>Orders</h1>
    <OrdersTableToolsbar :columns :orders/>
    <OrdersTableColumns :columns/>
    <OrdersTableRows :columns :orders/>
  </div>
</template>

<style scoped>
h1 {
  background-image: linear-gradient(#bebebe, #e8e8e8);
  background-clip: text;
  -webkit-text-fill-color: transparent;

  position: relative;
  top: 10px;
  font-size: 120px;
}
.order-view {
  width: 100%;

  padding: 30px;
  background-color: rgb(244, 244, 244);
}
</style>