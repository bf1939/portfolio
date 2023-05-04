<script setup></script>

<template>
  <v-row class="ma-0 fill-height" align="center" justify="center">
    <div :class="$style.text">This page could not be found.</div>
  </v-row>
</template>

<style module>
.text {
  font-family: reitam;
  font-size: 22px;

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
}
</style>
