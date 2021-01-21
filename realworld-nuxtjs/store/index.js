/*
 * @Author: your name
 * @Date: 2021-01-20 18:01:08
 * @LastEditTime: 2021-01-21 11:19:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lagou3-3\fed-e-task-03-03\realworld-nuxtjs\store\index.js
 */
const cookieparser = process.server ? require('cookieparser') : undefined

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

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null

    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        
      }
    }

    commit('setUser', user)
  }
}