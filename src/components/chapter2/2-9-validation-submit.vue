<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-4">2-9: バリデーション付きフォーム</h2>

      <v-form ref="formRef" v-model="formValid">
        <v-text-field
          v-model="name"
          label="名前"
          :rules="[required]"
          variant="outlined"
          density="comfortable"
          class="mb-4"
        />
        <v-text-field
          v-model="email"
          label="メールアドレス"
          :rules="[required, validEmail]"
          variant="outlined"
          density="comfortable"
          class="mb-4"
        />
      </v-form>

      <v-btn color="primary" @click="submit">登録する</v-btn>

      <v-alert
        v-if="alertMessage"
        :type="alertType"
        variant="tonal"
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

const name = ref('')
const email = ref('')
const formRef = ref()
const formValid = ref(false)

const alertMessage = ref('')
const alertType = ref<'success' | 'error'>('success')

// 必須チェック
const required = (v: string) => !!v || '必須項目です'
const validEmail = (v: string) => /.+@.+\..+/.test(v) || '正しいメールアドレスを入力してください'

const submit = () => {
  formRef.value?.validate()

  if (formValid.value) {
    alertMessage.value = `登録が完了しました(${name.value}さん / ${email.value})`
    alertType.value = 'success'
  } else {
    alertMessage.value = `入力内容に不備があります。ご確認ください`
    alertType.value = 'error'
  }
}
</script>
