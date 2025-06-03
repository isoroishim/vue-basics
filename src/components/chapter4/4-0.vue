<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h1 class="text-h5 mb-4">第4章：PiniaとAPI通信の基礎</h1>
      <p class="mb-4">
        この章では、Vueアプリに状態管理（Pinia）とAPI通信（fetch/axios）を組み込み、
        よりモダンなフロントエンドアーキテクチャを学びます。
        ストア設計、API連携、エラーハンドリングなど実務で必須の技術を身につけます。
      </p>

      <v-divider class="my-4" />

      <h2 class="text-subtitle-1 font-weight-medium mb-2">状態管理（Pinia）</h2>
      <v-list density="compact">
        <v-list-item to="/4-1" link>4-1: Pinia導入・ストアの作成</v-list-item>
        <v-list-item to="/4-2" link>4-2: ストアの読み書き・リアクティブ化</v-list-item>
        <v-list-item to="/4-3" link>4-3: Actionsの定義と使用</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 font-weight-medium mt-6">API通信の基礎</h2>
      <v-list density="compact">
        <v-list-item to="/4-4" link>4-4: fetchによるデータ取得</v-list-item>
        <v-list-item to="/4-5" link>4-5: axiosの基本GET/POST</v-list-item>
        <v-list-item to="/4-6" link>4-6: PiniaストアからAPI呼び出し</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 font-weight-medium mt-6">実務的な構成とエラーハンドリング</h2>
      <v-list density="compact">
        <v-list-item to="/4-7" link>4-7: try-catchでエラー対応</v-list-item>
        <v-list-item to="/4-8" link>4-8: 複数ストアの分割管理</v-list-item>
        <v-list-item to="/4-9" link>4-9: APIサービス層の切り出し</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 font-weight-medium mt-6">まとめ課題</h2>
      <v-list density="compact">
        <v-list-item to="/4-10" link>4-10: Pinia + axios CRUDアプリ</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 font-weight-medium mt-6">番外編</h2>
      <v-list density="compact">
        <v-list-item to="/4-11" link>4-11: ローカルタスク管理アプリ（CRUD基礎練習）</v-list-item>
      </v-list>

      <v-divider class="my-4" />

      <v-expansion-panels multiple class="my-6">
        <v-expansion-panel title="対応ドキュメント（Pinia）">
          <v-expansion-panel-text>
            <ul>
              <li>
                <a href="https://pinia.vuejs.org/" target="_blank"> Pinia – 状態管理ライブラリ </a>
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="対応ドキュメント（API通信）">
          <v-expansion-panel-text>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/ja/docs/Web/API/Fetch_API" target="_blank">
                  fetch – ブラウザ標準HTTPリクエスト
                </a>
              </li>
              <li>
                <a href="https://github.com/axios/axios" target="_blank">
                  axios – HTTPクライアント
                </a>
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
// セクション導入ナビゲーション
</script>
