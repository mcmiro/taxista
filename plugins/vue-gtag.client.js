import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {

    onNuxtReady(async () => {
    nuxtApp.vueApp.use(VueGtag, {
        config: {
            id: 'G-703C4MT043',
        },
    }, nuxtApp.$router)
    })
})