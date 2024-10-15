<script setup lang="ts">
//const props = defineProps<{
//  collapsed: boolean
//}>()
</script>

<template>
  <svg height="0" xmlns="http://www.w3.org/2000/svg">
      <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feOffset dx="12" dy="12" result="offsetblur"/>
          <feFlood flood-color="rgba(0,0,0,0.5)"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
          </feMerge>
      </filter>
  </svg>

  <img src="@/assets/images/diamond_sword.png" alt="diamond_sword">
</template>

<style scoped lang="scss">
img {
  transform-style: preserve-3d;
  filter: url(#drop-shadow);
  filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')";

  animation: rotate3D 10s linear infinite;
}


@keyframes rotate3D {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

</style>