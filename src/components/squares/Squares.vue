<script setup lang="ts">
// number of pixels inside the viewport
const squareRoot: number = 50;
const squareSize: number = 1;

function getViewbox(): [number, number, number, number] {
  const viewboxSize: number = squareRoot * squareSize;
  return [0, 0, viewboxSize, viewboxSize]
}

function getXPos(x: number, y: number): number {
  if (x == 1 && y == 1) {
    return 0;
  }

  return (squareSize * y) - squareSize;
}

function getYPos(x: number, y: number): number {
  if (x == 1 && y == 1) {
    return 0;
  }

  return (squareSize * x) - squareSize;
}

function randomColor(): string {
  const randomBoolean: boolean = Math.random() < 0.5;

  if (randomBoolean) {
    return "rgba(0, 0, 0, 0.19)"
  }
  return "rgba(0, 0, 0, 0.16)"
}
</script>

<template>
  <svg class="squares" width="100%" height="100%" :viewBox="getViewbox().toString()" fill="none">
    <rect id="background" width="100%" height="100%" fill="#606060"/>

    <g v-for="x_index in squareRoot" :id="x_index.toString()">
      <rect v-for="y_index in squareRoot"
        :id="x_index + '-' + y_index" class="square"
        :x="getXPos(x_index, y_index)" :y="getYPos(x_index, y_index)"
        :width="squareSize" :height="squareSize"
        :fill="randomColor()"
      />
    </g>
  </svg>
</template>

<style scoped>
.squares {
  /*overflow: visible;*/
}
.square {
  background-color: red;
  /*fill: black;*/
  /*filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));*/
}
.square:hover {
  fill: aqua;
}
</style>