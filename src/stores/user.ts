import { defineStore } from 'pinia'

export const useUserStore = defineStore('inser', {
  state: () => ({
    username: ''
  }),
  actions: {
    login(name: string) {
      this.username = name
    },
    logout() {
      this.username = ''
    }
  }
})
