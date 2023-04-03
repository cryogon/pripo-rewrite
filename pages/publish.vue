<script setup lang="ts">
import MarkDownIt from "markdown-it";
import DOMPurify from "dompurify";
const postTitle = ref("");
const postContent = ref("");
const md = MarkDownIt({
    linkify:true,
    html:true,  
    typographer:true
})
function sanitizedHTML(html:string){
    return DOMPurify.sanitize(md.render(html));
}
</script>
<template>
  <main class="container">
    <div class="publisher">
      <input
        type="text"
        name="title"
        id="post-title"
        class="post-input"
        placeholder="Title"
        v-model="postTitle"
      />
      <textarea
        name="content"
        id="post-content"
        class="post-input"
        cols="30"
        rows="10"
        placeholder="Content"
        v-model="postContent"
      ></textarea>
    </div>
    <div class="preview">
      <h3 class="preview-heading" v-html="postTitle"></h3>
      <article class="preview-content" v-html="sanitizedHTML(postContent)"></article>
    </div>
  </main>
</template>
<style scoped lang="scss">
main.container {
  display: flex;
  gap: 10px;
  .publisher {
    width: 50%;
    display: flex;
    flex-direction: column;
    .post-input {
      padding: 1rem;
    }
  }
}
</style>
