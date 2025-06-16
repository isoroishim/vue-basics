<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">4-2: Pinia ストアの読み書きとリアクティブ化</h2>

      <div class="mb-4">
        <v-text-field
          v-model="counterStore.inputValue"
          label="値を入力して保存"
          type="number"
          class="mt-2"
        />
        <v-btn color="primary" class="mt-2" @click="saveValue">保存する</v-btn>
      </div>
      <v-divider class="my-4" />

      <div>
        <h3 class="text-h6">現在のカウント: {{ counterStore.count }}</h3>
      </div>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

//ストア呼び出し
const counterStore = useCounterStore()

// 保存ボタン押下時の処理
const saveValue = () => {
  const value = Number(counterStore.inputValue)
  if (!isNaN(value)) {
    counterStore.setCount(value)
  }
}
</script>
