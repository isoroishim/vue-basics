<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">4-5: axiosを使ったGET・POSTリクエスト</h2>

      <v-row dense>
        <v-col cols="auto">
          <v-btn color="primary" @click="getPosts">投稿一覧を取得</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="success" @click="createPost">新しい投稿を作成</v-btn>
        </v-col>
      </v-row>

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
          <v-list-item-title>{{ post.title }} </v-list-item-title>
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
const error = ref('')

const getPosts = async () => {
  loading.value = true
  error.value = ''
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    posts.value = response.data
  } catch (err: any) {
    error.value = err.message || '不明なエラーが発生しました'
  } finally {
    loading.value = false
  }
}

const createPost = async () => {
  loading.value = true
  error.value = ''
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: '新しい投稿',
      body: 'これはテスト投稿です',
      userId: 1
    })
    posts.value.unshift(response.data)
  } catch (err: any) {
    error.value = err.message || '不明なエラーが発生しました'
  } finally {
    loading.value = false
  }
}
</script>
