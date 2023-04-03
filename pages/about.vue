`<script setup lang="ts">
const count = await useFetch("/api/test");
function refetch(){
    count.refresh()
}
</script>
<template>
    <div>
        About Section
        <button @click="refetch">{{count.data}}</button>
    </div>
</template>`