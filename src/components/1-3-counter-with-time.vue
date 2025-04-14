<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-2">カウント履歴（日時付き）</h2>
      <v-btn color="primary" class="mb-4" @click="addCount">+1</v-btn>

      <v-divider class="my-4"></v-divider>

      <v-list>
        <v-list-item v-for="(item, i) in historyWithTime" :key="i">
          <v-list-item-title>{{ item.value }}（{{ item.time }}）</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const historyWithTime = ref<{ value: number; time: string }[]>([])

const addCount = () => {
  count.value++
  historyWithTime.value.push({
    value: count.value,
    time: new Date().toLocaleTimeString()
  })
}
</script>
