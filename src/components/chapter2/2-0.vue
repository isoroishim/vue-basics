<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h1 class="text-h5 mb-4">2：フォーム入力と条件表示</h1>
      <p class="mb-4">
        フォーム入力のバインディング、バリデーション、条件による動的表示を組み合わせて、ユーザー操作にリアクティブに対応する方法を学びます。
      </p>
      <v-divider class="my-4" />

      <h2 class="text-subtitle-1 mt-6">v-modelとフォームの基本</h2>
      <v-list density="compact">
        <v-list-item to="/2-1" link>2-1: 入力フォームとプレビュー</v-list-item>
        <v-list-item to="/2-2" link>2-2: 入力が空ならボタンを無効化</v-list-item>
        <v-list-item to="/2-3" link>2-3: 入力長さで動的にスタイル変更</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 mt-6">条件分岐と動的表示</h2>
      <v-list density="compact">
        <v-list-item to="/2-4" link>2-4: v-if / v-else / v-show の比較</v-list-item>
        <v-list-item to="/2-5" link>2-5: クラスの動的切り替え</v-list-item>
        <v-list-item to="/2-6" link>2-6: 条件付きリスト表示</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 mt-6">バリデーション（Vuetify + Vue）</h2>
      <v-list density="compact">
        <v-list-item to="/2-7" link>2-7: 必須項目バリデーション</v-list-item>
        <v-list-item to="/2-8" link>2-8: カスタムバリデーションルール</v-list-item>
        <v-list-item to="/2-9" link>2-9: バリデーション付きフォーム送信</v-list-item>
      </v-list>

      <h2 class="text-subtitle-1 mt-6">まとめ課題</h2>
      <v-list density="compact">
        <v-list-item to="/2-10" link>2-10: 入力〜バリデーション〜登録ボタン</v-list-item>
      </v-list>

      <v-divider class="my-4" />

      <v-expansion-panels multiple class="my-6">
        <v-expansion-panel title="対応ドキュメント（Vue）">
          <v-expansion-panel-text>
            <ul>
              <li>
                <a href="https://vuejs.org/guide/essentials/forms.html" target="_blank"
                  >v-model – 双方向バインディング</a
                >
              </li>
              <li>
                <a href="https://vuejs.org/guide/essentials/conditional.html" target="_blank"
                  >v-if / v-else – 条件分岐</a
                >
              </li>
              <li>
                <a href="https://vuejs.org/guide/essentials/class-and-style.html" target="_blank"
                  >v-bind:class – クラスバインディング</a
                >
              </li>
              <li>
                <a href="https://vuejs.org/guide/essentials/list.html" target="_blank"
                  >v-for – リストレンダリング</a
                >
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="対応ドキュメント（Vuetify）">
          <v-expansion-panel-text>
            <ul>
              <li>
                <a href="https://vuetifyjs.com/en/components/text-fields/" target="_blank"
                  >v-text-field – 入力欄</a
                >
              </li>
              <li>
                <a href="https://vuetifyjs.com/en/components/textarea/" target="_blank"
                  >v-textarea – 複数行入力</a
                >
              </li>
              <li>
                <a href="https://vuetifyjs.com/en/components/selects/" target="_blank"
                  >v-select – セレクトボックス</a
                >
              </li>
              <li>
                <a href="https://vuetifyjs.com/en/components/checkboxes/" target="_blank"
                  >v-checkbox – チェックボックス</a
                >
              </li>
              <li>
                <a href="https://vuetifyjs.com/en/components/radio-buttons/" target="_blank"
                  >v-radio-group – ラジオボタン</a
                >
              </li>
              <li>
                <a href="https://vuetifyjs.com/en/components/forms/" target="_blank"
                  >v-form – フォームバリデーション</a
                >
              </li>
              <li>
                <a href="https://vuetifyjs.com/en/components/alerts/" target="_blank"
                  >v-alert – 成功・エラーメッセージ</a
                >
              </li>
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
