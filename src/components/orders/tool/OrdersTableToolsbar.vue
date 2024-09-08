<script setup lang="ts">
import type { Order } from '@/data/order/Order';
import type { Column } from '@/data/table/Column';

const props = defineProps<{
  columns: Column[]
  orders: Order[]
}>()
</script>

<template>
  <div class="toolsbar">
    <div class="filters">
      <p>Filters</p>
      <div class="columnFilters">
        <div v-for="(column, index) in columns" :column :index class="column">
          <input type="checkbox" class="checkbox" name="select" value="false" v-model="column.visible" v-bind:index="index">
          <label>{{ column.name }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-weight: 600;
  font-size: 12px;

  text-transform: uppercase;
  text-align: left;
  text-overflow: clip;
  color: rgb(78, 78, 78);

  overflow: hidden;
}

.toolsbar {
  width: 100%;
  height: fit-content;
  
  margin-bottom: 14px;
  padding: 10px;

  display: flex;
  justify-content: space-between;

  border-radius: 7px;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
}
.columnFilters {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 2px 10px;
}
.columnFilters > div > label {
  font-size: 12px;
}
input[type=checkbox] {
  margin-right: 6px;
}
input[type=text] {
  width: 100px;
  height: 50px;

  padding: 12px 20px 12px 40px;

  box-sizing: border-box;
  font-size: 16px;

  border: 2px solid #ccc;
  border-radius: 7px;

  background-color: white;
  background-image: url('@/assets/icons/package.svg');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
}
</style>