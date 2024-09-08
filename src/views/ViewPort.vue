<script setup lang="ts">
import Badge from '@/components/badge/Badge.vue';
import Navbar from '@/components/Navbar.vue';
import Separator from '@/components/separator/Separator.vue';
import ServerCard from '@/components/ServerCard.vue';
import ServerList from './ServerList.vue';
</script>

<template>
  <div class="viewport">
    <Navbar/>

    <!--div class="wallpaper levitateDown">
      <!--img src="@/assets/images/wallpaper_minecraft_bedrock_edition.png"-->
      <!--div class="separator-container">
        <Separator/>
      </div>
    </div-->

    <!--div class="cube">
    </div-->

    <ServerList/>
  </div> 
</template>

<style scoped lang="scss">
.viewport {
  width: 100%;
  height: 100%;

  padding-top: 2%;
  padding-left: 6%;
  padding-right: 6%;

  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  gap: 16px;
}
.wallpaper {
  width: 100%;
  height: 300px;

  border-style: solid;
  border-width: 2px;
  border-color: gray;

  background-image: url("@/assets/images/wallpaper_minecraft_bedrock_edition.png");
  background-size: cover;
  background-repeat: no-repeat;

  box-shadow:
    4px 4px 8px #d9d9d9,
    -4px -4px 8px #ffffff;
}
.wallpaper img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}
.wallpaper .separator-container {
  width: 0%;
  height: 0%;
}
.cards-container {
  width: 100%;
  height: 100px;

  margin-top: 8px;

  display: grid;
  gap: 6px;

  //background-color: rgb(247, 247, 247);
}


.cube {
  width: 200px;
  height: 200px;

  border-radius: 50px;

  background: #e0e0e0;
  box-shadow: inset 20px 20px 60px #bebebe,
              inset -20px -20px 60px #ffffff;
}

.levitateDown {
  animation: .4s ease-in 0s 1 levitateDown;
}

@keyframes levitateDown {
  0% {
    opacity: 0;
    transform: translateY(-2%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>