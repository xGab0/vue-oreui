<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Button from '../components/Button.vue'
import Squares4x4 from '@/components/squares/Squares-4x4.vue';
import Squares from '@/components/squares/Squares.vue';
</script>

<template>
  <main>
    <!--TheWelcome /-->
    <!--img src="@/assets/svg/squaresvoxy.svg" alt="My Happy SVG"/-->

    <div class="test">
      <Squares/>
    </div>

    <Button :locked="false"/>
  </main>
</template>

<style scoped>
main {
  margin: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
}
#layer-1 {
  background-color: red;
  fill: red;
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
}

.test {
  width: 100%;
  border-radius: 12px;

  overflow: hidden;

  background-color: #e4ffe7;
}
.squares {
  /*clip-path: xywh(0 0px 100% 100% round 2% 2%);*/

  /*
  outline: 1px solid red;
  outline-offset: 2px;
  */
}
</style>
