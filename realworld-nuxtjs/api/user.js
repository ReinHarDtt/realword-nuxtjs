/*
 * @Author: your name
 * @Date: 2021-01-20 16:30:40
 * @LastEditTime: 2021-01-20 16:33:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lagou3-3\fed-e-task-03-03\realworld-nuxtjs\api\user.js
 */
import request from "../utils/request";

export const login = (data) => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

export const register = (data) => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}