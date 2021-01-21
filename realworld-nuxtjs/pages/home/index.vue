<template>
	<div class="home-page">
		<div class="banner">
			<div class="container">
				<h1 class="logo-font">conduit</h1>
				<p>A place to share your knowledge.</p>
			</div>
		</div>

		<div class="container page">
			<div class="row">
				<div class="col-md-9">
					<div class="feed-toggle">
						<ul class="nav nav-pills outline-active">
							<li class="nav-item" v-show="user">
								<nuxt-link
									class="nav-link"
                  exact
									:class="{ active: $route.query.tab === 'your_feed' }"
									:to="{ name: 'home', query: { tab: 'your_feed' } }"
									>Your Feed</nuxt-link
								>
							</li>
							<li class="nav-item">
								<nuxt-link
									class="nav-link"
                  exact
									:class="{ active: !$route.query.tab || $route.query.tab === 'global_feed' }"
									:to="{ name: 'home', query: { tab: 'global_feed' } }"
									>Global Feed</nuxt-link
								>
							</li>
							<li class="nav-item" v-show="$route.query.tag">
								<nuxt-link
									class="nav-link"
                  exact
									:class="{ active: $route.query.tab === 'tag' }"
									:to="{ name: 'home', query: { tab: 'tag', tag: $route.query.tag } }"
									>#{{ $route.query.tag }}</nuxt-link
								>
							</li>
						</ul>
					</div>

					<div class="article-preview" v-for="article in articles" :key="article.slug">
						<div class="article-meta">
							<nuxt-link :to="{ name: 'profile', params: { username: article.author.username } }"
								><img :src="article.author.image"
							/></nuxt-link>
							<div class="info">
								<nuxt-link class="author" :to="{ name: 'profile', params: { username: article.author.username } }">{{
									article.author.username
								}}</nuxt-link>
								<span class="date">{{ article.createdAt }}</span>
							</div>
							<button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{ active: article.favorited }">
								<i class="ion-heart"></i>{{ article.favoritesCount }}
							</button>
						</div>
						<nuxt-link class="preview-link" :to="{ name: 'article', params: { slug: article.slug } }">
							<h1>{{ article.title }}</h1>
							<p>{{ article.description }}</p>
							<span>Read more...</span>
						</nuxt-link>
					</div>
					<ul class="pagination">
						<li class="page-item" :class="{ active: item === page }" v-for="item in totalPage" :key="item">
							<nuxt-link class="page-link" :to="{ name: 'home', query: { page: item, tag: $route.query.tag, tab: $route.query.tab } }">{{
								item
							}}</nuxt-link>
						</li>
					</ul>
				</div>

				<div class="col-md-3">
					<div class="sidebar">
						<p>Popular Tags</p>

						<div class="tag-list">
							<nuxt-link
								class="tag-pill tag-default"
								:to="{ name: 'home', query: { tag, tab: 'tag' } }"
								v-for="tag in tags"
								:key="tag"
								>{{ tag }}</nuxt-link
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { getArticles, getTags, getFeedArticles } from '../../api/user'
	import { mapState } from 'vuex'
	export default {
		name: 'HomeIndex',

		async asyncData({ query, store }) {
			const limit = 20
      const page = Number.parseInt(query.page || 1)
      const _getArticles = store.state.user && query.tab === 'your_feed' ? getFeedArticles : getArticles
			const [articleRes, tagRes] = await Promise.all([
				_getArticles({
					limit,
					offset: (page - 1) * limit,
				}),
				getTags(),
			])

			const { articles, articlesCount } = articleRes.data
			const { tags } = tagRes.data
			return {
				articles,
				articlesCount,
				limit,
				page,
				tags,
			}
		},

		watchQuery: ['page', 'tab', 'tag'],

		computed: {
			...mapState(['user']),
			totalPage() {
				return Math.ceil(this.articlesCount / this.limit)
			},
		},
	}
</script>
