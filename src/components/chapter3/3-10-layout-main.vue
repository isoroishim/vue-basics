<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vue学習アプリ</v-toolbar-title>
      <v-spacer />
      <v-btn text to="/">ホーム</v-btn>
      <v-btn text to="/3-0">第3章トップ</v-btn>
    </v-app-bar>

    <v-navigation-drawer app permanent color="grey-lighten-4">
      <v-list dense>
        <v-list-item to="/" link>ホーム</v-list-item>
        <v-list-item to="/3-0" link>第3章トップ</v-list-item>
        <v-list-item to="/3-8" link>ヘッダーサンプル</v-list-item>
        <v-list-item to="/3-9" link>サイドバーサンプル</v-list-item>
        <v-list-item to="/3-10" link>全体レイアウト</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-4">
        <h2 class="text-h5 font-weight-bold mb-4">全体レイアウトサンプル</h2>
        <p>これはヘッダーとサイドバーをもつ全体のレイアウトの例です。</p>
      </v-container>
    </v-main>
  </v-app>
</template>
