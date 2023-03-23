<script setup></script>

<template>
  <v-row :class="$style.profile" class="ma-0" justify="center" align="center">
    <v-spacer class="v-col-2 d-none d-md-block" />
    <v-col class="v-col-12 v-col-sm-auto" align="center">
      <img :class="$style.me" src="/me.png" alt="me" />
    </v-col>
    <v-col>
      <section :class="$style.section">
        <h2>基本情報</h2>
        <p>大平 郁<br />1995年3月9日生まれ</p>
      </section>
      <section :class="$style.section">
        <h2>経歴</h2>
        <p>
          2017年4月にエイミー株式会社に入社後、PHPによるクレジットカード比較サイトの改修に参加。プログラミングの基礎を習得。
          半年後から現在まで、電子工作の知識共有サイトの開発・運営・保守を担当。設計・開発・リリースまでの一連の流れを経験。
          主にKoaでバックエンドを担当していたが、最近ではNuxt.jsでフロントエンドの開発・修正も行っている。
        </p>
      </section>
      <section :class="$style.section">
        <h2>スキル</h2>
        <div :class="$style.skill">
          <v-chip>JavaScript 5年</v-chip>
          <v-chip>TypeScript 3年</v-chip>
          <v-chip>PHP 1年</v-chip>
          <v-chip>Koa.js 5年</v-chip>
          <v-chip>Nuxt.js 3年</v-chip>
          <v-chip>Docker 5年</v-chip>
          <v-chip>PostgreSQL 5年</v-chip>
        </div>
      </section>
    </v-col>
    <v-spacer class="v-col-2 d-none d-md-block" />
  </v-row>
  <v-row
    :class="$style.elchika"
    class="bg-surface ma-0"
    justify="center"
    align="center"
    no-gutters
  >
    <v-spacer class="v-col-2 d-none d-md-block" />
    <v-col>
      <v-row class="ma-0">
        <v-col class="v-col-12" align="center">
          <img
            :class="$style.elchikaLogo"
            src="@/assets/images/elchika-logo.svg"
            alt="elchika-logo"
          />
        </v-col>
        <v-col class="v-col-12" align="center">
          <div class="font-weight-bold text-h6 text-sm-h5">
            ハードウェアの開発者コミュニティ
          </div>
        </v-col>
        <v-col class="v-col-12" align="center">
          <img
            :class="$style.elchikaSite"
            src="@/assets/images/elchika-site.png"
            alt="elchika-site"
          />
        </v-col>
        <v-col class="v-col-12">
          <a
            :class="$style.elchikaLink"
            href="https://elchika.com/"
            target="_blank"
          >
            https://elchika.com/
          </a>
          <p class="font-weight-bold text-subtitle-1">
            バックエンド・フロントエンド全般を担当
          </p>
        </v-col>
      </v-row>
    </v-col>
    <v-spacer class="v-col-2 d-none d-md-block" />
  </v-row>
</template>

<style module>
.profile {
  .me {
    max-width: 340px;
  }

  .section:nth-child(n + 2) {
    margin-top: 10px;
  }

  .skill {
    display: flex;
    flex-wrap: wrap;
    gap: 7px 5px;

    :global(.v-chip) {
      color: #ffffff;
      background-color: #ba03c9;
    }
  }
}

.elchika {
  padding-top: 45px;

  .elchikaLogo {
    height: 30px;
  }

  .elchikaSite {
    width: 100%;
  }

  .elchikaLink {
    &:visited {
      color: #00bfff;
    }
  }
}
</style>
