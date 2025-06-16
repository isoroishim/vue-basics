<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold">4-10: 完全版CRUDアプリ</h2>

      <v-text-field v-model="newTitle" label="新しい投稿タイトル" class="mb-4"></v-text-field>

      <v-btn color="success" class="mb-4" @click="addPost">追加する</v-btn>

      <v-alert v-if="postStore.error" type="error" variant="tonal" class="mb-4">
        {{ postStore.error }}
      </v-alert>

      <v-list v-if="postStore.posts.length > 0">
        <v-list-item
          v-for="post in postStore.posts"
          :key="post.id"
          class="border mb-2 d-flex align-center justify-space-between"
        >
          <div>
            <div v-if="editingId != post.id">
              {{ post.title }}
            </div>
            <v-text-field
              v-else
              v-model="editTitle"
              label="タイトルを編集"
              dense
              hide-details
              class="mb-2"
            />
          </div>

          <div>
            <v-btn
              v-if="editingId !== post.id"
              color="primary"
              size="small"
              class="mr-2"
              @click="startEditing(post)"
              >編集
            </v-btn>
            <v-btn v-else color="success" size="small" class="mr-2" @click="saveEdit(post.id)"
              >保存
            </v-btn>
            <v-btn color="error" size="small" class="mr-2" @click="deletePost(post.id)"
              >削除
            </v-btn>
          </div>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { usePostStore } from '@/stores/post'

// ストア呼び出し
const postStore = usePostStore()

const newTitle = ref('')
const editTitle = ref('')
const editingId = ref<number | null>(null)

//初回データ取得
postStore.fetchPosts()

//新規投稿追加
const addPost = async () => {
  if (!newTitle.value.trim()) return
  await postStore.addPost(newTitle.value)
  newTitle.value = ''
}
// 編集開始
const startEditing = (post: { id: number; title: string }) => {
  editingId.value = post.id
  editTitle.value = post.title
}
// 編集保存
const saveEdit = async (id: number) => {
  if (!editTitle.value.trim()) return
  await postStore.updatePost(id, editTitle.value)
  editingId.value = null
  editTitle.value = ''
}

//投稿削除
const deletePost = async (id: number) => {
  await postStore.deletePost(id)
}
</script>
