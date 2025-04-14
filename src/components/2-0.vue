<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">第2章：フォーム入力と条件表示</h2>
      <p>この章では、フォーム入力のバインディングや条件による表示制御など、ユーザー入力に対する反応を学びます。</p>

      <v-expansion-panels multiple class="my-6">
        <v-expansion-panel title="対応する公式ドキュメント">
          <v-expansion-panel-text>
            <ul>
              <li><a href="https://vuejs.org/guide/essentials/forms.html" target="_blank">v-model – 双方向バインディング</a></li>
              <li><a href="https://vuejs.org/guide/essentials/conditional.html" target="_blank">v-if / v-else – 条件分岐</a>
              </li>
              <li><a href="https://vuetifyjs.com/en/components/text-fields/" target="_blank">v-text-field – Vuetify</a>
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-list>
        <v-list-item to="/2-1" link>2-1: 入力フォームとプレビュー</v-list-item>
        <v-list-item to="/2-2" link>2-2: 入力が空ならボタンを無効化</v-list-item>
        <v-list-item to="/2-3" link>2-3: 入力長さで動的にスタイル変更</v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
</script>
