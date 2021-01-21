<!--
 * @Author: your name
 * @Date: 2021-01-20 14:42:21
 * @LastEditTime: 2021-01-20 18:06:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lagou3-3\fed-e-task-03-03\realworld-nuxtjs\pages\login\index.vue
-->
<template>
	<div class="auth-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
					<p class="text-xs-center">
						<nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
						<nuxt-link v-else to="/login">Have an account?</nuxt-link>
					</p>

					<ul class="error-messages">
						<li v-if="errMsg">{{ errMsg }}</li>
					</ul>

					<form @submit.prevent="onSubmit">
						<fieldset class="form-group" v-if="!isLogin">
							<input
								class="form-control form-control-lg"
								type="text"
								v-model="user.username"
								placeholder="Your Name"
								required
							/>
						</fieldset>
						<fieldset class="form-group">
							<input
								class="form-control form-control-lg"
								type="email"
								v-model="user.email"
								placeholder="Email"
								required
							/>
						</fieldset>
						<fieldset class="form-group">
							<input
								class="form-control form-control-lg"
								type="password"
								v-model="user.password"
								placeholder="Password"
								required
							/>
						</fieldset>
						<button class="btn btn-lg btn-primary pull-xs-right">
							{{ isLogin ? 'Sign in' : 'Sign up' }}
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import { login, register } from '../../api/user'
  const Cookie = process.client ? require('js-cookie') : undefined

	export default {
		name: 'LoginIndex',

		data() {
			return {
				user: {
					username: '',
					email: '',
					password: '',
				},
				errMsg: '',
			}
		},

		computed: {
			isLogin() {
				return this.$route.path === '/login'
			},
		},

		methods: {
			async onSubmit() {
				try {
					const { data } = this.isLogin
						? await login({
								user: this.user,
						  })
						: await register({
								user: this.user,
              })
          console.log(data);
          this.$store.commit('setUser', data.user)

          Cookie.set('user', data.user)

					this.$router.push('/')
				} catch (error) {
					this.errMsg = JSON.stringify(error.response.data.errors).replace(/{|}/g, '')
				}
			},
		},
	}
</script>
