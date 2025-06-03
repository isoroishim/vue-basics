<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">4-9: API通信処理をサービス層に分離する</h2>

      <v-btn color="primary" @click="fetchPosts">投稿一覧を取得</v-btn>

      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        class="mt-4"
      ></v-progress-circular>

      <v-alert v-if="error" type="error" class="mt-4">
        {{ error }}
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
import { fetchPostsApi } from '@/services/api'

interface Post {
  id: number
  title: string
}

const posts = ref<Post[]>([])
const loading = ref(false)
const error = ref('')

// APIからデータ取得
const fetchPosts = async () => {
  loading.value = true
  error.value = ''
  posts.value = []
  try {
    const response = await fetchPostsApi()
    posts.value = response
  } catch (err: any) {
    error.value = err.message || '不明なエラーが発生しました'
  } finally {
    loading.value = false
  }
}
</script>
