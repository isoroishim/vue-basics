<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 mb-6">2-6: タスクの選択と条件付きリスト表示</h2>

      <v-btn color="primary" class="mb-4" @click="toggleShowCompleted">
        {{ showCompleted ? '未完了だけ表示' : 'すべて表示' }}
      </v-btn>

      <v-list>
        <v-list-item
          v-for="task in filteredTasks"
          :key="task.id"
          @click="toggleTask(task)"
          class="mb-2"
          style="cursor: pointer"
        >
          <v-icon start>
            {{ task.done ? 'mdi-check-circle' : 'mdi-checkbox-blank-circle-outline' }}
          </v-icon>
          <v-list-item-title>
            {{ task.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Task {
  id: number
  title: string
  done: boolean
}

// タスクリスト
const tasks = ref<Task[]>([
  { id: 1, title: 'タスクA', done: true },
  { id: 2, title: 'タスクB', done: false },
  { id: 3, title: 'タスクC', done: true },
  { id: 4, title: 'タスクD', done: false }
])

const showCompleted = ref(true)

// 条件付きリスト
const filteredTasks = computed(() => {
  if (showCompleted.value) {
    return tasks.value
  } else {
    return tasks.value.filter((task) => !task.done)
  }
})

// 表示モード切り替え
const toggleShowCompleted = () => {
  showCompleted.value = !showCompleted.value
}

// タスク選択（done切り替え）
const toggleTask = (task: Task) => {
  task.done = !task.done
}
</script>
