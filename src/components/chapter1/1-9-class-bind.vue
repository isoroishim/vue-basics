<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">1-9: v-bind:class によるスタイル切替</h2>
      <v-btn :class="{ highlight: count >= 10 }" color="primary" @click="count++" class="mb-3">
        カウント：{{ count }}
      </v-btn>

      <p>※ カウントが10以上でボタンの色が変更</p>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
<style scoped>
.highlight {
  background-color: #4caf50 !important;
  color: white;
}
</style>
