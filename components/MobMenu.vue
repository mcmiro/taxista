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
  <Container class="pb-16">
    <div class="flex justify-between">
      <!--      <LogoDark class="h-7 w-auto text-slate-900" />-->
      <LogoDark />
      <div class="cursor-pointer">
        <MenuCloseIcon @click="closeMenu()" />
      </div>
    </div>
    <div class="flex justify-end items-center gap-2 pt-16 md:pt-32 pb-8 border-dashed">
      <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)"
        class="flex justify-center items-center gap-2">
        <div class="flex" v-if="locale.name === 'English'">
          <div class="w-6 h-6 mr-2">
            <CroatianFlagIcon />
          </div>
          <p>Hrvatski</p>
        </div>
        <div class="flex" v-else>
          <div class="w-6 h-6 mr-2">
            <AmericanFlagIcon />
          </div>
          <p>English</p>
        </div>
      </NuxtLink>
    </div>
    <div class="pt-8 border-dashed">
      <ul class="text-2xl font-bold">
        <li class="pb-8">
          <NuxtLink :to="localePath('/')">{{ $t("navigation.home") }}</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink :to="localePath('cenovnik')">{{ $t("navigation.pricing") }}</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink :to="localePath('/usluge')">{{ $t("navigation.services") }}</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink :to="localePath('/lokacija')">{{ $t("navigation.location") }}</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink :to="localePath('/faq')">{{ $t("navigation.faq") }}</NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtLink to="/" @click="closeMenu()" class="rounded-xl p-4 bg-primary-yellow cursor-pointer block mt-8 text-white">
      <div class="flex items-center justify-center h-full font-bold text-xl whitespace-nowrap">
        {{ $t("navigation.button") }}
      </div>
    </NuxtLink>
  </Container>
</template>
