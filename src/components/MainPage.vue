<script setup>
import { usePreferredDark } from '@vueuse/core'

// is user prefers dark theme
const isDark = usePreferredDark()

</script>

<template>
  <div id="image">
    <img class="center" src="@/assets/images/logo_medw_nobg_white_lines.png" alt="logo" v-if="isDark">
    <img class="center" src="@/assets/images/logo_medw_nobg_black_lines.png" alt="logo" v-if="!isDark">
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
  /* Have image resize based on the view size */
  width: 100%;
  height: auto;
  max-width: 60vw;
  /* Center within View */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.center {
  text-align: center;
}

</style>