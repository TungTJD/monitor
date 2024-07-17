import axios from 'axios'
const API_BASE_URL = process.env.NODE_ENV === 'development'? '/api' : ''
const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
  responseType: 'json', // 默认值
  headers: {
    'Content-Type': 'application/json',
  }
})

/* 请求拦截 */
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

/* 响应拦截 */
instance.interceptors.response.use(response => {
  const { data } = response
  return data
}, error => {
  return Promise.reject(error)
})


export default instance
