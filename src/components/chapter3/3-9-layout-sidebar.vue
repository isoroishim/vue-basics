<template>
  <v-app>
    <v-navigation-drawer app permanent color="grey-lightten-4">
      <v-list dense>
        <v-list-item to="/" link>ホーム</v-list-item>
        <v-list-item to="/3-0" link>第3章トップ</v-list-item>
        <v-list-item to="/3-8" link>ヘッダーサンプル</v-list-item>
        <v-list-item to="/3-9" link>サイドバーサンプル</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-4">
        <h2 class="text-h5 font-weight-bold mb-4">サイドバー付きレイアウト</h2>
        <p>ここがメインコンテンツになります。</p>
      </v-container>
    </v-main>
  </v-app>
</template>
