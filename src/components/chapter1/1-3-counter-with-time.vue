<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-2">カウント：{{ count }}</h2>
      <v-btn variant="outlined" color="primary" class="mr-2 my-2" @click="addCount">+1</v-btn>
      <v-btn variant="outlined" color="error" class="mr-2 my-2" @click="subCount">-1</v-btn>
      <v-btn variant="outlined" color="warning" class="mr-2 my-2" @click="reset">リセット</v-btn>

      <v-divider class="my-4"></v-divider>

      <v-list>
        <v-list-item v-for="(item, i) in history" :key="i">
          <v-list-item-title>{{ item.value }} ({{ item.time }})</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const history = ref<{ value: number; time: string }[]>([])

const addCount = () => {
  count.value++
  pushHistory()
}

const subCount = () => {
  count.value--
  pushHistory()
}

const reset = () => {
  count.value = 0
  history.value = []
}

const pushHistory = () => {
  const now = new Date()
  const timestamp = now.toLocaleTimeString()
  history.value.push({ value: count.value, time: timestamp })
}
</script>
