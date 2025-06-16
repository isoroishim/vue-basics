<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" :class="boxClass" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">1-13: クリーンコードと再利用性の工夫</h2>

      <v-row class="mb-3">
        <v-col cols="12" sm="4">
          <v-btn @click="increment" color="primary" block>+1</v-btn>
        </v-col>
        <v-col cols="12" sm="4">
          <v-btn @click="decrement" color="error" block>-1</v-btn>
        </v-col>
        <v-col cols="12" sm="4">
          <v-btn @click="reset" variant="outlined" block>リセット</v-btn>
        </v-col>
      </v-row>

      <v-alert
        :type="alertInfo.type"
        variant="tonal"
        :icon="alertInfo.icon"
        border="start"
        density="comfortable"
        class="mb-4"
      >
        <strong>{{ alertInfo.message }}</strong>
      </v-alert>

      <div class="text-subtitle-1 mb-4">現在のカウント: {{ count }}</div>

      <v-divider class="my-4" />

      <h3 class="text-subtitle-2 mb-2">履歴ログ</h3>
      <v-list v-if="history.length">
        <v-list-item v-for="(item, index) in history" :key="index">
          {{ item }}
        </v-list-item>
      </v-list>
      <p v-else>履歴はまだありません</p>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(0)
const history = ref<string[]>([])

const now = () => new Date().toLocaleString()

const addHistory = (label: string) => {
  history.value.push(`${label}: ${now()}`)
}

const increment = () => {
  count.value++
  addHistory('+1')
}
const decrement = () => {
  count.value--
  addHistory('-1')
}
const reset = () => {
  count.value = 0
  history.value = []
}

const boxClass = computed(() => {
  return count.value >= 10 ? 'bg-high' : count.value >= 5 ? 'bg-mid' : 'bg-low'
})

const alertInfo = computed(() => {
  if (count.value === 0) {
    return {
      type: 'info',
      icon: 'mdi-information-outline',
      message: 'カウントは初期状態です'
    } as const
  } else if (count.value < 10) {
    return {
      type: 'warning',
      icon: 'mdi-alert',
      message: '10に近づいています'
    } as const
  } else {
    return {
      type: 'success',
      icon: 'mdi-check-circle-outline',
      message: 'カウントが10以上です'
    } as const
  }
})
</script>

<style scoped>
.bg-low {
  background-color: #f5f5f5;
}
.bg-mid {
  background-color: #fff3cd;
}
.bg-high {
  background-color: #d4edda;
}
</style>
