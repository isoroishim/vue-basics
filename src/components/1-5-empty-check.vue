<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-2">履歴の有無チェック</h2>
      <v-btn color="primary" class="mb-4" @click="addCount">+1</v-btn>

      <v-divider class="my-4"></v-divider>

      <v-list v-if="history.length">
        <v-list-item v-for="(item, i) in history" :key="i">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <p v-else>履歴がありません</p>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const history = ref<number[]>([])

const addCount = () => {
  count.value++
  history.value.push(count.value)
}
</script>
