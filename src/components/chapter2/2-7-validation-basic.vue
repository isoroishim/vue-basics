<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">2-7: 必須項目バリデーション</h2>

      <v-form ref="formRef" v-model="formValid">
        <v-text-field
          v-model="name"
          label="名前"
          :rules="[required]"
          variant="outlined"
          density="comfortable"
          class="mb-4"
        />
      </v-form>

      <v-btn color="primary" @click="submit">送信</v-btn>

      <v-alert
        v-if="alertMessage"
        :type="alertType"
        variant="tonal"
        border="start"
        density="comfortable"
        class="mt-4"
      >
        <strong>{{ alertMessage }}</strong>
      </v-alert>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 入力項目
const name = ref('')

// フォームオブジェクトとバリデーションフラグ
const formRef = ref()
const formValid = ref(false)

// アラートメッセージ
const alertMessage = ref('')
const alertType = ref<'success' | 'error'>('success')

// バリデーションルール
const required = (v: string) => !!v || '必須項目です'

// 送信処理
const submit = () => {
  formRef.value?.validate()

  if (formValid.value) {
    alertMessage.value = `登録が完了しました（${name.value} さん）`
    alertType.value = 'success'
  } else {
    alertMessage.value = '入力内容に不備があります。ご確認ください。'
    alertType.value = 'error'
  }
}
</script>
