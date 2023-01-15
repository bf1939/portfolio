<script setup></script>

<template>
  <v-app-bar
    :class="$style.wrapper"
    app
    absolute
    density="compact"
    elevation="0"
  >
    <v-container fluid>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="auto">
          <v-app-bar-title :class="$style.title">
            IKU OHIRA'S PORTFOLIO
          </v-app-bar-title>
        </v-col>
        <v-btn
          :class="$style.github"
          variant="plain"
          icon="mdi-github"
          href="https://github.com/bf910/portfolio"
          target="_blank"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style module lang="postcss">
.wrapper {
  position: relative;

  .title {
    font-family: reitam;
  }

  .github {
    position: absolute;
    right: 10px;
  }
}
</style>
