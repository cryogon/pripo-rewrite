<script setup lang="ts">
const { data: users } = await useFetch("/api/user");
const { data: blogs } = await useFetch("/api/posts");
</script>
<template>
  <div
    class="bg-black text-white font-bold m-10 text-center"
    v-for="user in users"
    :key="user.id"
  >
    {{ user }}
  </div>
  <div>
    {{ blogs?.content }}
  </div>
</template>
