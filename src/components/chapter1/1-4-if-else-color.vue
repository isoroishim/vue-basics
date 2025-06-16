<template>
  <v-container class="pa-4">
    <!-- カウント表示 -->
    <v-sheet class="pa-4" elevation="2" rounded>
      <h2 class="text-h5 mb-4">1-4: v-if / v-else + ボタン色とラベル切り替え</h2>

      <div class="mb-4">
        <v-btn :color="count >= 10 ? 'green' : 'primary'" @click="addCount" class="mr-2">
          {{ count >= 10 ? 'Good' : '+1' }}
        </v-btn>
        <v-btn :color="count <= 0 ? 'red' : 'primary'" @click="subCount" class="mr-2">
          {{ count <= 0 ? 'Bad' : '-1' }}
        </v-btn>
      </div>

      <v-divider class="my-4" />

      <p class="text-subtitle-1">
        <span v-if="count >= 10">カウントは10以上です</span>
        <span v-else-if="count <= 0">カウントは0以下です</span>
        <span v-else>カウントは0〜10です</span>
      </p>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const addCount = () => {
  count.value++
}

const subCount = () => {
  count.value--
}
</script>
