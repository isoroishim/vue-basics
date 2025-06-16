<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4">
      <h2 class="text-h5 mb-4">1-8: 複数入力とデータ管理</h2>

      <v-text-field
        v-model="form.name"
        label="名前"
        variant="outlined"
        density="comfortable"
        class="mb-3"
      />
      <v-text-field
        v-model="form.email"
        label="メール"
        variant="outlined"
        density="comfortable"
        class="mb-3"
      />
      <v-text-field
        v-model="form.message"
        label="メッセージ"
        variant="outlined"
        density="comfortable"
        class="mb-3"
      />

      <v-divider class="my-4" />

      <div class="text-subtitle-1">入力された内容：</div>
      <ul class="mt-2">
        <li><strong>名前：</strong>{{ form.name }}</li>
        <li><strong>メール：</strong>{{ form.email }}</li>
        <li><strong>メッセージ：</strong>{{ form.message }}</li>
      </ul>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})
</script>
