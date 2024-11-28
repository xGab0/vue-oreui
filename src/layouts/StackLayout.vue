<script setup lang="ts">
</script>

<template>
  <div class="stack-layout">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.stack-layout {
  display: grid;
  grid-template-areas: "stack";

  & > * {
    grid-area: stack;
  }
}
</style>