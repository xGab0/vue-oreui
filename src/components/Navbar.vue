<script setup lang="ts">
import { onMounted, reactive, ref, useTemplateRef } from 'vue';

const movingElement = useTemplateRef<HTMLElement>('movingElement');
//const pagesRef = ref<HTMLElement[]>([]);
const pagesRef = useTemplateRef<HTMLElement[]>('pagesRef')

function move(index: number) {
  const element = pagesRef.value[index];

  const elementWidth = element?.getBoundingClientRect().width;
  const elementHeight = element?.getBoundingClientRect().height;
  const elementX = element?.getBoundingClientRect().x;
  const elementY = element?.getBoundingClientRect().y;

  movingStyle.width = elementWidth + 'px';
  movingStyle.height = elementHeight + 'px';
  movingStyle.inset = `${elementY}px ${0}px ${0}px ${elementX}px`;
}

const movingStyle = reactive({
  width: 0 + 'px',
  height: 0 + 'px',
  inset: `${10}px ${0}px ${0}px ${0}px`,
})

const pages = [
  {
    "name": "home",
    "text": "Home"
  },
  {
    "name": "serverlist",
    "text": "Server list"
  },
  {
    "name": "partners",
    "text": "Partners"
  },
  {
    "name": "community",
    "text": "Community"
  },
]

onMounted(() => {
  console.info("Navbar mounted")
})
</script>

<template>
  <div class="navbar shadow-box">
    <div v-for="(page, index) in pages" ref="pagesRef" class="page" @click="move(index)">
      <p>{{ page.text }}</p>
    </div>

    <!--div class="selector" ref="home" @click="moveMovingTo(home!)">
      <p>Home</p>
    </div-->

    <!--div class="separator"/-->

    <!--div class="selector" ref="serverList" @click="() => moveMovingTo(serverList!)">
      <p>Server list</p>
    </div-->

    <!--div class="separator"/-->

    <!--div class="selector" ref="partners" @click="() => moveMovingTo(partners!)">
      <p>Partners</p>
    </div-->

    <!--div class="separator"/-->

    <!--div class="selector" ref="community" @click="() => moveMovingTo(community!)">
      <p>Community</p>
    </div-->

    <div class="moving" ref="movingElement" :style="movingStyle"/>
  </div> 
</template>

<style scoped lang="scss">
@font-face {
  font-family: 'minecraft-five-v2-regular';
  src: url('@/assets/fonts/minecraft-five-v2-regular.otf');
}

@font-face {
  font-family: 'minecraft-ten-v2-regular';
  src: url('@/assets/fonts/minecraft-ten-v2-regular.otf');
}

@font-face {
  font-family: 'minecraft-seven';
  src: url('@/assets/fonts/minecraft-seven.ttf');
}

.moving {
  position: absolute;

  background-color: green;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px,
      inset 0px 0px 0px 2px #64b14a;

  //transition: all 0.2s ease-in-out;
  transition: all .15s cubic-bezier(.4,0,.2,1) 0s, opacity .25s cubic-bezier(.5,0,.2,1) 50ms;
}

.navbar {
  overflow: hidden;

  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 4px;

  //background-color: rgb(246, 246, 246);
}
.separator {
  width: 2px;
  height: 20px;

  background-color: lightgray;
}
.page {
  position: relative;
  z-index: 2;

  padding: 6px;
  transition: all 0.2s ease-in-out;
}
.page p {
  font-size: 16px;
  font-family: 'minecraft-five-v2-regular';
  color: gray;
}
.selector:where(:hover) {
  cursor: pointer;
}
.selector:where(:hover) p {
  color: green;

  //transform: scale(1.05);
}
.selected {
  padding: 6px;
  background-color: green;
  box-shadow:
  rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
  rgba(60, 64, 67, 0.15) 0px 1px 3px 1px,
    inset 0px 0px 0px 2px #64b14a;
}
.selected p {
  color: white;
}

.shadow-box {
  background: #ffffff;
  box-shadow:
    inset 2px 2px 6px #d9d9d9,
    inset -2px -2px 6px #ffffff;
}
.top-box
{
    box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.4);
}
.left-box
{
    box-shadow: inset 7px 0 9px -7px rgba(0,0,0,0.4);
}
.right-box
{
    box-shadow: inset -7px 0 9px -7px rgba(0,0,0,0.4);
}
.bottom-box
{
    box-shadow: inset 0 -7px 9px -7px rgba(0,0,0,0.4);
}
</style>