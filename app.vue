<script setup>

import { useRoute } from 'vue-router'
const route = useRoute();
const cartStore = useCartStore();

</script>

<template>
  <Html>
  <Body>
    <NuxtLayout>
      <NuxtPage />
      <LazyFooter v-if="!route.path.includes('/user/')" />
      <!-- Cart Sidebar START -->
      <LazyCartSidebar />
      <!-- Cart Sidebar END -->
    </NuxtLayout>
  </Body>

  </Html>
</template>

