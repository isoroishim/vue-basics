<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5">カウント：{{ count }}</h2>
      <v-btn color="primary" class="mb-4" @click="addcount">1+</v-btn>

      <v-divider class="my-4" />

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

const addcount = () => {
  count.value++
  history.value.push(count.value)
}
</script>
