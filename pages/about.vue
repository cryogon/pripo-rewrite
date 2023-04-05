`<script setup lang="ts">
const count = await useFetch("/api/test");
function refetch(){
    count.refresh()
}
</script>
<template>
    <div>
        About Section
        <button @click="refetch">{{count.data.value?.count}}</button>
        {{ count.data.value && JSON.parse(count.data.value?.file).info }}
    </div>
</template>`