<script setup lang="ts">
</script>

<template>
  <!--div class="module-border-wrap">
    <div class="module">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias.
    </div>
  </div-->

  <!--div class="masked-div-container">
    <div class="masked-div">
      Contenuto del div
    </div>
  </div>

  <div class="mask" id="mask"></div>

  <svg viewBox="0 0 200 200" preserveAspectRatio="none" id="cock">
    <polygon points="20,20 20,180 180,100 " fill="black"/>
  </svg-->

  <div id="box">
    <div id="innerbox"></div>

    <slot/>
  </div>
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
  background:
    radial-gradient(circle, black 50%, transparent 51%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
.masked-div-container {
  width: 300px;
  height: 300px;

  padding: 4px;
  border: solid green 2px;
}
.masked-div {
  width: 100%;
  height: 100%;

  text-align: center;
  vertical-align: middle;

  background-color: lightcoral;
  //background: linear-gradient(to right, red, purple);

  mask-image: radial-gradient(black 50%, transparent 51%);
  mask-size: 100% 100%;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-origin: fill-box;
  mask-composite: exclude;

  //mask-image: radial-gradient(circle, black 50%, transparent 51%);
  //-webkit-mask-image: radial-gradient(circle, black 50%, transparent 51%); /* Supporto per Webkit */
}

#box {
  margin: auto;
  position: relative;

  width: fit-content;

  padding: 6px;

  background-color: transparent;
}

#innerbox {
  position: absolute;
  inset: 0;

  mask:
     url('data:image/svg+xml;utf8,<svg style="padding: 2px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100"/></svg>') 0/100% 100%,
     linear-gradient(#fff, #fff);

  mask-composite: exclude;

  //background: linear-gradient(to right, red, purple);
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>