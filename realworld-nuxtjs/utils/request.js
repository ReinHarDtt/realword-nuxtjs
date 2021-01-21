/*
 * @Author: your name
 * @Date: 2021-01-20 15:34:45
 * @LastEditTime: 2021-01-20 16:24:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lagou3-3\fed-e-task-03-03\realworld-nuxtjs\utils\request.js
 */
import axios from "axios"

const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Token `
      return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default request