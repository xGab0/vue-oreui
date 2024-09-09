<template>
  <div class="icon">
    <svg viewBox="0 0 5 5" preserveAspectRatio="none">
      <rect width="1" height="1" x="0" y="1" class="pixel"/>
      <rect width="1" height="1" x="1" y="2" class="pixel"/>
      <rect width="1" height="1" x="2" y="3" class="pixel"/>
      <rect width="1" height="1" x="3" y="2" class="pixel"/>
      <rect width="1" height="1" x="4" y="1" class="pixel"/>
    </svg>
  </div>
</template>
  
<style scoped lang="scss">
.icon {
  width: 16px;

  display: grid;
  justify-items: center;
  align-items: center;

  background-color: white;
}
.icon svg {
}
.pixel {
  fill: gray;
}

#row-0 {
  visibility: visible;
}
#row-1 {
  visibility: visible;
}
#row-2 {
  visibility: hidden;
}
</style>