<template>
  <v-container>
    <v-text-field
      v-model="input"
      label="入力してください"
      variant="outlined"
      density="comfortable"
      class="mb-2"
    />
    <v-alert
      v-if="input === ''"
      type="warning"
      variant="tonal"
      density="comfortable"
      icon="mdi-alert-circle-outline"
      >必須項目を入力してください
    </v-alert>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>
