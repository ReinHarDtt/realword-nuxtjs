
// 验证是否登录的中间件

export default function ({ store, route, redirect }) {
  const names = ['profile', 'editor', 'settings']
  if (!store.state.user && names.indexOf(route.name) !== -1) {
    return redirect('/login')
  }
}