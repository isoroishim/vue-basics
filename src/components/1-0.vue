<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">第1章：基本構文とカウンター</h2>
      <p>この章では、Vueの基本的な構文やリアクティブなデータ、イベント、リスト表示</p>

      <v-expansion-panels multiple class="my-6">
        <v-expansion-panel title="対応する公式ドキュメント">
          <v-expansion-panel-text>
            <ul>
              <li><a href="https://vuejs.org/api/reactivity-core.html#ref" target="_blank">ref() – Vue公式</a></li>
              <li><a href="https://vuejs.org/guide/essentials/event-handling.html" target="_blank">@click –
                  イベントハンドリング</a></li>
              <li><a href="https://vuejs.org/guide/essentials/list.html" target="_blank">v-for – リスト描画</a></li>
              <li><a href="https://router.vuejs.org/guide/essentials/route-view.html" target="_blank">router-view – Vue
                  Router</a></li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-list>
        <v-list-item to="/1-1" link>1-1: カウンター（ref）</v-list-item>
        <v-list-item to="/1-2" link>1-2: +1 / -1 / リセットボタン</v-list-item>
        <v-list-item to="/1-3" link>1-3: 履歴に時刻を追加</v-list-item>
        <v-list-item to="/1-4" link>1-4: 条件でスタイル変更</v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>
