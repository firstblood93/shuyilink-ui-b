/* eslint-disable */
import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = localStorage.token
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  async (response) => {
    return response.data
  },
  (error) => {
    console.log('🚀 ~ error', error)
  }
)

export default service
