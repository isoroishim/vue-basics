<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">2-1: 入力フォームとプレビュー</h2>

      <v-text-field
        v-model="inputText"
        label="名前を入力してください"
        variant="outlined"
        density="comfortable"
        class="mb-4"
      />

      <v-card class="pa-4" outlined>
        <div>
          プレビュー: <strong>{{ inputText }}</strong>
        </div>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const inputText = ref('')
</script>
