<script setup lang="ts">
import TrophyIcon from './icons/TrophyIcon.vue';

</script>

<template>
  <div class="servercard">
    <div class="left">
      <div class="position">
        <div class="icon-container">
          <TrophyIcon/>
        </div>
        1°
      </div>

      <div class="icon">
      </div>
    </div>

    <div class="info">
      <div class="title">
        <p>Example Server</p>
      </div>

      <div class="ip">
        <p>play.exampleserver.it</p>
      </div>
    </div>

    <div class="tags-container">
      <div class="tag" v-for=" in 1">
        <p class="title">Faction</p>
        <!--div class="versions">
          <span>Java Edition </span>
          <span>1.8</span>
          <span> - </span>
          <span>1.21.2</span>

          <p/>

          <span>Bedrock Edition </span>
          <span>1.20 (latest)</span>
        </div-->
      </div>
    </div>
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

.servercard {
  display: flex;
  gap: 6px;

  padding: 6px;
  //background-color: gray;

  //border-radius: 50px;

  //background: #ffffff;
  background: transparent;
  box-shadow:  2px 2px 6px #d9d9d9,
              -2px -2px 6px #ffffff;

  /*
  box-shadow:
    rgba(60, 64, 67, 0.3) -1px 0px 0px 0px,
    rgba(60, 64, 67, 0.3) 0px 2px 0px 0px,
    rgba(60, 64, 67, 0.15) 1px 0px 0px 0px,
    rgba(60, 64, 67, 0.15) 0px -1px 0px 0px,
  */
}
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.left .icon {
  width: 50px;
  height: 50px;
  
  background-color: lightgreen;
}
.left .position {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.left .position .icon-container {
  width: 36px;
  height: 36px;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.info .title p {
  font-size: 21px;
  font-family: 'minecraft-seven';
}
.info .ip p {
  font-size: 15px;
  font-family: 'minecraft-seven';
}


.tags-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}
.tags-container .tag {
  padding: 4px;

  border-bottom: 2px solid #a0c3d1;

  background-color: lightcyan;
}
.tags-container .tag .title {
  font-family: 'minecraft-five-v2-regular';
  font-size: 13px;
}
.tags-container .tag .versions {
  font-family: 'minecraft-seven';
  font-size: 11px;
}
</style>