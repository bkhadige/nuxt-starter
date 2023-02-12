export default defineNuxtConfig({
    target: 'static',
    router: {
        base: '/nuxt-starter/'
    },
    modules: [
        '@nuxt/image-edge',
    ]
})
