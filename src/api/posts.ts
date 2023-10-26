import axios from 'axios'

export function getPosts() {
  return axios.get('http://localhost:4000/posts')
}

export function getPostById(id: number) {
  return axios.get(`http://localhost:4000/posts/${id}`)
}

export function createPost(data: any) {
  return axios.post('http://localhost:4000/posts', data)
}
export function updatePost(id: number, data: any) {
  return axios.put(`http://localhost:4000/posts/${id}`, data)
}
export function deletePost(id: number) {
  return axios.delete(`http://localhost:4000/posts/${id}`)
}

// const posts = [
//   {
//     id: 1,
//     title: '제목1',
//     content: '내용1',
//     createdAt: '2023-01-05'
//   },
//   {
//     id: 2,
//     title: '제목2',
//     content: '내용2',
//     createdAt: '2023-03-17'
//   },
//   {
//     id: 3,
//     title: '제목3',
//     content: '내용3',
//     createdAt: '2023-04-26'
//   },
//   {
//     id: 4,
//     title: '제목4',
//     content: '내용4',
//     createdAt: '2023-10-20'
//   },
//   {
//     id: 5,
//     title: '제목5',
//     content: '내용5',
//     createdAt: '2023-12-15'
//   }
// ]

// export function getPosts() {
//   return posts
// }

// export function getPostById(id: string) {
//   const numberId = parseInt(id)
//   return posts.find((item) => item.id === numberId)
// }
