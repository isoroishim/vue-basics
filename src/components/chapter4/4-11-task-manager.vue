<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">2-11: タスク管理ミニアプリ</h2>

      <v-text-field v-model="newTask" label="新しいタスク" class="mb-4" />

      <v-btn color="success" class="mb-6" @click="addTask">追加する</v-btn>

      <v-divider class="my-4" />

      <v-list v-if="tasks.length > 0">
        <v-list-item
          v-for="task in tasks"
          :key="task.id"
          class="border mb-2 d-flex align-center justify-space-between"
        >
          <div>
            <div v-if="editingId !== task.id">
              {{ task.title }}
            </div>
            <v-text-field
              v-else
              v-model="editTitle"
              label="タスク名を編集"
              dense
              hide-details
              class="mt-2"
            />
          </div>

          <div>
            <v-btn
              v-if="editingId !== task.id"
              color="primary"
              size="small"
              class="mr-2"
              @click="startEditing(task)"
            >
              編集
            </v-btn>

            <v-btn v-else color="success" size="small" class="mr-2" @click="saveEdit(task.id)">
              保存
            </v-btn>

            <v-btn color="error" size="small" @click="deleteTask(task.id)"> 削除 </v-btn>
          </div>
        </v-list-item>
      </v-list>

      <v-alert v-else type="info" variant="tonal" border="start">
        タスクがありません。追加してみましょう！
      </v-alert>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// タスク型定義
interface Task {
  id: number
  title: string
}

// タスクリスト
const tasks = ref<Task[]>([])

// 入力中タスク
const newTask = ref('')

// 編集中管理
const editingId = ref<number | null>(null)
const editTitle = ref('')

// タスク追加
const addTask = () => {
  if (!newTask.value.trim()) return
  const newId = tasks.value.length > 0 ? Math.max(...tasks.value.map((t) => t.id)) + 1 : 1
  tasks.value.unshift({ id: newId, title: newTask.value.trim() })
  newTask.value = ''
}

// 編集開始
const startEditing = (task: Task) => {
  editingId.value = task.id
  editTitle.value = task.title
}

// 編集保存
const saveEdit = (id: number) => {
  if (!editTitle.value.trim()) return
  const target = tasks.value.find((t) => t.id === id)
  if (target) {
    target.title = editTitle.value.trim()
  }
  editingId.value = null
  editTitle.value = ''
}

// タスク削除
const deleteTask = (id: number) => {
  tasks.value = tasks.value.filter((t) => t.id !== id)
}
</script>
