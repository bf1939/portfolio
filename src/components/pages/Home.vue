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
    </v-col>
    <v-spacer class="v-col-2 d-none d-md-block" />
  </v-row>
  <v-row
    :class="$style.elchika"
    class="bg-surface"
    justify="center"
    align="center"
    no-gutters
  >
    <v-col class="pt-8" cols="12" align="center">
      <img
        :class="$style.elchikaLogo"
        src="@/assets/images/elchika-logo.svg"
        alt="elchika-logo"
      />
    </v-col>
    <v-col cols="12" align="center">
      <div>ハードウェアの開発者コミュニティ</div>
    </v-col>
    <v-col cols="12" align="center">
      <img
        :class="$style.elchikaSite"
        src="@/assets/images/elchika-site.png"
        alt="elchika-site"
      />
    </v-col>
    <v-col cols="12" align="center">
      <a
        :class="$style.elchikaLink"
        href="https://elchika.com/"
        target="_blank"
      >
        https://elchika.com/
      </a>
    </v-col>
  </v-row>
</template>

<style module>
.profile {
  .me {
    width: 100%;
    max-width: 300px;
  }

  .section:nth-child(n + 2) {
    margin-top: 10px;
  }
}

.elchika {
  .elchikaLogo {
    height: 30px;
  }

  .elchikaSite {
    max-width: 70vw;
  }

  .elchikaLink {
    &:visited {
      color: #00bfff;
    }
  }
}
</style>
