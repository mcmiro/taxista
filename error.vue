<template>
  <main>
    <Container class="text-center">
      <TopBarDark />
      <!-- Section 1 Start -->
      <!-- string from server-side -->
      <!-- number on client-side -->
      <div class="mt-16 h-[75vh]">
        <div v-if="error.statusCode === 404 || '404'">
          <h1 class="font-bold text-4xl text-primary-green">404</h1>
          <h1 class="font-bold text-3xl leading-10 text-gray-900 mt-4 mb-4">
            Stranica ne postoji.
          </h1>
          <p class="font-medium text-base text-gray-900 mb-12">
            Ups. Izgleda da željena stranica ili ne postoji, ili je obrisana.
          </p>
        </div>
        <div v-else>
          <h1 class="font-bold text-4xl text-primary-green">
            {{ error.statusCode }}
          </h1>
          <h1 class="font-bold text-3xl leading-10 text-gray-900 mt-4 mb-12">
            doslo je do greske.
          </h1>
        </div>
        <div class="flex justify-center items-center w-full">
          <button
            @click="handleError"
            class="bg-primary-green text-primary-white px-6 py-4 xl:px-12 xl:py-6 mt-8 text-base text-center font-semibold rounded-xl mx-auto"
          >
            Vrati se na početnu stranicu
          </button>
        </div>
      </div>
    </Container>
  </main>
  <Footer />
</template>

<script setup>
// default props available on error.vue
const props = defineProps({
  error: Object,
});
// customise 404 message from script section
const error = useError();
if (error.value.statusCode === 404 || "404") {
  error.value.message =
    "Ups. Izgleda da željena stranica ili ne postoji, ili je obrisana.";
}

// clear error and redirect to home page
const handleError = () => clearError({ redirect: "/" });
</script>
