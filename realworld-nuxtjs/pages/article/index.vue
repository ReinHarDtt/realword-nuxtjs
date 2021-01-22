<template>
	<div class="article-page">
		<div class="banner">
			<div class="container">
				<h1>{{ article.title }}</h1>

				<div class="article-meta">
					<nuxt-link :to="{ name: 'profile', params: { username: article.author.username } }">
						<img :src="article.author.image" />
					</nuxt-link>
					<div class="info">
						<nuxt-link class="author" :to="{ name: 'profile', params: { username: article.author.username } }">
							{{ article.author.username }}
						</nuxt-link>
						<span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
					</div>
					<button class="btn btn-sm btn-outline-secondary" :class="{ active: article.author.following }">
						<i class="ion-plus-round"></i>
						&nbsp; Follow {{article.author.username}} <span class="counter">(10)</span>
					</button>
					&nbsp;&nbsp;
					<button class="btn btn-sm btn-outline-primary" :class="{ active: article.favorited }">
						<i class="ion-heart"></i>
						&nbsp; Favorite Post <span class="counter">(29)</span>
					</button>
				</div>
			</div>
		</div>

		<div class="container page">
			<div class="row article-content">
				<div class="col-md-12" v-html="article.body"></div>
			</div>

			<hr />

			<div class="article-actions">
				<div class="article-meta">
					<nuxt-link :to="{ name: 'profile', params: { username: article.author.username } }">
						<img :src="article.author.image" />
					</nuxt-link>
					<div class="info">
						<nuxt-link class="author" :to="{ name: 'profile', params: { username: article.author.username } }">
							{{ article.author.username }}
						</nuxt-link>
						<span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
					</div>
					<button class="btn btn-sm btn-outline-secondary" :class="{ active: article.author.following }">
						<i class="ion-plus-round"></i>
						&nbsp; Follow {{ article.author.username }} <span class="counter">(10)</span>
					</button>
					&nbsp;&nbsp;
					<button class="btn btn-sm btn-outline-primary" :class="{ active: article.favorited }">
						<i class="ion-heart"></i>
						&nbsp; Favorite Post <span class="counter">(29)</span>
					</button>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12 col-md-8 offset-md-2">
					<form class="card comment-form">
						<div class="card-block">
							<textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
						</div>
						<div class="card-footer">
							<img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
							<button class="btn btn-sm btn-primary">
								Post Comment
							</button>
						</div>
					</form>

					<div class="card" v-for="comment in comments" :key="comment.id">
						<div class="card-block">
							<p class="card-text">{{ comment.body }}</p>
						</div>
						<div class="card-footer">
              <nuxt-link :to="{ name: 'profile', params: { username: comment.author.username } }">
                <img :src="comment.author.image" class="comment-author-img" />
              </nuxt-link>

							&nbsp;
              <nuxt-link class="comment-author" :to="{ name: 'profile', params: { username: comment.author.username } }">
                {{ comment.author.username }}
              </nuxt-link>
							<span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY') }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { getArticle, getComments } from '../../api/user'
	import MarkdownIt from 'markdown-it'
	export default {
    name: 'ArticleIndex',
    data() {
      return {
        comments: []
      }
    },
		async asyncData({ params }) {
			const { data } = await getArticle({ slug: params.slug })
			const md = new MarkdownIt()
			data.article.body = md.render(data.article.body)
			return {
				article: data.article,
			}
    },
    async mounted() {
      const { data } = await getComments({slug: this.$route.params.slug})
      console.log(data, 'comments');
      this.comments = data.comments
    }
	}
</script>
