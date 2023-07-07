<template>
  <main>
    <Container class="w-full flex-col mt-8 flex justify-content-between container">
      <TopBarDark />
      <!-- Section 1 Start -->
      <div class="mt-6 xl:mt-12">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageFaq.headline") }} <span class="text-primary-yellow">{{ $t("pageFaq.headlineSpan") }}</span>.
        </h2>
        <p class="text-paragraph text-left text-secondary-gray mt-6 md:mt-8 xl:mt-12">
          {{ $t("pageFaq.paragraph") }}
          <a href="kontakt" class="text-primary-yellow underline"> {{ $t("pageFaq.paragraphLink") }}</a>.
        </p>
      </div>
    </Container>
    <!-- Section 1 End -->
    <!-- NAV Start -->
    <div class="my-12 bg-primary-yellow w-full px-4 xl:px-28 py-12 xl:py-24">
      <Container>
        <h2 class="text-paragraph text-primary-white font-bold w-2/3">
          {{ $t("pageFaq.navHeadline") }}
        </h2>
        <div class="flex flex-col mt-6 xl:mt-12">
          <ul class="text-primary-white flex flex-col gap-2 xl:gap-4">
            <li class="flex flex-row gap-2 items-center">
              <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10.3333L3 13M3 13L1 10.3333M3 13L3 1" stroke="#FAF9F7" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              <a href='#parking' class="underline"> {{ $t("pageFaq.parkLink") }}</a>
            </li>
            <li class="flex items-center gap-2">
              <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10.3333L3 13M3 13L1 10.3333M3 13L3 1" stroke="#FAF9F7" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              <a href='#rezervacija' class="underline">{{ $t("pageFaq.bookingLink") }}</a>
            </li>
            <li class="flex items-center gap-2">
              <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10.3333L3 13M3 13L1 10.3333M3 13L3 1" stroke="#FAF9F7" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              <a href="#placanje" class="underline">{{ $t("pageFaq.paymentLink") }}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>

    <!-- NAV ENd -->
    <Container class="w-full flex-col mt-8 text-center flex justify-content-between container">
      <!-- Section: FAQ Parking questions Start -->
      <div class="mt-12 xl:mt-18 pt-6" id="parking">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageFaq.parkingHeadline") }} <span class="text-primary-yellow">{{
            $t("pageFaq.parkingHeadlineSpan")
          }}</span>.
        </h2>
      </div>
      <div class="mt-6 lg:mt-12 text-left">
        <faq class="py-8 lg:py-12 border-y border-secondary-gray">
          <template v-slot:title class="flex justify-between">
            <span class="text-paragraph text-primary-black font-semibold text-left mr-2">{{
              $t("pageFaq.parkingOneTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.parkingOneAnswer") }}
              <NuxtLink :to="localePath('/lokacija')" class="text-primary-yellow underline">{{
                $t("pageFaq.parkingOneAnswerLink")
              }}</NuxtLink>.
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left mr-2">{{
              $t("pageFaq.parkingTwoTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.parkingTwoAnswer") }}
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left mr-2">{{
              $t("pageFaq.parkingThreeTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.parkingThreeAnswer") }}
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left pr-2">{{
              $t("pageFaq.parkingFourTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.parkingFourAnswer") }}
            </p>
          </template>
        </faq>
      </div>
      <!-- Section: FAQ Parking questions END -->
      <!-- Section: FAQ Order questions START -->
      <div class="mt-18 xl:mt-24 pt-24" id="rezervacija">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageFaq.bookingHeadline") }} <span class="text-primary-yellow">{{
            $t("pageFaq.bookingHeadlineSpan")
          }}</span>.
        </h2>
      </div>
      <div class="mt-6 lg:mt-12 text-left">
        <faq class="py-8 lg:py-12 border-y border-secondary-gray">
          <template v-slot:title class="flex justify-between">
            <span class="text-paragraph text-primary-black font-semibold text-left mr-2">{{
              $t("pageFaq.bookingOneTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.bookingOneAnswer") }} <NuxtLink :to="localePath('/lokacija')"
                class="text-primary-yellow underline">{{ $t("pageFaq.bookingOneAnswerLink") }}</NuxtLink>.
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left mr-2">{{
              $t("pageFaq.bookingTwoTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.bookingTwoAnswer") }} <NuxtLink to="mailto:info@carport.rs"
                class="text-primary-yellow underline">info@carport.rs</NuxtLink>
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left mr-2">{{
              $t("pageFaq.bookingThreeTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.bookingThreeAnswer") }}
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left mr-2">{{
              $t("pageFaq.bookingFourTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.bookingFourAnswer") }}
            </p>
          </template>
        </faq>
      </div>

      <!-- Section: FAQ Order questions END -->
      <!-- Section: FAQ Payment questions START -->
      <div class="mt-18 xl:mt-24 pt-16" id="placanje">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageFaq.paymentHeadline") }} <span class="text-primary-yellow">{{
            $t("pageFaq.paymentHeadlineSpan")
          }}</span>.
        </h2>
      </div>
      <div class="mt-6 lg:mt-12 text-left">
        <faq class="py-8 lg:py-12 border-y border-secondary-gray">
          <template v-slot:title class="flex justify-between">
            <span class="text-paragraph text-primary-black font-semibold text-left mr-2">{{
              $t("pageFaq.paymentOneTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.paymentOneAnswer") }}
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left mr-2">{{
              $t("pageFaq.paymentTwoTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.paymentTwoAnswer") }} <NuxtLink to="mailto:info@carport.rs"
                class="text-primary-yellow underline">info@carport.rs</NuxtLink>
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left mr-2">{{
              $t("pageFaq.paymentThreeTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageFaq.paymentThreeAnswer") }}
            </p>
          </template>
        </faq>
      </div>

      <!-- Section: FAQ Order questions END -->
      <div class="flex justify-center my-12">
        <NuxtLink class="bg-primary-yellow text-primary-white px-6 py-4 text-base font-semibold rounded-xl"
          :to="localePath('/#header')">
          {{ $t("pageFaq.button") }}
        </NuxtLink>
      </div>
    </Container>
  </main>
</template>
<script setup>
const { t } = useI18n()
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  "mainEntity": [
    {
      "@type": "Question",
      "name": t('pageFaq.parkingOneTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.parkingOneAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.parkingTwoTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.parkingTwoAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.parkingThreeTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.parkingThreeAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.parkingFourTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.parkingFourAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.bookingOneTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.bookingOneAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.bookingOneTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.bookingOneAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.bookingTwoTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.bookingTwoAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.bookingThreeTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.bookingThreeAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.bookingFourTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.bookingFourAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.paymentOneTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.paymentOneAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.paymentTwoTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.paymentTwoAnswer')
      }
    },
    {
      "@type": "Question",
      "name": t('pageFaq.paymentThreeTitle'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('pageFaq.paymentThreeAnswer')
      }
    },
  ]
});
definePageMeta({
  title: ('seo.faq.title'),
  ogTitle: ('seo.faq.ogTitle'),
  description: ('seo.faq.description'),
  ogImage: 'carport.rs/images/og-image.png',
  twitterCard: 'carport.rs/images/twitter-card.png',
})
</script>