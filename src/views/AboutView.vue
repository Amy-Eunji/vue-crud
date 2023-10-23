<template>
  <div>
    <h2>About Vue</h2>
    <button class="btn btn-primary" @click="goHomePage">Home으로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goHomePage = () => {
  router.push('/')
}
</script>

<style></style>
