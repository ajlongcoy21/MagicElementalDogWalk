<script setup>

</script>

<template>
  <div id="image">
    <img class="center" src="@/assets/images/logo_medw_bg_white_lines.png" alt="logo">
  </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
  width: 100%;
  height: auto;
  /* Magic! */
  max-width: 50vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.center {
  text-align: center;
}

</style>