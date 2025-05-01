<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">1-4-2: computed でクラスを切り替え</h2>
      <div class="mb-4">
        <v-btn variant="flat" :class="countClass" @click="addCount" class="mr-2">+1</v-btn>
        <v-btn variant="flat" :class="countClass" @click="subCount" class="mr-2">-1</v-btn>
      </div>

      <v-divider class="my-4" />
      <p class="text-subtitle-1">現在のカウント:{{ count }}</p>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(0)

const countClass = computed(() => {
  if (count.value >= 10) {
    return 'custom-green'
  } else if (count.value <= 0) {
    return 'custom-red'
  } else {
    return 'custom-blue'
  }
})

const addCount = () => {
  count.value++
}
const subCount = () => {
  count.value--
}
</script>
<style scoped>
.custom-green {
  background-color: #4caf50;
  color: white;
}
.custom-red {
  background-color: #f44336;
  color: white;
}
.custom-blue {
  background-color: #1976b2;
  color: white;
}
</style>
