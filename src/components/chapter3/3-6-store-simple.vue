<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2>3-6: 簡易的な状態処理</h2>

      <v-text-field
        v-model="message"
        label="親コンポーネントから渡すメッセージ"
        variant="outlined"
        density="comfortable"
        class="mb-4"
      />
      <ChildDisplay :text="message" />
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ChildDisplay from './3-6-ChildDisplay.vue'

const message = ref('')
</script>
