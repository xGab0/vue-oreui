<script setup lang="ts">
</script>

<template>
  <div class="button-container">
    <p>button text</p>
  </div>
  <div class="button-height"/>
</template>

<style scoped>
.button-container {
  width: 400px;
  height: 70px;

  background-color: #3b8526;

  border-color: none;
  border-style: solid;
  border-width: 4px 4px 0px 4px;

  box-shadow: inset 0px 0px 0px 8px #3ca220;
  /*box-shadow:
    inset 0 4px #6bc349,
    inset 0 -4px #2a631c,
    0 4px rgba(0, 0, 0, .25);*/
}
.button-container:hover {
  cursor: move;
}
.button-container p {
  text-align: center;

  color: white;
}
.button-height {
  width: 400px;
  height: 20px;

  background-color: #3b8526;

  border-color: none;
  border-style: solid;
  border-width: 0px 4px 4px 4px;
}
.button-height:hover {
  height: 0px;

  background-color: red;
}
/*.parent:hover .child, .parent.hover .child { display: block; }*/
</style>