<script setup lang="ts">
import StackLayout from '@/layouts/StackLayout.vue';

</script>

<template>
  <StackLayout>
    <img src="@/assets/images/updates/wallpaper_minecraft_nether.png" alt="wallpaper" class="wallpaper">
    <div class="filter"/>
    <span>BBBBBBBBBBBBBBBBBBBBBBBBBBBB</span>
  </StackLayout>
</template>

<style scoped lang="scss">
.example-stack-layout {

}
.filter {
}
.filter {
  width: 500px;
  height: 500px;
}

img {
  width: 500px;
  height: 500px;
}
span {
  text-align: center;
  font-size: 30px;
  color: white;

  place-content: center center;
  backdrop-filter: blur(10px) contrast(150%);
}
</style>