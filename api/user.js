/*
 * @Author: your name
 * @Date: 2021-01-20 16:30:40
 * @LastEditTime: 2021-01-21 18:04:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lagou3-3\fed-e-task-03-03\realworld-nuxtjs\api\user.js
 */
import {request} from "../plugins/request";

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

export const getArticles = (params) => {
  return request({
    method: 'Get',
    url: '/api/articles',
    params
  })
}

export const getFeedArticles = (params) => {
  return request({
    method: 'Get',
    url: '/api/articles/feed',
    params
  })
}

export const getTags = () => {
  return request({
    method: 'Get',
    url: '/api/tags'
  })
}

export const favorite = (params) => {
  return request({
    method: 'POST',
    url: `/api/articles/${params.slug}/favorite`
  })
}

export const unFavorite = (params) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${params.slug}/favorite`
  })
}

export const getArticle = (params) => {
  return request({
    method: 'Get',
    url: `/api/articles/${params.slug}`
  })
}

export const getComments = (params) => {
  return request({
    method: 'Get',
    url: `/api/articles/${params.slug}/comments`
  })
}