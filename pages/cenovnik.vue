<script setup>
    definePageMeta({
      title: ('seo.pricing.title'),
      ogTitle: ('seo.pricing.ogTitle'),
      description: ('seo.pricing.description'),
      ogImage: 'carport.rs/images/og-image.png',
      twitterCard: 'carport.rs/images/twitter-card.png',
    })
    const { pending, data: data } = await useLazyFetch('https://dev.nikola-arsic.com/api/prices/get')
</script>
<template>
  <main>
    <Container>
      <TopBarDark />
      <!-- Section 1 Start -->
      <div class="mt-6 xl:mt-12">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">{{ $t("pagePricing.headline") }} <span
            class="text-primary-yellow">{{ $t("pagePricing.headlineSpan") }}</span>.</h2>
        <p class="text-paragraph text-left text-secondary-gray mt-6 md:mt-8 xl:mt-12">{{
          $t("pagePricing.paragraphOne")
        }} <a href="/" class="text-primary-yellow underline">{{ $t("pagePricing.paragraphLink") }}</a> {{
  $t("pagePricing.paragraphTwo")
}}
          <NuxtLink to="mailto:info@carport.rs" class="text-primary-yellow underline">info@carport.rs</NuxtLink>.
        </p>
      </div>
      <!-- Section 1 End -->
      <!-- Table Start -->
      <table class="table-auto w-full mt-12 md:mt-16 text-sm">
        <thead class="border border-gray-400  h-8">
          <tr class="text-left">
            <th class="py-3 px-4 bg-gray-100 w-32 md:w-48">{{ $t("sectionSeven.tableDays") }}</th>
            <th class="py-3 px-4 bg-gray-100 border-x border-gray-400 text-right">{{ $t("sectionSeven.tablePrice") }}
            </th>
            <th class="py-3 px-4 bg-gray-100 text-right">{{ $t("sectionSeven.tablePerDay") }}</th>
          </tr>
        </thead>
        <tbody class="border border-gray-400">
        <template v-if="pending">
          loading....
        </template>
          <template v-for="(price, index) in data.prices" v-else>
            <tr class="w-1/3 border border-gray-400">
              <td class="border border-gray-400 bg-gray-100 py-3 px-4 w-32 md:w-48 ">{{ price.title }}</td>
              <td class="border border-gray-400 bg-white py-3 px-4 text-right font-bold">{{ price.price_sm }} rsd</td>
              <td class="border border-gray-400 bg-white py-3 px-4 text-right">{{
                Math.floor(price.price_sm / price.title.split(' ')[0])
              }}/{{ $t("sharedMessages.day") }}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <!-- Table End -->
      <small class="text-right mt-4 mb-6 text-l text-primary-black">*Za periode duže od 30 dana, molimo kontaktiraj nas:
        <NuxtLink to="mailto:info@carport.rs" class="text-primary-yellow underline">info@carport.rs</NuxtLink>.
      </small>
      <div class="flex justify-center mt-8 mb-12">
        <NuxtLink class="bg-primary-yellow text-primary-white px-6 py-4 text-base font-semibold rounded-xl"
                  :to="localePath('/#header')">
          {{ $t("sectionNine.button") }}
        </NuxtLink>
      </div>
    </Container>
  </main>
</template>