<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">
        3-1: 基本ルーティング（router-view, router-link）
      </h2>

      <v-list dense>
        <v-list-item to="/3-1/page1" link>ページ1へ移動</v-list-item>
        <v-list-item to="/3-1/page2" link>ページ2へ移動</v-list-item>
        <v-list-item to="/3-1" link exact>非表示 </v-list-item>
      </v-list>

      <v-divider class="my-4" />

      <h3 class="text-subtitle-2 mb-2">現在の表示</h3>

      <v-sheet class="pa-4" color="grey-lighten-4" min-height="200px">
        <router-view />
      </v-sheet>
    </v-sheet>
  </v-container>
</template>
