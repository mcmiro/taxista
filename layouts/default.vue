<script setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = computed(() => t(route.meta.title ?? 'Carport.rs') )
const ogTitle = computed(() => '» ' + t(route.meta.ogTitle ?? 'Carport.rs') + ' | Carport'  )
const description = computed(() => t(route.meta.description ?? 'Carport.rs example description') )
useHead({
  meta: [
    { property: 'og:title', content: ogTitle},
    { name: 'description', content: description },
    { name: 'og:description', content: description },
    { name: 'og:image', content: route.meta.ogImage },
  ],
  link: [
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
  ],
})
</script>
<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>» {{ title }} | Carport</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
    <slot />
    </Body>
    </Html>
  </div>
</template>