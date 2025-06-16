<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">2-3: チェックボックスとラジオボタン</h2>

      <v-checkbox v-model="agree" label="利用規約に同意する" density="comfortable" class="mb-4" />

      <v-radio-group v-model="gender" inline>
        <v-radio label="男性" value="男性" />
        <v-radio label="女性" value="女性" />
        <v-radio label="その他" value="その他" />
      </v-radio-group>

      <v-divider class="my-4" outlined />

      <v-card class="pa-4" outlined>
        <div><strong>同意状況 :</strong> {{ agree ? '同意済み' : '未同意' }}</div>
        <div><strong>選択された性別 :</strong> {{ gender }}</div>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const agree = ref(false)
const gender = ref('')
</script>
