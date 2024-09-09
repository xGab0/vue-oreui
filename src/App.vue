<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ViewPort from './views/ViewPort.vue'
import OrdersView from './pages/OrdersView.vue';
import HomeView from './pages/HomeView.vue';
import ExampleView from './views/example/ExampleView.vue';
</script>

<template>
  <!--RouterView /-->
  <ExampleView/>
</template>

<style scoped lang="scss">
</style>
