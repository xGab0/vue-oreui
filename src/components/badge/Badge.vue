<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <div class="badge">
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
@font-face {
    font-family: 'minecraft-five-v2-regular';
    src: url('@/assets/fonts/minecraft-five-v2-regular.otf');
}

@font-face {
    font-family: 'minecraft-ten-v2-regular';
    src: url('@/assets/fonts/minecraft-ten-v2-regular.otf');
}

@font-face {
    font-family: 'minecraft-seven';
    src: url('@/assets/fonts/minecraft-seven.ttf');
}

.badge {
  padding-left: 10px;
  padding-right: 10px;

  text-align: center;
  background-color: green;
}
.badge p {
  font-family: 'minecraft-five-v2-regular';
  color: white;
}
</style>