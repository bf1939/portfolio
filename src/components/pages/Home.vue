<script setup></script>

<template>
  <div :class="$style.fadeUp">こんにちは！</div>
</template>

<style module lang="postcss">
.fadeUp {
  animation: fadeUp 2s;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
