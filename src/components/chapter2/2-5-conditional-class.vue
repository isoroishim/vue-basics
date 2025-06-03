<template>
  <v-container class="pa-4">
    <v-sheet :class="sheetClass" class="pa-4" elevation="2">
      <h2 class="text-h5 mb-6">2-5: クラスの動的切り替え (v-bind:class)</h2>

      <v-btn color="primary" @click="toggleTheme" class="mb-4">テーマ切り替え</v-btn>

      <div>
        現在のテーマ: <strong>{{ isDark ? 'ダークモード' : 'ライトモード' }}</strong>
      </div>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

const isDark = ref(false)

const sheetClass = computed(() => {
  return isDark.value ? 'bg-grey-darken-3 text-white' : 'bg-grey-lighten-4 text-black'
})

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>
