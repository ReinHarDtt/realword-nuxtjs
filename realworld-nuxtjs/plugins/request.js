import axios from 'axios'

export const request = axios.create({
	baseURL: 'https://conduit.productionready.io',
})

export default ({ store }) => {
	// 添加请求拦截器
	request.interceptors.request.use(
		(config) => {
      console.log(123);
			const { user } = store.state
			if (user && user.token) {
				config.headers['Authorization'] = `Token ${user.token}`
			}

			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)
}
