<script setup lang="ts">
//const props = defineProps<{
//  collapsed: boolean
//}>()
</script>

<template>
  <div class="box">
  <svg width="100%" height="100%" viewBox="0 0 100% 100%">
    <defs>
      <mask id="myMask">
        <rect width="100%" height="100%" rx="10" cx="10" fill="white" />
        <rect width="100%" height="100%" rx="10" cx="10" transform-origin="50% 50%" transform="scale(0.99)" fill="black" />
      </mask>
    </defs>
  </svg>
</div>
  
</template>

<style scoped lang="scss">
.box {
  width: 500px;
  height: 500px;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;

	animation: gradient 5s ease infinite;

  //mask: url("@/src/assets/svg/mask.svg");
  mask: url(#myMask);
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