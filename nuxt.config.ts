export default defineNuxtConfig({
    target: 'static',
    router: {
        base: '/nuxt-starter/'
    },
    modules: [
        '@nuxt/image-edge',
    ],
    image: {
        provider: 'github',
        github: {
          baseURL: 'https://bkhadige.github.io/nuxt-starter',
          modifiers: {
            effect: 'sharpen:100',
            quality: 'auto:best',
          }
        }
      }
})
