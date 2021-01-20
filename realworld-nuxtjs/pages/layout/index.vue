<!--
 * @Author: your name
 * @Date: 2021-01-19 15:02:03
 * @LastEditTime: 2021-01-20 15:25:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lagou3-3\fed-e-task-03-03\realworld-nuxtjs\pages\layout\index.vue
-->
<template>
	<div>
		<!-- 顶部导航栏 -->
		<nav class="navbar navbar-light">
			<div class="container">
				<nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
				<ul class="nav navbar-nav pull-xs-right">
					<li class="nav-item">
						<!-- Add "active" class when you're on that page" -->
						<nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" to="/editor"> <i class="ion-compose"></i>&nbsp;New Post </nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" to="/settings"> <i class="ion-gear-a"></i>&nbsp;Settings </nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" to="/profile/123">
							<img class="user-pic" src="https://himg.bdimg.com/sys/portraitn/item/d5a0d2edb6afccec74696d65293b" />
							jjh_1994
						</nuxt-link>
					</li>
				</ul>
			</div>
		</nav>

		<!-- 子路由 -->
		<nuxt-child />

		<!-- 底部 -->
		<footer>
			<div class="container">
				<a href="/" class="logo-font">conduit</a>
				<span class="attribution">
					An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
					under MIT.
				</span>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'LayoutIndex',
	}
</script>
