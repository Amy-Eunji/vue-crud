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
      <button class="btn btn-outline-danger">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { getPostById } from '../../api/posts'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = route.params.id
const form = ref({})

const fetchPost = () => {
  const data = getPostById(id)
  form.value = { ...data }
}
fetchPost()

const goListPage = () => router.push({ name: 'PostList' })
const goEditPage = () => router.push({ name: 'PostEdit', params: { id } })
</script>

<style></style>
