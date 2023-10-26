<template>
  <h2>게시글 목록</h2>
  <hr class="my-4" />
  <div class="row g-3">
    <div v-for="post in posts" :key="post.id" class="col-4">
      <PostItem
        :title="posts.title"
        :content="posts.content"
        :created-at="posts.createrdAt"
        @click="goPage(posts.id)"
      ></PostItem>
    </div>
  </div>
  <hr class="my-4" />
  <AppCard>
    <PostDetailView :id="1"></PostDetailView>
  </AppCard>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import PostItem from '../../components/posts/PostItem.vue'
import AppCard from '../../components/AppCard.vue'
import PostDetailView from '../posts/PostDetailView.vue'
import { getPosts } from '../../api/posts'

const router = useRouter()
const posts = ref([])

const fetchPosts = () => {
  // const { data } = await getPosts()
  posts.value = getPosts()
}
fetchPosts()

const goPage = () => {
  router.push({
    name: 'postDetail',
    params: { id }
  })
}
</script>

<style></style>
