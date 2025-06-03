<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">4-1: Piniaセットアップと基本ストア作成</h2>

      <v-divider class="my-4" />

      <v-btn color="primary" @click="increment">カウントアップ</v-btn>

      <v-alert
        v-if="counterStore.count >= 5"
        type="info"
        variant="tonal"
        border="start"
        class="mt-4"
      >
        カウントが5以上になりました。
      </v-alert>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()

const increment = () => {
  counterStore.increment()
}
</script>
