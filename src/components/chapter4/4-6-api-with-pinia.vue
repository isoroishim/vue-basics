<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">4-6: Piniaストア内でAPI通信を実行する</h2>

      <v-row dense>
        <v-col cols="auto">
          <v-btn color="primary" @click="postStore.fetchPosts">投稿一覧を取得</v-btn>
        </v-col>
      </v-row>

      <v-progress-circular
        v-if="postStore.loading"
        indeterminate
        color="primary"
        class="mt-4"
      ></v-progress-circular>

      <v-alert v-if="postStore.error" type="error" class="mt-4">
        {{ postStore.error }}
      </v-alert>

      <v-list v-if="postStore.posts.length > 0" class="mt-4">
        <v-list-item v-for="post in postStore.posts" :key="post.id" class="border mb-2">
          <v-list-item-title>{{ post.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { usePostStore } from '@/stores/post'

// ストア呼び出し
const postStore = usePostStore()
</script>
