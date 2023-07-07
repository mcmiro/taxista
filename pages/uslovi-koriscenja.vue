<script setup>
definePageMeta({
  title: ('seo.terms.title'),
  ogTitle: ('seo.terms.ogTitle'),
  description: ('seo.terms.description'),
  ogImage: 'https://carport.rs/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <main>
    <Container>
      <TopBarDark />
      <!-- Section 1 Start -->
      <div class="mt-6 xl:mt-12">
        <h1 class="text-2xl font-bold text-left text-primary-black w-full md:w-4/5">
           {{ $t("pageTerms.headline") }}.
        </h1>
      </div>
      <p class="text-lg text-left text-primary-yellow">
        {{ $t("pageTerms.date") }}
      </p>
      <div class="mt-6 xl:mt-8">
        <h2 class="text-2xl font-bold text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageTerms.firstTermHeadline") }}.
        </h2>
      </div>
      <div class="text-lg text-left py-6">
        <ul class="list-decimal text-lg text-secondary-gray  flex flex-col gap-2 list-inside">
          <li>{{ $t("pageTerms.firstTermListingOne") }}</li>
          <li>{{ $t("pageTerms.firstTermListingTwo") }}</li>
        </ul>
      </div>
      <div class="mt-6 xl:mt-8">
        <h2 class="text-2xl font-bold text-left text-primary-black w-full md:w-4/5">
         {{ $t("pageTerms.secondTermHeadline") }}.
        </h2>
      </div>
      <div class="text-lg text-left py-6 gap-4">
        <ul class="list-decimal text-lg text-secondary-gray  flex flex-col gap-2 list-inside">
          <li>{{ $t("pageTerms.secondTermListingOne") }}</li>
          <li>{{ $t("pageTerms.secondTermListingTwo") }}</li>
          <li>{{ $t("pageTerms.secondTermListingThree") }}</li>
          <li>{{ $t("pageTerms.secondTermListingFour") }}</li>
        </ul>
      </div>
      <div class="mt-6 xl:mt-8">
        <h2 class="text-2xl font-bold text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageTerms.thirdTermHeadline") }}.
        </h2>
      </div>
     <div class="text-lg text-left py-6">
        <ul class="list-decimal text-lg text-secondary-gray  flex flex-col gap-2 list-inside">
          <li>{{ $t("pageTerms.thirdTermListingOne") }}</li>
          <li>{{ $t("pageTerms.thirdTermListingTwo") }}</li>
        </ul>
      </div>
       <p class="text-lg text-left text-secondary-gray mb-12">
        *{{ $t("pageTerms.description") }}
      </p>
      <!-- Section 1 End -->
    </Container>
  </main>
</template>
