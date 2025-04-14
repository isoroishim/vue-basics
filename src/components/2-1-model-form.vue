<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">2-1: 入力フォームとリアルタイムプレビュー</h2>

      <v-text-field
        v-model="input"
        label="入力してください"
        outlined
        clearable
        class="mb-4"
      ></v-text-field>

      <v-divider class="my-4"></v-divider>

      <p>プレビュー: <strong>{{ input }}</strong></p>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>
