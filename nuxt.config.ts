// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@nuxt/devtools',
        'nuxt-icon',
    ],
    app: {
        rootTag: "main"
    },
    css: ['@/assets/css/main.css',],
})
