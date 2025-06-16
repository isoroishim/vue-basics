import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as string[]
  }),
  actions: {
    addTodo(task: string) {
      this.todos.push(task)
    }
  }
})
