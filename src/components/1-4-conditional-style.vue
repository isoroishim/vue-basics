<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-2">カウント条件表示</h2>
      <v-btn :color="count >= 10 ? 'green' : 'primary'" class="mb-4" @click="addCount">+1</v-btn>
      <p v-if="count >= 10">カウントが 10 以上です！</p>
      <p v-else>まだ 10 に達していません</p>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const addCount = () => {
  count.value++
}
</script>
