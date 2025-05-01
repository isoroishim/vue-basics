<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">1-4-1: :class によるスタイル変更</h2>

      <div class="mb-4">
        <v-btn :class="btnClass" color="primary" @click="addCount">{{ count }}</v-btn>
      </div>

      <v-divider class="my-4"></v-divider>

      <p>10以上になるとボタンの色が変わります</p>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(0)

const btnClass = computed(() => {
  return {
    over: count.value >= 10
  }
})
const addCount = () => {
  count.value++
}
</script>
<style scoped>
.over {
  background-color: #14a319 !important;
  color: white;
}
</style>
