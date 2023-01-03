<script setup></script>

<template>
  <v-row class="fill-height" justify="center" align="center" no-gutters>
    <img :class="$style.me" src="/me.png" alt="me" />
  </v-row>
</template>

<style module lang="postcss">
.me {
  width: 100%;
  max-width: calc(
    (100vh - var(--v-layout-top) - var(--v-layout-bottom) - 32px) / 23 * 21
  );
}
</style>
