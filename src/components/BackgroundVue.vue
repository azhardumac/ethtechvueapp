<template>
  <div class="backgv">
    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_enrsedre.json" background="transparent" speed="0.65" loop autoplay> </lottie-player>
  </div>
</template>

<script>
export default {
  name: "BackgroundVue",
};
</script>

<style>
.backgv {
  cursor: pointer;
  position: relative;
  width: 100%;
  height: auto;
  z-index: -1;
}
</style>
