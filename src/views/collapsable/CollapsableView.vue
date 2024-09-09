<script setup lang="ts">
const props = defineProps<{
  collapsed: boolean
}>()
</script>

<template>
  <div class="dropdown-list" :class="{ show: collapsed }">
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown-list {
  display: grid;
  grid-template-rows: 0fr;

  transition: .2s ease-in-out;

  > div {
    overflow: hidden;
  }
}
.dropdown-list.show {
  grid-template-rows: 1fr;
}
</style>