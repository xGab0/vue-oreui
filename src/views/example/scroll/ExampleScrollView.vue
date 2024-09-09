<script setup lang="ts">
import CreeperFace from '@/components/icons/CreeperFace.vue';
import ScrollView from '@/views/scroll/ScrollView.vue';
</script>

<template>
  <ScrollView>
    <div v-for="(value, index) in 20" class="element">
      <CreeperFace/>
      <p>element #{{ index }}</p>
    </div>
  </ScrollView>
</template>

<style scoped lang="scss">
.element {
  display: flex;
}
.element p {
  font-family: 'minecraft-seven';
}
</style>