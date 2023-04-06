<script setup lang="ts">
import MarkDownIt from "markdown-it";
const postTitle = ref("");
const postContent = ref("");
const tags = ref<string[]>();
const isPostPublic = ref<boolean>(false);
const isCommentDisabled = ref(false);
const md = new MarkDownIt({
  html: true,
  linkify: true,
});
function syncTag(e: Event) {
  const { value } = e.target as HTMLInputElement;

  //Regex For Spliting String when there is a charcter right after space
  tags.value = value.split(/\s(?=\S)/);
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
      <input
        type="text"
        name="tags"
        id="post-tags"
        class="post-tags post-input"
        placeholder="Tags (Seprated By Space)"
        @input="syncTag"
      />
      <section class="publish-options">
        <div class="disable-comments publish-option">
          <label for="comment-visibility">Disable Comments: </label>
          <input type="checkbox" name="cvis" id="comment-visibility" v-model="isCommentDisabled"/>
        </div>
        <div class="toggle-post-visibility publish-option">
          <label for="visibility-toggle">Public: </label>
          <input type="checkbox" name="vis-t" id="visibility-toggle" v-model="isPostPublic"/>
        </div>
      </section>
      <section class="publish-post">
        <NuxtLink to="/about" class="publish-post__help">Need Help With Post?</NuxtLink>
        <button class="publish-post__button">Post</button>
      </section>
    </div>
    <div class="preview">
      <div class="preview-profile">
        <div class="preview-profile__picture" :class="{public:isPostPublic}"></div>
        <span class="preview-profile__username">{{ isPostPublic ? "cryogon" : "Anonymous" }}</span>
      </div>
      <h3 class="preview-heading">{{ postTitle }}</h3>
      <article
        class="preview-content"
        v-dompurify-html="md.render(postContent)"
      ></article>
      <section class="preview-tags" v-if="tags?.length && tags[0].length">
        <span
          class="preview-tags__item"
          v-for="(tag, index) in tags"
          :key="index"
        >
          {{ tag }}
        </span>
      </section>
      <section class="preview-comments" v-if="isCommentDisabled">
        Comments are Disabled
      </section>
    </div>
  </main>
</template>
<style lang="scss">
main.container {
  display: flex;
  padding: 1rem;
  gap: 10px;

  .publisher {
    margin-block-start: 3rem;
    width: 50%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    .post-input {
      padding: 1rem;
      border-radius: 1rem;
    }
    .publish-options {
      border-radius: 1rem;
      padding: 0.5rem 1rem;
      background-color: var(--input-background);
      .publish-option {
        display: flex;
        gap: 5px;
        justify-content: space-between;
        align-items: center;
        width: 12rem;
      }
    }
    .publish-post{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline-start: 0.5rem;
      .publish-post__help{
        color:var(--link-color);
      }
      .publish-post__button{
        border-radius: 1rem;
        padding:0.5rem 1rem;
        background: var(--button-background);
      }
    }
  }
  .preview {
    width: 50%;
    .preview-content {
      min-height: 10rem;
      h1 {
        color: red;
      }
      a {
        color: lightcoral;
        text-decoration: none;
      }
      ul,
      ol {
        list-style-position: inside;
        padding-inline-start: 5px;
      }
    }
    .preview-profile{
      display: flex;
      align-items: center;
      gap: 10px;
      margin-block-end: 1rem;
      .preview-profile__picture{
        width: 3rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: grey;
        &.public{
          background-color: aquamarine;
        }
      }
    }
    .preview-tags {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-block: 1rem;
      .preview-tags__item {
        color: var(--tag-color);
        padding: 0.5rem;
        border-radius: 2rem;
        background: linear-gradient(var(--tag-background));
      }
    }
  }
}
</style>
