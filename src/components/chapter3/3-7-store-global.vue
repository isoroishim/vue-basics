<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">3-7: 簡易グローバルストア(provide/inject)</h2>

      <v-text-field
        v-model="globalText"
        label="グローバルテキスト"
        variant="outlined"
        density="comfortable"
        class="mb-4"
      />

      <v-divider class="my-4" />

      <ChildDisplay />
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import ChildDisplay from './3-7-ChildDisplay.vue'

const globalText = ref('初期テキスト')
provide('globalText', globalText)
</script>
