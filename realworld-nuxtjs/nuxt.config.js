/*
 * @Author: your name
 * @Date: 2021-01-19 14:27:31
 * @LastEditTime: 2021-01-22 16:38:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lagou3-3\fed-e-task-03-03\realworld-nuxtjs\nuxt.config.js
 */
module.exports = {
  router: {
    middleware: 'authenticated',
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      routes.length = 0
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '',
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/')
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/')
            }
          ]
        }
      ])
    }
  },
  
  server: {
    host: '0.0.0.0',
    port: 3000
  },

  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}