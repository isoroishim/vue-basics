<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">3-5: フォーム付きダイアログ</h2>

      <v-btn color="primary" @click="dialog = true">登録フォームを開く</v-btn>

      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title>ユーザー登録</v-card-title>
          <v-card-text>
            <v-form>
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
                :rules="[required, emailRule]"
                variant="outlined"
                density="comfortable"
                class="mb-4"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text @click="closeDialog">キャンセル</v-btn>
            <v-btn color="primary" @click="submit">登録</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
const name = ref('')
const email = ref('')
const formRef = ref()

const required = (v: string) => !!v || '必須項目です'
const emailRule = (v: string) => /.+@.+\..+/.test(v) || '有効なメールアドレスを入力してください'

const closeDialog = () => {
  dialog.value = false
}

const submit = async () => {
  const result = await formRef.value?.validate()
  if (!result?.valid) {
    alert('登録できませんでした')
    return
  }

  alert(`登録完了: ${name.value} (${email.value})`)
  closeDialog()
}
</script>
