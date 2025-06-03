<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">3-4: ダイアログの基本</h2>

      <v-btn color="primary" @click="dialog = true">ダイアログを開く</v-btn>

      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title>ダイアログタイトル</v-card-title>
          <v-card-text>ダイアログ本文</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text @click="dialog = false">戻る</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
</script>
