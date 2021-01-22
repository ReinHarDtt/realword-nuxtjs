/*
 * @Author: your name
 * @Date: 2021-01-22 13:52:32
 * @LastEditTime: 2021-01-22 13:52:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lagou3-3\fed-e-task-03-03\realworld-nuxtjs\plugins\dayjs.js
 */
import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', (value, format) => {
  return dayjs(value).format(format)
})