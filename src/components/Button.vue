<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  locked: boolean
}>()

const isLocked = ref(props.locked)

function classObject(className: string) {
  console.info(isLocked.value);
  return isLocked.value
    ? 'locked-' + className
    : 'active-' + className
}

function lock(state: boolean) {
  isLocked.value = state;
}

onMounted(() => {
})

</script>

<template>
  <button :class="classObject('button-container')">
    <div class="upper-hitbox" />
    <div :class="classObject('button-upper')">
      <p>Click me</p>
    </div>
    <div :class="classObject('button-height')" />
  </button>
</template>

<style scoped>
@import '@/assets/styles/button/active.css';
@import '@/assets/styles/button/locked.css';
</style>