<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">4-4: fetch APIを使ったデータ取得</h2>

      <v-btn color="primary" @click="fetchData">データ取得</v-btn>

      <v-progress-circular v-if="loading" indeterminate color="primary" class="mt-4">
      </v-progress-circular>

      <v-alert v-if="error" type="error" class="mt-4">{{ error }}</v-alert>

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

interface Post {
  id: number
  title: string
}

const posts = ref<Post[]>([])
const loading = ref(false)
const error = ref('')

const fetchData = async () => {
  loading.value = true
  error.value = ''
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    if (!response.ok) {
      throw new Error(`エラー: ${response.status}`)
    }
    const data = await response.json()
    posts.value = data
  } catch (err: any) {
    error.value = err.message || '不明なエラーが発生しました'
  } finally {
    loading.value = false
  }
}
</script>
