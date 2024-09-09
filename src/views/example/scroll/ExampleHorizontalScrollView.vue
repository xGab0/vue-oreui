<script setup lang="ts">
import CreeperFace from '@/components/icons/CreeperFace.vue';
import HorizontalScrollView from '../HorizontalScrollView.vue';

</script>

<template>
  <HorizontalScrollView>
    <div v-for="(value, index) in 20" class="element">
      <CreeperFace/>
      <p>element #{{ index }}</p>
    </div>
  </HorizontalScrollView> 
</template>

<style scoped lang="scss">
.element {
  display: flex;
}
.element p {
  font-family: 'minecraft-seven';
}
</style>