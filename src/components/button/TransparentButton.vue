<script setup lang="ts">
</script>

<template>
  <!--div class="module-border-wrap">
    <div class="module">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias.
    </div>
  </div-->

  <div class="masked-div">
    Contenuto del div
  </div>

  <div class="mask" id="mask"></div>

  <div id="maschera"></div>
</template>

<style scoped lang="scss">
.module-border-wrap {
  max-width: 250px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, red, purple);
  padding: 3px;

  mask-image: url(#mask);
  mask-size: 100%;
  //mask-size: min(500vw, 250rem) min(500vw, 250rem);
  mask-repeat: no-repeat;
  mask-position: center center;
  //width: min(100%, 50rem);
}

.module {
  background: #222;
  color: white;
  padding: 2rem;
}

.mask {
  background: linear-gradient(to right, transparent 50%, black 0);
  display: inline-block;
  position: absolute;
  left: -100%;
  margin: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  transition: transform 800ms;
}

#maskera {
  background: radial-gradient(circle, black 50%, transparent 51%);
}
.masked-div {
  width: 300px;
  height: 300px;

  text-align: center;
  vertical-align: middle;

  background: linear-gradient(to right, red, purple);
  mask-image: url(#maschera);
  //mask-image: radial-gradient(circle, black 50%, transparent 51%);
  //-webkit-mask-image: radial-gradient(circle, black 50%, transparent 51%); /* Supporto per Webkit */
}
</style>