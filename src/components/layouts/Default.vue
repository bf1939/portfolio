<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <v-row class="fill-height">
    <v-spacer class="d-none d-md-block" />
    <v-col class="v-col-none v-col-md-7">
      <v-row>
        <v-col>
          <h2 :class="$style.title">
            {{ props.title }}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <slot />
        </v-col>
      </v-row>
    </v-col>
    <v-spacer class="d-none d-md-block" />
  </v-row>
</template>

<style module lang="postcss">
.title {
  font-family: reitam;
  font-size: 90px;

  @media screen and (max-width: 600px) {
    font-size: 70px;
  }
}
</style>
