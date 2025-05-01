<template>
  <v-container>
    <!-- リンク一覧 -->
    <v-sheet class="pa-4 mb-4" elevation="2" rounded>
      <h3 class="text-subtitle-1 font-weight-medium mb-2">1-5 入力バリデーション</h3>
      <v-btn
        to="/1-5-1"
        color="primary"
        variant="outlined"
        class="mb-2 mr-2"
        style="width: 320px; justify-content: flex-start"
      >
        1-5-1: computedで空入力を無効化
      </v-btn>
      <v-btn
        to="/1-5-2"
        color="primary"
        variant="outlined"
        class="mb-2 mr-2"
        style="width: 320px; justify-content: flex-start"
      >
        1-5-2: trimで空白も無効化
      </v-btn>
    </v-sheet>

    <!-- 入力とバリデーションUI -->
    <v-text-field
      v-model="name"
      label="名前を入力"
      variant="outlined"
      density="comfortable"
      class="mb-3"
    />

    <v-btn @click="countUp" :disabled="isInvalid" color="primary" class="mb-3"> カウント </v-btn>

    <v-alert
      :type="isInvalid ? 'info' : 'success'"
      :icon="isInvalid ? 'mdi-alert-circle-outline' : 'mdi-check-circle-outline'"
      :color="isInvalid ? 'blue-grey-darken-1' : 'teal-darken-1'"
      border="start"
      variant="tonal"
      prominent
      density="comfortable"
      class="mb-3"
    >
      <strong>
        {{ isInvalid ? '空または空白のみの入力です' : '入力OK：' + name }}
      </strong>
    </v-alert>

    <div class="mt-4 text-body-1 font-weight-medium">カウント: {{ count }}</div>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const name = ref('')
const count = ref(0)

// 空白のみも含めた無効判定
const isInvalid = computed(() => name.value.trim() === '')

const countUp = () => {
  count.value++
}
</script>
