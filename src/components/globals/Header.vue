<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (path) => router.push(path);

const navList = [{ value: "about", to: "/about" }];
</script>

<template>
  <v-app-bar
    :class="$style.appBar"
    app
    :absolute="false"
    density="compact"
    elevation="0"
  >
    <v-container fluid>
      <v-row align="center" no-gutters>
        <v-col cols="auto">
          <v-app-bar-title :class="$style.title" @click="goTo('/')">
            IKU OHIRA
          </v-app-bar-title>
        </v-col>
        <v-spacer class="d-none d-sm-block" />
        <v-col cols="auto">
          <v-btn
            v-for="item in navList"
            :key="item.value"
            :class="$style.navButton"
            @click="goTo(item.to)"
          >
            {{ item.value }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style module lang="postcss">
.appBar {
  font-family: reitam;

  .title {
    font-size: 29px;
    cursor: pointer;
  }

  .navButton {
    padding: 0;

    @media (hover: hover) {
      &:hover {
        transform: translateY(-2px);
      }
    }
  }
}
</style>
