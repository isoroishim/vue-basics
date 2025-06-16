<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h1 class="text-h5 mb-4">Vue学習 - 章一覧</h1>

      <v-list density="comfortable">
        <v-list-item to="/1-0" link>第1章：Vue基本構文とVuetify入門</v-list-item>
        <v-list-item to="/2-0" link>第2章：フォームと条件分岐・バリデーション</v-list-item>
        <v-list-item to="/3-0" link>第3章：Vue RouterとSPA構成</v-list-item>
        <v-list-item to="/4-0" link>第4章：PiniaとAPI通信の基礎</v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
// 章トップナビゲーションのみ
</script>
