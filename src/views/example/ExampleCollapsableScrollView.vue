<script setup lang="ts">
import CreeperFace from '@/components/icons/CreeperFace.vue';
import ScrollView from '@/views/scroll/ScrollView.vue';
import CollapsableView from '@/views/collapsable/CollapsableView.vue';
import { reactive, ref } from 'vue';
import CollapseIcon from '@/components/icons/CollapseIcon.vue';

const collapsed = ref<boolean>(false);

const gradientStyle = reactive({
  'transform': `rotate(deg)`
})

function switchCollapse() {
  collapsed.value = !collapsed.value

  gradientStyle.transform = `rotate(${collapsed.value ? -90 : 0}deg)`
}
</script>

<template>
  <div class="container">
    <div class="window-bar" @click="switchCollapse()">
      <p>Window title</p>
      <CollapseIcon :style="gradientStyle"/>
    </div>
    <CollapsableView :collapsed="collapsed">
      <div class="elements-container">
        <div class="element">
          <CreeperFace/>
          <p>element #1</p>
        </div>

        <div class="element">
          <CreeperFace/>
          <p>element #2</p>
        </div>

        <div class="element">
          <CreeperFace/>
          <p>element #3</p>
        </div>

        <CollapsableView :collapsed="true">
          <ScrollView>
            <div v-for="(value, index) in 20" class="element">
              <CreeperFace/>
              <p>element #{{ index }}</p>
            </div>
          </ScrollView>
        </CollapsableView>
        <div class="element">
          <CreeperFace/>
          <p>element #4</p>
        </div>

        <div class="element">
          <CreeperFace/>
          <p>element #5</p>
        </div>
      </div>
    </CollapsableView>
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

.dropdown-list {
  transition: 1.5s ease-in-out;
}

.window-bar {
  margin-bottom: 4px;

  display: flex;
  gap: 6px;

  p {
    font-size: 20px;
    font-family: 'minecraft-ten-v2-regular';
  }

  .icon {
    width: 12px;
    transition: transform 1.5s ease-in-out;
  }
}

.elements-container {
  padding-left: 6px;
  padding-right: 6px;

  display: flex;
  flex-direction: column;
  gap: 6px;
}
.element {
  display: flex;
  gap: 3px;
}
.element p {
  font-family: 'minecraft-seven';
}
</style>