<script setup>
const rotate = (e, key) => {
  // 同時にclickを発生させない
  if (e.type === "touchstart") e.preventDefault();

  if (rotate[key]) {
    switch (rotate[key].playState) {
      case "running":
        rotate[key].pause();
        break;
      case "paused":
        rotate[key].play();
        break;
    }
  } else {
    rotate[key] = e.target.animate(
      [{ transform: "rotate(0)" }, { transform: "rotate(360deg)" }],
      {
        duration: 5000,
        iterations: Infinity,
      }
    );
  }
};
</script>

<template>
  <v-row
    class="fill-height overflow-hidden"
    justify="center"
    align="center"
    no-gutters
  >
    <img
      :class="$style.me"
      src="/me.png"
      alt="me"
      @click="rotate($event, 'me')"
      @touchstart="rotate($event, 'me')"
    />
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
