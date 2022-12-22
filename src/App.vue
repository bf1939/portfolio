<script setup>
import Footer from "@/components/globals/Footer.vue";
import Header from "@/components/globals/Header.vue";
</script>

<template>
  <div :class="$style.wrapper">
    <header>
      <Header />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style module lang="postcss">
:root {
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  color: #ffffff;
}

.wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #2b3038;

  main {
    padding: 30px;
  }
}
</style>
