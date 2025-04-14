<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-2">カウント: {{ count }}</h2>

      <div class="d-flex gap-2 mb-4">
        <v-btn color="primary" @click="addCount">+1</v-btn>
        <v-btn color="error" @click="subCount">-1</v-btn>
        <v-btn color="secondary" @click="resetCount">リセット</v-btn>
      </div>

      <v-divider class="my-4"></v-divider>

      <v-list>
        <v-list-item v-for="(item, i) in history" :key="i">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const history = ref<number[]>([])

const addCount = () => {
  count.value++
  history.value.push(count.value)
}

const subCount = () => {
  count.value--
  history.value.push(count.value)
}

const resetCount = () => {
  count.value = 0
  history.value = []
}
</script>
