import { defineStore } from 'pinia'
import axios from 'axios'

interface Post {
  id: number
  title: string
}

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [] as Post[],
    loading: false,
    error: ''
  }),
  actions: {
    async fetchPosts() {
      this.loading = true
      this.error = ''
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        this.posts = response.data
      } catch (err: any) {
        this.error = err.message || 'データ取得エラー'
      } finally {
        this.loading = false
      }
    },
    async addPost(title: string) {
      this.loading = true
      this.error = ''
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          title,
          body: '',
          userId: 1
        })
        this.posts.unshift(response.data)
      } catch (err: any) {
        this.error = err.message || '追加エラー'
      } finally {
        this.loading = false
      }
    },
    async updatePost(id: number, newTitle: string) {
      this.loading = true
      this.error = ''
      try {
        await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          title: newTitle
        })
        // ★ フロントのリストも手動で更新！
        const index = this.posts.findIndex((post) => post.id === id)
        if (index !== -1) {
          this.posts[index].title = newTitle
        }
      } catch (err: any) {
        this.error = err.message || '更新エラー'
      } finally {
        this.loading = false
      }
    },
    async deletePost(id: number) {
      this.loading = true
      this.error = ''
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        this.posts = this.posts.filter((post) => post.id !== id)
      } catch (err: any) {
        this.error = err.message || '削除エラー'
      } finally {
        this.loading = false
      }
    }
  }
})
