<script setup>
import { usePreferredDark } from '@vueuse/core'

// is user prefers dark theme
const isDark = usePreferredDark()

</script>

<template>
  <div class="fill column items-center justify-center content-center">
    <img class="col-auto" style="min-width: 100%; max-width: 100%; min-height: auto;" src="@/assets/images/logo_medw_nobg_white_lines.png" alt="logo" v-if="isDark">
    <img class="col-auto" style="min-width: 100%; max-width: 100%; min-height: auto;" src="@/assets/images/logo_medw_nobg_black_lines.png" alt="logo" v-if="!isDark">
    <q-btn class="col glossy q-mt-md" label="START" to="/about" color="warning">
    </q-btn>
  </div>
</template>