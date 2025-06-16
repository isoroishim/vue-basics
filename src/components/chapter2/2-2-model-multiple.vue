<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">2-2: 複数項目の双方向バインディング</h2>

      <v-text-field
        v-model="form.name"
        label="名前"
        variant="outlined"
        density="comfortable"
        class="mb-3"
      />
      <v-text-field
        v-model="form.email"
        label="メールアドレス"
        variant="outlined"
        density="comfortable"
        class="mb-3"
      />
      <v-textarea
        v-model="form.message"
        label="メッセージ"
        variant="outlined"
        density="comfortable"
        class="mb-3"
      />
      <v-select
        v-model="form.category"
        :items="categories"
        label="カテゴリ選択"
        variant="outlined"
        density="comfortable"
        class="mb-3"
      />

      <v-divider class="my-4" />

      <v-card class="pa-4" outlined>
        <div><strong>名前 :</strong>{{ form.name }}</div>
        <div><strong>メール :</strong>{{ form.email }}</div>
        <div><strong>メッセージ :</strong>{{ form.message }}</div>
        <div><strong>カテゴリ :</strong>{{ form.category }}</div>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
  category: ''
})

const categories = ['お問い合わせ', '要望', '不具合', 'その他']
</script>
