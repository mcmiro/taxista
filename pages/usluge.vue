<script setup>
definePageMeta({
  title: ('seo.services.title'),
  ogTitle: ('seo.services.ogTitle'),
  description: ('seo.services.description'),
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
        <h1 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageServices.headline") }} <span class="text-primary-yellow">{{
            $t("pageServices.headlineSpan")
          }}</span>.
        </h1>
      </div>
      <div class="w-full h-44 xl:h-96 relative overflow-hidden rounded-lg my-8 xl:my-12">
        <figure>
          <nuxt-picture src="/images/usluge/intro.webp"
            :imgAttrs="{ class: 'object-cover object-center rounded-lg w-full h-auto' }"
            alt="Carport usluge na jednom mestu" loading="lazy" />
        </figure>
      </div>
      <p class="text-paragraph text-left text-secondary-gray">
        {{ $t("pageServices.paragraphOne") }}
      </p>
      <!-- Section 1 End -->
    </Container>
    <!-- Section 2 Start -->
    <div class="my-12 bg-primary-yellow w-full px-4 py-12 xl:py-24">
      <Container>
        <h2 class="text-paragraph text-primary-white font-bold w-2/3">
          {{ $t("pageServices.navHeadline") }}
        </h2>
        <div class="flex flex-col mt-6 xl:mt-12">
          <ul class="text-primary-white flex flex-col gap-2 xl:gap-4">
            <li class="flex flex-row gap-2 items-center">
              <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10.3333L3 13M3 13L1 10.3333M3 13L3 1" stroke="#FAF9F7" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>

              <a href="#parking" class="underline">{{ $t("pageServices.navParking") }}</a>

            </li>
            <li class="flex items-center gap-2">
              <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10.3333L3 13M3 13L1 10.3333M3 13L3 1" stroke="#FAF9F7" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              <a href="#transfer" class="underline">{{ $t("pageServices.navTransfer") }}</a>
            </li>
            <li class="flex items-center gap-2">
              <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10.3333L3 13M3 13L1 10.3333M3 13L3 1" stroke="#FAF9F7" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              <a href="#pranje" class="underline">{{ $t("pageServices.navWash") }}</a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
    <!-- Section 2 End -->
    <Container class="w-full flex-col mt-20 text-center flex justify-content-between max-w-7xl">
      <!-- Section 3 Start -->
      <div class="mt-8 lg:mt-24" id="parking">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageServices.parkHeadline") }} <span class="text-primary-yellow">{{
            $t("pageServices.parkHeadlineSpan")
          }}</span>.
        </h2>
      </div>
      <div class="w-full h-44 xl:h-96 relative overflow-hidden rounded-lg my-8 xl:my-12">
        <figure>
          <nuxt-picture src="/images/usluge/parking.webp"
            :imgAttrs="{ class: 'object-cover object-center rounded-lg w-full h-auto' }"
            alt="Carport usluge na jednom mestu" loading="lazy" />
        </figure>
      </div>
      <p class="text-paragraph text-left text-secondary-gray">
        {{ $t("pageServices.parkParagraph") }}
      </p>
      <NuxtLink class="bg-primary-yellow text-primary-white px-6 py-4 text-base font-semibold rounded-xl mx-auto my-12"
        :to="localePath('/#header')">
        {{ $t("pageServices.button") }}
      </NuxtLink>
      <!-- Section 3 End -->
      <!-- Section 4 Start -->
      <div class="mt-24 xl:mt-44" id="transfer">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageServices.transferHeadline") }} <span class="text-primary-yellow">{{
            $t("pageServices.transferHeadlineSpan")
          }}</span>.
        </h2>
      </div>
      <div class="w-full h-44 xl:h-96 relative overflow-hidden rounded-lg my-8 xl:my-12">
        <figure>
          <nuxt-picture src="/images/usluge/transfer.webp"
            :imgAttrs="{ class: 'object-cover object-center rounded-lg w-full h-auto' }"
            alt="Carport usluge na jednom mestu" loading="lazy" />
        </figure>
      </div>
      <p class="text-paragraph text-left text-secondary-gray">
        {{ $t("pageServices.transferParagraph") }}
      </p>
      <NuxtLink class="bg-primary-yellow text-primary-white px-6 py-4 text-base font-semibold rounded-xl mx-auto my-12"
        :to="localePath('/#header')">
        {{ $t("pageServices.button") }}
      </NuxtLink>
      <!-- Section 4 End -->
      <!-- Section 5 Start -->
      <div class="mt-24 xl:mt-44" id="pranje">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageServices.washHeadline") }} <span class="text-primary-yellow">{{
            $t("pageServices.washHeadlineSpan")
          }}</span>.
        </h2>
      </div>
      <div class="w-full h-44 xl:h-96 relative overflow-hidden rounded-lg my-8 xl:my-12">
        <figure>
          <nuxt-picture src="/images/usluge/pranje.webp"
            :imgAttrs="{ class: 'object-cover object-center rounded-lg w-full h-auto' }"
            alt="Carport usluge na jednom mestu" loading="lazy" />
        </figure>
      </div>
      <p class="text-paragraph text-left text-secondary-gray">
        {{ $t("pageServices.washParagraph") }}
      </p>
      <NuxtLink
        class="bg-primary-yellow text-primary-white px-6 py-4 text-base font-semibold rounded-xl mx-auto my-12 xl:my-24"
        :to="localePath('/#header')">
        {{ $t("pageServices.button") }}
      </NuxtLink>
      <!-- Section 5 End -->
    </Container>
  </main>
</template>
