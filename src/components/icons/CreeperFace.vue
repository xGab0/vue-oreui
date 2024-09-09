<template>
  <!--svg width="100%" height="100%" viewBox="0 0 100 100" fill="yellow" preserveAspectRatio="none">
    <rect width="100%" height="100%" x="0"  y="0" class="pixel"/>
  </svg-->

  <div class="container">
    <svg viewBox="0 0 6 6" preserveAspectRatio="none">
      <g id="left-eye">
        <rect width="1" height="1" x="0" y="0" class="pixel"/>
        <rect width="1" height="1" x="1" y="0" class="pixel"/>
        <rect width="1" height="1" x="0" y="1" class="pixel"/>
        <rect width="1" height="1" x="1" y="1" class="pixel"/>
      </g>

      <g id="right-eye">
        <rect width="1" height="1" x="4" y="0" class="pixel"/>
        <rect width="1" height="1" x="5" y="0" class="pixel"/>
        <rect width="1" height="1" x="4" y="1" class="pixel"/>
        <rect width="1" height="1" x="5" y="1" class="pixel"/>
      </g>

      <g id="mounth">
        <rect width="1" height="1" x="2" y="2" class="pixel"/>
        <rect width="1" height="1" x="3" y="2" class="pixel"/>

        <rect width="1" height="1" x="1" y="3" class="pixel"/>
        <rect width="1" height="1" x="2" y="3" class="pixel"/>
        <rect width="1" height="1" x="3" y="3" class="pixel"/>
        <rect width="1" height="1" x="4" y="3" class="pixel"/>

        <rect width="1" height="1" x="1" y="4" class="pixel"/>
        <rect width="1" height="1" x="2" y="4" class="pixel"/>
        <rect width="1" height="1" x="3" y="4" class="pixel"/>
        <rect width="1" height="1" x="4" y="4" class="pixel"/>

        <rect width="1" height="1" x="1" y="5" class="pixel"/>
        <rect width="1" height="1" x="4" y="5" class="pixel"/>
      </g>
    </svg>
  </div>
</template>
  
<style scoped lang="scss">
.container {
  width: 20px;

  background-color: white;
}
.container svg {
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