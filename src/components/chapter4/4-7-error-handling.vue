<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">4-7: APIエラー時のハンドリングとUI表示</h2>

      <v-row dense>
        <v-col cols="auto">
          <v-btn color="primary" @click="fetchValidData">正常なAPI</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="error" @click="fetchErrorData">エラーを起こすAPI</v-btn>
        </v-col>
      </v-row>

      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        class="mt-4"
      ></v-progress-circular>

      <v-alert v-if="errorMessage" type="error" variant="tonal" border="start" class="mt-4">
        {{ errorMessage }}
      </v-alert>

      <v-list v-if="posts.length > 0" class="mt-4">
        <v-list-item v-for="post in posts" :key="post.id" class="border mb-2">
          <v-list-item-title>{{ post.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

interface Post {
  id: number
  title: string
}

const posts = ref<Post[]>([])
const loading = ref(false)
const errorMessage = ref('')

// 正常なAPI
const fetchValidData = async () => {
  await fetchPosts('https://jsonplaceholder.typicode.com/posts?_limit=5')
}

// わざとエラーを起こすAPI
const fetchErrorData = async () => {
  await fetchPosts('https://jsonplaceholder.typicode.com/invalid-url')
}

// 共通のfetch処理
const fetchPosts = async (url: string) => {
  loading.value = true
  errorMessage.value = ''
  posts.value = []
  try {
    const response = await axios.get(url)
    posts.value = response.data
  } catch (err: any) {
    errorMessage.value = err.message || '不明なエラーが発生しました'
  } finally {
    loading.value = false
  }
}
</script>
