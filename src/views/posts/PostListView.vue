<template>
  <h2>게시글 목록</h2>
  <hr class="my-4" />
  <div class="row g-3">
    <div v-for="post in posts" :key="post.id" class="col-4">
      <PostItem
        :title="post.title"
        :content="post.content"
        :created-at="post.createdAt"
        @click="goPage(post.id)"
      ></PostItem>
    </div>
  </div>
  <hr class="my-4" />
  <AppCard>
    <PostDetailView :id="2"></PostDetailView>
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

const fetchPosts = async () => {
  const { data } = await getPosts()
  posts.value = data
}
fetchPosts()

const goPage = () => {
  router.push({
    name: 'PostDetail',
    params: { id: Number }
  })
}
</script>

<style></style>
