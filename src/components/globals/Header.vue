<script setup>
const navList = [
  { value: "profile", to: "/profile" },
  { value: "GitHub", to: "/github", isBlank: true },
];
</script>

<template>
  <div :class="$style.wrapper">
    <h1>
      <router-link to="/">iku ohira</router-link>
    </h1>
    <nav>
      <ul>
        <li v-for="item in navList" :key="item.value">
          <a v-if="item.isBlank" href="" target="_blank">{{ item.value }}</a>
          <router-link v-else :to="item.to">{{ item.value }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style module lang="postcss">
.wrapper {
  height: 50px;
  background-color: #0a0c11;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px;
  font-family: "Alfa Slab One", cursive;

  h1 {
    margin: 0;
    font-size: 29px;

    &:hover {
      text-shadow: -2px -2px 10px #54e58c;
    }
  }

  nav {
    ul {
      padding-left: 0;
      display: flex;
      gap: 15px;

      li {
        font-size: 14px;
        list-style: none;

        &:hover {
          text-shadow: -2px -2px 10px #54e58c;
          transform: translateY(-2px);
        }
      }
    }
  }
}
</style>
