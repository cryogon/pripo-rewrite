<script setup lang="ts">
const isPostPublic = ref(true);
</script>
<template>
  <section class="post-card">
    <div class="post-card__header">
      <img src="https://res.cloudinary.com/dmerejjkt/image/upload/v1679115150/ge5ud2yrj3xmbxfrmxjw.jpg" alt="user" class="user-avatar" v-if="isPostPublic">
      <div class="user-avatar anonymous" v-else></div>
      <div class="post-card__header-user-info">
        <span class="post-card__user-name">cryogon</span>
        <span class="post-card__date">posted today</span>
      </div>
    </div>
    <h3 class="post-card__title padding">High Effort Heading</h3>
    <article class="post-card__content padding">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique cum
      eius at, esse nam nesciunt odit laboriosam natus facilis rem voluptates
      nisi officiis quae ut consectetur impedit. Magni, numquam iste. Nesciunt
      quos blanditiis aut quisquam ea dolore saepe culpa cumque, consectetur
      ullam magni dignissimos cupiditate at labore, obcaecati enim. Suscipit
      nobis consequuntur unde tenetur voluptas perspiciatis id reprehenderit
      quas fugiat! Obcaecati provident commodi dolore. Quo voluptatum quas quod
      alias cupiditate, fugit perferendis distinctio suscipit aliquam quidem
      veritatis beatae at, totam placeat eligendi quasi accusantium nobis quam
      autem explicabo, doloribus magnam! Est aspernatur dolor necessitatibus
      velit facere quo ducimus vel voluptates distinctio minima, unde veniam at
      alias ad, doloribus molestias, culpa natus expedita consequatur
      praesentium rem commodi autem magnam. Similique, voluptatem. Rem, sapiente
      suscipit obcaecati perspiciatis quod a. Modi neque quaerat distinctio,
      laboriosam laborum, sequi tempore quia similique a, non quae quasi ducimus
      quibusdam reiciendis asperiores ipsa facere eaque unde minima!
    </article>
    <section class="post-card__options padding">
      <Icon name="mdi:cards-heart-outline" size="30" />
      <span class="post-like-count">0</span>
      <Icon name="mdi:comment-outline" size="30" />
      <span class="post-comment-count">0</span>
      <Icon name="ph:share-network-light" size="30" />
    </section>
  </section>
</template>
<style scoped lang="scss">
section.post-card {
  $gap: 10px;
  padding: 1rem;
  .post-card__header {
    display: flex;
    align-items: center;
    gap: $gap;
    margin-block-end: 0.7rem;
    .user-avatar {
      width: 3rem;
      aspect-ratio: 1/1;
      background-color: grey;
      border-radius: 50%;
    }
    .post-card__header-user-info {
      display: flex;
      flex-direction: column;
      .post-card__date {
        opacity: 0.7;
      }
    }
  }
  .padding {
    margin: 0.4rem 0.6rem 0;
  }

  .post-card__options {
    display: flex;
    align-items: center;
    margin-block-start: 0.75rem;
    gap: calc($gap + 10px);
    &>span{
      margin-inline-start: -0.5rem;
    }
  }
}
</style>