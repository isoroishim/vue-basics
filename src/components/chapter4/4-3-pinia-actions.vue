<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">4-3: Pinia Actionsの定義と呼び出し</h2>

      <v-row dense>
        <v-col cols="auto">
          <v-btn color="primary" @click="increment">+1</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="secondary" @click="decrement">-1</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="error" @click="reset">リセット</v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-4" />

      <h3 class="text-h6">現在のカウント: {{ counterStore.count }}</h3>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()

const increment = () => {
  counterStore.increment()
}
const decrement = () => {
  counterStore.decrement()
}
const reset = () => {
  counterStore.reset()
}
</script>
