<script setup>
definePageMeta({
  title: ('seo.bookingSuccess.title'),
  ogTitle: ('seo.bookingSuccess.ogTitle'),
  description: ('seo.bookingSuccess.description'),
  ogImage: 'https://carport.rs/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <main>
    <Container>
      <TopBarDark />
      <!-- Section 1 Start -->
      <div class="my-6 xl:my-12">
        <h1 class="text-headline text-primary-black w-full md:w-4/5">
          {{ $t("pageBookingSuccess.yourParking") }} <span class="text-primary-yellow"> {{ $t("pageBookingSuccess.reserved") }}</span>.
        </h1>
        <p class="pt-4">
          {{ $t("pageBookingSuccess.thankYou") }}
        </p>
      </div>
      <div class="pt-16">
        <h2 class="text-xl font-semibold text-primary-black">
          {{ $t("pageBookingSuccess.faq") }}
        </h2>
      </div>
      <div>
        <div class="w-full pt-8 pb-32">
          <div class="pb-8 border-dashed"></div>
          <!-- Time Line START -->
          <div class="py-16 border-dashed">
            <ol class="relative border-l border-primary-yellow ml-5">
              <li class="relative -top-16 ml-10">
                <div
                  class="flex items-center justify-center absolute w-10 h-10 bg-primary-yellow rounded-full mt-5 -left-[3.75rem] border-2 border-white text-white text-sm">
                  1
                </div>
                <h3 class="text-2xl font-semibold text-primary-black relative top-5">
                  {{ $t("pageBookingSuccess.faq") }}
                </h3>
                <p class="pt-2 mb-4 text-sm font-normal text-gray-500 relative top-5">
                  {{ $t("pageBookingSuccess.message") }}
                </p>
              </li>
              <li class="relative top-10 ml-10">
                <div
                  class="flex items-center justify-center absolute w-10 h-10 bg-primary-yellow rounded-full mt-20 -left-[3.75rem] border-2 border-white text-white text-sm">
                  2
                </div>

                <h3 class="text-2xl font-semibold text-primary-black relative top-5">
                  {{ $t("pageBookingSuccess.location") }}
                </h3>
                <p class="pt-2 mb-4 text-sm font-normal text-gray-500 relative top-5">
                  {{ $t("pageBookingSuccess.parking") }}<br />
                  Sremskih partizana 141<br />
                  Surčin 11271
                </p>
                <div class="text-lg pt-4 underline"><a href="https://goo.gl/maps/tLsxQQoYjUpfckqC9"> {{ $t("pageBookingSuccess.open") }} Google Maps</a></div>
              </li>
            </ol>
          </div>
          <!-- Time Line END -->
        </div>
      </div>
      <!-- Section 1 End -->
    </Container>
  </main>
</template>