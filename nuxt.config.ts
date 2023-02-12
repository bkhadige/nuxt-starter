export default defineNuxtConfig({
    target: 'static',
    router: {
        base: '/<repository-name>/'
    },
    modules: [
        '@nuxt/image-edge',
    ]
})
