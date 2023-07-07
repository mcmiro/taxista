<script setup>
definePageMeta({
  title: ('seo.contact.title'),
  ogTitle: ('seo.contact.ogTitle'),
  description: ('seo.contact.description'),
  ogImage: 'carport.rs/images/og-image.png',
  twitterCard: 'carport.rs/images/twitter-card.png',
})
</script>
<template>
  <main>
    <Container
      class="w-full flex-col mt-8 flex justify-content-between container"
    >
      <TopBarDark />
      <!-- Section 1 Start -->
      <div class="mt-6 xl:mt-12">
        <h1 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageContact.headline") }}.
        </h1>
      </div>
      <p class="text-paragraph text-left text-primary-yellow">
         {{ $t("pageContact.date") }}
      </p>
      <div class="mt-6 xl:mt-12">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          Carport.
        </h2>
      </div>
      <p class="text-paragraph text-left text-secondary-gray py-6">
         {{ $t("pageContact.carportInfo") }}
        <NuxtLink
          to="mailto:info@carport.rs"
          class="text-primary-yellow underline"
          >info@carport.rs</NuxtLink
        >
      </p>
      <div class="mt-6 xl:mt-12">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageContact.partnerHeadline") }}.
        </h2>
      </div>
      <p class="text-paragraph text-left text-secondary-gray py-6">
        {{ $t("pageContact.partnerParagraph") }}
      </p>
      <ul class="text-paragraph text-left text-secondary-gray py-6 mb-12">
        <li>{{ $t("pageContact.companyName") }} MB Cars</li>
        <li>{{ $t("pageContact.companyAddress") }} Sremskih partizana 141, 11271 Surčin</li>
        <li>{{ $t("pageContact.companyPhone") }} +381 63 324 550</li>
      </ul>
      <!-- Section 1 End -->
    </Container>
  </main>
</template>
