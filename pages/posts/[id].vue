<script setup lang="ts">
const { params } = useRoute();
const content =
  "\
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in\
quaerat aliquid. Soluta facilis quidem aliquid similique itaque \
perspiciatis fugiat accusamus, veritatis consequatur maiores debitis\
tempore, eligendi sapiente. Esse! Molestiae aliquam dolores quibusdam,\
itaque velit error ea ut fugiat neque ex aspernatur! Adipisci, cum.\
Iusto quos, praesentium atque beatae pariatur suscipit, consectetur eum\
itaque unde quam, velit quaerat magni. Consequuntur in voluptatibus eos\
quam earum sapiente eveniet voluptas distinctio quidem. Eveniet, tempore\
eum placeat pariatur adipisci voluptate exercitationem. Laboriosam est\
repellendus, id at aperiam fugiat! Soluta incidunt officiis velit?\
Similique, fugit blanditiis. Soluta asperiores itaque saepe quis\
consequatur quia eos laboriosam nisi quibusdam perferendis repellat,\
quidem impedit sequi nostrum sapiente commodi iure deserunt voluptatem.\
Distinctio, tenetur. Similique, numquam nostrum? Molestias facilis\
maiores tenetur nostrum totam. Eum libero eligendi aperiam eos adipisci\
similique, amet in recusandae ea distinctio laboriosam voluptas fugit\
odit repellendus, totam deleniti dicta accusantium, impedit odio cum!\
Voluptas possimus impedit quaerat natus quae, voluptates eaque cumque\
sed ipsum, nam, commodi alias eum! Odio, tenetur, sed eum placeat, quo\
ratione quidem dolore magnam aliquid ipsam nesciunt nam laboriosam. Iste\
quasi voluptate aspernatur ut asperiores, veritatis quisquam voluptatum\
accusantium qui! Totam blanditiis enim cupiditate, nulla debitis\
consequuntur sapiente aliquam numquam error amet. Qui debitis voluptate\
labore corrupti distinctio velit. Vitae a provident iure cumque\
doloribus perspiciatis laudantium accusamus facilis velit ratione\
assumenda excepturi deleniti quisquam, sed ut dolores consequatur\
temporibus similique maxime. Beatae aperiam quasi tempora, nobis\
explicabo voluptatem. Autem quisquam impedit, necessitatibus\
exercitationem nemo qui odit. Expedita dolorem similique corrupti\
exercitationem sit dolorum voluptas, corporis nam doloribus quasi iusto\
vitae consequatur distinctio quisquam, voluptates nulla. Voluptates,\
nihil vitae? Nihil unde iure mollitia. Non cupiditate, maiores\
voluptatum voluptates nostrum ex praesentium iure perspiciatis rem\
perferendis dignissimos placeat a id soluta vero ullam. Corrupti ex\
similique obcaecati enim perspiciatis vitae.\
";
</script>
<template>
  <main class="container">
    <article class="post-section">
      <section class="post-header">
        <div class="author-pfp anonymous"></div>
        <div class="basic-post-info">
          <span class="author-name"> Anonymous </span>
          <span class="date-posted"> Posted Today </span>
        </div>
        <div class="blog-options">
          <Icon name="ph:share-network-light" size="30" />
          <Icon name="mdi:cards-heart-outline" size="30" />
        </div>
      </section>
      <h1 class="title" ref="blogTitle">High Effort Title</h1>
      <div class="content">
        {{ content }}
      </div>
      <div class="tags">
        <!-- <NuxtLink
              :to="`/search?q=${tag}&f=tags`"
              v-for="tag in posts.tags"
              :key="tag"
              class="tag"
              >{{ tag }}</router-link
            > -->
      </div>
    </article>
    <!-- <CommentSection :blog="blog" /> -->
  </main>
</template>
<style scoped lang="scss">
.container {
  padding-block-start: 3rem;
  padding-inline: min(10rem, 10vw);
  max-width: 80rem;

  .title {
    line-height: 2.4rem;
  }
  .content {
    margin-block-end: 0.8rem;
    line-height: 1.4rem;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .post-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.5rem;
    padding-inline-end:0.75rem;
    .author-pfp {
      cursor: pointer;
      width: 45px;
      height: 45px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      &.anonymous {
        background-color: grey;
      }
    }
    .basic-post-info {
      display: flex;
      gap: 3px;
      flex-direction: column;
      user-select: none;
      .date-posted {
        opacity: 0.7;
        font-size: 14px;
      }
      .author-name {
        width: 100%;
      }
    }
    .blog-options {
      display: flex;
      user-select: none;
      align-items: center;
      justify-content: flex-end;
      gap: 30px;
      margin-inline-start: auto;
      position: relative;
    }
  }

  .tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    .tag {
      background: linear-gradient(var(--tag-background));
      color: var(--tag-color);
      padding: 0.4rem 0.6rem;
      border-radius: 2rem;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 700px) {
    padding-inline: 1rem;
  }
}
</style>
