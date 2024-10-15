<script setup lang="ts">
</script>

<template>
  <svg width="0" height="0">
    <filter id="alternative-glow" x="-50%" y="-200%" width="200%" height="200%" primitiveUnits='objectBoundingBox'>
      <feGaussianBlur stdDeviation=".025 .2"/>
      <feColorMatrix type="saturate" values="1.3" />
      <feBlend in="SourceGraphic"/>
    </filter> 
  </svg>

  <svg width="0" height="0">
    <filter id="blur-and-scale" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="100" result="blurred"/>
      <feColorMatrix type="saturate" in="blurred" values="5" />
      <feComposite in="SourceGraphic" operator="over" />
    </filter>
  </svg>

  <img src="@/assets/images/wallpaper_minecraft_pc_bundle.png" class="test">
</template>

<style scoped lang="scss">
/*
.bloom-layout {
  filter: url(#blur_and_scale);
}
.bloom-layout:after {
  content: '';
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: -1;
  top: 0;

  background: inherit;
  transform: scale(1.4);

  filter: blur(20px) brightness(150);
}
.blur-and-scale {
  filter: url(#blur_and_scale);
}
*/
.test {
  width: 500px;
  height: 500px;

  object-fit: cover;

  filter: url(#blur-and-scale);
}
</style>