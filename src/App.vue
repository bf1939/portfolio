<script setup>
import Footer from "@/components/globals/Footer.vue";
import Header from "@/components/globals/Header.vue";
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid class="fill-height">
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style module lang="postcss">
@font-face {
  font-family: "reitam";
  src: url("@/assets/font/Reitam Regular.otf") format("opentype");
}

:root {
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
}
</style>
