<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h1 class="text-h5 mb-4">1ヶ月目：Vue & Vuetify 基礎習得</h1>
      <p>Vue 3 + Vuetify を使って、基本構文・UI構築・状態管理を順番に学んでいきます。</p>
      <v-divider class="my-4" />

      <h2 class="text-subtitle-1">Week 1：カウンター構築とイベント処理</h2>
      <v-list density="compact">
        <v-list-item to="/1-1" link>1-1: カウンター（+1）</v-list-item>
        <v-list-item to="/1-2" link>1-2: カウンター（+/-/リセット）</v-list-item>
        <v-list-item to="/1-3" link>1-3: カウント履歴 + 日時</v-list-item>
        <v-list-item to="/1-4" link>1-4: スタイル変更</v-list-item>
        <v-list-item to="/1-5" link>1-5: 空チェックとアラート</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 mt-6">Week 2：入力処理と双方向バインディング</h2>
      <v-list density="compact">
        <v-list-item to="/1-6" link>1-6: 入力プレビュー</v-list-item>
        <v-list-item to="/1-7" link>1-7: 空チェックアラート</v-list-item>
        <v-list-item to="/1-8" link>1-8: 複数入力とデータ管理</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 mt-6">Week 3：条件分岐とスタイルの動的適用</h2>
      <v-list density="compact">
        <v-list-item to="/1-9" link>1-9: バインドによる色変更</v-list-item>
        <v-list-item to="/1-10" link>1-10: 複数条件の表示制御</v-list-item>
        <v-list-item to="/1-11" link>1-11: computedでのスタイル分離</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 mt-6">Week 4：まとめと設計整理</h2>
      <v-list density="compact">
        <v-list-item to="/1-12" link>1-12: Week総復習アプリ</v-list-item>
        <v-list-item to="/1-13" link>1-13: ロジックとUIの分離</v-list-item>
      </v-list>

      <v-divider class="my-4" />

      <v-expansion-panels multiple class="my-6">
        <v-expansion-panel title="対応ドキュメント（Vue）">
      <v-expansion-panel-text>
      <ul>
        <li><a href="https://vuejs.org/api/reactivity-core.html#ref" target="_blank">ref – Vue公式</a></li>
        <li><a href="https://vuejs.org/guide/essentials/event-handling.html" target="_blank">@click – イベントハンドリング</a></li>
        <li><a href="https://vuejs.org/guide/essentials/list.html" target="_blank">v-for – リスト描画</a></li>
        <li><a href="https://vuejs.org/guide/essentials/forms.html" target="_blank">v-model – 双方向バインディング</a></li>
        <li><a href="https://vuejs.org/guide/essentials/conditional.html" target="_blank">v-if / v-else – 条件分岐</a></li>
        <li><a href="https://vuejs.org/guide/essentials/class-and-style.html#binding-html-classes" target="_blank">v-bind:class – クラスバインディング</a></li>
      </ul>
    </v-expansion-panel-text>
  </v-expansion-panel>

  <v-expansion-panel title="対応ドキュメント（Vuetify）">
    <v-expansion-panel-text>
      <ul>
        <li><a href="https://vuetifyjs.com/en/components/buttons/" target="_blank">v-btn – ボタン</a></li>
        <li><a href="https://vuetifyjs.com/en/components/dividers/" target="_blank">v-divider – 区切り線</a></li>
        <li><a href="https://vuetifyjs.com/en/components/lists/" target="_blank">v-list – リスト</a></li>
        <li><a href="https://vuetifyjs.com/en/components/alerts/" target="_blank">v-alert – アラート</a></li>
        <li><a href="https://vuetifyjs.com/en/components/text-fields/" target="_blank">v-text-field – 入力欄</a></li>
        <li><a href="https://vuetifyjs.com/en/components/sheets/" target="_blank">v-sheet – コンテナシート</a></li>
      </ul>
    </v-expansion-panel-text>
  </v-expansion-panel>
</v-expansion-panels>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
// ナビゲーション・ガイドのみ
</script>
