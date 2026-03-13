import axios from 'axios';

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

// // Интерсептор для запросов
// instance.interceptors.request.use(
//   (config) => {
//     // Можно добавить токен авторизации
//     // const token = localStorage.getItem('token')
//     // if (token) {
//     //   config.headers.Authorization = `Bearer ${token}`
//     // }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// // Интерсептор для ответов
// instance.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     // Обработка ошибок
//     console.error('API Error:', error)
//     return Promise.reject(error)
//   }
// )

// export default instance
