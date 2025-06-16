<template>
  <v-container>
    <v-card class="pa-4">
      <h3 class="text-subtitle-1 mb-2">子コンポーネントで受け取った内容</h3>
      <p>{{ injectedText }}</p>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import type { Ref } from 'vue'

const injectedText = inject<Ref<string>>('globalText')
</script>
