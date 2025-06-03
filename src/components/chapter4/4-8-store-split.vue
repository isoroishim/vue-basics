<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">4-8: ストアを分割して管理する</h2>

      <v-row dense>
        <v-col cols="auto">
          <v-btn color="primary" @click="userStore.login('あなた')">ログイン</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="error" @click="userStore.logout">ログアウト</v-btn>
        </v-col>
      </v-row>
      <v-row dense class="mt-4">
        <v-col cols="auto">
          <v-btn color="success" @click="todoStore.addTodo('新しいタスク')">タスク追加</v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-4" />

      <h3 class="text-h6">ユーザー情報</h3>
      <p>ログインユーザー:{{ userStore.username || '未ログイン' }}</p>

      <h3 class="text-h6">タスク一覧</h3>
      <v-list>
        <v-list-item v-for="(todo, index) in todoStore.todos" :key="index" class="border mb-3">
          <v-list-item-title>{{ todo }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useTodoStore } from '@/stores/todo'

const userStore = useUserStore()
const todoStore = useTodoStore()
</script>
