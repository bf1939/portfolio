<script setup>
import layout from "@/components/layouts/Default.vue";
</script>

<template>
  <layout title="about">
    <section :class="$style.section">
      <h2>名前</h2>
      <p>大平 郁</p>
    </section>
    <section :class="$style.section">
      <h2>生年月日</h2>
      <p>1995年3月9日</p>
    </section>
    <section :class="$style.section">
      <h2>職歴</h2>
      <p>
        2017年4月にeimee株式会社に入社後、PHPによるクレジットカード比較サイトの改修に参加。プログラミングの基礎を習得。
        半年後から現在まで、電子工作の知識共有サイトの開発・運営・保守を担当。設計・開発・リリースまでの一連の流れを経験。
        主にKoaでバックエンドを担当していたが、最近ではNuxt.jsでフロントエンドの開発・修正も行っている。
      </p>
    </section>
    <section :class="$style.section">
      <h2>スキル</h2>
      <ul>
        <li>JavaScript<span :class="$style.period">5年</span></li>
        <li>TypeScript<span :class="$style.period">2年</span></li>
        <li>PHP<span :class="$style.period">1年</span></li>
        <li>Koa<span :class="$style.period">5年</span></li>
        <li>Nuxt.js<span :class="$style.period">3年</span></li>
        <li>Docker<span :class="$style.period">5年</span></li>
        <li>PostgreSQL<span :class="$style.period">5年</span></li>
      </ul>
    </section>
  </layout>
</template>

<style module lang="postcss">
.section:nth-child(n + 2) {
  margin-top: 20px;

  ul {
    padding-left: 0;
  }

  li {
    position: relative;
    list-style: none;

    .period {
      position: absolute;
      left: 200px;
    }
  }
}
</style>
