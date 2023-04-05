<script setup lang="ts">
const { data: users } = await useFetch("/api/user",{
  body:{
    username:"cryogon"
  }
});
</script>
<template>
    <span>{{ users }}</span>
</template>
<style scoped lang="scss">
main{
  padding:4rem;
}
</style>
