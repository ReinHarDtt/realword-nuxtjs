/*
 * @Author: your name
 * @Date: 2021-01-20 18:01:08
 * @LastEditTime: 2021-01-20 18:08:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lagou3-3\fed-e-task-03-03\realworld-nuxtjs\store\index.js
 */
export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {}