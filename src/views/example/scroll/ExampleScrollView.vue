<script setup lang="ts">
import CreeperFace from '@/components/icons/CreeperFace.vue';
import FadeLayout from '@/layouts/FadeLayout.vue';
import ScrollView from '@/views/scroll/ScrollView.vue';
</script>

<template>
  <FadeLayout :top="true" :left="false" :bottom="true" :right="false">
    <ScrollView>
      <div v-for="(value, index) in 20" class="element">
        <CreeperFace/>
        <p>element #{{ index }}</p>
      </div>
    </ScrollView>
  </FadeLayout>
</template>

<style scoped lang="scss">
.element {
  display: flex;
}
.element p {
  font-family: 'minecraft-seven';
}
</style>