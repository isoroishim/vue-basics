<template>
  <v-container>
    <v-text-field
      v-model="name"
      label="名前を入力"
      variant="outlined"
      density="comfortable"
      class="mb-3"
    />

    <v-btn @click="countUp" :disabled="isEmpty" color="primary" class="mb-3"> カウント </v-btn>

    <v-alert
      :type="isEmpty ? 'info' : 'success'"
      :icon="isEmpty ? 'mdi-alert-circle-outline' : 'mdi-check-circle-outline'"
      :color="isEmpty ? 'blue-grey-darken-1' : 'teal-darken-1'"
      border="start"
      variant="tonal"
      prominent
      density="comfortable"
      class="mb-3"
    >
      <strong>{{ isEmpty ? '入力が空です。名前を入力してください。' : '入力OK：' + name }}</strong>
    </v-alert>

    <div class="mt-4 text-body-1 font-weight-medium">カウント: {{ count }}</div>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const name = ref('')
const count = ref(0)

const isEmpty = computed(() => name.value === '')

const countUp = () => {
  count.value++
}
</script>
