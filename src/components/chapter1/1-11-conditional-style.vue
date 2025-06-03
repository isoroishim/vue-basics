<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" :class="boxClass" elevation="2">
      <h2 class="text-h5 mb-4">1-11: computed によるスタイルの再利用</h2>

      <v-btn @click="count++" color="error" class="text-subtitle-1 font-weight-bold mb-3"
        >カウント:{{ count }}</v-btn
      >

      <p>背景はカウントの値に応じて切り替わります</p>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(0)

const boxClass = computed(() => {
  if (count.value >= 10) return 'high'
  if (count.value >= 5) return 'mid'
  return 'low'
})
</script>
<style scoped>
.low {
  background-color: #f3f3f3;
}
.mid {
  background-color: #fff3cd;
}
.high {
  background-color: #d4edda;
}
</style>
