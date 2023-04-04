import DOMpurify from "vue-dompurify-html";
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(DOMpurify)   
})