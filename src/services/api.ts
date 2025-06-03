import axios from 'axios'

interface Post {
  id: number
  title: string
}

// 投稿データ取得API
export const fetchPostsApi = async (): Promise<Post[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  return response.data
}
