<script setup>
const { locale, locales } = useI18n();
const emit = defineEmits(["close-menu"]);
const closeMenu = () => {
  emit("close-menu");
};
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
<template>
  <footer class="pt-16 pb-4 bg-primary-yellow">
    <Container>
      <!-- Logo & Lang Start-->
      <div class="flex flex-row justify-between border-b pb-8 w-full">
        <LogoWhite class="h-8 w-auto" />
        <!-- Language Icon -->
        <div class="flex justify-end items-center gap-2 text-white">
          <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)"
            class="flex justify-center items-center gap-2">
            <div class="flex" v-if="locale.name === 'English'">
              <div class="w-6 h-6 mr-2">
                <CroatianFlagIcon />
              </div>
              <p class="">Hrvatski</p>
            </div>
            <div class="flex" v-else>
              <div class="w-6 h-6 mr-2" >
                <AmericanFlagIcon />
              </div>
              <p class="">English</p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <!-- Logo & Lang End-->
      <!-- 3 col section Start -->
      <div class="flex flex-col xl:flex-row justify-start xl:justify-between gap-8 xl:gap-0 my-8">
        <div class="flex flex-col">
          <h3 class="text-primary-white text-2xl font-bold mb-4"> {{ $t("footer.navSectionHeadline") }}</h3>
          <ul class="text-paragraph text-primary-white">
            <NuxtLink  :to="localePath('/')">{{ $t("footer.navSectionHome") }}</NuxtLink>
          </ul>
          <ul class="text-paragraph text-primary-white">
            <NuxtLink  :to="localePath('/cenovnik')">{{ $t("footer.navSectionPricing") }}</NuxtLink>
          </ul>
          <ul class="text-paragraph text-primary-white">
            <NuxtLink to="/#header">{{ $t("footer.navSectionBooking") }}</NuxtLink>
          </ul>
          <ul class="text-paragraph text-primary-white">
            <NuxtLink  :to="localePath('/usluge')">{{ $t("footer.navSectionServices") }}</NuxtLink>
          </ul>
          <ul class="text-paragraph text-primary-white">
            <NuxtLink :to="localePath('/lokacija')">{{ $t("footer.navSectionLocation") }}</NuxtLink>
          </ul>
        </div>
        <div class="flex flex-col border-t border-primary-white pt-8 xl:pt-0 xl:border-none">
          <h3 class="text-primary-white text-2xl font-bold mb-4">
            {{ $t("footer.supportSectionHeadline") }}
          </h3>
          <ul class="text-paragraph text-primary-white">
            <NuxtLink  :to="localePath('faq')"> {{ $t("footer.supportSectionFaq") }}</NuxtLink>
          </ul>
          <ul class="text-paragraph text-primary-white">
            <NuxtLink  :to="localePath('/uslovi-koriscenja')">{{ $t("footer.supportSectionTerms") }}</NuxtLink>
          </ul>
          <ul class="text-paragraph text-primary-white">
            <NuxtLink :to="localePath('kontakt')">{{ $t("footer.supportSectionContact") }}</NuxtLink>
          </ul>
          <ul class="text-paragraph text-primary-white">
            <NuxtLink
              to="https://goo.gl/maps/JMUDVYbGwzTmx9Pj7"
              target="_blank"
              >{{ $t("footer.supportSectionLocation") }}</NuxtLink
            >
          </ul>
          <ul class="text-paragraph text-primary-white">
            <NuxtLink to="/#newsletter-section">{{ $t("footer.supportSectionNewsletter") }}</NuxtLink>
          </ul>
        </div>
        <div class="flex flex-row xl:flex-col gap-4 xl:gap-6 border-t border-primary-white pt-8 xl:pt-0 xl:border-none">
          <div>
            <GoogleReviewsIcon />
          </div>
<!--          <div>
              <PaymentMethodsIcon />
          </div>-->
        </div>
      </div>
      <!-- 3 col section End -->
      <!-- Copyright Start -->
      <p
        class="text-base text-primary-white border-t border-primary-white pt-4"
      >
        &copy; {{ new Date().getFullYear() }} |  {{ $t("footer.copyright") }} | Taxi Porec Dragan
      </p>
      <!-- Copyright End -->
    </Container>
  </footer>
</template>
