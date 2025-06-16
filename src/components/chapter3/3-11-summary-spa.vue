<template>
  <v-app>
    <v-app-bar color="primary">
      <v-toolbar-title>Vue学習アプリ</v-toolbar-title>
      <v-spacer />
      <v-btn text to="/">ホーム</v-btn>
      <v-btn text to="/3-0">第3章トップ</v-btn>
    </v-app-bar>
    <v-navigation-drawer app permanent color="grey-lighten-5">
      <v-list>
        <v-list-item to="/" link>ホーム</v-list-item>
        <v-list-item to="/3-0" link>第3章</v-list-item>
        <v-list-item to="/3-8" link>ヘッダーサンプル</v-list-item>
        <v-list-item to="/3-9" link>サイドバーサンプル</v-list-item>
        <v-list-item to="/3-10" link>全体レイアウト </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-4">
        <v-sheet class="pa-4" elevation="2">
          <h2 class="text-h5 font-weight-bold mb-4">3-11: ミニSPAアプリ</h2>

          <v-btn color="primary" @click="openDialog" class="mb-4">新規タスク追加</v-btn>

          <v-list density="compact">
            <v-list-item v-for="(task, index) in tasks" :key="index">
              {{ task }}
            </v-list-item>
          </v-list>

          <v-dialog v-model="dialog" width="400">
            <v-card>
              <v-card-title> 新規タスク追加</v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="newTask"
                  label="タスク内容"
                  variant="outlined"
                  density="comfortable"
                />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="closeDialog">キャンセル</v-btn>
                <v-btn color="primary" @click="addTask">追加</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-sheet>
      </v-container>
      <v-snackbar v-model="snackbar" color="error" timeout="3000">
        タスクを入力してください
      </v-snackbar>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tasks = ref<string[]>([])
// ダイアログ制御
const dialog = ref(false)
const newTask = ref('')
const snackbar = ref(false)

const openDialog = () => {
  dialog.value = true
  newTask.value = ''
}

const closeDialog = () => {
  dialog.value = false
}

// タスク追加
const addTask = () => {
  if (!newTask.value.trim()) {
    snackbar.value = true
    return
  }
  tasks.value.push(newTask.value.trim())
  closeDialog()
}
</script>
