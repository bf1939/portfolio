<script setup>
import Header from "@/components/globals/Header.vue";
import { useRouter } from "vue-router";

if (location.hash) {
  const router = useRouter();
  router.push(location.hash.slice(1));
}
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid class="fill-height">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style module lang="postcss">
@font-face {
  font-family: "reitam";
  src: url("@/assets/fonts/Reitam Regular.otf") format("opentype");
}

:root {
  min-width: 340px;
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
}
</style>
