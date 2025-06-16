<template>
  <v-container>
    <v-text-field
      v-model="input"
      label="好きな言葉を入力してください"
      variant="outlined"
      density="comfortable"
      class="mb-4"
    />

    <div class="text-h6 font-weight-medium">入力内容：{{ input }}</div>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')
</script>
