<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" :class="boxClass" elevation="2">
      <h2 class="text-h5 mb-4">1-12: カウント統合・履歴・スタイル・条件表示</h2>

      <v-btn @click="increment" class="mr-2" color="primary">+1</v-btn>
      <v-btn @click="decrement" class="mr-2" color="error">-1</v-btn>
      <v-btn @click="reset" variant="outlined">リセット</v-btn>

      <v-alert
        class="mt-4"
        :type="alertType"
        variant="tonal"
        :icon="alertIcon"
        border="start"
        density="comfortable"
      >
        <strong>{{ alertMessage }}</strong>
      </v-alert>
      <v-divider class="my-4"></v-divider>

      <h3 class="text-subtitle-2 mb-2">履歴（クリック時に日時）</h3>
      <v-list density="compact" v-if="history.length">
        <v-list-item v-for="(item, index) in history" :key="index">{{ item }} </v-list-item>
      </v-list>
      <p v-else>履歴はありません</p>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(0)
const history = ref<string[]>([])
const increment = () => {
  count.value++
  history.value.push(`+1: ${new Date().toLocaleString()}`)
}
const decrement = () => {
  count.value--
  history.value.push(`-1: ${new Date().toLocaleString()}`)
}
const reset = () => {
  count.value = 0
  history.value.push(`Reset: ${new Date().toLocaleString()}`)
}
//背景スタイル
const boxClass = computed(() => {
  if (count.value >= 10) return 'bg-high'
  if (count.value >= 5) return 'bg-mid'
  return 'bg-low'
})

//アラート表示
const alertMessage = computed(() => {
  if (count.value === 0) return 'カウントは初期値'
  if (count.value < 10) return '10を目指しましょう'
  return 'カウントが10以上です'
})
//
const alertType = computed(() => {
  if (count.value === 0) return 'info'
  if (count.value < 10) return 'warning'
  return 'success'
})
//
const alertIcon = computed(() => {
  if (count.value === 0) return 'mdi-information-outline'
  if (count.value < 10) return 'mdi-alert'
  return 'mdi-check-circle-outline'
})
</script>
<style scoped>
.bg-low {
  background-color: #f9f9f9;
}
.bg-mid {
  background-color: #fff3cd;
}
.bg-high {
  background-color: #d4edda;
}
</style>
