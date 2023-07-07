<script setup>
definePageMeta({
  title: ('seo.locations.title'),
  ogTitle: ('seo.locations.ogTitle'),
  description: ('seo.locations.description'),
  ogImage: 'carport.rs/images/og-image.png',
  twitterCard: 'carport.rs/images/twitter-card.png',
})
</script>
<template>
  <main>
    <Container class="w-full flex-col mt-8 flex justify-content-between">
      <TopBarDark />
      <!-- Section 1 Start -->
      <div class="my-6 xl:my-12">
        <h1 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageLocation.headline") }} <span class="text-primary-yellow">{{
            $t("pageLocation.headlineSpan")
          }}</span>.
        </h1>
      </div>
      <p class="text-paragraph text-left text-secondary-gray">
        {{ $t("pageLocation.paragraph") }}
      </p>
      <!-- Section 1 End -->
    </Container>
    <!-- Section 2 Start -->
    <div class="my-12 bg-primary-yellow w-full px-4 xl:px-24 py-12 xl:py-18">
      <Container>
        <h2 class="text-headline text-primary-white font-bold w-2/3">{{ $t("pageLocation.addressHeadline") }}</h2>
        <div class="flex flex-col mt-6 xl:mt-12">
          <address class="text-paragraph text-primary-white not-italic">
            Sremskih partizana 141<br />
            11271 Surčin
          </address>
          <div class="text-paragraph text-primary-white flex flex-row items-center gap-2 justify-start mt-6 xl:mt-12">
            <NuxtLink
              to="https://www.google.com/maps/dir/48.1859863,16.3380181/Aerodrom+Parking+MB+CAR+Aerodrom+Parking,+Sremskih+partizana+141,+%D0%A1%D1%83%D1%80%D1%87%D0%B8%D0%BD+11271,+%D0%A1%D1%80%D0%B1%D0%B8%D1%98%D0%B0/@46.474022,15.8004806,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x475a697e630e57f9:0x4a94e8aa08a5d189!2m2!1d20.3145374!2d44.8015265"
              target="_blank" class="text-headline">{{ $t("pageLocation.addresslink") }}</NuxtLink>
            <svg width="15" height="15" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.375 5.125H5.125C3.39911 5.125 2 6.52411 2 8.25V23.875C2 25.6009 3.39911 27 5.125 27H20.75C22.4759 27 23.875 25.6009 23.875 23.875V17.625M17.625 2H27M27 2V11.375M27 2L11.375 17.625"
                stroke="#FAF9F7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </Container>
    </div>
    <!-- Section 2 End -->
    <Container class="w-full flex-col mt-20 text-center flex justify-content-between">
      <!-- Section 3 Start -->
      <div class="mt-6 xl:mt-12" id="parking">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t("pageLocation.faqHeadline") }} <span class="text-primary-yellow">{{
            $t("pageLocation.faqHeadlineSpan")
          }}</span>.
        </h2>
      </div>
      <div class="mt-4 lg:mt-8 text-left">
        <faq class="py-8 lg:py-12 border-y border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left pr-2">{{
              $t("pageLocation.faqOneTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageLocation.faqOneAnswer") }}
              <NuxtLink :to="localePath('lokacija')" class="text-primary-yellow underline">{{
                $t("pageLocation.faqOneLink")
              }}</NuxtLink>.
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left pr-2">{{
              $t("pageLocation.faqTwoTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageLocation.faqTwoAnswer") }}
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left pr-2">{{
              $t("pageLocation.faqThreeTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageLocation.faqThreeAnswer") }}
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left pr-2">{{
              $t("pageLocation.faqFourTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageLocation.faqFourAnswer") }}
            </p>
          </template>
        </faq>
        <faq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span class="text-paragraph text-primary-black font-semibold text-left pr-2">{{
              $t("pageLocation.faqFiveTitle")
            }}</span>
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t("pageLocation.faqFiveAnswer") }}
            </p>
          </template>
        </faq>
      </div>
      <NuxtLink
        class="bg-primary-yellow text-primary-white px-6 py-4 text-base font-semibold rounded-xl mx-auto my-12 xl:my-24"
        :to="localePath('/#header')">
        {{ $t("pageLocation.button") }}
      </NuxtLink>
      <!-- Section 3 End -->
    </Container>
  </main>
</template>
