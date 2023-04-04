<script setup lang="ts">
import MarkDownIt from "markdown-it";
const postTitle = ref("");
const postContent = ref("Content");
const md = new MarkDownIt({
  html:true,
  linkify:true,
})
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
        autocomplete="off"
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
      <input type="text" name="tags" id="post-tags" class="post-tags post-input" placeholder="Tags (Seprated By Space)">
      <section class="publish-options">
        <div class="disable-comments publish-option">
          <label for="comment-visibility">Disable Comments: </label>
          <input type="checkbox" name="cvis" id="comment-visibility">
        </div>
        <div class="toggle-post-visibility publish-option">
          <label for="visibility-toggle">Public: </label>
          <input type="checkbox" name="vis-t" id="visibility-toggle">
        </div>
      </section>
    </div>
    <div class="preview">
      <h3 class="preview-heading">{{ postTitle }}</h3>
      <article class="preview-content" v-dompurify-html="md.render(postContent)"></article>
    </div>
  </main>
</template>
<style  lang="scss">
main.container {
  display: flex;
  padding: 1rem;
  gap: 10px;

  .publisher {
    width: 50%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    .post-input {
      padding: 1rem;
      border-radius: 1rem;
    }
    .publish-options{
      border-radius: 1rem;
      padding: 0.5rem 1rem;
      background-color: var(--background-secondary);
      .publish-option{
        display: flex;
        gap:5px;
        justify-content: space-between;
        align-items: center;
        width: 12rem;
      }
    }
  }
    .preview{
      .preview-content{
        
        h1{
          color:red;
        }
        a{
          color: lightcoral;
          text-decoration: none;
        } ul,ol{
          list-style-position: inside;
          padding-inline-start: 5px;
        }
      }
      
    }
}
</style>