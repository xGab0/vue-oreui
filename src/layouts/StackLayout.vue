<script setup lang="ts">
const props = defineProps<{
  collapsed: boolean
}>()
</script>

<template>
  <div class="stack-layout">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.stack-layout {
  
}
</style>