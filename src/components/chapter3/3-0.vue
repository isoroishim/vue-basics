<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h1 class="text-h5 mb-4">第3章：Vue RouterとSPA構成</h1>
      <p class="mb-4">
        この章では、Vue Routerを活用して単一ページアプリケーション（SPA）を構築する方法を学びます。
        ルーティング、動的パラメータ、モーダル、共通レイアウトなど、実践的なSPA技術を習得します。
      </p>

      <v-divider class="my-4" />

      <h2 class="text-subtitle-1 font-weight-medium mb-2">ルーティング基礎</h2>
      <v-list density="compact">
        <v-list-item to="/3-1" link>3-1: 基本ルーティング（router-view, router-link）</v-list-item>
        <v-list-item to="/3-2" link>3-2: 動的ルートとパラメータ</v-list-item>
        <v-list-item to="/3-3" link>3-3: ネストされたルート</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 font-weight-medium mt-6">モーダルと状態管理</h2>
      <v-list density="compact">
        <v-list-item to="/3-4" link>3-4: ダイアログの基本（開閉）</v-list-item>
        <v-list-item to="/3-5" link>3-5: フォーム付きダイアログ</v-list-item>
        <v-list-item to="/3-6" link>3-6: 簡易的な状態管理（ref + props）</v-list-item>
        <v-list-item to="/3-7" link>3-7: グローバルな状態管理（provide/inject）</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 font-weight-medium mt-6">レイアウト構成と共通コンポーネント</h2>
      <v-list density="compact">
        <v-list-item to="/3-8" link>3-8: グローバルヘッダーの実装</v-list-item>
        <v-list-item to="/3-9" link>3-9: サイドナビゲーションの作成</v-list-item>
        <v-list-item to="/3-10" link>3-10: 全体レイアウトの組み立て</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 font-weight-medium mt-6">まとめ課題</h2>
      <v-list density="compact">
        <v-list-item to="/3-11" link>3-11: Todo風ミニSPAアプリ</v-list-item>
      </v-list>

      <v-divider class="my-4" />

      <v-expansion-panels multiple class="my-6">
        <v-expansion-panel title="対応ドキュメント（Vue Router）">
          <v-expansion-panel-text>
            <ul>
              <li>
                <a href="https://router.vuejs.org/guide/" target="_blank">
                  Vue Router – 基本ガイド
                </a>
              </li>
              <li>
                <a href="https://router.vuejs.org/guide/essentials/route-view.html" target="_blank">
                  router-view – ルーティング表示
                </a>
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="対応ドキュメント（Vuetify）">
          <v-expansion-panel-text>
            <ul>
              <li>
                <a href="https://vuetifyjs.com/en/components/app-bars/" target="_blank">
                  v-app-bar – アプリケーションバー
                </a>
              </li>
              <li>
                <a href="https://vuetifyjs.com/en/components/lists/" target="_blank">
                  v-list – ナビゲーションリスト
                </a>
              </li>
              <li>
                <a href="https://vuetifyjs.com/en/components/dialogs/" target="_blank">
                  v-dialog – ダイアログ
                </a>
              </li>
              <li>
                <a href="https://vuetifyjs.com/en/components/navigation-drawers/" target="_blank">
                  v-navigation-drawer – サイドナビゲーション
                </a>
              </li>
              <li>
                <a href="https://vuetifyjs.com/en/components/containers/" target="_blank">
                  v-container – コンテナ
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
