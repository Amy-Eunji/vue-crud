<template>
  <h2>{{ form.title }}</h2>
  <p>{{ form.content }}</p>
  <p class="text-muted">{{ form.createdAt }}</p>
  <hr class="my-4" />
  <div class="row g-2">
    <div class="col-auto">
      <button class="btn btn-outline-dark">이전글</button>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-dark">다음글</button>
    </div>
    <div class="col-auto me-auto"></div>
    <div class="col-auto">
      <button class="btn btn-outline-dark" @click="goListPage">List</button>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-primary" @click="goEditPage">Edit</button>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-danger" @click="remove">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { getPostById, deletePost } from '../../api/posts'

const route = useRoute()
const router = useRouter()
const id = route.params.id
const form = ref({})

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id)
    form.value = { ...data }
  } catch (error) {
    console.error(error)
  }
}
fetchPost()
const remove = async () => {
  try {
    if (confirm('삭제하시겠습니까?')) {
      await deletePost(id)
      router.push({ name: 'PostList' })
    }
  } catch (error) {
    console.error(error)
  }
}

const goListPage = () => router.push({ name: 'PostList' })
const goEditPage = () => router.push({ name: 'PostEdit', params: { id } })
</script>

<style></style>
