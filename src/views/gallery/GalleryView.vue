<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="gallery">
      <div class="grid-item">
        <img src="@/assets/images/updates/wallpaper_minecraft_nether.png" alt="wallpaper" class="wallpaper">
      </div>

      <div class="grid-item">
        <img src="@/assets/images/updates/wallpaper_minecraft_nether.png" alt="wallpaper" class="wallpaper">
      </div>

      <div class="grid-item">
        <img src="@/assets/images/updates/wallpaper_minecraft_nether.png" alt="wallpaper" class="wallpaper">
      </div>

      <div class="grid-item">
        <img src="@/assets/images/updates/wallpaper_minecraft_nether.png" alt="wallpaper" class="wallpaper">
      </div>

      <div class="grid-item">
        <img src="@/assets/images/updates/wallpaper_minecraft_nether.png" alt="wallpaper" class="wallpaper">
      </div>
      <!--img src="@/assets/images/updates/wallpaper_minecraft_village_pillage.png" alt="wallpaper" class="wallpaper">
      <img src="@/assets/images/updates/wallpaper_minecraft_buzzybees.png" alt="wallpaper" class="wallpaper">
      <img src="@/assets/images/updates/wallpaper_minecraft_nether.png" alt="wallpaper" class="wallpaper">
      <img src="@/assets/images/updates/wallpaper_minecraft_caves_cliffs.png" alt="wallpaper" class="wallpaper">
      <img src="@/assets/images/updates/wallpaper_minecraft_trails&tales.png" alt="wallpaper" class="wallpaper">
      <img src="@/assets/images/updates/wallpaper_minecraft_trickytrials.png" alt="wallpaper" class="wallpaper"-->
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

.container {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;

  padding: 2px;

  border-style: solid;
  border-width: 2px;
  border-color: gray;
}

.gallery {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //grid-template-rows: repeat(3, 100px);
  grid-template-rows: repeat(auto, 100px);
  grid-gap: 10px;

  transition: .2s ease-in-out;

  .wallpaper {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}

//.container:first-child {
//  grid-column: 1 / 3; /* span from grid column line 1 to 3 (i.e., span 2 columns) */
//  grid-row: 1 / 3;    /* same concept, but for rows */
//}

.selected {
  grid-column: 1 / 3; /* span from grid column line 1 to 3 (i.e., span 2 columns) */
  grid-row: 1 / 3;    /* same concept, but for rows */ 
}

/* non-essential decorative styles */
.grid-item {
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}
</style>