<template>
  <h2>게시글 목록</h2>
  <hr class="my-4" />
  <div class="row gx-3">
    <div class="col-3">
      <PostItem title="제목" content="내용" created-at="2023-10-23-Mon"></PostItem>
    </div>
  </div>
</template>

<script setup>
import PostItem from '../../components/posts/PostItem.vue'
</script>

<style></style>
