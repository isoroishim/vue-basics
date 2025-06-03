<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">1-10: 複数条件でアラート切り替え</h2>

      <v-btn @click="count++" class="mb-3" color="primary">カウント:{{ count }}</v-btn>

      <v-alert
        v-if="count === 0"
        type="info"
        variant="tonal"
        icon="mdi-information-outline"
        class="mb-2"
        >初期状態です
      </v-alert>

      <v-alert
        v-else-if="count > 0 && count <= 5"
        type="info"
        variant="tonal"
        icon="mdi-information-outline"
        class="mb-2"
        >カウント開始しました
      </v-alert>

      <v-alert
        v-else-if="count > 5 && count < 10"
        type="warning"
        variant="tonal"
        icon="mdi-alert"
        class="mb-2"
        >もう少しで10です
      </v-alert>

      <v-alert v-else type="success" variant="tonal" icon="mdi-check-circle-outline" class="mb-2"
        >10以上です!
      </v-alert>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
